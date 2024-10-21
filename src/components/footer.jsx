function Footer() {
    return (
      <footer className="bg-blue-50 border-t border-blue-200 py-10 mt-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Us Section */}
            <div>
              <h2 className="text-black text-lg font-semibold mb-3">About Us</h2>
              <ul className="text-black space-y-2">
                <li>
                  <a href="/about" className="hover:text-gray-700">
                    Company Information
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:text-gray-700">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/news" className="hover:text-gray-700">
                    Newsroom
                  </a>
                </li>
                <li>
                  <a href="/investors" className="hover:text-gray-700">
                    Investors
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Help Section */}
            <div>
              <h2 className="text-black text-lg font-semibold mb-3">Help</h2>
              <ul className="text-black space-y-2">
                <li>
                  <a href="/support" className="hover:text-gray-700">
                    Customer Support
                  </a>
                </li>
                <li>
                  <a href="/shipping" className="hover:text-gray-700">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="/returns" className="hover:text-gray-700">
                    Returns & Refunds
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-gray-700">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Policy Section */}
            <div>
              <h2 className="text-black text-lg font-semibold mb-3">Policy</h2>
              <ul className="text-black space-y-2">
                <li>
                  <a href="/privacy" className="hover:text-gray-700">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-gray-700">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="/security" className="hover:text-gray-700">
                    Security
                  </a>
                </li>
                <li>
                  <a href="/sitemap" className="hover:text-gray-700">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Social Links Section */}
            <div>
              <h2 className="text-black text-lg font-semibold mb-3">Social</h2>
              <ul className="text-black space-y-2">
                <li>
                  <a href="https://www.facebook.com" className="hover:text-gray-700">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com" className="hover:text-gray-700">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" className="hover:text-gray-700">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com" className="hover:text-gray-700">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          <div className="mt-8 border-t border-gray-700 pt-6 text-center text-black">
            <p>&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  