"use client";

import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link, useNavigate } from "react-router";
import { signup } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer, toast, Zoom } from "react-toastify";
import { LoaderCircle } from "lucide-react";
import { z } from "zod";
import { signupSchema } from "@/zodValidation/AuthValidation";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ProfileForm() {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });
  const navigate = useNavigate();

  const onSignup = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      form.reset();
      navigate("/");
    },
  });
  const onSubmit = (data: {
    email: string;
    password: string;
    name: string;
  }) => {
    const { email, password, name } = data;
    if (!email || !password || !name) {
      return toast.error("Please fill all the fields", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    }
    onSignup.mutate(data);
  };
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle className="text-2xl">Signup</CardTitle>
        <CardDescription>Create an account</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={onSignup?.isPending}>
              {onSignup?.isPending && (
                <LoaderCircle className="mr-2 animate-spin" />
              )}
              Signup
            </Button>
          </form>
        </Form>
        <div className="mt-4 text-sm text-center">
          Already have an account?
          <Link to={"/"} className="underline underline-offset-4">
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
