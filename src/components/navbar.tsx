import Link from "next/link"
import { BookOpen } from "lucide-react"

export default function Navbar() {
    return (
        <header className="bg-primary text-primary-foreground shadow-md">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <BookOpen className="h-6 w-6" />
                        <span className="text-xl font-bold">Fong{`'`}s Wisdom</span>
                    </Link>
                    <div className="flex items-center space-x-4">
                        <Link href="/about" className="px-4 py-2 rounded-md hover:bg-primary-foreground/10 transition-colors">
                            About
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}
