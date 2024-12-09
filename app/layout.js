import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";  // Direct import now
import Description from "@/components/description";
import Watermark from "@/components/Watermark";
// import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import Loading from "./loading";
import Script from "next/script";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "NafisSirChhaurahi",
  description: "Nafis Sir Chhaurahi",
  icons: {
    icon: '/faviconn.ico', // This points to the favicon
    shortcut: '/faviconn.ico',
    apple: '/faviconn.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-92VZM05M24"/>

        <Script     id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-92VZM05M24', { page_path: window.location.pathname });
            `,
          }}  />
        <Navbar />  {/* Direct import */}
        <Watermark></Watermark>
        {/* <Skeleton></Skeleton> */}
        <Suspense fallback={<Loading/>}>
        {children}
        </Suspense>
        <Description />
      </body>
    </html>
  );
}






///

// import './globals.css';
// import Watermark from './components/Watermark';
// import { useEffect } from "react";

// export default function RootLayout({ children }) {
//   useEffect(() => {
//     const disableRightClick = (e) => e.preventDefault();
//     document.addEventListener('contextmenu', disableRightClick);

//     return () => {
//       document.removeEventListener('contextmenu', disableRightClick);
//     };
//   }, []);

//   return (
//     <html lang="en">
//       <body>
//         <Watermark />
//         {children}
//       </body>
//     </html>
//   );
// }
