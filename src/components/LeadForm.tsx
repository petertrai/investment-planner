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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";


type Props = {};

const formSchema = z.object({
  firstname: z.string().min(3).max(25),
  lastname: z.string().min(3).max(25),
  state: z.string().max(25),
  email: z.string().email(),
  age: z.string().min(0).max(2),
  phone: z.string().max(11),
  health: z.string(),
  meds: z.string(),
  contribution: z.string().min(0).max(10000000000),
  retirement: z.string().min(0),
});

type Input = z.infer<typeof formSchema>;

const LeadForm = (props: Props) => {
  const [formStep, setFormStep] = React.useState(0);
  const form = useForm<Input>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      state: "",
      age: "",
      email: "",
      phone: "",
      health: "",
      meds: "",
      contribution: "",
      retirement: "",
    },
  });

  function onSubmit(data: Input) {
    console.log("data", data);
  }

  return (
    <div>
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Enter your info</CardTitle>
      </CardHeader>
      <CardContent>
    
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className={cn("space-y-8", { hidden: formStep == 1 })}>
        {/* Firstname */}
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="First Name" {...field} />
              </FormControl>
              <FormDescription>Please enter your first name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Lastname */}
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Last Name" {...field} />
              </FormControl>
              <FormDescription>Please enter your last name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* State */}
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State of Residence</FormLabel>
              <FormControl>
                <Input placeholder="State" {...field} />
              </FormControl>
              <FormDescription>
                Please enter the state you live in.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Phone # */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="phone" {...field} />
              </FormControl>
              <FormDescription>Please enter your phone number</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormDescription>Please enter your email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <div className={cn('space-y-6', {
          hidden: formStep == 0
        })}>
        {/* Age */}
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input placeholder="age" {...field} />
              </FormControl>
              <FormDescription>
                Please enter your age.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Health */}
        <FormField
          control={form.control}
          name="health"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>My health is...</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="poor" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Poor
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="fair" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Fair
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="excellent" />
                    </FormControl>
                    <FormLabel className="font-normal">Excellent</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Meds */}
        <FormField
          control={form.control}
          name="meds"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                How many medications are you currently taking?
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="0"
                  {...field}
                  type="number"
                  min={0}
                  max={10}
                />
              </FormControl>
              <FormDescription>Please enter a number.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Contribution */}
        <FormField
          control={form.control}
          name="contribution"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                How much money do you want to contribute in to your policy each
                month?
              </FormLabel>
              <FormControl>
                <Input placeholder="Monthly contribution" {...field} />
              </FormControl>
              <FormDescription>
                Please enter your desired monthly contribution in USD.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Retirement */}
        <FormField
          control={form.control}
          name="retirement"
          render={({ field }) => (
            <FormItem>
              <FormLabel>At what age do you plan on retiring?</FormLabel>
              <FormControl>
                <Input placeholder="Retirement age" {...field} />
              </FormControl>
              <FormDescription>
                Please enter your desired retirement age.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
<div className="flex gap-2">
<Button type="submit">Submit</Button>
<Button type="button" className="pr-5" variant={"ghost"} onClick={() => setFormStep(1)}>Next Step
<ArrowRight className="ml-2 w-5 h-5"/>
</Button>
</div>
      </form>
    </Form>
    </CardContent>
    </Card>
    </div>
  );
};

export default LeadForm;
