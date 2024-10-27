import { NavLink } from "./NavLink";

import { cn } from "@/lib/utils";

export const Nav = () => (
    <nav>
        <ul className={cn("flex", "justify-between", "w-[80vw]", "mx-auto")}>
            <NavLink link="/">Home</NavLink>
            <NavLink link="/services" />
            <NavLink link="/contact" />
        </ul>
    </nav>
);
