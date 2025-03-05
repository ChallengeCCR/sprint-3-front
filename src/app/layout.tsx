import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import BaseLayout from "@/components/LayoutBase/LayoutComp";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Autorail Monitor",
  description: "Acompanhe status dos serviços das linhas 8 e 9 fornecidas pelo Grupo CCR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={roboto.className}>
      <head>
        {/* Adicionando Font Awesome via CDN */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
