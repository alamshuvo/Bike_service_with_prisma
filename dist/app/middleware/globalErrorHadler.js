"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const config_1 = __importDefault(require("../config"));
const handleZodError_1 = __importDefault(require("../error/handleZodError"));
const handleInternalServerError_1 = __importDefault(require("../error/handleInternalServerError"));
const AppError_1 = __importDefault(require("../error/AppError"));
const globalErrorHandler = (err, req, res, next) => {
    let statusCodes = err.StatusCode || 400;
    let message = err.message || 'something Went Wrong';
    let error = err || 'some error here';
    if (err instanceof zod_1.ZodError) {
        const simpliFiedError = (0, handleZodError_1.default)(err);
        statusCodes = simpliFiedError === null || simpliFiedError === void 0 ? void 0 : simpliFiedError.statusCode;
        message = simpliFiedError === null || simpliFiedError === void 0 ? void 0 : simpliFiedError.message;
        error = simpliFiedError === null || simpliFiedError === void 0 ? void 0 : simpliFiedError.err;
    }
    else if (err instanceof AppError_1.default) {
        statusCodes = err === null || err === void 0 ? void 0 : err.statusCode;
        message = err === null || err === void 0 ? void 0 : err.message;
        error = err;
    }
    else if ((err === null || err === void 0 ? void 0 : err.code) === 500) {
        const simpliFiedError = (0, handleInternalServerError_1.default)(err);
        statusCodes = simpliFiedError === null || simpliFiedError === void 0 ? void 0 : simpliFiedError.statusCode;
        message = simpliFiedError === null || simpliFiedError === void 0 ? void 0 : simpliFiedError.message;
        error = simpliFiedError === null || simpliFiedError === void 0 ? void 0 : simpliFiedError.err;
    }
    res.status(statusCodes).json({
        success: false,
        statusCodes,
        message,
        stack: config_1.default.node_env === 'development' ? err === null || err === void 0 ? void 0 : err.stack : null,
    });
};
exports.default = globalErrorHandler;
