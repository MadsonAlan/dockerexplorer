"use client"
import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import { Comando, Geral, Secao } from "@/types/commandstype"
import { cn } from "@/lib/utils"

export function Combobox({ comandos_docker, comandoselecionado }: {comandos_docker:Geral, comandoselecionado: (comando:Comando)=> void}) {
  const [ open, setOpen ] = useState(false)
  const [ value, setValue ] = useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="w-full">
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? value
            : "Digite o comando ou parte dele..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Digite o comando ou parte dele..." />
          <CommandList >
            <CommandEmpty>Nenhuma seleção</CommandEmpty>
              {
                comandos_docker?.comandos_docker?.map((secao: Secao) => (
                  <>
                    <CommandGroup heading={secao.secao} key={secao.secao as React.Key}>
                      {
                        secao?.comandos?.map((comando: Comando, index) =>

                        (
                          <CommandItem
                            key={comando?.comando?.trim()}
                            onSelect={() => {
                              comandoselecionado(comando);
                              setValue(comando?.comando?.trim() === value ? "" : comando?.comando?.trim())
                              setOpen(false)
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                value === comando?.comando?.trim() ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {comando.comando}
                          </CommandItem>
                        )
                        )
                      }
                    </CommandGroup>
                    <CommandSeparator />
                  </>
                ))
              }
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
