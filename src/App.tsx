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
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
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
            Bride & Groom
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-white/50"></div>
            <Heart className="w-6 h-6 fill-white" />
            <div className="h-px w-16 bg-white/50"></div>
          </div>
          <p className="text-2xl md:text-3xl mb-2">Save the Date</p>
          <p className="text-xl md:text-2xl text-white/90">
            [Date] | [Venue Name]
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
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-800 mb-4">
              Event Details
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-rose-300"></div>
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              <div className="h-px w-12 bg-rose-300"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Ceremony */}
            <div className="bg-neutral-50 p-8 rounded-lg">
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
            </div>

            {/* Reception */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-rose-500" />
                <h3 className="text-2xl font-serif text-neutral-800">
                  Reception
                </h3>
              </div>
              <p className="text-neutral-600 mb-2">
                <strong>Location:</strong> Indoor Reception at [Venue]
              </p>
              <p className="text-neutral-600 mb-4">
                <strong>Time:</strong> Cocktails and dinner to follow ceremony
              </p>

              <div className="space-y-3 mt-6">
                <h4 className="font-semibold text-neutral-700">Timeline:</h4>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">•</span>
                    <span>
                      Processional (officiant, groom, flower girl, ring bearer,
                      bride with escort)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">•</span>
                    <span>Ceremony</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">•</span>
                    <span>Recessional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">•</span>
                    <span>Reception (dinner and celebration)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Dress Code */}
            <div className="bg-neutral-50 p-8 rounded-lg md:col-span-2">
              <h3 className="text-2xl font-serif text-neutral-800 mb-4">
                Dress Code
              </h3>
              <p className="text-neutral-600 mb-2">
                We kindly ask guests to wear <strong>[Dress Code]</strong>. Feel
                free to follow along with the color theme.
              </p>
              <p className="text-rose-600 font-semibold">
                No jeans or white, please.
              </p>
            </div>

            {/* Non-Traditional Note */}
            <div className="bg-rose-50 p-8 rounded-lg md:col-span-2 border border-rose-200">
              <h3 className="text-2xl font-serif text-neutral-800 mb-4">
                Our Non-Traditional Celebration
              </h3>
              <p className="text-neutral-700">
                We did not have a bridal/wedding party. The immediate family
                will walk in for the ceremony in any order and sit in the first
                2 rows. Once everyone has been seated, the officiant will arrive
                to begin the ceremony.
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
                Parking is available on-site and is free for all guests.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Calendar className="w-8 h-8 text-rose-500 mb-4" />
              <h3 className="text-2xl font-serif text-neutral-800 mb-4">
                Nearby Airports
              </h3>
              <p className="text-neutral-600 mb-2">
                <strong>Closest Airport:</strong> [Airport Name]
              </p>
              <p className="text-neutral-600 mb-4">About [X] minutes away</p>
              <p className="text-neutral-600 mb-2">
                <strong>Alternative Airport:</strong> [Airport Name]
              </p>
              <p className="text-neutral-600">About [X] minutes away</p>
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
                Yes! We'll be serving beer, wine, and signature cocktails
                throughout the evening.
              </p>
              <p className="text-sm text-neutral-500 italic">
                Or: No. Our wedding will be BYOB for Alcohol. Alcohol-free
                drinks will be provided.
              </p>
            </div>

            {/* Photography */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                Can I take photos during the ceremony?
              </h3>
              <p className="text-neutral-600 mb-3">
                Yes, you can. Please be mindful of any flashes or sounds that
                may happen when taking pictures.
              </p>
              <div className="bg-rose-50 p-4 rounded border-l-4 border-rose-400">
                <p className="text-sm text-neutral-700">
                  <strong>Share your photos!</strong> Please send any pictures
                  you take to the bride & groom at:{" "}
                  <a
                    href="mailto:[email]"
                    className="text-rose-600 hover:underline"
                  >
                    [email@gmail.com]
                  </a>
                </p>
              </div>
            </div>

            {/* Kids & Plus Ones */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                Are children invited?
              </h3>
              <p className="text-neutral-600">
                While we love your little ones, we are keeping our wedding an{" "}
                <strong>adults-only celebration</strong> (except immediate
                family).
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                Can I bring a plus-one?
              </h3>
              <p className="text-neutral-600">
                If your digital invitation includes "and guest," then yes.
                Otherwise, we are keeping our guest list intimate.
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
              We can't wait to celebrate with you! Please RSVP by [Date].
            </p>
          </div>

          <form className="bg-neutral-50 p-8 rounded-lg space-y-6">
            <div>
              <label className="block text-neutral-700 mb-2 font-semibold">
                Full Name(s)
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="Enter your name(s)"
              />
            </div>

            <div>
              <label className="block text-neutral-700 mb-2 font-semibold">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-neutral-700 mb-2 font-semibold">
                Will you be attending?
              </label>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-3 bg-white rounded-lg cursor-pointer hover:bg-rose-50 transition-colors">
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    className="w-4 h-4 text-rose-500"
                  />
                  <span className="text-neutral-700">Joyfully accepts</span>
                </label>
                <label className="flex items-center gap-3 p-3 bg-white rounded-lg cursor-pointer hover:bg-rose-50 transition-colors">
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    className="w-4 h-4 text-rose-500"
                  />
                  <span className="text-neutral-700">Regretfully declines</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-neutral-700 mb-2 font-semibold">
                Number of Guests
              </label>
              <input
                type="number"
                min="1"
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="1"
              />
            </div>

            <div>
              <label className="block text-neutral-700 mb-2 font-semibold">
                Dietary Restrictions
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-rose-500 h-24"
                placeholder="Please list any dietary restrictions or allergies..."
              ></textarea>
            </div>

            <div>
              <label className="block text-neutral-700 mb-2 font-semibold">
                Special Message (Optional)
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-rose-500 h-24"
                placeholder="Send the couple a message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-rose-500 text-white py-4 rounded-full hover:bg-rose-600 transition-colors font-semibold text-lg"
            >
              Submit RSVP
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-8 h-8 text-rose-400 fill-rose-400 mx-auto mb-4" />
          <p className="text-xl font-serif mb-2">Bride & Groom</p>
          <p className="text-neutral-400 mb-4">[Date] | [Location]</p>
          <div className="flex items-center justify-center gap-2 text-sm text-neutral-500">
            <Mail className="w-4 h-4" />
            <a
              href="mailto:[email]"
              className="hover:text-rose-400 transition-colors"
            >
              [email@gmail.com]
            </a>
          </div>
          <p className="text-neutral-500 text-sm mt-8">
            We can't wait to celebrate with you!
          </p>
        </div>
      </footer>
    </div>
  );
}
