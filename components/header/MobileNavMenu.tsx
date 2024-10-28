import { cn } from "@/lib/utils";
import { NavLinks } from "./NavLinks";

export default function MobileNavMenu({
    open,
}: {
    open: boolean;
    onToggleOpen: () => void;
}) {
    return (
        <ul
            hidden={!open}
            data-open={open}
            className={cn(
                "z-10",
                "origin-top",
                "absolute",
                "top-full",
                "left-full",
                "data-[open='true']:left-0",
                "grid",
                "w-full",
                "gap-4",
                "bg-slate-300",
                "py-6",
                "px-4",
                "sm:hidden",
                "sm:invisible",
                "transition-[left]"
            )}
        >
            <NavLinks classes={["text-red-800"]} />
        </ul>
    );
}
