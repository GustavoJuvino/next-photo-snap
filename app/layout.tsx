import Header from "./components/Header";
import { DM_Sans } from "next/font/google"
import './globals.css';
import Footer from "./components/Footer";

export const metadata = {
  title: {
    default: "Photo Snap",
    template: "%s | Photo Snap"
  },
  description: 'Photosnap is a platform forphotographers and visual storytellers',
}

const dm_sans = DM_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dm_sans.className}>
      <body suppressHydrationWarning={true} >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
