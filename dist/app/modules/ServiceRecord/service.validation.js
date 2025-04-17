"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceValidationSchema = void 0;
const zod_1 = require("zod");
const serviceUpdateValidation = zod_1.z.object({
    body: zod_1.z.object({
        serviceDate: zod_1.z.date().optional(),
        completionDate: zod_1.z.date().optional(),
        description: zod_1.z.string().email().optional(),
        status: zod_1.z.enum(['pending', 'in_progress', 'done']).optional(),
    }),
});
exports.serviceValidationSchema = { serviceUpdateValidation };
