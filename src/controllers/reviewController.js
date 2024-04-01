const reviewModel = require('../models/reviewModel');

// Create a new review
const createReview = async (req, res) => {
    try {
        const review = await reviewModel.create(req.body);
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create review' });
    }
};

// Get all reviews
const getAllReviews = async (req, res) => {
    try {
        const reviews = await reviewModel.find();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get reviews' });
    }
};

// Find reviews by content (like search)
const findReviewsByContent = async (req, res) => {
    try {
        const { content } = req.query;
        const reviews = await reviewModel.find({ content: { $regex: content, $options: 'i' } });
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Failed to find reviews by content' });
    }
};

// Find reviews sorted by note
const findReviewsSortedByNote = async (req, res) => {
    try {
        const reviews = await reviewModel.find().sort({ note: -1 });
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Failed to find reviews sorted by note' });
    }
};

// Find reviews by userId
const findReviewsByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const reviews = await reviewModel.find({ userId });
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Failed to find reviews by userId' });
    }
};

// Find reviews by livreId
const findReviewsByLivreId = async (req, res) => {
    try {
        const { livreId } = req.params;
        const reviews = await reviewModel.find({ livreId });
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Failed to find reviews by livreId' });
    }
};

// Export the controller functions
module.exports = {
    createReview,
    getAllReviews,
    findReviewsByContent,
    findReviewsSortedByNote,
    findReviewsByUserId,
    findReviewsByLivreId,
};