import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Beautiful view of Hikari Island"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Discover Hikari</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">
            Experience the hidden gem of the Japanese Sea - where tradition meets paradise
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/explore"
              className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-white/90 transition"
            >
              Explore Hikari
            </Link>
            <Link
              href="/plan"
              className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Welcome to Hikari Island</h2>
              <p className="text-foreground/80 mb-4">
                Nestled in the heart of the Japanese Sea, Hikari is a breathtaking island paradise with rich culture,
                stunning landscapes, and warm hospitality. With Togetsu as its capital city, this island nation offers
                visitors a unique blend of traditional Japanese influence and its own distinct cultural identity.
              </p>
              <p className="text-foreground/80 mb-6">
                Whether you're seeking adventure, relaxation, or cultural immersion, Hikari provides an unforgettable
                experience for every traveler.
              </p>
              <div className="flex items-center text-emerald-600 font-medium">
                <Link href="/about" className="flex items-center hover:underline">
                  Learn more about our history <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Scenic view of Togetsu, the capital of Hikari"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Discover Hikari Island</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Explore Hikari's attractions"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Explore Hikari</h3>
                  <p className="text-white/90 mb-4">Discover our attractions, culture, and natural wonders</p>
                  <Link
                    href="/explore"
                    className="inline-flex items-center text-white bg-emerald-600 px-4 py-2 rounded-md hover:bg-emerald-700 transition"
                  >
                    View Attractions <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Plan your visit to Hikari"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Plan Your Visit</h3>
                  <p className="text-white/90 mb-4">Travel information, accommodations, and itineraries</p>
                  <Link
                    href="/plan"
                    className="inline-flex items-center text-white bg-emerald-600 px-4 py-2 rounded-md hover:bg-emerald-700 transition"
                  >
                    Start Planning <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Explore Hikari Island</h2>
              <p className="text-foreground/80 mb-6">
                Located in the Japanese Sea, Hikari is a beautiful island with Togetsu as its capital city. Our
                strategic location makes us accessible from mainland Japan while offering a peaceful retreat from busy
                city life.
              </p>
              <div className="bg-accent p-4 rounded-lg">
                <h3 className="font-medium mb-2">Key Locations:</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 text-emerald-600 mr-2" />
                    Togetsu - Capital City
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 text-emerald-600 mr-2" />
                    Eastern Coastal Resorts
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 text-emerald-600 mr-2" />
                    Northern Mountain Region
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 text-emerald-600 mr-2" />
                    Southern Fishing Villages
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 relative h-[400px] w-full rounded-lg overflow-hidden border border-border">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5405-V5qu3Fyo1meoiMUdYcQjQQHumSOCnz.jpeg"
                alt="Map of Hikari Island in the Japanese Sea"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Hikari Tourism</h3>
              <p className="text-gray-400">
                Your gateway to experiencing the beauty and culture of Hikari Island in the Japanese Sea.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition">
                    About Hikari
                  </Link>
                </li>
                <li>
                  <Link href="/explore" className="text-gray-400 hover:text-white transition">
                    Explore
                  </Link>
                </li>
                <li>
                  <Link href="/plan" className="text-gray-400 hover:text-white transition">
                    Plan Your Visit
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Essential Info</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/travel" className="text-gray-400 hover:text-white transition">
                    Travel Information
                  </Link>
                </li>
                <li>
                  <Link href="/safety" className="text-gray-400 hover:text-white transition">
                    Safety & Security
                  </Link>
                </li>
                <li>
                  <Link href="/culture" className="text-gray-400 hover:text-white transition">
                    Culture & Customs
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-white transition">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <address className="not-italic text-gray-400">
                <p>Hikari Tourism Office</p>
                <p>1-1 Sakura Street, Togetsu</p>
                <p>Hikari Island, Japan Sea</p>
                <p className="mt-2">Email: info@hikari-tourism.jp</p>
                <p>Phone: +81-123-456-789</p>
              </address>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Hikari Tourism Authority. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

