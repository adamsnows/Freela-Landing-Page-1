import type { Metadata } from "next";
import "../styles/globals.css";
import { Rubik, Lato } from "next/font/google";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Wicomm Test LP",
  description:
    "Página criada no intuito de mostrar minhas habilidades front-end.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubik.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}
