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
    "Site profissional sem enrolação. Para pequenos negócios e MEIs. Entrega em até 2 dias após coleta das informações. Pagamento único a partir de R$ 300. 7 dias de garantia.",
  keywords: ["site barato", "criar site", "site profissional", "site para MEI", "site responsivo"],
  openGraph: {
    title: "Site Barato — O Site Mais Barato do Brasil",
    description: "Site profissional. Pagamento único a partir de R$ 300. Para pequenos negócios e MEIs.",
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
