import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
import { auth } from '@/auth'
import { cache } from 'react'


const getGroups = cache(async () => {
    const session = await auth()
    const prisma = new PrismaClient()
    const user = await prisma.user.findFirst({
        where: {
            email: session!.user!.email!
        }
    })
    const groups = await prisma.group.findMany({
        where: {
            institutionId: user?.institutionId
        }
    })
    prisma.$connect()
    return groups
})

const page = async () => {
    const groups = await getGroups()
    return (
        <div>
            <Table>
                <TableCaption>Lista da mensagens mais recentes</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[150px]">Data</TableHead>
                        <TableHead>Nome</TableHead>
                        <TableHead>Opções</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {groups.map((item) => {
                        return (
                            <TableRow key={item.id}>
                                <TableCell>{item.createdAt.toDateString()}</TableCell>
                                <TableCell className="font-medium" >{item.name}</TableCell>
                                <TableCell>
                                    <Link href={`/admin/groups/edit/${item.id}`}>
                                        Editar
                                    </Link>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default page