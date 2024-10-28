"use client";

import { useState } from "react";

import { HamburgerMenu } from "./HamburgerMenu";
import MobileNavMenu from "./MobileNavMenu";

export default function MobileMenu() {
    const [open, setOpen] = useState(true);

    function toggleOpen() {
        setOpen((open) => !open);
    }

    return (
        <>
            <HamburgerMenu onToggleOpen={toggleOpen} open={open} />
            <MobileNavMenu open={open} onToggleOpen={toggleOpen} />
        </>
    );
}
