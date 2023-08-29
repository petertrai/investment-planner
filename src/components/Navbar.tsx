'use client';
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import { ModeToggle } from './ThemeToggle';
  

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='m-10 flex flex-row'>
    <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent className='flex flex-col'>
        <NavigationMenuLink>Link</NavigationMenuLink>
        <NavigationMenuLink>Link</NavigationMenuLink>
        <NavigationMenuLink>Link</NavigationMenuLink>

      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
<ModeToggle />
</div>
  )
}

export default Navbar