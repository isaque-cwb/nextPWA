import * as React from "react"
import { X } from 'lucide-react'

interface AlertProps {
    title: string;
    description: string;
    state: () => void;
}

export default function MyAlert({ title, description, state }: AlertProps) {

    return (
        <div className="h-screen backdrop-blur-sm  w-full flex fixed top-0 items-center justify-center  ease-in-out ">

            <div className="bg-teal-100  border-t-4 border-teal-500 rounded-b text-teal-900 px-1 py-3 shadow-md" role="error">
                <div className="flex ">
                    <div className="py-3"><svg className="fill-current h-6 w-6 text-teal-500 ml-1 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                    <div className="">
                        <p className="font-bold">{title}</p>
                        <p className="text-sm">{description}</p>
                    </div>
                    <div className=" ">
                        <X className=" rounded-md hover:bg-[#BAF3E6] py-1  " onClick={state} />
                    </div>
                </div>
            </div>
        </div >

    )
}