import React from 'react'
import Form from 'next/form'
import { sendMessage } from '@/lib/actions/send.actions'
import { PrismaClient } from '@prisma/client'
import MultiSelector from '@/components/client/MultiSelector'
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Option } from '@/types'
import { auth } from '@/auth'

const page = async () => {
  const prisma = new PrismaClient()
  const session = await auth()
  const user = await prisma.user.findUnique({
    where: {
      email: session!.user!.email!
    }
  })
  const clients = await prisma.client.findMany({
    where: {
      institution: {
        every: {
          id: user?.institutionId
        }
      }
    }
  })
  const OPTIONS: Option[] = []
  clients.map((item) => {
    OPTIONS.push({
      label: `${item.name}`, value: item.id
    })
  })
  return (
    <div >
      <h1 className='text-3xl text-center uppercase mb-4 font-bold'>
        Send some message
      </h1>
      <Form action={sendMessage} className='flex flex-col items-center justify-center flex-shrink-0 gap-6 *:w-full max-w-[600px] mx-auto'>
        <MultiSelector options={OPTIONS} placeholder='Selecione um nome' />
        <Textarea placeholder='Write something' name='message' required />
        <Button type='submit' className='bg-slate-900'>Send</Button>
      </Form>
    </div>
  )
}

export default page