import Link from "next/link";
export default function Nav(){return <header className="nav"><Link className="brand" href="/">HAN <span>한</span></Link><nav><Link href="/explore">Explore</Link><Link href="/timeline">Timeline</Link><Link href="/sources">Sources</Link></nav></header>}
