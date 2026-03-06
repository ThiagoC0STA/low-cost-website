import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollTriggerConfig } from "@/components/ScrollTriggerConfig";
import { SchemaOrg } from "@/components/SchemaOrg";
export const metadata: Metadata = {
  title: "Site Barato — O Site Mais Barato do Brasil | A partir de R$ 300 à vista",
  description:
    "Para quem não pode pagar R$ 3 mil em agência. Site profissional em até 2 dias. Pagamento único a partir de R$ 300. 7 dias de garantia.",
  keywords: ["site barato", "criar site", "site profissional", "site para MEI", "site responsivo"],
  openGraph: {
    title: "Site Barato — O Site Mais Barato do Brasil",
    description: "Site profissional em 2 dias. A partir de R$ 300 à vista. Pagamento único, 7 dias de garantia.",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <SchemaOrg />
        <ScrollTriggerConfig />
        <ScrollProgress />
        <Header />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
