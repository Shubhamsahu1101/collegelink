import Classroom from '../models/classroom.model.js';
import User from '../models/user.model.js';

export const createClassroom = async (req, res) => {
  try {
    const { name, instituteId, teacherId, batch, subject } = req.body;

    console.log(name, instituteId, teacherId, batch, subject);

    if (!name || !instituteId || !teacherId || !batch || !subject) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newClassroom = new Classroom({
      name,
      instituteId,
      teacherId,
      batch,
      subject
    });

    const user = await User.findById(teacherId);
    user.classroomList.push(newClassroom._id);
    await user.save();

    console.log("Classroom created", newClassroom)

    await newClassroom.save();
    res.status(201).json(newClassroom);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export const addStudent = async (req, res) => {
  try {
    const studentId = req.body.studentId;
    const classroomId = req.params.classroomId;
    const classroom = await Classroom.findById(classroomId);
    const student = await User.findById(studentId);
    if (classroom && student) {
      classroom.students.push(studentId);
      await classroom.save();
      console.log('Student added successfully');

      student.classroomList.push(classroomId);
      await student.save();
      console.log('Classroom added to student successfully');

      res.status(201).json({});
    }
    else {
      console.log('Student or Classroom not found');
      res.status(404).json({ message: 'Student or Classroom not found' });
    }
  }
  catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export const getAssignments = async (req, res) => {
  try {
    const classroomId = req.params.classroomId;
    const classroom = await Classroom.findById(classroomId);
    if (classroom) {
      res.status(200).json(classroom.assignments);
    } else {
      console.log('Classroom not found');
      res.status(404).json({ message: 'Classroom not found' });
    }
  }
  catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export const getInstructions = async (req, res) => {
  try {
    const classroomId = req.params.classroomId;
    const classroom = await Classroom.findById(classroomId);
    if (classroom) {
      res.status(200).json(classroom.instructions);
    } else {
      console.log('Classroom not found');
      res.status(404).json({ message: 'Classroom not found' });
    }
  }
  catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export const getSubmissions = async (req, res) => {
  try {
    const classroomId = req.params.classroomId;
    const assignmentId = req.body.assignmentId;
    const classroom = await Classroom.findById(classroomId).populate('assignments');
    if (classroom) {
      const assignment = classroom.assignments.id(assignmentId);
      if (assignment) {
        res.status(200).json(assignment.submissions);
      } else {
        console.log('Assignment not found');
        res.status(404).json({ message: 'Assignment not found' });
      }
    } else {
      console.log('Classroom not found');
      res.status(404).json({ message: 'Classroom not found' });
    }
  }
  catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export const getStudents = async (req, res) => {
  try {
    const classroomId = req.params.classroomId;
    const classroom = await Classroom.findById(classroomId).populate('students');
    if (classroom) {
      res.status(200).json(classroom.students);
    }
    else {
      console.log('Classroom not found');
      res.status(404).json({ message: 'Classroom not found' });
    }
  }
  catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export const addInstruction = async (req, res) => {
  try {
    const { message, documentLink } = req.body;
    const classroomId = req.params.classroomId;
    const classroom = await Classroom.findById(classroomId);
    if (classroom) {
      const newInstruction = { message, document: documentLink };
      classroom.instructions.push(newInstruction);
      await classroom.save();
      res.status(201).json({});
      console.log('Instruction added successfully');
    } else {
      console.log('Classroom not found');
      res.status(404).json({ message: 'Classroom not found' });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export const addAssignment = async (req, res) => {
  try {
    const { title, description, dueDate, documentLink } = req.body;
    const classroomId = req.params.classroomId;
    const classroom = await Classroom.findById(classroomId);
    if (classroom) {
      const newAssignment = { title, description, dueDate, document: documentLink };
      classroom.assignments.push(newAssignment);
      await classroom.save();
      console.log('Assignment added successfully');
      res.status(201).json({});
    } else {
      console.log('Classroom not found');
      res.status(404).json({ message: 'Classroom not found' });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export const submitAssignment = async (req, res) => {
  try {
    const { userId, assignmentId, documentLink } = req.body;
    const classroomId = req.params.classroomId;
    const classroom = await Classroom.findById(classroomId);
    if (classroom) {
      
      const assignment = classroom.assignments.id(assignmentId);
      
      if (assignment) {
        assignment.submissions.set(userId, documentLink);
        
        await classroom.save();
        res.status(201).json({});
        
        console.log('Submission added successfully');
      } else {
        console.log('Assignment not found');
        res.status(404).json({ message: 'Assignment not found' });
      }
    } else {
      console.log('Classroom not found');
      res.status(404).json({ message: 'Classroom not found' });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export const getUserClassrooms = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).populate({
      path: 'classroomList',
      select: 'name subject teacherName'
    });
    res.status(200).json(user.classroomList);
  }
  catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export const getClassrooms = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const instituteId = user.instituteId;
    const query = { instituteId };
    if(user.role !== 'teacher') {
      query.batch = user.batch;
    }
    const classrooms = await Classroom.find(query).select('name subject teacherName');
    
    res.status(200).json(classrooms);
  }
  catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export const getClassroom = async (req, res) => {
  try {
    const classroomId = req.params.classroomId;
    const classroom = await Classroom.findById(classroomId);
    res.status(200).json(classroom);
  }
  catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}