import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="min-h-screen p-8 ">
      <h1 className="text-4xl font-bold bgc">
        ALX Listing App
      </h1>
      <Image
        src="/assets/Image 1-1.png"
        alt="Property"
        width={800}
        height={500}
        className="rounded-lg mt-6"
      />
    </main>
  );
}
