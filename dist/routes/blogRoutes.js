"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Blog_1 = __importDefault(require("../models/Blog"));
const router = (0, express_1.Router)();
router.get('/blogs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield Blog_1.default.findAll();
        res.status(200).json(blogs);
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong!!!!' });
    }
}));
router.post('/blogs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('got here');
    try {
        const blog = yield Blog_1.default.create(req.body);
        res.status(201).json(blog);
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrongdddd' });
    }
}));
router.put('/blogs/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield Blog_1.default.update(req.body, {
            where: { id: req.params.id },
        });
        res.status(200).json(blog);
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}));
router.delete('/blogs/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Blog_1.default.destroy({
            where: { id: req.params.id },
        });
        res.status(204).json({ message: 'Blog deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}));
exports.default = router;
