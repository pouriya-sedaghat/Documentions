import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

import App from "@/layout/App";

import { StoreProvider } from "@/redux/StoreProvider";

export const metadata = {
  title: "Shopping Cart",
  description: "Develop Shopping Cart With Next.js v-13.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-light text-dark`}>
        <StoreProvider>
          <App>{children}</App>
        </StoreProvider>
      </body>
    </html>
  );
}
