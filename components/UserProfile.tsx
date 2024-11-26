import React from 'react'
import { auth } from "@/auth"
import Image from 'next/image'
import Link from 'next/link'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut } from '@/auth'

const UserProfile = async () => {
    const session = await auth()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Image src={session?.user?.image || '/profile.png'} alt='user profile Image' width={40} height={40} className='rounded-lg' />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel >
                    Options
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem >
                    <form
                        action={async () => {
                            "use server"
                            await signOut({ redirectTo: '/' })
                        }}
                    >
                        <button type="submit" className='font-medium bg-transparent bg-none'>Sign Out</button>
                    </form>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={'/admin'}>
                        Painel de controlo
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserProfile
