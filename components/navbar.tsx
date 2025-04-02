"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Hikari</span>
          </Link>
        </div>
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className={`transition-colors hover:text-foreground/80 ${isActive("/") ? "text-emerald-600 font-semibold" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`transition-colors hover:text-foreground/80 ${isActive("/about") ? "text-emerald-600 font-semibold" : ""}`}
            >
              About
            </Link>
            <Link
              href="/explore"
              className={`transition-colors hover:text-foreground/80 ${isActive("/explore") ? "text-emerald-600 font-semibold" : ""}`}
            >
              Explore
            </Link>
            <Link
              href="/plan"
              className={`transition-colors hover:text-foreground/80 ${isActive("/plan") ? "text-emerald-600 font-semibold" : ""}`}
            >
              Plan Your Visit
            </Link>
            <Link
              href="/contact"
              className={`transition-colors hover:text-foreground/80 ${isActive("/contact") ? "text-emerald-600 font-semibold" : ""}`}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              aria-label="Toggle Theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="border-primary"
            >
              {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-300" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        <div className="md:hidden flex flex-1 justify-end">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 py-6">
                <Link
                  href="/"
                  className={`flex w-full items-center py-2 text-lg font-semibold ${isActive("/") ? "text-emerald-600" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`flex w-full items-center py-2 text-lg font-semibold ${isActive("/about") ? "text-emerald-600" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/explore"
                  className={`flex w-full items-center py-2 text-lg font-semibold ${isActive("/explore") ? "text-emerald-600" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  Explore
                </Link>
                <Link
                  href="/plan"
                  className={`flex w-full items-center py-2 text-lg font-semibold ${isActive("/plan") ? "text-emerald-600" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  Plan Your Visit
                </Link>
                <Link
                  href="/contact"
                  className={`flex w-full items-center py-2 text-lg font-semibold ${isActive("/contact") ? "text-emerald-600" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Toggle Theme"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="border-primary"
                  >
                    {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-300" /> : <Moon className="h-5 w-5" />}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

