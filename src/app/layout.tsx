import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./globals.css";
import { CssBaseline, InitColorSchemeScript, ThemeProvider } from "@mui/material";
import { theme } from "@/providers/theme";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Supakonnect",
  description: "Innovating the Digital Edge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>

      <link rel="icon" sizes="192x192" href="/android-chrome-192x192.png"/>

      <link rel="icon" sizes="512x512" href="/android-chrome-512x1512.png"/>

      <link rel="icon" sizes="32x32" href="/favicon-32x32.png"/>

      <link rel="icon" sizes="16x16" href="/favicon-16x16.png"/>

      <link rel="manifest" href="/manifest.json"/>
      {/* theme */}
      <meta name="theme-color" content="#2A4364" media="(prefers-color-scheme: dark)" />
      <GoogleTagManager gtmId={String(process.env.NEXT_PUBLIC_GOOGLE_TAG_ID)} />
      <body>
        <SpeedInsights />
        <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
        <InitColorSchemeScript attribute="class" />
          <CssBaseline enableColorScheme />
          {children} 
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
