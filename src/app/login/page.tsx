"use client"
import MyAlert from "@/components/ui/my-alert"
import { FormEvent, useState } from "react"

export default function PageLogin() {
    const [alertOpen, setAlertOpen] = useState(false)

    function handleAlert() {
        return (setAlertOpen(!alertOpen))
    }

    function handleSigin(e: FormEvent) {
        e.preventDefault()
        return (
            handleAlert()
        )
    }
    return (

        <main className="flex justify-center items-center h-screen ">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-0  lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                    <img
                        className="mx-auto h-24 w-24 "
                        src='/icon-guitar.png'
                        alt="Your Company"
                    />
                </div>

                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder='Digite seu e-mail'
                                    required
                                    className="block w-full px-2 rounded-md border-none py-1.5 text-gray-900 shadow-md ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 placeholder:text-sm  focus:border-none focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6  text-gray-900">
                                    Senha
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Esqueceu sua senha?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    placeholder='Digite sua senha'
                                    required
                                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 placeholder:text-sm focus:ring-1 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>

                            <button
                                type="submit"
                                onClick={handleSigin}
                                className="flex w-full justify-center rounded-md mt-10 bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Entrar
                            </button>

                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Não tem uma conta?{' '}
                        <a
                            onClick={handleSigin}
                            href="#"
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Crie sua conta aqui
                        </a>
                    </p>
                </div>

            </div>
            {alertOpen ?

                <MyAlert title='Atenção' description='Login realizado com sucesso!' state={handleAlert} />
                : null}

        </main>


    )
}