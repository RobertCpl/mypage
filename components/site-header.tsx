import Link from "next/link";

import { DesktopNav } from "@/components/desktop-nav";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-4 py-3">
        <Link href="/#home" className="flex items-center gap-2">
          {/* Tutaj można podmienić na obrazek/logo projektu */}
          {/* <span className="text-base font-semibold">Moje Logo</span> */}
        </Link>

        <div className="hidden md:block">
          <DesktopNav />
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}


