'use client'
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Copy } from "lucide-react"
import { toast } from "../ui/use-toast"
import { Comando } from "@/types/commandsv2type"

interface SearchParams {
  comando?: Comando
}
export function SeachWord({ comando }: SearchParams) {

  const copiarComando = (copiarTexto: string) => {
    navigator.clipboard.writeText(copiarTexto);
    toast({ title: "Copiado com suceso", description: "Use como desejar" })
  }
  return (
    <div className="grid gap-4">
      {/* {comandos?.map((comando: Comando) => ( */}
      <div className="flex-1 w-full">
        <div>
          <div
            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 pt-4"
          >
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {comando?.comando}
              </p>
              <p className="text-sm text-muted-foreground">
                {comando?.descricao}
              </p>
            </div>
          </div>
        </div>
        <Label>Exemplo</Label>

        <div className="flex justify-between border-none items-center space-x-4 rounded-md border p-4 bg-black ">
          <p className="text-sm font-medium leading-none leading-7 text-green-500">
            &gt; {comando?.exemplo}
          </p>
          <Button className="place-self-end" variant="outline" size="icon" onClick={() => {
            if(comando)
              copiarComando(comando.exemplo.toString())
          }}>
            <Copy className="absolute h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Copiar exemplo</span>
          </Button>
        </div>

      </div>
      {/* ))
      } */}
    </div>
  )
}