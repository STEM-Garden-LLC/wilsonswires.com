import { cn } from "@/lib/utils";
import { Nav } from "./Nav";

export default function Header() {
    return (
        <header
            className={cn(
                "py-10",
                "h-48",
                "flex",
                "items-center",
                "w-full",
                "bg-gradient-to-br",
                "from-logo-red-dark",
                // Makes it much lighter and only a hint of the darker color
                "from-[-15%]",
                "to-logo-red-medium",
                "to-100%"
            )}
        >
            <Nav />
        </header>
    );
}
