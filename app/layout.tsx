import 'bootstrap/dist/css/bootstrap.min.css'
import "./globals.css";
import { ThemeProvider } from "@/components/client/theme-provider"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-pt" suppressHydrationWarning>
      <body className='bg-[#f7f7f9] dark:bg-zinc-950 dark:text-white antialiased'>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
