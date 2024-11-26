'use server'
import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';
import { saltAndHashPassword } from '@/lib/utils'

export async function signup(formData: FormData) {
    const prisma = new PrismaClient();
    const name = String(formData.get('name'));
    const email = String(formData.get('email'));
    const password = String(formData.get('password'));
    const institution = String(formData.get('institution'));
    const hashedPassword = await saltAndHashPassword(password)
    const user = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: hashedPassword,
            role: 'ADMIN',
            institution: {
                create: {
                    name: institution,
                    balance: 0,
                }
            }
        }
    })
    console.log(user)
    await prisma.$disconnect();
    return redirect('/api/auth/signin')
}