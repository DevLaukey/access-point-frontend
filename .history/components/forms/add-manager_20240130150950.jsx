"use client"
import React, { useState } from 'react'
import { Heading } from '../ui/heading';
import { Button } from '../ui/button';
import { Trash } from "lucide-react";
import { Separator } from '../ui/separator';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from '../ui/input';

const AddManager = ({ title, description, initialData }) => {
      const [loading, setLoading] = useState(false);

    const handleSubmit = () => async (values) => { 
        setLoading(true);
        try {
            // await supabase.from("products").insert(values);
            // toast({
            //   title: "Product added successfully",
            //   status: "success",
            // });
        } catch (error) {
            // toast({
            //   title: "Something went wrong",
            //   status: "error",
            // });
        } finally {
            setLoading(false);
        }
    }
    return (
      <>
        <div className="flex items-center justify-between">
          <Heading title={title} description={description} />
          {initialData && (
            <Button
              disabled={loading}
              variant="destructive"
              size="sm"
              onClick={() => setOpen(true)}
            >
              <Trash className="h-4 w-4" />
            </Button>
          )}
        </div>
        <Separator />
        <Form >
          <form
            onSubmit={handleSubmit}
            className="space-y-8 w-full"
          >
            <div className="md:grid md:grid-cols-3 gap-8">
              <FormField
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Product name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <FormField
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Product description"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input type="number" disabled={loading} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      disabled={loading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            defaultValue={field.value}
                            placeholder="Select a category"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {/* @ts-ignore  */}
                        {categories.map((category) => (
                          <SelectItem key={category._id} value={category._id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
            </div>
            <Button disabled={loading} className="ml-auto" type="submit">
                {loading ? "Loading..." : "Add product"}
            </Button>
          </form>
        </Form>
      </>
    );
}

export default AddManager