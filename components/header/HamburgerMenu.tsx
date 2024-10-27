import { cn } from "@/lib/utils";
import styles from "@/components/header/HamburgerMenu.module.css";

export function HamburgerMenu({
    onOpen,
    open,
}: {
    onOpen: () => void;
    open: boolean;
}) {
    return (
        <button
            onClick={onOpen}
            aria-expanded={open}
            className={cn(
                "grid",
                "sm:hidden",
                "gap-2",
                "m-auto",
                styles.hamburgerMenu
            )}
        >
            <Patty />
            <Patty />
            <Patty />
        </button>
    );
}

const Patty = () => {
    return <div className="w-6 h-[3px] bg-logo-yellow-light"></div>;
};
