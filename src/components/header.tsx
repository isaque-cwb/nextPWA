import React from 'react'
import Image from 'next/image'
import imageLogo from '../../public/image-clave-sol.png'
import perfil from '../../public/avatar.png'




export function Header() {
    return (
        <div className="bg-gray-100 h-20 flex items-center border ">
            <div className='flex justify-between direction-normal items-center  w-full max-h-14 overflow-hidden'>
                <Image className="mx-4 rounded-md " src={imageLogo} width={100} height={20} alt='Imagem de clave do sol musical' />
                <div className='mx-4 flex  items-center gap-1  p-1 border rounded-md border-black ' >
                    <div className=' bg-white rounded-full w-11 h-11 flex items-center justify-center border-2 overflow-hidden'>

                        <Image className="mx-4 rounded-md " src={perfil} width={50} height={20} alt='Imagem de perfil do usuário' />
                    </div>

                    <span className='text-sm'>Olá, Isaque</span>
                </div>

            </div>
        </div>
    )
}