import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/theme-provider"
import 'aos/dist/aos.css';
import "../styles/globals.scss";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import MouseCustomCursor from "@/components/mouse-custom-cursor";
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/footer";
import { montserrat } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Wilson Kinyua | Software Engineer",
  description: "Software Engineer | Lead Developer | Head of Tech | UI/UX Designer | Technical Trainer/Mentor | Frontend Engineer | Backend Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(montserrat.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <MouseCustomCursor />
          <Navbar />
          <main className="container mx-auto">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <Toaster
        />
      </body>
    </html>
  );
}

