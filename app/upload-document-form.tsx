"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader2 } from "lucide-react";
const formSchema = z.object({
  title: z.string().min(1).max(250),
});
export default function UploadDocumentForm({
  onUpload,
}: {
  onUpload: () => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });
  const createDocument = useMutation(api.documents.createDocument);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await createDocument(values);
    onUpload();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="report" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting && <Loader2 className="animate-spin" />}
          Upload
        </Button>
      </form>
    </Form>
  );
}