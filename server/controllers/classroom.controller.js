import Classroom from '../models/classroom.model';

export const createClassroom = async (req, res) => {
  try {
    const { name, instituteId, teacherId, batch, subject } = req.body;

    console.log(name, instituteId, teacherId, batch, subject);

    if (!name || !instituteId || !teacherId || !batch || !subject) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const classroomExists = await Classroom.findOne({ name });

    if (classroomExists) {
      return res.status(400).json({ message: 'Classroom already exists' });
    }

    const newClassroom = new Classroom({
      name,
      instituteId,
      teacherId,
      batch,
      subject
    });

    console.log("Classroom created", newClassroom)

    await newClassroom.save();
    res.status(201).json(newClassroom);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export const addAssignment = async (req, res) => {
  try {
    const { userId, assignmentId,  documentLink } = req.body;
    const classroomId = req.params.id;
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

export const getAssignments = async (req, res) => {
  try {
    const classroomId = req.params.id;
    const classroom = await Classroom.findById(classroomId).populate('assignments');
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

export const getSubmissions = async (req, res) => {
  try {
    const classroomId = req.params.id;
    const assignmentId = req.params.assignmentId;
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

export const getInstructions = async (req, res) => {
  try {
    const classroomId = req.params.id;
    const classroom = await Classroom.findById(classroomId).populate('instructions');
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