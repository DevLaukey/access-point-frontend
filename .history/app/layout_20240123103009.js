import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import NavbarComponent from "../components/navbar-component";
import { store } from "./app/store";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Access point management system",
  description: "Handle access points and their users",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Provider store={store}>
            <NavbarComponent />
            {children}
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
