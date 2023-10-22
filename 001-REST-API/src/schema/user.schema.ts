import { object, string } from "zod";

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    })
      .min(3, "Name must be at least 3 characters")
      .max(255, "Name must not exceed 255 characters"),
    password: string({
      required_error: "Password is required",
    })
      .min(8, "Password must be at least 8 characters")
      .max(255, "Password must not exceed 255 characters"),
    passwordConfirmation: string({
      required_error: "Password confirmation is required",
    }),
    email: string({
      required_error: "Email is required",
    }).email("Must be a valid email"),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});
