import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ganesh Patra's Portfolio",
  description:
    "Highly skilled Frontend Developer with 6 years of experience, currently working as a Senior Fullstack Developer. Proficient in modern frontend technologies, including Vue.js, React.js, TypeScript, and more. Proven track record in developing and maintaining high-quality, scalable web applications. Seeking new opportunities in a dynamic environment to leverage my technical expertise and contribute to innovative projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="https://lh3.googleusercontent.com/a/ACg8ocIq1hO_OVJoRLa7brAGerT4ekkDnCzeQr7S_4wXSUKjVu4BIA0=s576-c-no"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
