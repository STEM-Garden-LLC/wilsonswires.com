import { NavLink } from "./NavLink";

import { cn } from "@/lib/utils";

export const Nav = () => (
    <nav>
        <ul className={cn("flex", "gap-8")}>
            <NavLink link="/">Home</NavLink>
            <NavLink link="/services" />
            <NavLink link="/contact" />
        </ul>
    </nav>
);
