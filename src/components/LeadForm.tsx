"use client";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { DatePicker } from "@mui/x-date-pickers";
import SelectUSState from 'react-select-us-states'; 

type Props = {};

const formSchema = z.object({
  firstname: z.string().max(25),
  lastname: z.string().max(25),
  location: z.string().min(3).max(25),
  email: z.string().email(),
  dob: z.string(),
  phone: z.string().min(10).max(10),
  health: z.string().min(3).max(25),
  meds: z.string().min(3).max(25),
  contribution: z.string().min(0).max(10000000000),
  years: z.string().min(0),
  retirement: z.string().min(0),
});

const LeadForm = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        firstname: "",
        lastname: "",
        location: "",
        dob: "",
        email: "",
        phone: "",
        health: "",
        meds: "",
        contribution: "",
        years: "",
        retirement: "",
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <Card className="w-[400px]">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="First Name" {...field} />
              </FormControl>
              <FormDescription>
                Please enter your first name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Last Name" {...field} />
              </FormControl>
              <FormDescription>
                Please enter your last name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <FormControl>
              <p>
        <SelectUSState id="myId" className="myClassName" onChange={(e: any) => console.log(e.target.value)}/>
      </p>
              </FormControl>
              <FormDescription>
                Please select your state.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
              <Input placeholder="phone" {...field}/>
              </FormControl>
              <FormDescription>
                Please enter your phone number
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormDescription>
                Please enter your email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField 
          control={form.control}
            name="dob"
          render={({ field }) => (
            
            <FormItem>
                <div className="flex flex-col">
              <FormLabel className="pb-3">dob</FormLabel>
              <FormControl>
                <DatePicker />
                
              </FormControl>
              <FormDescription className="pt-2">
                Please enter your dob.
              </FormDescription>
              <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="health"
          render={({ field }) => (
            <FormItem>
              <FormLabel>health</FormLabel>
              <FormControl>
                <Input placeholder="health" {...field} />
              </FormControl>
              <FormDescription>
                Please enter your health.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="meds"
          render={({ field }) => (
            <FormItem>
              <FormLabel>meds</FormLabel>
              <FormControl>
                <Input placeholder="meds" {...field} />
              </FormControl>
              <FormDescription>
                Please enter your meds.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contribution"
          render={({ field }) => (
            <FormItem>
              <FormLabel>contribution</FormLabel>
              <FormControl>
                <Input placeholder="contribution" {...field} />
              </FormControl>
              <FormDescription>
                Please enter your contribution.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="years"
          render={({ field }) => (
            <FormItem>
              <FormLabel>years</FormLabel>
              <FormControl>
                <Input placeholder="years" {...field} />
              </FormControl>
              <FormDescription>
                Please enter your years.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="retirement"
          render={({ field }) => (
            <FormItem>
              <FormLabel>retirement</FormLabel>
              <FormControl>
                <Input placeholder="retirement" {...field} 
                />

              </FormControl>
              <FormDescription>
                Please enter your retirement.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </Card>
  );
};

export default LeadForm;
