import React from 'react'
import Form from 'next/form'
import { PrismaClient } from '@prisma/client'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
  } from "@/components/ui/select"
import MultiSelector from '@/components/client/MultiSelector'
import {Option} from '@/types'
import { Button } from '@/components/ui/button';
import { addClintToGroup } from '@/lib/actions/register.actions'

const page = async () => {
  const prisma = new PrismaClient()
  const clients = await prisma.client.findMany()
  const groups = await prisma.group.findMany()
  const CLIENTES_OPTIONS: Option[] = []
  clients.map((item) => {
	CLIENTES_OPTIONS.push({
		label: `${item.name}`, value: item.id
	})})
  return (
    <div >
        <h1 className='text-3xl text-center uppercase mb-4 font-bold'>  
            Adicionar ao grupo
        </h1>
        <Form action={addClintToGroup} className='flex flex-col items-center justify-center flex-shrink-0 gap-6 *:w-full max-w-[600px] mx-auto'>
        <div>
            <label htmlFor="group">Genero:</label>
            <Select name='group' required>
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
		<MultiSelector options={CLIENTES_OPTIONS} placeholder='Selecione um nome'/>
          <Button type='submit' className='bg-slate-900'>Send</Button>
        </Form>
    </div>
  )
}

export default page