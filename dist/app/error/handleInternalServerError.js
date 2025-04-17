"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleInternalServerError = (err) => {
    return {
        statusCode: 500, // Correct status code for internal server errors
        message: err.message || "Internal Server Error",
        err: {
            name: err.name,
            message: err.message,
        },
    };
};
exports.default = handleInternalServerError;
