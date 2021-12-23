import bd from '../db.js';

var day1 = new Date();
var day2 = new Date();

export const getStudents = async(req, res) => {
    const students = await bd.query('SELECT * FROM students');
    console.log(students.rows);
    res.json(students.rows);
};

export const createStudent = async(req, res) => {
    const { first_name, last_name, group_name, created_at, updated_at } = req.body;
    const newStudent = await bd.query(`INSERT INTO students (first_name, last_name, group_name, created_at, updated_at) VALUES ($1,$2,$3,$4,$5) RETURNING *`, [first_name, last_name, group_name, day1.toISOString(), day1.toISOString()]);
    res.json(newStudent.rows[0]);
};

export const getStudent = async(req, res) => {
    const id = req.params.id;
    const foundStudent = await bd.query('SELECT * FROM students WHERE id = $1', [id]);;
    res.json(foundStudent.rows[0]);
};

export const deleteStudent = async(req, res) => {
    const id = req.params.id;
    const deleteStudent = await bd.query('DELETE FROM students WHERE id = $1', [id]);;
    res.json('Студент удален');
};

export const updateStudent = async(req, res) => {
    const { id, first_name, last_name, group_name, updated_at } = req.body;
    const student = await bd.query('UPDATE students SET first_name = $1, last_name = $2, group_name = $3, updated_at = $4 WHERE id = $5 RETURNING *', [first_name, last_name, group_name, day2.toISOString(), id]);
    res.json(student.rows[0]);
};