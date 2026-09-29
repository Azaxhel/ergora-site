import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ergora.com.br"),
  title: "Ergora | Automação administrativa",
  description:
    "Automação para rotinas administrativas, relatórios operacionais e organização de processos.",
  openGraph: {
    title: "Ergora | Automação administrativa",
    description:
      "A Ergora ajuda pequenos negócios e equipes administrativas a reduzir retrabalho e organizar fluxos operacionais.",
    url: "https://www.ergora.com.br",
    siteName: "Ergora",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ergora | Automação administrativa",
    description:
      "Automação para rotinas administrativas, relatórios operacionais e organização de processos.",
  },
  icons: {
    icon: [{ url: "/assets/ergora-carbon-symbol.png", type: "image/png" }],
    shortcut: "/assets/ergora-carbon-symbol.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
