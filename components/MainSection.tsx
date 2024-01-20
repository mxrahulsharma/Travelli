"use client";


import { ResultList } from "./ResultList";

import { location } from "@/context";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LocationSelect } from "./utils/CardSelect";
import { DatePicker } from "./DatePicker";
import { addDays } from "date-fns";
import { toast } from "./ui/use-toast";
import { Switch } from "./ui/switch";
import { useState } from "react";

const FormSchema = z
  .object({
    location: z.string().max(3).optional(), // TODO: Have to add location validation with JSON
    budget: z.coerce
      .number()
      .gte(500, {
        message: "Please add atleast more than ₹500.", // Please increase your budget more than ₹500
      })
      .optional(),
    date: z
      .object({
        from: z.date(),
        to: z.date(),
      })
      .refine(
        (data) => data.from > addDays(new Date(), -1),
        "Start date must be in the future"
      )
      .optional(),
    locationAuto: z.boolean(),
    BudgetAuto: z.boolean(),
    DateAuto: z.boolean(),
  })
  .refine(
    (data) => {
      if (!data.locationAuto) {
        return !!data.location;
      }
      return true;
    },
    {
      message: "Location is required",
      path: ["location"],
    }
  )
  .refine(
    (data) => {
      if (!data.BudgetAuto) {
        return !!data.budget;
      }
      return true;
    },
    {
      message: "Budget is required",
      path: ["budget"],
    }
  )
  .refine(
    (data) => {
      if (!data.DateAuto) {
        return !!data.date;
      }
      return true;
    },
    {
      message: "Date is required",
      path: ["date"],
    }
  );
const MainSection = () => {
  const [result, setResult] = useState<Object>({})

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      // location: "",
      // budget: 5000,
      locationAuto: false,
      BudgetAuto: false,
      DateAuto: false,
    },
  });
  const isLocationAuto = form.watch("locationAuto");
  const isBudgetAuto = form.watch("BudgetAuto");
  const isDateAuto = form.watch("DateAuto");
  function onSubmit(data: z.infer<typeof FormSchema>) {
    setResult(data)
    // console.log(JSON.stringify(result, null, 2));
  }
  return (
    <section className="flex flex-wrap-reverse md:flex-nowrap justify-center items-center p-5 md:p-14 bg-gray-50 ">
      <div className="Left w-full  bg-slate-50 flex justify-center p-10">
        <ResultList items={location} result={result} />
      </div>

      <div className="Right w-full flex flex-col justify-center p-10">
        {/* <CalculationCard /> */}
        <h1 className="text-4xl ">Trip Planner</h1>
        <Card className="w-full max-w-[600px] p-10">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <div className=" w-full items-center gap-4">
                <div className="grid grid-cols-2 gap-4 items-center">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex flex-col space-y-1.5">
                          <FormLabel className="font-normal text-[.7rem] text-gray-700 ">
                            Location
                          </FormLabel>
                          {isLocationAuto ? (
                            <Button
                              disabled
                              variant="outline"
                              className="text-green-700"
                            >
                              Automatic
                            </Button>
                          ) : (
                            <LocationSelect field={field} />
                          )}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="locationAuto"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-end space-x-2">
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            id="locationAuto"
                          />
                          <FormLabel>Auto</FormLabel>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex flex-col space-y-1.5">
                          <FormLabel className="font-normal text-[.7rem] text-gray-700 ">
                            Budget
                          </FormLabel>
                          {isBudgetAuto ? (
                            <Button
                              disabled
                              variant="outline"
                              className="text-green-700"
                            >
                              Automatic
                            </Button>
                          ) : (
                            <Input
                              id="name"
                              type="number"
                              placeholder="5000 ₹"
                              {...field}
                            />
                          )}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="BudgetAuto"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-end space-x-2">
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            id="BudgetAuto"
                          />
                          <FormLabel>Auto</FormLabel>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex flex-col space-y-1.5">
                          <FormLabel className="font-normal text-[.7rem] text-gray-700 ">
                            Date
                          </FormLabel>
                          {isDateAuto ? (
                            <Button
                              disabled
                              variant="outline"
                              className="text-green-700"
                            >
                              Automatic
                            </Button>
                          ) : (
                            <DatePicker field={field} />
                          )}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="DateAuto"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-end space-x-2">
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            id="DateAuto"
                          />
                          <FormLabel>Auto</FormLabel>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Button type="submit">Get My Trip</Button>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
};

export default MainSection;
