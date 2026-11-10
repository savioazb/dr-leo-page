import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

// Fontes do Google Fonts (OFL), hospedadas no projeto.
// O @next/font/google 13.1.6 ainda não lista as famílias Instrument.
const serif = localFont({
  src: [
    { path: "../fonts/InstrumentSerif-Regular-latin.woff2", weight: "400", style: "normal" },
    { path: "../fonts/InstrumentSerif-Italic-latin.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-serif",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const sans = localFont({
  src: [{ path: "../fonts/InstrumentSans-latin.woff2", weight: "400 700", style: "normal" }],
  variable: "--font-sans",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${serif.variable} ${sans.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
