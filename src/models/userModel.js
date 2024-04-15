const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema=new mongoose.Schema({
    // _id
    /*
    _id:
    {
        type:mongoose.Schema.ObjectId,
        auto:true
    },
    */
    nom:
    {
        type:String,
        required:[true, "le nom est obligatoire"],
        trim:true, // remove whitespace misplaced
        maxlength:[50,"le noù ne doit pas dépasser 50 caractères"]
    },
    email:
    {
        type:String,
        required:[true, "l'email est obligatoire"],
        unique:true,
        trim:true,
        match:[
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "l'email est invalide"
        ]
    },
    motDePasse:
    {
        type:String,
        required:[true, "le mot de passe est obligatoire"],
        minlength:[8,"le mot de passe doit contenir au moins 6 caractères"],
    },
    photoProfil:
    {
        type:String,
        default:"/default.jpg"
    },
    dateInscription:
    {
        type:Date,
        default:Date.now
    },

    })
module.exports = mongoose.model('User', userSchema);