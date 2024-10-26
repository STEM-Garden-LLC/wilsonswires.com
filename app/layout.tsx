import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { cn } from "@/lib/utils";
import { Nav } from "@/components/nav/Nav";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={cn(inter.className, "antialiased", "px-20")}>
                <header className={cn("my-10")}>
                    <Nav />
                </header>
                {children}
            </body>
        </html>
    );
}
