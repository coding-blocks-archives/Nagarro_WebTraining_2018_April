"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const students_1 = __importDefault(require("./routes/students"));
const app = express_1.default();
const routes = {
    students: students_1.default
};
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/students', routes.students);
app.get('/', (req, res) => {
    console.log("HELLO");
});
app.listen(3535, function () {
    console.log("Server started on http://localhost:3535");
});
