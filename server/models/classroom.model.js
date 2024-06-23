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
  teacherId: {
    type: String,
    required: true
  },
  teacherName: {
    type: String,
    required: true
  },
  batch: {
    type: String,
    required: true
  },
  instituteId: {
    type: String,
    required: true
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: []
  }],

  instructions:{
    type: [classroomInstruction],
    default: []
  },
  assignments: {
    type: [classroomAssignment],
    default: []
  },
}, { timestamps: true });

const Classroom = mongoose.model('Classroom', classroom);


export default Classroom;

export { classroomInstruction, classroomAssignment };