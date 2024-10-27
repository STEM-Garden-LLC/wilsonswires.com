import { cn } from "@/lib/utils";
import { NavLink } from "./NavLink";

export default function DesktopMenu() {
    return (
        <ul
            className={cn(
                "hidden",
                "sm:flex",
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
    );
}
