import React from 'react'
import Form from 'next/form'
import { updateGroup } from '@/lib/actions/update.actions'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea"


const page = async ({
    params,
}: {
    params: Promise<{ id: string }>
}) => {
    const id = (await params).id

    return (
        <div >
            <h1 className='text-3xl text-center uppercase mb-4 font-bold'>
                Editar Grupo
            </h1>
            <Form action={updateGroup} className='flex flex-col items-center justify-center flex-shrink-0 gap-6 *:w-full max-w-[600px] mx-auto'>
                <input name='id' value={id} type='hidden' />
                <div>
                    <label htmlFor="name">Nome:</label>
                    <Input name='name' type='text' required placeholder='' />
                </div>
                <div>
                    <label htmlFor="name">Descrição(optional):</label>
                    <Textarea placeholder='' name='description' />
                </div>
                <Button type='submit' className='bg-slate-900'>Send</Button>
            </Form>
        </div>
    )
}

export default page