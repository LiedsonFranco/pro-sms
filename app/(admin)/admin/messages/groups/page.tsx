import React from 'react'
import Form from 'next/form'
import { sendMessageByGroups } from '@/lib/actions/send.actions'
import { PrismaClient } from '@prisma/client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Option } from '@/types'

const page = async () => {
  const prisma = new PrismaClient()
  const groups = await prisma.group.findMany()
  const OPTIONS: Option[] = []
  groups.map((item) => {
    OPTIONS.push({
      label: `${item.name}`, value: item.id
    })
  })
  return (
    < >
      <h1 className='text-3xl text-center uppercase mb-4 font-bold'>
        Enviar mensagens para grupos
      </h1>
      <Form action={sendMessageByGroups} className='flex flex-col items-center justify-center flex-shrink-0 gap-6 *:w-full max-w-[600px] mx-auto'>
        <div>
          <Select name='group'>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Grupo" />
            </SelectTrigger>
            <SelectContent>
              {groups.map((i) => {
                return (
                  <SelectItem key={i.id} value={i.id}>
                    {i.name}
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </div>
        <Textarea placeholder='Write something' name='message' required />
        <Button type='submit' className='bg-slate-900'>Send</Button>
      </Form>
    </>
  )
}

export default page