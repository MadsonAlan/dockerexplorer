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
import { cn } from "@/lib/utils"
import { commandsData } from "@/lib/commandsv2"
import { Comando, Situacao, Subsituacao } from "@/types/commandsv2type"

export function Combobox({ comandoselecionado }: { comandoselecionado: (comando: Comando[]) => void }) {
  const [ open, setOpen ] = useState(false)
  const [ open2, setOpen2 ] = useState(false)
  const [ situacaoValor, setSituacaoValor ] = useState("")
  const [ subSituacaoValor, setSubSituacaoValor ] = useState("")

  const [ subsituacoesSelecionadas, setSubsituacoesSelecionadas ] = useState<Subsituacao[]>()


  const situacaoSelecionada = (situacao: Situacao) => {
    setSubsituacoesSelecionadas(situacao.subsituacoes)
  }

  return (
    <div className="flex flex-col gap-4 w-full mt-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {situacaoValor
              ? situacaoValor
              : "Digite o comando ou parte dele..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Digite o que deseja fazer..." />
            <CommandEmpty defaultChecked>Nenhuma seleção</CommandEmpty>
            {
              commandsData.situacoes.map((situacao: Situacao, index) =>
              (
                <CommandItem
                  key={index}
                  onSelect={() => {
                    situacaoSelecionada(situacao);
                    setSituacaoValor(situacao.situacao.trim() === situacaoValor ? "" : situacao.situacao.trim())
                    setSubSituacaoValor("")
                    comandoselecionado(situacao.comandos)
                    setOpen(false)
                  }}
                  className="data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      situacaoValor === situacao.situacao.trim() ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {situacao.situacao}
                </CommandItem>
              )
              )
            }
          </Command>
        </PopoverContent>
      </Popover>

      {
        !subsituacoesSelecionadas ? <></> : <Popover open={open2} onOpenChange={setOpen2}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open2}
              className="w-full justify-between"
            >
              {subSituacaoValor
                ? subSituacaoValor
                : "Informar especificação (opcional)"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="O que especificamente deseja?" />
              <CommandEmpty defaultChecked>Nenhuma seleção</CommandEmpty>
              {
                subsituacoesSelecionadas.map((situacao: Situacao, index) =>
                (
                  <CommandItem
                    key={index}
                    onSelect={() => {
                      setSubSituacaoValor(situacao.situacao.trim() === situacaoValor ? "" : situacao.situacao.trim())
                      setOpen(false)
                      comandoselecionado(situacao.comandos)
                    }}
                    className="data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        situacaoValor === situacao.situacao.trim() ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {situacao.situacao}
                  </CommandItem>
                )
                )
              }
            </Command>
          </PopoverContent>
        </Popover>
      }
    </div>
  )
}
