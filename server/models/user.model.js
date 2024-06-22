import mongoose, { mongo } from 'mongoose';

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
  instituteName: {
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
    default: ''
  },
  classroomList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Classroom',
    default: []
  }],
}, { timestamps: true });


const User = mongoose.model('User', userSchema);

export default User;