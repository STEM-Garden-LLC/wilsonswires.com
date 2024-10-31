"use client";

import { useEffect, useRef, useState } from "react";

import HamburgerMenu from "./HamburgerMenu";
import MobileNavMenu from "./MobileNavMenu";
import { cn } from "@/lib/utils";

export default function MobileMenu() {
    const [open, setOpen] = useState(false);

    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        function handleEscape(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    return (
        <div ref={ref} className={cn("grid")}>
            <HamburgerMenu
                onToggleOpen={() => setOpen((open) => !open)}
                open={open}
            />
            <MobileNavMenu open={open} onClick={() => setOpen(false)} />
        </div>
    );
}
