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
            className={cn(
                open ? "block" : "invisible",
                open ? "opacity-100" : "opacity-0",
                open ? "left-20" : "left-full",
                "absolute",
                "-top-50",
                "w-full",
                "grid",
                "gap-4",
                "bg-slate-300",
                "py-6",
                "px-4",
                "transition-[left]"
            )}
        >
            <NavLinks classes={["text-red-800"]} />
        </ul>
    );
}
