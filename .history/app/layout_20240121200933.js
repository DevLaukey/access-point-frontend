"use client"
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import NavbarComponent from "../components/navbar-component";
const {usePathname} = require("next/navigation");

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Access point management system",
  description: "Handle access points and their users",
};

export default function RootLayout({ children }) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavbarComponent />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
