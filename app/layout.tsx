import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/app/redux/provider";
import 'bootstrap/dist/css/bootstrap.min.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Redux",
  description: "redux tool kit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
