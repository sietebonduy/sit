import express from 'express';
const jsonParser = express.json();

import { getStudents, createStudent, getStudent, deleteStudent, updateStudent } from '../controllers/students.js';

const router = express.Router();

router.get('/', getStudents);

router.post('/', jsonParser, createStudent);

router.get('/:id', getStudent);

router.delete('/:id', jsonParser, deleteStudent);

router.put('/:id', jsonParser, updateStudent);

export default router;