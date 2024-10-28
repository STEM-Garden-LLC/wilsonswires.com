import { cn } from "@/lib/utils";
import styles from "@/components/header/HamburgerMenu.module.css";

export function HamburgerMenu({
    onToggleOpen,
    open,
}: {
    onToggleOpen: () => void;
    open: boolean;
}) {
    return (
        <button
            className={cn(
                "focus-within:border-slate-100",
                "rounded-md",
                "h-fit",
                "my-auto"
            )}
            onClick={onToggleOpen}
            aria-expanded={open}
        >
            <div
                data-open={open}
                className={cn(
                    "grid",
                    "sm:hidden",
                    "gap-2",
                    styles.hamburgerMenu
                )}
            >
                <Patty />
                <Patty />
                <Patty />
            </div>
        </button>
    );
}

const Patty: React.FC = () => {
    return <div className="w-6 h-[3px] bg-logo-yellow-light" />;
};
