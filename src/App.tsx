import { useState } from "react";
import {
  Heart,
  Calendar,
  MapPin,
  Gift,
  Mail,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              <span className="font-serif text-xl text-neutral-800">
                Our Wedding
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-neutral-600 hover:text-rose-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("event-details")}
                className="text-neutral-600 hover:text-rose-600 transition-colors"
              >
                Details
              </button>
              <button
                onClick={() => scrollToSection("travel")}
                className="text-neutral-600 hover:text-rose-600 transition-colors"
              >
                Travel
              </button>
              <button
                onClick={() => scrollToSection("registry")}
                className="text-neutral-600 hover:text-rose-600 transition-colors"
              >
                Registry
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-neutral-600 hover:text-rose-600 transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("rsvp")}
                className="bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition-colors"
              >
                RSVP
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-600"
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
                className="block w-full text-left px-4 py-2 text-neutral-600 hover:bg-rose-50 rounded"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("event-details")}
                className="block w-full text-left px-4 py-2 text-neutral-600 hover:bg-rose-50 rounded"
              >
                Details
              </button>
              <button
                onClick={() => scrollToSection("travel")}
                className="block w-full text-left px-4 py-2 text-neutral-600 hover:bg-rose-50 rounded"
              >
                Travel
              </button>
              <button
                onClick={() => scrollToSection("registry")}
                className="block w-full text-left px-4 py-2 text-neutral-600 hover:bg-rose-50 rounded"
              >
                Registry
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left px-4 py-2 text-neutral-600 hover:bg-rose-50 rounded"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("rsvp")}
                className="block w-full text-center bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600"
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
            src="https://images.unsplash.com/photo-1769812344337-ec16a1b7cef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGNlcmVtb255JTIwb3V0ZG9vciUyMHZlbnVlfGVufDF8fHx8MTc3ODMzODM1MXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Wedding venue"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-6xl md:text-8xl mb-4">
            Lexi & Austin
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-white/50"></div>
            <Heart className="w-6 h-6 fill-white" />
            <div className="h-px w-16 bg-white/50"></div>
          </div>
          <p className="text-2xl md:text-3xl mb-2 uppercase">
            we're getting married!
          </p>
          <p className="text-xl md:text-2xl text-white/90">
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
      <section id="event-details" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-800 mb-4 uppercase">
              our special day
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-rose-300"></div>
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              <div className="h-px w-12 bg-rose-300"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Ceremony */}
            {/* <div className="bg-neutral-50 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-rose-500" />
                <h3 className="text-2xl font-serif text-neutral-800">
                  Ceremony
                </h3>
              </div>
              <p className="text-neutral-600 mb-2">
                <strong>Date:</strong> [Date]
              </p>
              <p className="text-neutral-600 mb-2">
                <strong>Time:</strong> Ceremony begins at [Time]
              </p>
              <p className="text-neutral-600 mb-2">
                <strong>Location:</strong> Outdoor Ceremony at [Venue]
              </p>
              <p className="text-neutral-600 mb-4">
                <strong>Arrival:</strong> Please arrive [X] minutes early to get
                seated
              </p>
              <div className="bg-rose-50 border-l-4 border-rose-400 p-4 rounded">
                <p className="text-sm text-neutral-700">
                  Our ceremony will be outdoors. Please dress appropriately and
                  comfortably!
                </p>
              </div>
            </div> */}

            {/* Reception */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-rose-500" />
                <h3 className="text-2xl font-serif text-neutral-800">
                  Reception
                </h3>
              </div>
              <p className="text-neutral-600 mb-2">
                <strong>Venue:</strong> The Mill Street House
              </p>
              <p className="text-neutral-600 mb-2">
                <strong>Address:</strong> 322 N Mill St, Lewisville, TX 75057
                (hyperlink this)
              </p>
              <p className="text-neutral-600 mb-4">
                <strong>Time:</strong> 5:30-8PM
              </p>

              <div className="space-y-3 mt-6">
                <h4 className="font-semibold text-neutral-700">Timeline:</h4>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">•</span>
                    <span>Arrival</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">•</span>
                    <span>Dinner, Cake Cutting and Desert</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">•</span>
                    <span>
                      Get to Know Us As the Gilmores (Interactive Game)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">•</span>
                    <span>Dance, Mingle and Take Pictures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">•</span>
                    <span>Farewell/Departure</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-rose-500" />
                <h3 className="text-2xl font-serif text-neutral-800">Menu</h3>
              </div>
              <p className="text-neutral-600 mb-2">
                <strong>Catering Provided by:</strong> Olive Garden
              </p>
              <p className="text-neutral-600 mb-2">
                <strong>Appetizers:</strong> Charcuterie Board + Fruit Platter
              </p>
              <p className="text-neutral-600 mb-2">
                <strong>Drinks:</strong>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">•</span>
                    <span>Water With Sliced Lemon</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">•</span>
                    <span>Sodas (Coke and Sprite)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">•</span>
                    <span>Red and White Wine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">•</span>
                    <span>Rasberry Iced Tea</span>
                  </li>
                </ul>
              </p>
              <p className="text-neutral-600 mb-2">
                <strong>Deserts:</strong>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">•</span>
                    <span>Rasberry Vanilla Cake</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">•</span>
                    <span>Vanilla Sheet Cake</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">•</span>
                    <span>Cookies Assortment</span>
                  </li>
                </ul>
              </p>
            </div>

            {/* Dress Code */}
            <div className="bg-neutral-50 p-8 rounded-lg md:col-span-2">
              <h3 className="text-2xl font-serif text-neutral-800 mb-4">
                Dress Code
              </h3>
              <p className="text-neutral-600 mb-2">
                We kindly ask guests to wear whatever they feel comfortable in
                especailly if you'd like to dance.
              </p>
              <p className="text-neutral-600 mb-2">
                Feel free to follow along with the color theme (Our website
                colors)
              </p>
              <p className="text-rose-600 font-semibold">
                No white clothing, please.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel & Parking Section */}
      <section id="travel" className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-800 mb-4">
              Travel & Parking
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-rose-300"></div>
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              <div className="h-px w-12 bg-rose-300"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <MapPin className="w-8 h-8 text-rose-500 mb-4" />
              <h3 className="text-2xl font-serif text-neutral-800 mb-4">
                Parking
              </h3>
              <p className="text-neutral-600">
                Parking is available on-site and is free for all guests. (insert
                map)
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Calendar className="w-8 h-8 text-rose-500 mb-4" />
              <h3 className="text-2xl font-serif text-neutral-800 mb-4">
                Nearby Airport
              </h3>
              <p className="text-neutral-600 mb-2">
                <strong>Closest Airport:</strong> DFW International
              </p>
              <p className="text-neutral-600 mb-4">About 20 minutes away</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Calendar className="w-8 h-8 text-rose-500 mb-4" />
              <h3 className="text-2xl font-serif text-neutral-800 mb-4">
                Nearby Hotels
              </h3>
              <p className="text-neutral-600 mb-2">
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
      <section id="registry" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-800 mb-4">
              Registry & Gifts
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-rose-300"></div>
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              <div className="h-px w-12 bg-rose-300"></div>
            </div>
          </div>

          <div className="bg-neutral-50 p-10 rounded-lg mb-8">
            <Gift className="w-12 h-12 text-rose-500 mx-auto mb-6" />
            <h3 className="text-2xl font-serif text-neutral-800 mb-4">
              Where We're Registered
            </h3>
            <p className="text-neutral-600 mb-6">
              We are registered at [Registry Name]. You can find our registry by
              clicking the button below.
            </p>
            <button className="bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition-colors">
              View Our Registry
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-50 p-6 rounded-lg text-left">
              <h4 className="font-semibold text-neutral-800 mb-2">
                Ship to Our Home
              </h4>
              <p className="text-neutral-600 text-sm">
                Absolutely! All registry gifts can be shipped straight to our
                home for your convenience.
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg text-left">
              <h4 className="font-semibold text-neutral-800 mb-2">
                Honeymoon & Cash Fund
              </h4>
              <p className="text-neutral-600 text-sm">
                We've set up a honeymoon/cash fund if you'd prefer to contribute
                to our adventures or our house-buying goal instead of a physical
                gift.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-800 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-rose-300"></div>
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              <div className="h-px w-12 bg-rose-300"></div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Food & Drinks */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                Will there be vegetarian/vegan/gluten-free options?
              </h3>
              <p className="text-neutral-600">
                Yes! Our caterer will provide options for vegetarian, vegan, and
                gluten-free guests. Please let us know any dietary restrictions
                when you RSVP.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                Will alcohol be served?
              </h3>
              <p className="text-neutral-600 mb-2">
                Yes! We will only be serving wine throughout the evening. Hard
                liquor will not be provided and is not allowed on site.
              </p>
            </div>

            {/* Photography */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                Can I take photos during the party?
              </h3>
              <p className="text-neutral-600 mb-3">
                Yes, please take a lot and send them to us! We will also have
                disposable film cameras that we encourage you to use. We want to
                print these after!
              </p>
              <div className="bg-rose-50 p-4 rounded border-l-4 border-rose-400">
                <p className="text-sm text-neutral-700">
                  <strong>Share your photos!</strong> Please send any pictures
                  you take to the bride & groom at:{" "}
                  <a
                    href="mailto:meetthegilmores26@gmail.com"
                    className="text-rose-600 underline"
                  >
                    meetthegilmores26@gmail.com
                  </a>
                  &nbsp;or send it to our personal number.
                </p>
              </div>
            </div>

            {/* Kids & Plus Ones */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                Are children invited?
              </h3>
              <p className="text-neutral-600">
                While we love your little ones, we are keeping our party an{" "}
                <strong>adults-only celebration</strong> (except immediate
                family).
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                Can I bring a plus-one?
              </h3>
              <p className="text-neutral-600">
                Yes, please RSVP and limit it to only one additional member.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-800 mb-4">
              RSVP
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-rose-300"></div>
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              <div className="h-px w-12 bg-rose-300"></div>
            </div>
            <p className="text-neutral-600">
              We can't wait to celebrate with you! Please RSVP by August 31st.
            </p>
          </div>

          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeKsbGHrfiX1d_1VOWi6jt-_w1mpYEQOI9NmIXGPP6JGwHsfg/viewform?embedded=true"
            width="640"
            height="1108"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-8 h-8 text-rose-400 fill-rose-400 mx-auto mb-4" />
          <p className="text-xl font-serif mb-2">Lexi & Austin</p>
          <p className="text-neutral-400 mb-4">10.08.26 | Lewisville, TX</p>
          <p className="text-neutral-500 text-sm mt-8">
            We can't wait to celebrate with you!
          </p>
        </div>
      </footer>
    </div>
  );
}
