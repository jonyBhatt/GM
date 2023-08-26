import * as z from "zod";

export const userSchema = z.object({
	username: z.string().min(2).max(50),
	profile_photo: z.string().nonempty().url(),
	gender: z.string(),
	work: z.string().min(4).max(50),
    bio: z.string().min(5).max(100),
    university_id: z.string().min(10),
    password:z.string().min(6)
});
