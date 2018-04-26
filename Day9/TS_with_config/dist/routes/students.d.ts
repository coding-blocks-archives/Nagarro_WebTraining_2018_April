/// <reference types="express" />
import { Router } from 'express';
declare const route: Router;
export declare class Student {
    name: string;
    grade: string;
    age: number;
    constructor(name: string, grade: string, age: number);
    isAdult(): boolean;
}
export default route;
