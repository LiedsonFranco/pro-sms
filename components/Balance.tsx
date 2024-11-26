import React from 'react'
import { PrismaClient } from '@prisma/client'
import { auth } from '@/auth'
const Balance = async () => {
    const session = await auth()
    const prisma = new PrismaClient()
    console.log(session?.user)
    const institution = await prisma.institution.findFirstOrThrow({
        where: {
            users: {
                every: {
                    email: session!.user!.email!
                }
            }
        },
        include: {
            users: true,
        }
    })
    console.log(institution)
    return (
        <div>{institution.balance}</div>
    )
}

export default Balance