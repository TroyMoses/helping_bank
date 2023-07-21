import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name'],
        unique:true,
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique:true,
        trim: true,
    },
    message: {
        type: String,
        required: [true, 'Please provide your message'],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Client = mongoose.models.Client || mongoose.model('Client', clientSchema);

export default Client;