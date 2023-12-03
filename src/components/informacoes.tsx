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



type CardProps = React.ComponentProps<typeof Card>

export function Informacoes({ className, ...props }: CardProps) {
    return (
        <Card className={cn("w-auto", className)} {...props}>
            <CardHeader>
                <CardTitle>Agenda</CardTitle>
                {/* <CardDescription>Foi selecionado 3 músicas</CardDescription> */}
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
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
                <div className=" px-2 flex flex-col border-2 rounded-md bg-gray-50 w-full justify-center ">
                    <div className="flex justify-center">

                        <p className="text-md text-muted-foreground">
                            <span className="font-bold">Próximo Ensaio</span> Domingo:
                        </p>
                    </div>
                    <div className="flex justify-center">

                        <p className="text-md text-muted-foreground">
                            02/12/2023 as 15:00
                        </p>
                    </div>
                </div>
                <div className=" px-2 flex flex-col border-2 rounded-md bg-gray-50 w-full justify-center ">
                    <div className="flex justify-center">

                        <p className="text-md text-muted-foreground">
                            <span className="font-bold">Próximo Culto</span> Domingo:
                        </p>
                    </div>
                    <div className="flex justify-center">

                        <p className="text-md text-muted-foreground">
                            02/12/2023 as 18:00
                        </p>
                    </div>

                </div>

            </CardContent>

        </Card>
    )
}
