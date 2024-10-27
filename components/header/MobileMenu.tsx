"use client";

import { useState } from "react";

import { HamburgerMenu } from "./HamburgerMenu";

export default function MobileMenu() {
    const [open, setOpen] = useState(false);

    function openMenu() {
        console.log("open menu");
        setOpen((open) => !open);
    }

    return <HamburgerMenu onOpen={openMenu} open={open} />;
}
