import Header from "@/components/ui/Header";
import Head from 'next/head';
import "./globals.css";
import pageTranslation from "@/components/ui/pageTranslation";
import StairTranstion from "@/components/ui/StairTranstion";
import { FaArrowUp } from "react-icons/fa";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";

export const metadata = {
  title: "سعید رضایی | طراح سایت",
  description: "سعید رضایی طراح سایت برنامه نویس ",
  icons: {
    icon: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/36190/coffee-logo-clipart-md.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body >
        <Header />
        {/* <StairTranstion /> */}
        <pageTranslation>
         <div className="hidden lg:flex">
         <BackToTop />
         </div>
          {children}
        <Footer />
        </pageTranslation>
      </body>
    </html>
  );
}
