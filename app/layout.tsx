import Nav from "./Components/Nav";
import "./globals.css";

export const metadata = {
  title: "Open Table: Find your table for your occasion",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <div className="container">
            <Nav></Nav>         
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
