import "./globals.css";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageContext";

const display = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Dias Pradana — Web Developer & IT Support",
  description:
    "Portofolio Dias Pradana, lulusan Teknik Informatika yang berpengalaman membangun aplikasi web dengan Laravel & React, mengelola basis data, dan dukungan IT operasional.",
  keywords: [
    "Dias Pradana",
    "Web Developer",
    "Backend Developer",
    "Laravel",
    "React JS",
    "Portofolio",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          // Terapkan tema tersimpan sebelum React hydrate, supaya tidak flicker.
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-body bg-paper text-ink antialiased dark:bg-ink dark:text-paper">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
