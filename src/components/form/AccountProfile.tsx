"use client";
import React, { ChangeEvent, useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/lib/validation/userValidation";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import { Textarea } from "../ui/textarea";
import { isBase64Image } from "@/utils/isBase64Image";
import {useUploadThing} from '@/utils/uploadthing'
type User = {
	user: {
		id: string;
		banned: boolean;
		profileImageUrl: string;
		gender: string;
		username: string;
		firstname: string;
		lastname: string;
		objectId: string;
		work: string;
		university_id: string,
		password:string
	};
};
const AccountProfile = ({ user }: User) => {
	const [file, setFile] = useState<File[]>([]);
	const {startUpload} = useUploadThing("media")
	const form = useForm<z.infer<typeof userSchema>>({
		resolver: zodResolver(userSchema),
		defaultValues: {
			username: user?.username || "",
			profile_photo: user?.profileImageUrl || "",
			gender: user?.gender || "",
			work:user?.work||"",
			university_id:user?.university_id||"",
			password:user?.password || "",
		},
	});

	const handleImage = async (
		e: ChangeEvent<HTMLInputElement>,
		fieldChange: (value: string) => void,
	) => {
		e.preventDefault();

		const fileReader = new FileReader();
		if (e.target.files && e.target.files.length > 0) {
			const file = e.target.files[0];

			setFile(Array.from(e.target.files));

			if (!file.type.includes("image")) return;
			fileReader.onload = async (event) => {
				const imgDataUrl = event.target?.result?.toString() || "";

				fieldChange(imgDataUrl);
			};

			fileReader.readAsDataURL(file);
		}
	};

	async function onSubmit  (values: z.infer<typeof userSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		// console.log(values);
		const blob = values?.profile_photo;

		const hasImageChange = isBase64Image(blob);

		if (hasImageChange) {
			//upload in uploadthing
			const imgRes = await startUpload(file);

			if (imgRes && imgRes[0].fileUrl) {
				values.profile_photo = imgRes[0].fileUrl;
			}
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="profile_photo"
					render={({ field }) => (
						<FormItem className="flex items-center gap-4">
							<FormLabel className="account-form_image-label">
								{field.value ? (
									<Image
										src={field.value}
										alt="profile"
										width={96}
										height={96}
										className="rounded-full object-contain"
									/>
								) : (
									<Image
										src="/user.jpg"
										alt="profile"
										width={96}
										height={96}
										className="rounded-full object-contain"
									/>
								)}
							</FormLabel>
							<FormControl>
								<Input
									type="file"
									accept="image/*"
									
									onChange={(e) => handleImage(e, field.onChange)}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="shadcn" {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="university_id"
					render={({ field }) => (
						<FormItem>
							<FormLabel>University Id</FormLabel>
							<FormControl>
								<Input placeholder="190103020007" {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input placeholder="Password" {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="gender"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Gender</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue
											placeholder="Gender"
											className="placeholder:text-white"
										/>
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="Male">Male</SelectItem>
									<SelectItem value="Female">Female</SelectItem>
									<SelectItem value="Others">Others</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="work"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Work</FormLabel>
							<FormControl>
								<Input placeholder="Work...." {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="bio"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Bio</FormLabel>
							<FormControl>
								<Textarea placeholder="I am a ....." rows={10} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
};

export default AccountProfile;
