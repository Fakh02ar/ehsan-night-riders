import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#150a44] border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4 mt-[-7px]">
              <div className="w-20 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-background font-bold"><img src="/logo.jpeg" alt="" /></span>
              </div>
              <span className="font-serif font-bold text-white">Ehsan Night Riders</span>
            </div>
            <p className="text-muted text-sm pl-[15px]">Professional cricket team bringing excellence to the game.</p>
          </div>

          {/* Quick Links */}
          <div className="xl:pl-[70px]">
            <h4 className="font-serif font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-muted hover:text-primary transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/matches" className="text-muted hover:text-primary transition-colors">
                  Matches
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>Email: info@ehsannightriders.com</li>
              <li>Phone: +92 300 1234567</li>
              <li>Location: Karachi, Pakistan</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif font-bold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted text-sm">&copy; {currentYear} Ehsan Night Riders. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
