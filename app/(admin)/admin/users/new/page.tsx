import React from 'react'
import Form from 'next/form'
import { registeUser } from '@/lib/actions/register.actions'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const page = async () => {
  return (
    <div >
      <h1 className='text-3xl text-center uppercase mb-4 font-bold'>
        Adicionar Usuario
      </h1>
      <Form action={registeUser} className='flex flex-col items-center justify-center flex-shrink-0 gap-6 *:w-full max-w-[600px] mx-auto'>
        <div>
          <label htmlFor="name">Nome:</label>
          <Input name='name' type='text' required />
        </div>
        <div>
          <label htmlFor="name">Email:</label>
          <Input name='email' type='email' placeholder='ana@gmail.com' required />
        </div>
        <Button type='submit'>Send</Button>
      </Form>
    </div>
  )
}

export default page