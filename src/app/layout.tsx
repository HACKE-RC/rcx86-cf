import type { Metadata } from "next"
import { Host_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { home_page_data } from "@/data/home"
import ReactQueryProvider from "@/components/providers/tanstack-query-provider"

const font = Host_Grotesk({
  subsets: ["latin", "latin-ext"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://rcx86.me"), // change later

  title: {
    default: "rcx86 — Low-Level Computer Science & Systems Engineering",
    template: "%s · rcx86",
  },

  description: home_page_data.bio,

  keywords: [
    "low level programming",
    "operating systems",
    "reverse engineering",
    "systems engineering",
    "compilers",
    "assembly",
    "x86",
    "linux kernel",
    "binary exploitation",
    "embedded systems",
    "computer security",
    "virtual memory",
    "computer architecture",
  ],

  authors: [{ name: home_page_data.name, url: "https://rcx86.me" }],

  creator: home_page_data.name,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    siteName: "rcx86",
    title: "rcx86 — Low-Level Computer Science & Systems Engineering",
    description: home_page_data.bio,
    url: "https://rcx86.me",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "rcx86 — Low-Level Computer Science Research & Engineering",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "rcx86 — Low-Level Computer Science & Systems Engineering",
    description: home_page_data.bio,
    creator: "@rcx86",
    images: ["/og.png"],
  },

  alternates: {
    canonical: "https://rcx86.me",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f4f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],

  category: "technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} bg-zinc-100 dark:bg-neutral-900 antialiased`}
      >
      <ReactQueryProvider>
          <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </ReactQueryProvider>
      </body>
    </html>
  )
}
