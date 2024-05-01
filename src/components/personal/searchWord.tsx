'use client'
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Combobox } from "./combobox"
import { Label } from "../ui/label"
import { Separator } from "../ui/separator"


export function SeachWord() {
  return (
    <div className="flex-1 gap-4 grid grid-flow-row auto-rows-max p-4 items-center justify-center">
        <h1>Selecione o comando que deseja conhecer melhor</h1>
        <Separator/>
      <div>
        <Combobox />
      </div>
      <div className="flex-1 col-span-2">
        <Button type="submit" className="w-full">Buscar</Button>
      </div>
    </div>
  )
}