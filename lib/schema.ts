import { z } from "zod";
import isMobilePhone from "validator/lib/isMobilePhone";

export const NewsletterFormSchema = z.object({
  name: z.string().optional(),
  email: z.string().email(),
});

// export const ContactFormSchema = z.object({
//   name: z.string().optional(),
//   email: z.string().email("Invalid email.").min(1, "Email is required."),
//   message: z.string().min(6, "Message must be at least 6 characters."),
// });

export const KontaktFormSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email.").min(1, "Email is required."),
  message: z.string().min(6, "Message must be at least 25 characters."),
});

export const SearchFormSchema = z.object({
  query: z.string().optional(),
});
