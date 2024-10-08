import type { Metadata } from "next";
import {Outfit} from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,

} from '@clerk/nextjs'
import Navbar from "@/components/Navbar";
const outFit = Outfit({subsets:['latin']})


export const metadata: Metadata = {
  title: "Xotaxi",
  description: "Best taxi booking app online",
  icons:{icon:"/logo.ico"}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body
        className={`${outFit.className} antialiased`}
      >
        <main className="min-h-screen flex flex-col  ">
        <Navbar/>
        <section className=" bg-slate-50 flex-grow ">

        {children}
        </section>
        </main>
   
      </body>
    </html>
    </ClerkProvider>
  );
}
