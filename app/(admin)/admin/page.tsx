import React from 'react'
import { PrismaClient } from '@prisma/client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { auth } from '@/auth'
const page = async () => {
  const prisma = new PrismaClient()
  const session = await auth()

  if (!session) {
    throw new Error('Invalid Session')
  }

  const user = await prisma.user.findFirst({
    where: {
      email: session?.user?.email || ''
    }
  })
  if (!user) {
    throw new Error('User not found');

  }
  const messages = await prisma.message.findMany({
    where: {
      institutionId: user.institutionId
    }
  })
  return (
    <div>
      <Table>
        <TableCaption>Lista da mensagens mais recentes</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Data</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Mensagem</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {messages.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell>{item.createdAt.toDateString()}</TableCell>
                <TableCell className="font-medium" >{item.status}</TableCell>
                <TableCell className="font-" key={item.id}>{item.content}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>

    </div>
  )
}

export default page