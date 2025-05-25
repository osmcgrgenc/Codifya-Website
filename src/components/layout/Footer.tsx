import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-secondary tracking-wider uppercase">Solutions</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="/solutions/software-development" className="text-base text-secondary hover:text-primary transition-colors duration-200">Software Development</a></li>
              <li><a href="/solutions/cloud-services" className="text-base text-secondary hover:text-primary transition-colors duration-200">Cloud Services</a></li>
              <li><a href="/solutions/ui-ux-design" className="text-base text-secondary hover:text-primary transition-colors duration-200">UI/UX Design</a></li>
              <li><a href="/solutions/consulting" className="text-base text-secondary hover:text-primary transition-colors duration-200">Consulting</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-secondary tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="/company/about" className="text-base text-secondary hover:text-primary transition-colors duration-200">About</a></li>
              <li><a href="/company/careers" className="text-base text-secondary hover:text-primary transition-colors duration-200">Careers</a></li>
              <li><Link href="/company/blog/" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary">Blog</Link></li>
              <li><a href="/company/press" className="text-base text-secondary hover:text-primary transition-colors duration-200">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-secondary tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="/legal/privacy" className="text-base text-secondary hover:text-primary transition-colors duration-200">Privacy</a></li>
              <li><a href="/legal/terms" className="text-base text-secondary hover:text-primary transition-colors duration-200">Terms</a></li>
              <li><a href="/legal/cookies" className="text-base text-secondary hover:text-primary transition-colors duration-200">Cookies</a></li>
              <li><a href="/legal/licenses" className="text-base text-secondary hover:text-primary transition-colors duration-200">Licenses</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-secondary tracking-wider uppercase">Connect</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="https://twitter.com/codifya" target="_blank" rel="noopener noreferrer" className="text-base text-secondary hover:text-primary transition-colors duration-200">Twitter</a></li>
              <li><a href="https://linkedin.com/company/codifya" target="_blank" rel="noopener noreferrer" className="text-base text-secondary hover:text-primary transition-colors duration-200">LinkedIn</a></li>
              <li><a href="https://facebook.com/codifya" target="_blank" rel="noopener noreferrer" className="text-base text-secondary hover:text-primary transition-colors duration-200">Facebook</a></li>
              <li><a href="https://instagram.com/codifya" target="_blank" rel="noopener noreferrer" className="text-base text-secondary hover:text-primary transition-colors duration-200">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-secondary pt-8">
          <p className="text-base text-secondary text-center">&copy; {new Date().getFullYear()} Codifya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 