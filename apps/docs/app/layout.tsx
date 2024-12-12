import "ui/styles/globals.css";
import { ThemeProvider, ThemeToggle, cn } from "ui";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeToggle />
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1 p-5">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
