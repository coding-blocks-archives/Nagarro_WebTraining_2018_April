"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route = express_1.default.Router();
const students = [];
route.get('/', (req, res) => res.json(students));
route.post('/', (req, res) => {
    students.push({
        name: req.body.name,
        grade: req.body.grade,
        age: parseInt(req.body.age)
    });
    res.json(students[students.length - 1]);
});
exports.default = route;
