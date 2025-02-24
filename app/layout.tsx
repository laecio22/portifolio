import {Poppins} from 'next/font/google'
import "./globals.css";
import Navbar from './components/Navbar/Navbar';

const poppins = Poppins({
  subsets:['latin'],
  weight:['100','200','300', '400', '500', '600', '700', '800', '900']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en">
      <body className={`${poppins.className} ${poppins.className}`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
