import { NavLink } from "./NavLink";
import { cn } from "@/lib/utils";

export function Nav() {
    return (
        <nav>
            <ul
                className={cn(
                    "flex",
                    "justify-between",
                    "mx-auto",
                    "container",
                    "text-logo-yellow-light"
                )}
            >
                <NavLink link="/">Home</NavLink>
                <NavLink link="/services" />
                <NavLink link="/contact" />
            </ul>
        </nav>
    );
}
