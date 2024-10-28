import { cn } from "@/lib/utils";
import { NavLinks } from "./NavLinks";

export default function DesktopMenu() {
    return (
        <ul
            className={cn(
                "hidden",
                "sm:flex",
                "gap-8",
                "items-center",
                "mx-auto",
                "pl-10",
                "container",
                "text-logo-yellow-light"
            )}
        >
            <NavLinks classes={["text-3xl"]} />
        </ul>
    );
}
