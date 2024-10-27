import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

export function Nav() {
    return (
        <nav className={cn("relative")}>
            <MobileMenu />
            <DesktopMenu />
        </nav>
    );
}
