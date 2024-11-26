import React from "react";
import Form from "next/form";
import { testApi } from "@/lib/actions/send.actions";
import { PrismaClient } from "@prisma/client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Option } from "@/types";

const page = async () => {
  const prisma = new PrismaClient();
  const groups = await prisma.group.findMany();
  const OPTIONS: Option[] = [];
  groups.map((item) => {
    OPTIONS.push({
      label: `${item.name}`,
      value: item.id,
    });
  });
  return (
    <div>
      <h1 className="text-3xl text-center uppercase mb-4 font-bold">
        Testar API
      </h1>
      <Form
        action={testApi}
        className="flex flex-col items-center justify-center flex-shrink-0 gap-6 *:w-full max-w-[600px] mx-auto"
      >
        <Input type="text" name="number" required />
        <Textarea placeholder="Write something" name="message" required />
        <Button type="submit" className="bg-slate-900">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default page;
