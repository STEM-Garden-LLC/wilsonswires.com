import { cn } from "@/lib/utils";

import Link from "next/link";
import { UrlObject } from "url";

type NavLinkHref<Route> =
    | UrlObject
    | __next_route_internal_types__.RouteImpl<Route>;
export function NavLink<Route>({
    link,
    children,
}: {
    link: NavLinkHref<Route>;
    children?: React.ReactNode;
}) {
    function getFallback(link: NavLinkHref<Route>): string {
        if (typeof link === "string") {
            return link.slice(1);
        }

        if (link.href) {
            return link.href.slice(1);
        }

        throw new Error("No Path Name Detected");
    }
    return (
        <li>
            <Link
                className={cn(
                    "capitalize",
                    "text-2xl",
                    "relative",
                    "w-fit",
                    "hover-underline",
                    "transition-colors"
                )}
                prefetch
                href={link}
            >
                {children ?? getFallback(link)}
            </Link>
        </li>
    );
}
