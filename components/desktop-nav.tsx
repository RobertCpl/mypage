"use client";

import * as React from "react";
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

function handleScroll(
  event: React.MouseEvent<HTMLAnchorElement>,
  id: string,
) {
  event.preventDefault();

  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function DesktopNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {mainNavItems.map((item) => (
          <NavigationMenuItem key={item.id}>
            <NavigationMenuLink
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent hover:bg-transparent focus:bg-transparent"
              )}
            >
              <Link
                href={`#${item.id}`}
                onClick={(event) => handleScroll(event, item.id)}
              >
                {item.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}


