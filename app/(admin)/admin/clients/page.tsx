import React from 'react'
import Form from 'next/form'
import { registeClient } from '@/lib/actions/register.actions'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const page = async () => {
  return (
    <div >
      <h1 className='text-3xl text-center uppercase mb-4 font-bold'>
        Adicionar Contacto
      </h1>
      <Form action={registeClient} className='flex flex-col items-center justify-center flex-shrink-0 gap-6 *:w-full max-w-[600px] mx-auto'>
        <div>
          <label htmlFor="name">Nome:</label>
          <Input name='name' type='text' required />
        </div>
        <div>
          <label htmlFor="name">Numero de telefone:</label>
          <Input name='phoneNumber' type='text' placeholder='+244 921 000 904' required />
        </div>
        <div>
          <label htmlFor="name">Email(optional):</label>
          <Input name='email' type='email' placeholder='ana@gmail.com' />
        </div>
        <div>
          <label htmlFor="gender">Genero(optional):</label>
          <Select name='gender'>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Genero" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="m">Masculino</SelectItem>
              <SelectItem value="f">Femenino</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="birthday">Date de nascimento(optional):</label>
          <Input type='date' name='date' id='date' />
        </div>
        <Button type='submit'>Send</Button>
      </Form>
    </div>
  )
}

export default page