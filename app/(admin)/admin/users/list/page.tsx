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


const page = async () => {
    const session = await auth()
    const prisma = new PrismaClient()
    const user = await prisma.user.findFirst({
        where: {
            email: session!.user!.email!
        }
    })
    const users = await prisma.user.findMany({
        where: {
            institutionId: user?.institutionId
        }
    })
    return (
        <div>
            <Table>
                <TableCaption>Lista da mensagens mais recentes</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[150px]">Criado em:</TableHead>
                        <TableHead>Nome:</TableHead>
                        <TableHead>Email:</TableHead>
                        <TableHead>Tipo:</TableHead>
                        <TableHead>Opções:</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((item) => {
                        return (
                            <TableRow key={item.id}>
                                <TableCell>{item.createdAt.toDateString()}</TableCell>
                                <TableCell className="font-medium" >{item.name}</TableCell>
                                <TableCell className="font-medium" >{item.email}</TableCell>
                                <TableCell className="font-medium" >{item.role}</TableCell>
                                <TableCell>
                                    <Link href={`/admin/template/edit/${item.id}`}>
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