"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Search, Menu, X, User, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dummy authentication check (Replace with real authentication logic)
  const handleUserClick = () => {
    const userRole = localStorage.getItem("userRole"); // Assuming userRole is stored
    if (userRole === "admin") {
      router.push("/dashboard");
    } else if (userRole === "user") {
      router.push("/");
    } else {
      router.push("/login");
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collection", href: "/products" },
    { name: "Attars", href: "/attars" },
    { name: "Perfumes", href: "/perfumes" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-[#9b692e]/30 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 group">
            <div className="flex items-center">
              <Droplets className="h-7 w-7 text-[#f2d377] group-hover:text-white transition-colors duration-300" />
              <div className="ml-2">
                <span className="text-xl font-bold tracking-wider text-white">
                  ATTAR<span className="text-[#f2d377]">LUXE</span>
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative mx-4 font-medium text-sm uppercase tracking-wider transition-colors duration-300 hover:text-[#f2d377] py-2",
                  pathname === link.href ? "text-[#f2d377]" : "text-white"
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#f2d377]"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-[#f2d377] hover:bg-black/20"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-[#f2d377] hover:bg-black/20"
              onClick={handleUserClick}
            >
              <User className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative text-white hover:text-[#f2d377] hover:bg-black/20"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#9b692e] text-[#f2d377] rounded-full text-xs flex items-center justify-center font-medium border border-[#f2d377]/50">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-[#f2d377] hover:bg-black/20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
