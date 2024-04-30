'use client'
import Link from "next/link";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger
} from "../ui/menubar";
import { TogleTheme } from "./theme-togle";


export function MenuNavigation() {
  return (
    <Menubar className="justify-center pt-8 pb-8">
      <MenubarMenu>
        <div className="mr-4">
        <TogleTheme />
        </div>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger><Link href={'/'} replace>Docker Explorer</Link></MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  )
}