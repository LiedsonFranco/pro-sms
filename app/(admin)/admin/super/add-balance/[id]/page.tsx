import React from 'react'
import Form from 'next/form'
import { updateInstitutionBalance } from '@/lib/actions/update.actions'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
const page = async ({
    params,
}: {
    params: Promise<{ id: string }>
}) => {
    const id = (await params).id
    return (
        <>
            <h1 className='text-3xl text-center uppercase font-bold mt-4'>
                Adicionar Saldo
            </h1>
            <Form action={updateInstitutionBalance} className='flex flex-col justify-center gap-2 max-w-[600px] mx-auto'>
                <input name='institutionId' value={id} type='hidden' />
                <div className='my-4'>
                    <Input type='number' name='balance' placeholder='Quantidade de mensagens a adicionar' className='w-[600px]' />
                </div>
                <Button>Adicionar</Button>
            </Form>
        </>
    )
}

export default page