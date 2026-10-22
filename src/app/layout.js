//= Global Styles
import "@/styles/globals.css";

export const metadata = {
  title: 'Tamzid Idrish',
  description: 'Tamzid Idrish - Portfolio',
  keywords: ['HTML5', 'Template', 'Tamzid Idrish', 'Portfolio', 'Unreal Engine 5', 'UE5', 'Next.js', 'React', 'Three.js', 'WebGL', 'WebXR', 'A-Frame', 'VR', 'AR', 'Metaverse'],
  icons: {
    icon: "/assets/imgs/t3d_favicon.png",
    shortcut: "/assets/imgs/t3d_favicon.png"
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {children}
    </html>
  )
}
