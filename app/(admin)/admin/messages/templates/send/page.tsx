import React from 'react'
import Form from 'next/form'
import { sendMessageTemplate } from '@/lib/actions/send.actions'
import { PrismaClient } from '@prisma/client'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
  } from "@/components/ui/select"
import { Button } from '@/components/ui/button';
import { Option } from '@/types'
import MultiSelector from '@/components/client/MultiSelector'

const page = async () => {
  const prisma = new PrismaClient()
  const templates = await prisma.messageTemplate.findMany()
  const clients = await prisma.client.findMany()
  const OPTIONS: Option[] = []
  clients.map((item) => {
	OPTIONS.push({
		label: `${item.name}`, value: item.id
	})})
  return (
    <div >
        <h1 className='text-3xl text-center uppercase mb-4 font-bold'>  
            Enviar mensagens de templates
        </h1>
        <Form action={sendMessageTemplate} className='flex flex-col items-center justify-center flex-shrink-0 gap-6 *:w-full max-w-[600px] mx-auto'>
            <div>
              <label htmlFor="">
                Clientes:
              </label>
		            <MultiSelector options={OPTIONS} placeholder='Selecione um nome'/>
            </div>
            <div>
              <label htmlFor="template">Template:</label>
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