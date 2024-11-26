'use server'

import { PrismaClient } from '@prisma/client';
import { convertToISO8601 } from '../utils';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();

export async function updateGroup(formData: FormData) {
    const id = String(formData.get('id'))
    const name = String(formData.get('name'))
    const description = String(formData.get('description'))
    await prisma.group.update({
        where: {
            id: id
        },
        data: {
            name: name,
            description: description,
        },
    })
}

export async function updateTemplateMessege(formData: FormData) {
    const id = String(formData.get('id'))
    const name = String(formData.get('name'))
    const description = String(formData.get('description'))
    await prisma.messageTemplate.update({
        where: {
            id: id
        },
        data: {
            title: name,
            content: description,
        }
    })
}

export async function updateClient(formData: FormData) {
    const id = String(formData.get('id'))
    const name = String(formData.get('name'))
    const phoneNumber = String(formData.get('phoneNumber'))
    const email = String(formData.get('email'))
    const gender = String(formData.get('gender'))
    const birthday = convertToISO8601(String(formData.get('date')))
    await prisma.client.update({
        where: {
            id: id
        },
        data: {
            name: name,
            phoneNumber: phoneNumber,
            email: email,
            gender: gender,
            birthday: birthday || null,
        }
    })
}

export async function updateInstitutionBalance(formData: FormData) {
    const institutionId = String(formData.get('institutionId'))
    const balance = Number(formData.get('balance'))
    await prisma.institution.update({
        where: {
            id: institutionId,
        },
        data: {
            balance: {
                increment: balance
            }
        }
    })
    return redirect('/admin/super/institution/list')
}
