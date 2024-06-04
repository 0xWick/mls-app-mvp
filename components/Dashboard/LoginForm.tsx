"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  // Add PAswword

  password: z.string()

})

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: ""
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-[100%] space-y-6 text-center">
        <div className="flex flex-col items-center align-middle justify-center h-screen">
        <FormField
          control={form.control}
          name="username"
        
          render={({ field }) => (
            <FormItem className="w-[30%] mb-10">
              <FormLabel >Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-[30%]">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" {...field} />
              </FormControl>
              <FormDescription>
                Use your login information to access the MLS!
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
    
  )
}
