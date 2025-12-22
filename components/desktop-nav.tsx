"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { mainNavItems } from "@/components/nav-items";
import { cn } from "@/lib/utils";

export function DesktopNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {mainNavItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent hover:bg-transparent focus:bg-transparent"
              )}
            >
              <Link href={item.href} className="hover:text-red-600!">
                {item.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}


