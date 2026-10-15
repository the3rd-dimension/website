//= Global Styles
import "@/styles/globals.css";

export const metadata = {
  title: 'Bayone',
  description: 'Bayone - Multi-Purpose React.js Next.js Template',
  keywords: ['HTML5', 'Template', 'Bayone', 'Multi-Purpose', 'themeforest'],
  icons: {
    icon: "/assets/imgs/favicon.ico",
    shortcut: "/assets/imgs/favicon.ico"
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {children}
    </html>
  )
}
