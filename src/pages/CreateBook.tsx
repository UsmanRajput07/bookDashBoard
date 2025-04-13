import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { BookformSchema } from "@/zodValidation/BookValidation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBook } from "@/services/books";
import { useNavigate } from "react-router";
import { LoaderCircle } from "lucide-react";

export default function CreateBook() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof BookformSchema>>({
    resolver: zodResolver(BookformSchema),
    defaultValues: {
      title: "",
      genre: "",
      description: "",
    },
  });

  const mutation = useMutation({
    mutationFn: createBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
      console.log("Book created successfully");
      navigate("/dashboard/books");
    },
  });

  function onSubmit(values: z.infer<typeof BookformSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const formdata = new FormData();
    formdata.append("title", values.title);
    formdata.append("genre", values.genre);
    formdata.append("description", values.description);
    formdata.append("coverImg", values.coverImage[0]);
    formdata.append("file", values.file[0]);

    mutation.mutate(formdata);

    console.log(values);
  }

  return (
    <Card className="mt-4 mb-4">
      <CardHeader>
        <CardTitle className="text-2xl">Create Book</CardTitle>
        <CardDescription>Create a new book</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <Label htmlFor="title">Title</Label>
                  <FormControl>
                    <Input
                      id="title"
                      type="text"
                      placeholder="Enter title"
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="genre"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <Label htmlFor="genre">Genre</Label>
                  <FormControl>
                    <Input
                      id="genre"
                      type="text"
                      placeholder="Enter genre"
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <Label htmlFor="textarea">Description</Label>
                  <FormControl>
                    <Textarea
                      id="textarea"
                      placeholder="Type your message here."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="coverImage"
              render={({ field }) => (
                <FormItem>
                  <Label>Cover Image</Label>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      className="w-full"
                      onChange={(e) => field.onChange(e.target.files)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <Label>Book File (PDF)</Label>
                  <FormControl>
                    <Input
                      type="file"
                      accept="application/pdf"
                      className="w-full"
                      onChange={(e) => field.onChange(e.target.files)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-4">
              <Button type="reset" variant="outline">
                Cancel
              </Button>
              <Button type="submit" disabled={mutation.isPending}>
                {mutation.isPending && (
                  <LoaderCircle className="animate-spin" />
                )}
                <span className="ml-2">Submit</span>
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
