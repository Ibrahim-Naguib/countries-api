import Navbar from "@/components/Navbar";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { styles } from "@/styles";

export const metadata = {
  title: "World Countries",
  description: "World countries and some details",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`bg-lightModeBg dark:bg-darkModeBg ${styles.nunito}`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
