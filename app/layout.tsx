import AuthProvider from "./AuthProvider";
import Footer from "./Footer";
import NavMenu from "./NavMenu";
import "./globals.css";

export const metadata = {
  title: "Space Cases",
  description: "The premier case unboxing simulator.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html className="h-full w-full" lang="en">
        <body className="h-full w-full">
          <NavMenu />
          {children}
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
