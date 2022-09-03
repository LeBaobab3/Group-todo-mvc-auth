const mongoose = require('mongoose')

const ListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  invitedUsers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
})

module.exports = mongoose.model('List', ListSchema)