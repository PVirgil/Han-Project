import "./globals.css"; import Nav from "@/components/Nav";
export const metadata={title:"HAN — Korean Civilization Engine",description:"Explore Korean civilization through timelines, entities, sources and evidence-aware AI."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Nav/><main>{children}</main><footer>HAN · Korean Civilization Engine · Research prototype</footer></body></html>}
