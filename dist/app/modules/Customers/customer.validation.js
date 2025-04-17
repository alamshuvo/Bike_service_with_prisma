"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerValidationSchema = void 0;
const zod_1 = require("zod");
const customerUpdateValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().email().optional(),
        phone: zod_1.z.string().optional(),
    }),
});
exports.CustomerValidationSchema = { customerUpdateValidation };
