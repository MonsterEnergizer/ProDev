import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Russell De Barber | Nijverdal",
  description: "Russell De Barber in Nijverdal. Bekijk de salon en plan je afspraak via Russell zijn eigen online agenda.",
  openGraph: {
    title: "Russell De Barber",
    description: "Stijl. Precisie. Vertrouwen. Barber in Nijverdal.",
    type: "website",
    locale: "nl_NL",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#090806",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
