"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var route = express_1.Router();
var Student = /** @class */ (function () {
    function Student(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }
    Student.prototype.isAdult = function () {
        return this.age > 18;
    };
    return Student;
}());
exports.Student = Student;
var students = [];
route.get('/', function (req, res) { return res.json(students); });
route.post('/', function (req, res) {
    var body = req.body;
    students.push(new Student(req.body.name, req.body.grade, parseInt(req.body.age)));
    res.json(students[students.length - 1]);
});
exports.default = route;
