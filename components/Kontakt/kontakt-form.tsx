"use client";

import { sendEmail } from "../../app/actions/sendEmail";
import { toast } from "sonner";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ContactFormSchema } from "../../lib/schema";
import { Spinner } from "../icons/icons";

type FormInputs = z.infer<typeof ContactFormSchema>;

export default function KontaktForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<FormInputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: FormInputs) {
    startTransition(async () => {
      const response = await sendEmail(data);

      if (response.success) {
        toast.success("Email sent!");
        form.reset();
        return;
      }

      if (response.error) {
        toast.error(response.error);
      }
    });
  }

  return (
    <div className="relative z-10 mx-auto -mt-20 max-w-4xl rounded-md bg-white px-[7%] py-10 shadow-lg dark:bg-slate-900 dark:shadow-slate-950/40 md:py-[5%]">
      <div className="container">
        <ul className="mb-6 space-y-1 text-center text-sm">
          <li>
            <address className="-mt-px leading-6">
              0000 Lorem ipsum dolor sit amet 000 Lorem Ipsum, LI 00000
            </address>
          </li>
          <li>
            <span>Telefon: </span>
            <a href="tel:+0 00 000 000" className="hover:text-primary">
              +0 00 000 000
            </a>
          </li>
          <li>
            <span>Email: </span>
            <a href="mailto:hi@kuebs.com" className="hover:text-primary">
              hi@kuebs.com
            </a>
          </li>
        </ul>
        <Form {...form}>
          <form
            className="flex flex-col dark:text-black"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="flex flex-wrap lg:flex-nowrap lg:space-x-8">
              <div className="mb-6 w-full lg:w-1/2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="dark:text-white">Vorname</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-6 w-full lg:w-1/2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="dark:text-white">Nachname</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-6 w-full lg:w-1/2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="dark:text-white">Email</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="mb-6">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-white">Nachricht</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Wie können wir Ihr Unternehmen unterstützen?"
                        rows={6}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" size="lg" disabled={isPending}>
              {isPending ? (
                <>
                  <Spinner className="mr-2 h-5 w-5 animate-spin" />
                  <span>Sending</span>
                </>
              ) : (
                <span>Nachricht senden</span>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
