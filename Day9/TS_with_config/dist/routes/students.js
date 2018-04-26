"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = express_1.Router();
class Student {
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }
    isAdult() {
        return this.age > 18;
    }
}
const students = [];
route.get('/', (req, res) => res.json(students));
route.post('/', (req, res) => {
    const body = req.body;
    students.push(new Student(req.body.name, req.body.grade, parseInt(req.body.age)));
    res.json(students[students.length - 1]);
});
exports.default = route;
