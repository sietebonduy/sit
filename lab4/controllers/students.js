import { v4 as uuid } from 'uuid';

let students = [];

var day1 = new Date();
var day2 = new Date();

export const getStudents = (req, res) => {
    res.send(students);
};

export const createStudent = (req, res) => {
    const student = req.body;

    students.push({ id: uuid(), ...student, createdAt: day1.toISOString(), updatedAt: day1.toISOString() });

    res.json({ message: 'Students array changed(create)' });

    console.log(`createdAt : ${day1.toISOString()}`);
};

export const getStudent = (req, res) => {
    const { id } = req.params;

    const foundStudent = students.find((student) => student.id === id);

    res.send(foundStudent);
};

export const deleteStudent = (req, res) => {
    students = students.filter((student) => student.id !== req.params.id);

    res.json({ message: 'Students array changed(delete)' });
};

export const updateStudent = (req, res) => {
    const student = students.find((student) => student.id === req.params.id);

    student.firstName = req.body.firstName;
    student.lastName = req.body.lastName;
    student.group = req.body.group;
    student.updatedAt = day2.toISOString();

    res.json({ message: 'Students array changed(update)' });

    console.log(`updatedAt : ${day2.toISOString()}`);
};