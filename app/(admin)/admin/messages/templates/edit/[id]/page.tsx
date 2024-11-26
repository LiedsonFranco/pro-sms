import React from 'react'
import Form from 'next/form'
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { updateTemplateMessege } from '@/lib/actions/update.actions';
const page = async ({
    params,
}: {
    params: Promise<{ id: string }>
}) => {
    const id = (await params).id
    return (
        <div >
            <h1 className='text-3xl text-center uppercase mb-4 font-bold'>
                Registe messagens template
            </h1>
            <Form action={updateTemplateMessege} className='flex flex-col items-center justify-center flex-shrink-0 gap-6 *:w-full max-w-[600px] mx-auto'>
                <input name='id' value={id} type='hidden' />

                <div>
                    <label htmlFor="name">Nome:</label>
                    <Input name='name' type='text' placeholder='Messagem de aniversário' />
                </div>
                <Textarea placeholder='Write something' name='description' required className='min-h-[150px]' />
                <Button type='submit' className='bg-slate-900'>Guardar</Button>
            </Form>
        </div>
    )
}

export default page