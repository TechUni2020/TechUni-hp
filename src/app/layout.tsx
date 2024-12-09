import type {Metadata} from "next";
import "./globals.css";
import {generateOpenGraphMetadata} from "@/components/OpenGraph";
import {Provider} from "@/components/ui/provider";

export const metadata: Metadata = {
    metadataBase: new URL(`${process.env.BASE_URI}`),
    title: {
        template: "%s | Tech.Uni",
        default: "Tech.Uni",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: {
            url: "/favicon.ico",
            type: "image/x-icon",
        },
        /* TODO Apple icons
        apple: "/apple-touch-icon.png",
        other: [
            {
                rel: "apple-touch-icon-precomposed",
                url: "/apple-touch-icon-precomposed.png",
            }
        ],*/
    },
    twitter: {
        card: "summary_large_image",
        images: "/assets/TechUniBanner.png",
        creator: "@TechUni1026",
        // title: auto generated,
        // description: auto generated,
    },
    openGraph: generateOpenGraphMetadata("article"),
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" suppressHydrationWarning>
            <body>
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    );
}
