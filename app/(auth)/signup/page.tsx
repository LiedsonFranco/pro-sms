/* eslint-disable react/jsx-key */
import Form from "next/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { signup } from "@/lib/actions/auth.actions"

export default async function SignInPage() {
  return (
    <div className="flex flex-col gap-2 min-h-screen justify-center">
      <Form
        action={signup} className="flex flex-col gap-2 mx-auto *:max-w-[400px]"
      >
        <div>
          <h1 className="text-4xl font-bold">Cadastro</h1>
        </div>
        <div className=" gap-2">
          <label htmlFor="name">
            Nome
            <Input name="name" id="text" className="w-[400px]" required />
          </label>
        </div>
        <div className=" gap-2">
          <label htmlFor="email">
            Email
            <Input name="email" id="email" className="w-[400px]" required />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password
            <Input name="password" id="password" className="w-[400px]" required />
          </label>
        </div>
        <div>
          <label htmlFor="institution">
            Instituição
            <Input name="institution" id="institution" className="w-[400px]" required />
          </label>
        </div>
        <div className="mt-2">
          <Button type="submit" className="w-full">Sign Up</Button>
        </div>
      </Form>
      <div className="flex items-center justify-center mx-auto">
        <p>OR</p>
      </div>
      <Link href={'/signup'} className="bg-slate-900 mx-auto text-white rounded-md w-[400px] py-2 text-center text-sm">Sign In</Link>
    </div>

  )
}