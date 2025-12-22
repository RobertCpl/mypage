"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNavItems } from "@/components/nav-items";

function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function sectionIdFromHref(href: string) {
  // expects "/#section"
  const idx = href.indexOf("/#");
  if (idx === -1) return null;
  const id = href.slice(idx + 2);
  return id.length > 0 ? id : null;
}

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const sectionId = sectionIdFromHref(href);
    if (isHome && sectionId) {
      event.preventDefault();
      scrollToSection(sectionId);
      setOpen(false);
      return;
    }

    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Otwórz menu nawigacji"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 mb-6 flex flex-col items-center gap-4 text-center">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(event) => handleLinkClick(event, item.href)}
              className="text-lg font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}


