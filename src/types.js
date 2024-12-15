import { z } from "zod";

export const studentSchemaValid = z.object({
    email: z.string().email(),
    name: z.string().regex(new RegExp(/^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/), 'Please enter valid name'),
    username: z.string().regex(new RegExp(/^[a-zA-Z0-9._]+$/), 'Please enter valid username'),
    password: z.string().regex(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&!*_])[A-Za-z\d@#$%^&!*_]{8,}$/), 'Password must contain at least 8 digit including at least 1 special character, 1 number , 1 Uppercase character and 1 lower case character')
        .min(8, { message: "Password is too short" })
        .max(20, { message: "Password is too long" })
});
