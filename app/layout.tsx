import AuthProvider from "./AuthProvider";
import Footer from "./Footer";
import NavMenu from "./NavMenu";
import "./globals.css";

export const metadata = {
  title: "Space Cases",
  description: "The premier case unboxing simulator.",
};

import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html
        className={`${raleway.variable} h-full w-full scroll-smooth`}
        lang="en"
      >
        <body className="h-full w-full">
          <NavMenu />
          {children}
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
