import React from 'react'
import Form from 'next/form'
import { registeGroup } from '@/lib/actions/register.actions'
import { Button } from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea"


const page = async () => {
  return (
    <div >
        <h1 className='text-3xl text-center uppercase mb-4 font-bold'>  
            Adicionar Contacto
        </h1>
        <Form action={registeGroup} className='flex flex-col items-center justify-center flex-shrink-0 gap-6 *:w-full max-w-[600px] mx-auto'>
            <div>
                <label htmlFor="name">Nome:</label>
                <Input name='name' type='text' required placeholder='Clientes masculinos'/>
            </div>
            <div>
                <label htmlFor="name">Descrição(optional):</label>
                <Textarea placeholder='Este grupo contem todos os clientes masculinos menores de 18 anos' name='description'/>
            </div>
          <Button type='submit' className='bg-slate-900'>Send</Button>
        </Form>
    </div>
  )
}

export default page