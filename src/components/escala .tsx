import { BellIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Separator } from "./ui/separator"

const base = [
    {

        nome: "Isaque Lourenço",
        instrumento: "Piano",
    },
    {

        nome: "Celso",
        instrumento: "Bateria",
    },
    {

        nome: "Marcos",
        instrumento: "Baixo",
    },
    {

        nome: "Wellington",
        instrumento: "Guitarra",
    },
    {

        nome: "Alex",
        instrumento: "Guitarra",
    },
]
const vozes = [
    {

        nome: "Isaque Lourenço",
        instrumento: "Voz",
    },
    {

        nome: "Carol",
        instrumento: "Voz",
    },
    {

        nome: "Tânya",
        instrumento: "Voz",
    },
]

type CardProps = React.ComponentProps<typeof Card>

export function Escala({ className, ...props }: CardProps) {
    return (
        <Card className={cn("w-auto", className)} {...props}>
            <CardHeader>
                <CardTitle>Escala para próximo Culto</CardTitle>
                {/* <CardDescription>Foi selecionado 3 músicas</CardDescription> */}
            </CardHeader>
            <CardContent className=" grid gap-2 grid-cols-2">
                {/* <div className=" flex items-center space-x-4 rounded-md border p-4">
                    <BellIcon />
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                            Push Notifications
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Send notifications to device.
                        </p>
                    </div>
                    <Switch />
                </div> */}
                <div
                    className="col-span-1 border px-2 rounded-md"
                >
                    <div className="flex justify-center">

                        <h1 className="mt-2 font-bold">Base</h1>
                    </div>
                    <div className="flex justify-center">
                        <Separator className="w-[80%] my-2 mb-[0.8rem]" />
                    </div>
                    <div className="">
                        {base.map((item, index) => (
                            <div
                                key={index}
                                className="mb-2 grid grid-cols-[1rem_1fr]  items-start pb-2 last:mb-2 last:pb-0"
                            >
                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-green-500" />
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        {item.nome}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {item.instrumento}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Lista de Escala de vozes */}
                <div
                    className="col-span-1 border px-2 rounded-md"
                >
                    <div className="flex justify-center">

                        <h1 className="mt-2 font-bold">Vozes</h1>
                    </div>
                    <div className="flex justify-center ">
                        <Separator className="w-[80%] my-2 mb-[0.8rem]" />
                    </div>
                    <div className="">
                        {vozes.map((item, index) => (
                            <div
                                key={index}
                                className="mb-2 grid grid-cols-[1rem_1fr]  items-start pb-2 last:mb-0 last:pb-0"
                            >
                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-green-500" />
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        {item.nome}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {item.instrumento}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </CardContent>
            <CardFooter>

                {/* <Button className="w-full">
                    <CheckIcon className="mr-2 h-4 w-4" /> Mark all as read
                </Button> */}
            </CardFooter>
        </Card>
    )
}
