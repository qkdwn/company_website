const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            trim: true,
        },
        email: {
            type: String,
            require: true,
            trim: true,
        },
        phone: {
            type: String,
            require: true,
            trim: true,
        },
        message: {
            type: String,
            require: true,
            trim: true,
        },
        status: {
            type: String,
            enum: ['in progress', 'pending', 'completed'],
            default: 'in progress'
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true,
    }
)

const Contact = mongoose.model("Contact", contactSchema)

module.exports = Contact