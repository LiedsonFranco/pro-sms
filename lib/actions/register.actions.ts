'use server'

import { auth } from '@/auth';
import { PrismaClient } from '@prisma/client';
import { convertToISO8601, saltAndHashPassword } from '../utils';
import { redirect } from 'next/navigation';

export async function registeClient(formData: FormData) {
    const session = await auth()
    const sessionEmail = session?.user?.email
    if (!sessionEmail) {
        throw new Error('Invalid Email')
    }

    const prisma = new PrismaClient();
    const name = String(formData.get('name'))
    const phoneNumber = String(formData.get('phoneNumber'))
    const email = String(formData.get('email'))
    const gender = String(formData.get('gender'))
    const birthday = convertToISO8601(String(formData.get('date')))
    const user = await prisma.user.findFirst({
        where: {
            email: sessionEmail
        }
    })

    if (!user) {
        throw new Error('User not found');
    }
    try {
        await prisma.client.create({
            data: {
                name: name,
                phoneNumber: phoneNumber,
                email: email,
                gender: gender,
                birthday: birthday || null,
                institution: {
                    connect: {
                        id: user.institutionId
                    }
                },
            }
        })
        await prisma.$disconnect();
        return redirect('/admin/clients?messageType=sucess&message=Cadastrado com sucesso')
    } catch {
        return redirect('/admin/clients?messageType=warning&message=Cliente ja cadastrado')
    }
}

export async function registeUser(formData: FormData) {
    const session = await auth()
    const sessionEmail = session?.user?.email
    if (!sessionEmail) {
        throw new Error('Invalid Email')
    }

    const prisma = new PrismaClient();
    const name = String(formData.get('name'))
    const email = String(formData.get('email'))

    const user = await prisma.user.findFirst({
        where: {
            email: sessionEmail
        }
    })
    const registeUser = await prisma.user.findFirst({
        where: {
            email: email,
            institutionId: user?.institutionId
        }
    })

    if (!user) {
        throw new Error('User not found');
    }


    if (registeUser) {
        return redirect('/admin/users?messageType=warning&message=Usuario já cadastrado')

    }
    await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: await saltAndHashPassword(email),
            institution: {
                connect: {
                    id: user.institutionId
                }
            },
        }
    })
    await prisma.$disconnect();
    return redirect('/admin/users?messageType=sucess&message=Cadastrado com sucesso')

}

export async function registeGroup(formData: FormData) {
    const session = await auth()
    const sessionEmail = session?.user?.email
    if (!sessionEmail) {
        throw new Error('Invalid Email')
    }
    const prisma = new PrismaClient();
    const name = String(formData.get('name'))
    const description = String(formData.get('description'))

    const user = await prisma.user.findFirst({
        where: {
            email: sessionEmail
        }
    })
    if (!user) {
        throw new Error('User not found');
    }
    await prisma.group.create({
        data: {
            name: name,
            description: description,
            institutionId: user.institutionId,
            userId: user.id,
        }
    })
    await prisma.$disconnect();
    return redirect('/admin/groups/new?messageType=sucess&message=Cadastrado com sucesso')
}

export async function registeTemplateMessege(formData: FormData) {
    const session = await auth()
    const sessionEmail = session?.user?.email
    if (!sessionEmail) {
        throw new Error('Invalid Email')
    }
    const prisma = new PrismaClient();
    const name = String(formData.get('name'))
    const description = String(formData.get('description'))

    const user = await prisma.user.findFirst({
        where: {
            email: sessionEmail
        }
    })
    if (!user) {
        throw new Error('User not found');
    }
    await prisma.messageTemplate.create({
        data: {
            title: name,
            content: description,
            institutionId: user.institutionId,
            userId: user.id
        }
    })
    await prisma.$disconnect();
    return redirect('/admin/messages/templates?messageType=sucess&message=Cadastrado com sucesso')
}

export async function addClintToGroup(formData: FormData) {
    const session = await auth()
    const sessionEmail = session?.user?.email
    const clients = String(formData.get('contacts')).split(',');
    const groupId = String(formData.get('group'))
    if (!sessionEmail) {
        throw new Error('Invalid Email')
    }
    const prisma = new PrismaClient();
    const user = await prisma.user.findFirst({
        where: {
            email: sessionEmail
        }
    })
    if (!user) {
        throw new Error('User not found');
    }
    for (const clientId of clients) {
        await prisma.client.update({
            where: {
                id: clientId
            },
            data: {
                groups: {
                    connect: {
                        id: groupId
                    }
                }
            }
        })

    }

    await prisma.$disconnect();
    return redirect('/admin/clients?messageType=sucess&message=Adicionado(s) com sucesso')
}