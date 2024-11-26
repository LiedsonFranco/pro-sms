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


const page = async () => {
    const prisma = new PrismaClient()
    const institutions = await prisma.institution.findMany()
    return (
        <div>
            <Table>
                <TableCaption>Lista da mensagens mais recentes</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[150px]">Adiciona em:</TableHead>
                        <TableHead>Nome:</TableHead>
                        <TableHead>Saldo:</TableHead>
                        <TableHead>Opções</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {institutions.map((item) => {
                        return (
                            <TableRow key={item.id}>
                                <TableCell>{item.createdAt.toDateString()}</TableCell>
                                <TableCell className="font-medium" >{item.name}</TableCell>
                                <TableCell className="font-medium" >{item.balance}</TableCell>
                                <TableCell className='flex gap-1'>
                                    <Link href={`/admin/super/add-balance/${item.id}`}>
                                        Adicionar saldo
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