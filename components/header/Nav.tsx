import DesktopMenu from "./DesktopMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

export function Nav() {
    return (
        <nav
            className={cn(
                "relative",
                "flex",
                "justify-between",
                "px-10",
                "w-full"
            )}
        >
            <>
                <MobileMenu />
                <DesktopMenu />
            </>
            <Logo />
        </nav>
    );
}
