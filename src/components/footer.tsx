const LINKS = [
  {
    title: "Company",
    items: ["About Us", "Careers", "Premium Tools", "Blog"],
  },
  {
    title: "Pages",
    items: ["Login", "Register", "Add List", "Contact"],
  },
  {
    title: "Legal",
    items: ["Terms", "Privacy", "Team", "About Us"],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pt-24 pb-8 bg-blue-100">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-wrap gap-10 md:gap-36">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <h6 className="text-lg font-semibold text-gray-800 mb-4">
                  {title}
                </h6>
                {items.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition-colors block py-1"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div>
            <h6 className="text-lg font-semibold text-gray-800 mb-3">
              Subscribe
            </h6>
            <p className="text-gray-600 text-base mb-4">
              Get access to subscriber-exclusive deals and be the first to know
              about fresh sales.
            </p>
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Your Email
            </label>
            <div className="flex flex-col lg:flex-row items-start gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              I agree to the{" "}
              <a
                href="#"
                className="font-semibold underline hover:text-gray-900"
              >
                Terms and Conditions
              </a>
              .
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-16 text-gray-700">
          <p className="text-sm">&copy; {CURRENT_YEAR} Made by TranHoang</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
