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

const notifications = [
    {
        ordem: '01',
        title: "Graça",
        description: "Israel Salazar",
    },
    {
        ordem: '02',
        title: "Pra Sempre",
        description: "Fernandinho",
    },
    {
        ordem: '03',
        title: "Minhas Guerras",
        description: "Brasa Church",
    },
]

type CardProps = React.ComponentProps<typeof Card>

export function MusicasSelecionadas({ className, ...props }: CardProps) {
    return (
        <Card className={cn("w-auto", className)} {...props}>
            <CardHeader>
                <CardTitle>Músicas para próximo Culto</CardTitle>
                <CardDescription>Foi selecionado 3 músicas</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
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
                <div>
                    {notifications.map((notification, index) => (
                        <div
                            key={index}
                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    {notification.ordem} - {notification.title}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {notification.description}
                                </p>
                            </div>
                        </div>
                    ))}
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
