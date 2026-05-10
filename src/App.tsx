import { useState } from "react";
import {
  Heart,
  Gift,
  ChevronDown,
  Menu,
  X,
  PartyPopper,
  CupSoda,
  Shirt,
  Car,
  Plane,
  House,
} from "lucide-react";

import { useEffect } from "react";

export default function App() {
  // Inside your functional component:
  useEffect(() => {
    const scriptSrc = "https://tally.so/widgets/embed.js";
    const loadTally = () => {
      // @ts-ignore
      if (typeof Tally !== "undefined") {
        // @ts-ignore
        Tally.loadEmbeds();
      }
    };

    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const s = document.createElement("script");
      s.src = scriptSrc;
      s.onload = loadTally;
      s.onerror = loadTally;
      document.body.appendChild(s);
    } else {
      loadTally();
    }
  }, []);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-sage">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-sage backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-mauve fill-mauve" />
              <span className="font-serif text-xl text-creme">
                Lexi & Austin
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-creme transform hover:text-mauve hover:translate-y-[-2px] transition-transform duration-200 ease-in-out"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("event-details")}
                className="text-creme transform hover:text-mauve hover:translate-y-[-2px] transition-transform duration-200 ease-in-out"
              >
                Details
              </button>
              <button
                onClick={() => scrollToSection("travel")}
                className="text-creme transform hover:text-mauve hover:translate-y-[-2px] transition-transform duration-200 ease-in-out"
              >
                Travel
              </button>
              <button
                onClick={() => scrollToSection("registry")}
                className="text-creme transform hover:text-mauve hover:translate-y-[-2px] transition-transform duration-200 ease-in-out"
              >
                Registry
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-creme transform hover:text-mauve hover:translate-y-[-2px] transition-transform duration-200 ease-in-out"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("rsvp")}
                className="bg-rust text-creme px-6 py-2 rounded-full hover:bg-vintage"
              >
                RSVP
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-creme"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-4 py-2 text-creme hover:bg-vintage rounded"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("event-details")}
                className="block w-full text-left px-4 py-2 text-creme hover:bg-vintage rounded"
              >
                Details
              </button>
              <button
                onClick={() => scrollToSection("travel")}
                className="block w-full text-left px-4 py-2 text-creme hover:bg-vintage rounded"
              >
                Travel
              </button>
              <button
                onClick={() => scrollToSection("registry")}
                className="block w-full text-left px-4 py-2 text-creme hover:bg-vintage rounded"
              >
                Registry
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left px-4 py-2 text-creme hover:bg-vintage rounded"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("rsvp")}
                className="block w-full text-center bg-rust text-creme px-6 py-2 rounded-full"
              >
                RSVP
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0">
          <img
            src="/hero.png"
            alt="Lexi & Austin"
            className="w-full h-full object-cover scale-105 object-[47%]"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-center text-creme px-4 pt-64">
          <h1 className="font-serif text-6xl md:text-8xl mb-4">
            Lexi & Austin
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-white/50"></div>
            <Heart className="w-6 h-6 fill-creme" />
            <div className="h-px w-16 bg-white/50"></div>
          </div>
          <p className="text-2xl md:text-3xl mb-2 uppercase">
            we're getting married!
          </p>
          <p className="text-xl md:text-2xl text-creme">
            10.08.26 | Lewisville, TX
          </p>

          <button
            onClick={() => scrollToSection("event-details")}
            className="mt-12 animate-bounce"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* Event Details Section */}
      <section id="event-details" className="py-20 bg-creme">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-vintage mb-4 uppercase">
              our special day
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-vintage"></div>
              <Heart className="w-5 h-5 text-vintage fill-vintage" />
              <div className="h-px w-12 bg-vintage"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Ceremony */}
            {/* <div className="bg-sage p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-creme" />
                <h3 className="text-2xl font-serif text-creme">
                  Ceremony
                </h3>
              </div>
              <p className="text-creme mb-2">
                <strong>Date:</strong> [Date]
              </p>
              <p className="text-creme mb-2">
                <strong>Time:</strong> Ceremony begins at [Time]
              </p>
              <p className="text-creme mb-2">
                <strong>Location:</strong> Outdoor Ceremony at [Venue]
              </p>
              <p className="text-creme mb-4">
                <strong>Arrival:</strong> Please arrive [X] minutes early to get
                seated
              </p>
              <div className="bg-rose-50 border-l-4 border-rose-400 p-4 rounded">
                <p className="text-sm text-rust">
                  Our ceremony will be outdoors. Please dress appropriately and
                  comfortably!
                </p>
              </div>
            </div> */}

            {/* Reception */}
            <div className="bg-sage p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <PartyPopper className="w-6 h-6 text-creme" />
                <h3 className="text-2xl font-serif text-creme font-bold">
                  Reception
                </h3>
              </div>
              <p className="text-creme mb-2">
                <strong>Venue:</strong> The Mill Street House
              </p>
              <p className="text-creme mb-2">
                <strong>Address:</strong> 322 N Mill St, Lewisville, TX 75057
                (hyperlink this)
              </p>
              <p className="text-creme mb-4">
                <strong>Time:</strong> 5:30-8PM
              </p>

              <div className="space-y-3 mt-6">
                <h4 className="text-creme font-semibold">Timeline:</h4>
                <ul className="space-y-2 text-creme">
                  <li className="flex items-start gap-2">
                    <span className="text-creme">•</span>
                    <span>Arrival</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-creme">•</span>
                    <span>Dinner, Cake Cutting and Desert</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-creme">•</span>
                    <span>
                      Get to Know Us As the Gilmores (Interactive Game)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-creme">•</span>
                    <span>Dance, Mingle and Take Pictures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-creme">•</span>
                    <span>Farewell/Departure</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-sage p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <CupSoda className="w-6 h-6 text-creme" />
                <h3 className="text-2xl font-serif text-creme font-bold">
                  Menu
                </h3>
              </div>
              <p className="text-creme mb-2">
                <strong>Catering Provided by:</strong> Olive Garden
              </p>
              <p className="text-creme mb-2">
                <strong>Appetizers:</strong> Charcuterie Board + Fruit Platter
              </p>
              <p className="text-creme mb-2">
                <strong>Drinks:</strong>
                <ul className="space-y-2 text-creme">
                  <li className="flex items-start gap-2">
                    <span className="text-creme">•</span>
                    <span>Water With Sliced Lemon</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-creme">•</span>
                    <span>Sodas (Coke and Sprite)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-creme">•</span>
                    <span>Red and White Wine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-creme">•</span>
                    <span>Rasberry Iced Tea</span>
                  </li>
                </ul>
              </p>
              <p className="text-creme mb-2">
                <strong>Desserts:</strong>
                <ul className="space-y-2 text-creme">
                  <li className="flex items-start gap-2">
                    <span className="text-creme">•</span>
                    <span>Rasberry Vanilla Cake</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-creme">•</span>
                    <span>Vanilla Sheet Cake</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-creme">•</span>
                    <span>Cookies Assortment</span>
                  </li>
                </ul>
              </p>
            </div>

            {/* Dress Code */}

            <div className="bg-sage p-8 rounded-lg md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Shirt className="w-6 h-6 text-creme" />
                <h3 className="text-2xl font-serif text-creme font-bold">
                  Dress Code
                </h3>
              </div>
              <p className="text-creme mb-2">
                We kindly ask guests to wear whatever they feel comfortable in,
                especially if you'd like to dance.
              </p>
              <p className="text-creme mb-2">
                Feel free to follow along with the color theme (Our website
                colors).
              </p>
              <p className="text-creme font-bold">No white clothing, please.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel & Parking Section */}
      <section id="travel" className="py-20 bg-rust">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-creme mb-4 uppercase">
              Travel & Parking
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-creme"></div>
              <Heart className="w-5 h-5 text-creme fill-creme" />
              <div className="h-px w-12 bg-creme"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-vintage p-8 rounded-lg shadow-sm">
              <Car className="w-8 h-8 text-creme mb-4" />
              <h3 className="text-2xl font-serif text-creme mb-4 font-bold">
                Parking
              </h3>
              <p className="text-creme">
                Parking is available on-site and is free for all guests. (insert
                map)
              </p>
            </div>

            <div className="bg-vintage p-8 rounded-lg shadow-sm">
              <Plane className="w-8 h-8 text-creme mb-4" />
              <h3 className="text-2xl font-serif text-creme mb-4 font-bold">
                Nearby Airport
              </h3>
              <p className="text-creme mb-2">
                <strong>Closest Airport:</strong> DFW International
              </p>
              <p className="text-creme mb-4">About 20 minutes away</p>
            </div>

            <div className="bg-vintage p-8 rounded-lg shadow-sm">
              <House className="w-8 h-8 text-creme mb-4" />
              <h3 className="text-2xl font-serif text-creme mb-4 font-bold">
                Nearby Hotels
              </h3>
              <p className="text-creme mb-2">
                There are many hotel options within the city of Lewisville, TX:{" "}
                <a
                  className="underline"
                  href="https://www.google.com/travel/search?q=hotels%20near%20lewisville%20texas&g2lb=4899571%2C4899572%2C4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C73059275%2C73064764%2C100361027%2C121608706&hl=en-US&gl=us&cs=1&ssta=1&ts=CAESCgoCCAMKAggDEAAaHBIaEhQKBwjqDxAFGAsSBwjqDxAFGAwYATICEAAqBwoFOgNVU0Q&qs=CAE4BkIJEe6K1wKuq1ogQgkRlvwgsv0SJV1CCRGIj5v6-6khYFpWMlSqAVEQASoKIgZob3RlbHMoADIfEAEiG1OXrh-RTfiRXDKAqlt59P6W1vS1T2TI4vdzMTIgEAIiHGhvdGVscyBuZWFyIGxld2lzdmlsbGUgdGV4YXM&ap=aAE&ictx=111&ved=0CAAQ5JsGahcKEwiQsci92ayUAxUAAAAAHQAAAAAQDA"
                >
                  View Here
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registry Section */}
      <section id="registry" className="py-20 bg-creme">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-vintage mb-4 uppercase">
              Registry & Gifts
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-vintage"></div>
              <Heart className="w-5 h-5 text-vintage fill-vintage" />
              <div className="h-px w-12 bg-vintage"></div>
            </div>
          </div>

          <div className="p-10 rounded-lg mb-8 bg-sage">
            <Gift className="w-12 h-12 text-creme/90 mx-auto mb-6" />
            <h3 className="text-2xl font-serif text-creme mb-4 font-bold">
              Where We're Registered
            </h3>
            <p className="text-creme mb-6">
              We are registered at [Registry Name]. You can find our registry by
              clicking the button below.
            </p>
            <button className="bg-vintage text-creme px-8 py-3 rounded-full transition-colors">
              View Our Registry
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-sage p-6 rounded-lg text-left">
              <h4 className="text-creme mb-2 font-bold">Ship to Our Home</h4>
              <p className="text-creme text-sm">
                Absolutely! All registry gifts can be shipped straight to our
                home for your convenience.
              </p>
            </div>
            <div className="bg-sage p-6 rounded-lg text-left">
              <h4 className="font-bold text-creme mb-2">
                Honeymoon & Cash Fund
              </h4>
              <p className="text-creme text-sm">
                We've set up a honeymoon/cash fund if you'd prefer to contribute
                to our adventures or our house-buying goal instead of a physical
                gift.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-rust">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-creme mb-4">
              Frequently Asked Questions
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-creme"></div>
              <Heart className="w-5 h-5 text-creme fill-creme" />
              <div className="h-px w-12 bg-creme"></div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Food & Drinks */}
            <div className="bg-vintage p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-creme mb-2">
                Dietary Accomodations?
              </h3>
              <p className="text-creme">
                Yes! Our caterer can provide options for vegetarian, vegan, and
                gluten-free guests. Please let us know any dietary accomodations
                in advance when you RSVP.
              </p>
            </div>

            <div className="bg-vintage p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-creme mb-2">
                Will alcohol be served?
              </h3>
              <p className="text-creme mb-2">
                Yes! We will only be serving wine throughout the evening. Hard
                liquor will not be provided and is not allowed on site.
              </p>
            </div>

            {/* Photography */}
            <div className="bg-vintage p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-creme mb-2">
                Can I take photos during the party?
              </h3>
              <p className="text-creme mb-3">
                Yes, please take a lot and send them to us! We will also have
                disposable film cameras that we encourage you to use. We want to
                print these after!
              </p>
              <div className="bg-mauve p-4 rounded border-l-4 border-mauve">
                <p className="text-sm text-brown">
                  <strong>Share your photos!</strong> Please send any pictures
                  you take to the bride & groom at:{" "}
                  <a
                    href="mailto:meetthegilmores26@gmail.com"
                    className="text-brown underline"
                  >
                    meetthegilmores26@gmail.com
                  </a>
                  &nbsp;or send it to our personal number.
                </p>
              </div>
            </div>

            {/* Kids & Plus Ones */}
            <div className="bg-vintage p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-creme mb-2">
                Are children invited?
              </h3>
              <p className="text-creme">
                While we love your little ones, we are keeping our party an{" "}
                <strong>adults-only celebration</strong> (except immediate
                family).
              </p>
            </div>

            <div className="bg-vintage p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-creme mb-2">
                Can I bring a plus-one?
              </h3>
              <p className="text-creme">
                Yes, please RSVP and limit it to only one additional member.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-20 bg-creme">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-rust mb-4">
              RSVP
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-rust"></div>
              <Heart className="w-5 h-5 text-rust fill-rust" />
              <div className="h-px w-12 bg-rust"></div>
            </div>
            <p className="text-creme">
              We can't wait to celebrate with you! Please RSVP by August 31st.
            </p>
          </div>

          <iframe
            data-tally-src="https://tally.so/embed/VLvZ7N?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="793"
            style={{ border: 0, margin: 0 }}
            title="Invitation to our celebration"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage text-creme py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-8 h-8 text-mauve fill-mauve mx-auto mb-4" />
          <p className="text-xl font-serif mb-2 text-creme">Lexi & Austin</p>
          <p className="text-creme mb-4">10.08.26 | Lewisville, TX</p>
          <p className="text-creme text-sm mt-8">
            We can't wait to celebrate with you!
          </p>
        </div>
      </footer>
    </div>
  );
}
