import express from 'express';
import { addAssignment, addInstruction, addStudent, createClassroom, getAssignments, getInstructions, getSubmissions, submitAssignment } from '../controllers/classroom.controller.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/create', verifyToken, createClassroom);

router.get('/getAssignments/:classroomId', verifyToken, getAssignments);

router.get('/getInstructions/:classroomId', verifyToken, getInstructions);

router.get('/getSubmissions/:classroomId', verifyToken, getSubmissions);

router.post('/addInstruction/:classroomId', verifyToken, addInstruction);

router.post('/addAssignment/:classroomId', verifyToken, addAssignment);

router.post('/addStudent/:classroomId', verifyToken, addStudent);

router.post('/submitAssignment/:classroomId', verifyToken, submitAssignment);

export default router;