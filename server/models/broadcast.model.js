import mongoose from 'mongoose';

const broadcast = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  document: {
    type: String,
    default: ""
  },
  senderName: {
    type: String,
    required: true
  },
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

const Broadcast = mongoose.model('Broadcast', broadcast);

export default Broadcast;