"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, statusCode, jsonData) => {
    const { success, message, data } = jsonData;
    res.status(statusCode).json({
        success,
        message,
        data: data || null,
    });
};
exports.default = sendResponse;
