"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleZodError = (err) => {
    //   const errorSources: TErrorHandaler = err.issues.map((issue: ZodIssue) => {
    //     return {
    //       path: issue?.path[issue.path.length - 1],
    //       message: issue?.message,
    //     };
    //   });
    return {
        statusCode: 400,
        message: 'Validation Error',
        err: err,
        //errorSources,
    };
};
exports.default = handleZodError;
