import React from 'react'
import Form from 'next/form'
import { sendMessageTemplateByGroups } from '@/lib/actions/send.actions'
import { PrismaClient } from '@prisma/client'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
  } from "@/components/ui/select"
import { Button } from '@/components/ui/button';

const page = async () => {
  const prisma = new PrismaClient()
  const templates = await prisma.messageTemplate.findMany()
  const groups = await prisma.group.findMany()
  return (
    <div >
        <h1 className='text-3xl text-center uppercase mb-4 font-bold'>  
            Enviar mensagens de template para grupos
        </h1>
        <Form action={sendMessageTemplateByGroups} className='flex flex-col items-center justify-center flex-shrink-0 gap-6 *:w-full max-w-[600px] mx-auto'>
            <div>
            <Select name='group'>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Grupo" />
            </SelectTrigger>
            <SelectContent>
                {groups.map((i) => {
                    return(
                        <SelectItem key={i.id} value={i.id}>
                            {i.name}
                        </SelectItem>
                    )
                })}
            </SelectContent>
            </Select>
            </div>
            <div>
            <Select name='template'>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Template" />
            </SelectTrigger>
            <SelectContent>
                {templates.map((i) => {
                    return(
                        <SelectItem key={i.id} value={i.id}>
                            {i.title}
                        </SelectItem>
                    )
                })}
            </SelectContent>
            </Select>
            </div>
          <Button type='submit' className='bg-slate-900'>Send</Button>
        </Form>
    </div>
  )
}

export default page