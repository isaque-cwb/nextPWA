import { CifraComponente } from "@/components/cifra-componente"
import { Escala } from "@/components/escala "
import { Header } from "@/components/header"
import { Informacoes } from "@/components/informacoes"
import Menu from "@/components/menu-home"
import { MusicasSelecionadas } from "@/components/musicas-selecionadas"


export default function PageHome() {
    return (
        <div>
            <div className=" bg-slate-100 h-screen">
                <Header />
                <Menu />
                <div className="m-1" >
                    <CifraComponente />
                </div>
                <div className="m-1 mb-5">
                    <MusicasSelecionadas />
                </div>
                <div className="m-1 mb-5">
                    <Escala />
                </div>
                <div className="m-1 mb-5">
                    <Informacoes />
                </div>
                <div className="h-1 ">

                </div>
            </div>

        </div>
    )
}


