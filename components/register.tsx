"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, buttonVariants } from "./ui/button"; // Make sure to import your button styles

type FormValues = {
  firstName: string;
  lastname: string;
  password: string;
  email: string;
  dateOfBirth: number;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-3xl mb-6 font-semibold text-center">Register</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-2 border rounded-md"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <span className="text-red-500">First name is required</span>
          )}
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-2 border rounded-md"
            {...register("lastname", { required: false })}
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded-md"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
        </div>
        <div className="mb-4">
          <input
            type="date"
            placeholder="Date of Birth"
            className="w-full p-2 border rounded-md"
            {...register("dateOfBirth", { required: true })}
          />
          {errors.dateOfBirth && (
            <span className="text-red-500">Date of Birth is required</span>
          )}
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded-md"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500">Password is required</span>
          )}
        </div>
        <div className="flex flex-row items-center justify-center">
          <div>
            <Button type="submit" variant={"default"} size={"lg"}>
              Register
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
