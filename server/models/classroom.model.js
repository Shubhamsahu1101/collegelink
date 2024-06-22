import mongoose from 'mongoose';

const classroomInstruction = new mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  document: {
    type: String,
    default: ""
  },
})

const classroomAssignment = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  document: {
    type: String,
    default: ""
  },
  submissions: {
    type: Map,
    of: String,
    default: {}
  }
})

const classroom = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  teacher: {
    type: String,
    required: true
  },

  instructions:{
    type: Array[classroomInstruction],
    default: []
  },
  assignments: {
    type: Array[classroomAssignment],
    default: []
  },
}, { timestamps: true });

const Classroom = mongoose.model('Classroom', classroom);


export default Classroom;

export { classroomInstruction, classroomAssignment };