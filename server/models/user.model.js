import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },

  avatar: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  instituteId: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'teacher'
  },
  batch: {
    type: String,
    required: true
  },
  classroomList: {
    type: Array,
    default: []
  },
}, { timestamps: true });


const User = mongoose.model('User', userSchema);

export default User;