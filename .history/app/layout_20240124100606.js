import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import NavbarComponent from "../components/navbar-component";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Access point management system",
  description: "Handle access points and their users",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
            <NavbarComponent />
            {children}
          {/* <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          </ThemeProvider> */}
        </body>
      </html>
    </StoreProvider>
  );
}
