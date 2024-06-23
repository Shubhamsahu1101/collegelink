import express from 'express';
import { addAssignment, addInstruction, addStudent, createClassroom, getAssignments, getInstructions, getSubmissions, submitAssignment } from '../controllers/classroom.controller.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/create', verifyToken, createClassroom);

router.get('/get-assignments/:classroomId', verifyToken, getAssignments);

router.get('/get-instructions/:classroomId', verifyToken, getInstructions);

router.get('/get-submissions/:classroomId', verifyToken, getSubmissions);

router.post('/add-instruction/:classroomId', verifyToken, addInstruction);

router.post('/add-assignment/:classroomId', verifyToken, addAssignment);

router.post('/add-student/:classroomId', verifyToken, addStudent);

router.post('/submit-assignment/:classroomId', verifyToken, submitAssignment);

export default router;