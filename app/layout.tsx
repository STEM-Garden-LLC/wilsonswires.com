import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { cn } from "@/lib/utils";
import Header from "@/components/header/Header";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={cn(inter.className, "antialiased")}>
                <Header />
                <div className={cn("container", "mx-auto")}>{children}</div>
            </body>
        </html>
    );
}
