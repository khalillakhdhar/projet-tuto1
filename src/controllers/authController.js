const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const generateToken = (id) => {
return jwt.sign({ id }, process.env.JWT_SECRET, {
expiresIn: process.env.JWT_EXPIRES_IN
});

}

exports.register = async (req, res) => {
    const { nom, email, motDePasse } = req.body;
    try
    {
        const userExist = await User.findOne({ email   });
        if(userExist) return res.status(400).json({ message: "User already exists" });
        const hashedPassword= await bcrypt.hash(motDePasse, 12);
        const user = await User.create({ nom, email, motDePasse:hashedPassword });
        if(user)
        {
            const token = generateToken(user._id);
            res.status(201).json({ user, token });
        }

    }
    catch(error)
    {
        res.status(500).json({ message: "Server error" });
    }
}
// login
exports.login = async (req, res) => {
    const { email, motDePasse } = req.body;
    try
    {
        const user = await User.findOne({ email });
        if(user && (await bcrypt.compare(motDePasse, user.motDePasse)))
        {
            res.json(
                {
                    _id: user._id,
                    nom: user.nom,
                    email: user.email,
                    token: generateToken(user._id)
                }
            )
        }
        else
        {
            res.status(400).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}