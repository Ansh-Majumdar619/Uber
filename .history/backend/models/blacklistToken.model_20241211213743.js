// const mongoose = require('mongoose');

// const blacklistTokenSchema = new mongoose.Schema({
//     token: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//         expires: 86400 // 24 hours in seconds
//     }
// });

// module.exports = mongoose.model('BlacklistToken', blacklistTokenSchema);













const mongoose = require('mongoose');

// Define the schema
const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400 // 24 hours in seconds
    }
});

// Use existing model if it exists, otherwise create a new one
const BlacklistToken =
    mongoose.models.BlacklistToken || mongoose.model('BlacklistToken', blacklistTokenSchema);

module.exports = BlacklistToken;
