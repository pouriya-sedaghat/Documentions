// import "@/styles/globals.css";

// export const metadata = {
//   title: "Learning New Version",
//   description: "App Router, Nextjs V-13",
// };

// function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="">{children}</body>
//     </html>
//   );
// }

// Using Fonts

import "@/styles/globals.css";

import loacalFont from "next/font/local";

const kalamFont = loacalFont({
  src: "../../public/fonts/kalam/Kalam-Regular.woff2",
});

// multi Font

// const kalamFonts = loacalFont({
//   src: [
//     { path: "../../public/fonts/kalam/Kalam-Regular.woff2" },
//     { path: "../../public/fonts/kalam/Kalam-Light.woff2" },
//     { path: "../../public/fonts/kalam/Kalam-Bold.woff2" },
//   ],
// });

export const metadata = {
  title: "Learning New Version",
  description: "App Router, Nextjs V-13",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${kalamFont.className}`}>
        {children}
      </body> */}

      <body className={`bg-siyah color-sefid ${kalamFont.className}`}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
