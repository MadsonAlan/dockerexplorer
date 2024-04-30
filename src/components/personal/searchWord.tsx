'use client'
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Combobox } from "./combobox"
import { Label } from "../ui/label"


export function SeachWord() {
  return (
    <div className="flex-1 gap-4 grid grid-flow-row auto-rows-max p-4 items-center justify-center">
      <div>
        <Label className="block font-bold text-slate-800 mb-2">Comando</Label>
        <Combobox />
      </div>
      <div className="col-span-2">
        <Label className="block font-bold text-slate-800 mb-2">Descrição</Label>
        <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

      </div>
      <div className="flex-1 col-span-2">
        <Button type="submit" className="w-full">Buscar</Button>
      </div>
    </div>
  )
}