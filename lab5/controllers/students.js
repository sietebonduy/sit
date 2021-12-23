import { v4 as uuid } from 'uuid';
import fs from "fs";
const filePath = "students.json";

var day1 = new Date();
var day2 = new Date();

export const getStudents = (req, res) => {
    const content = fs.readFileSync(filePath, "utf8");
    const students = JSON.parse(content);
    res.send(students);
};

export const createStudent = (req, res) => {
    let content = fs.readFileSync(filePath, "utf8");
    let student = req.body;
    let stud = { id: uuid(), ...student, createdAt: day1.toISOString(), updatedAt: day1.toISOString() };
    let students = JSON.parse(content);
    students.push(stud);
    content = JSON.stringify(students);
    fs.writeFileSync(filePath, content);
    res.json({ message: 'Students array changed(create)' });
    console.log(`createdAt : ${day1.toISOString()}`);
};

export const getStudent = (req, res) => {
    const { id } = req.params;
    const content = fs.readFileSync(filePath, "utf8");
    const students = JSON.parse(content);
    const foundStudent = students.find((student) => student.id === id);
    res.send(foundStudent);
};

export const deleteStudent = (req, res) => {
    let content = fs.readFileSync(filePath, "utf8");
    let students = JSON.parse(content);
    students = students.filter((student) => student.id !== req.params.id);
    content = JSON.stringify(students);
    fs.writeFileSync(filePath, content);
    res.json({ message: 'Students array changed(delete)' });
};

export const updateStudent = (req, res) => {
    let content = fs.readFileSync(filePath, "utf8");
    const students = JSON.parse(content);
    const student = students.find((student) => student.id === req.params.id);
    student.firstName = req.body.firstName;
    student.lastName = req.body.lastName;
    student.group = req.body.group;
    student.updatedAt = day2.toISOString();
    content = JSON.stringify(students);
    fs.writeFileSync(filePath, content);
    res.json({ message: 'Students array changed(update)' });
    console.log(`updatedAt : ${day2.toISOString()}`);
};