import { Outfit } from 'next/font/google'
import "./globals.css";
 
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  weight: ['100', '300', '400', '500', '700', '900']
  
});

export const metadata = {
  title: "Brytt - Your AI Autonomous Recruiting Partner",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
