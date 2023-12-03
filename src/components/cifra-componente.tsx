import {
    CalendarIcon,
    EnvelopeClosedIcon,
    FaceIcon,
    GearIcon,
    PersonIcon,
    RocketIcon,
} from "@radix-ui/react-icons"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

export function CifraComponente() {
    return (
        <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="Procurar por uma cifra..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Sugestões de cifras salvas">

                    <CommandItem>
                        <span>Cifra 1</span>
                    </CommandItem>
                    <CommandItem>
                        <span>Cifra 2</span>
                    </CommandItem>
                    <CommandItem>
                        <span>Cifra 3</span>
                    </CommandItem>
                    <CommandItem>
                        <span>Cifra 4</span>
                    </CommandItem>
                </CommandGroup>

                {/* <CommandGroup heading="Suggestions">
                    <CommandItem>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>Calendar</span>
                    </CommandItem>
                    <CommandItem>
                        <FaceIcon className="mr-2 h-4 w-4" />
                        <span>Search Emoji</span>
                    </CommandItem>
                    <CommandItem>
                        <RocketIcon className="mr-2 h-4 w-4" />
                        <span>Launch</span>
                    </CommandItem>
                </CommandGroup> */}
                <CommandSeparator />
                {/* <CommandGroup heading="Settings">
                    <CommandItem>
                        <PersonIcon className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                        <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
                        <span>Mail</span>
                        <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <GearIcon className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                        <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                </CommandGroup> */}
            </CommandList>
        </Command>
    )
}
