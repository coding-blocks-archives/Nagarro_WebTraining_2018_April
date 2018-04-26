"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var students_1 = __importDefault(require("./routes/students"));
var app = express_1.default();
var routes = {
    students: students_1.default
};
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/students', routes.students);
app.get('/', function (req, res) {
    console.log("HELLO");
});
app.listen(3535, function () {
    console.log("Server started on http://localhost:3535");
});
