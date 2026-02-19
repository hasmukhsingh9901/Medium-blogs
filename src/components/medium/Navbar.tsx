import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white border-black/10 py-2' : 'bg-[#FFC017] border-black/10 py-4'
            }`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <a href="/" className="text-3xl font-bold tracking-tighter">Medium</a>
                </div>

                <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <a href="#" className="hover:text-black/70">Our story</a>
                    <a href="#" className="hover:text-black/70">Membership</a>
                    <a href="#" className="hover:text-black/70">Write</a>
                    <a href="#" className="hover:text-black/70">Sign In</a>
                    <Button variant="default" className="bg-black text-white rounded-full px-5 hover:bg-black/80">
                        Get started
                    </Button>
                </div>
            </div>
        </nav>
    );
}
