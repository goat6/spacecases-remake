import AuthProvider from "./AuthProvider";
import Footer from "./Footer";
import NavMenu from "./NavMenu";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <NavMenu />
          {children}
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
