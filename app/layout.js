import Header from "@/components/ui/Header";
import Head from "next/head";
import "./globals.css";
import PageTranslation from "@/components/ui/pageTranslation"; // حواستون باشه حرف بزرگ باشه
import StairTranstion from "@/components/ui/StairTranstion";
import { FaArrowUp } from "react-icons/fa";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";

export const metadata = {
  title: "سعید رضایی | طراح و برنامه‌نویس سایت حرفه‌ای",
  description:
    "سعید رضایی - طراح و برنامه‌نویس سایت حرفه‌ای با تجربه در طراحی وب، توسعه اپلیکیشن و سئو. ارائه خدمات طراحی سایت اختصاصی، وردپرس و فروشگاهی",
  keywords:
    "سعید رضایی, طراحی سایت, برنامه‌نویس, طراح وب, توسعه دهنده سایت, سئو, طراحی سایت اختصاصی, وردپرس, فروشگاه اینترنتی",
  authors: [{ name: "سعید رضایی" }],
  openGraph: {
    title: "سعید رضایی | طراح و برنامه‌نویس سایت",
    description:
      "طراحی سایت حرفه‌ای توسط سعید رضایی - متخصص در طراحی وب و توسعه اپلیکیشن",
    type: "website",
    locale: "fa_IR",
    siteName: "سعید رضایی",
  },
  twitter: {
    card: "summary_large_image",
    title: "سعید رضایی | طراح و برنامه‌نویس سایت",
    description: "طراحی سایت حرفه‌ای توسط سعید رضایی",
  },
  robots: "index, follow",
  icons: {
    icon: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/36190/coffee-logo-clipart-md.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        {/* Structured Data برای بهبود سئو */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "سعید رضایی",
              jobTitle: "طراح و برنامه‌نویس سایت",
              description:
                "طراح و برنامه‌نویس سایت حرفه‌ای با تجربه در طراحی وب و توسعه اپلیکیشن",
              url: "https://saeidrezaei.netlify.app/", // آدرس واقعی سایت خود را قرار دهید
              sameAs: [
                "https://instagram.com/yourusername",
                "https://linkedin.com/in/yourusername",
                "https://github.com/yourusername",
              ],
            }),
          }}
        />

        {/* Schema.org برای کسب و کار */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "سعید رضایی - طراحی سایت",
              description: "ارائه خدمات طراحی سایت حرفه‌ای و برنامه‌نویسی",
              serviceType: "طراحی وب سایت",
              provider: {
                "@type": "Person",
                name: "سعید رضایی",
              },
              areaServed: "ایران",
              availableLanguage: "فارسی",
            }),
          }}
        />
      </head>

      <body>
        <Header />
        {/* <StairTranstion /> */}
        <PageTranslation>
          <div className="hidden lg:flex">
            <BackToTop />
          </div>
          {children}
          <Footer />
        </PageTranslation>

        {/* Google Analytics (اختیاری) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </body>
    </html>
  );
}
