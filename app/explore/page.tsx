import Image from "next/image"
import Link from "next/link"
import { MapPin, Calendar, ChevronRight } from "lucide-react"

export default function ExplorePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Scenic view of Hikari attractions"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Explore Hikari</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
            Discover the natural beauty, cultural treasures, and unforgettable experiences of our island paradise
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Attractions & Experiences</h2>
          <p className="text-gray-700 mb-8 max-w-3xl">
            From pristine beaches to cultural landmarks, Hikari offers a diverse range of attractions for every type of
            traveler. Explore our island's treasures and create memories that will last a lifetime.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Attraction Card 1 */}
            <div className="group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Togetsu Harbor"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-emerald-600 mr-2" />
                  <h3 className="font-bold">Togetsu Harbor</h3>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  The bustling heart of our capital city, where traditional fishing boats dock alongside modern yachts.
                  Enjoy fresh seafood restaurants and artisan shops along the waterfront.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Open daily, best at sunset</span>
                </div>
              </div>
            </div>

            {/* Attraction Card 2 */}
            <div className="group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Mount Hikari"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-emerald-600 mr-2" />
                  <h3 className="font-bold">Mount Hikari</h3>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  Our island's highest peak offers breathtaking panoramic views. Hiking trails for all skill levels wind
                  through lush forests to the summit.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Best during spring and fall</span>
                </div>
              </div>
            </div>

            {/* Attraction Card 3 */}
            <div className="group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Hikari Cultural Center"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-emerald-600 mr-2" />
                  <h3 className="font-bold">Hikari Cultural Center</h3>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  Immerse yourself in our island's history and traditions through interactive exhibits, art galleries,
                  and regular cultural performances.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Open Tue-Sun, 9am-5pm</span>
                </div>
              </div>
            </div>

            {/* Attraction Card 4 */}
            <div className="group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Crystal Bay"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-emerald-600 mr-2" />
                  <h3 className="font-bold">Crystal Bay</h3>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  Our most popular beach featuring pristine white sand and crystal-clear waters. Perfect for swimming,
                  snorkeling, and water sports.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Best during summer months</span>
                </div>
              </div>
            </div>

            {/* Attraction Card 5 */}
            <div className="group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Hikari Botanical Gardens"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-emerald-600 mr-2" />
                  <h3 className="font-bold">Hikari Botanical Gardens</h3>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  Explore our extensive collection of native plants and flowers in beautifully landscaped gardens. Don't
                  miss the traditional Japanese section with its serene pond and tea house.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Open daily, 8am-6pm</span>
                </div>
              </div>
            </div>

            {/* Attraction Card 6 */}
            <div className="group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Ancient Temple Complex"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-emerald-600 mr-2" />
                  <h3 className="font-bold">Ancient Temple Complex</h3>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  Visit our historic temples dating back centuries, showcasing traditional Japanese Buddhist
                  architecture and peaceful meditation gardens.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Open daily, 7am-5pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Seasonal Events & Festivals</h2>
          <p className="text-gray-700 mb-8 max-w-3xl">
            Experience the vibrant culture of Hikari through our seasonal celebrations and traditional festivals.
          </p>

          <div className="bg-emerald-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Annual Calendar of Events</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold mb-2">Spring (March-May)</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>Cherry Blossom Festival (April)</li>
                  <li>Spring Equinox Ceremonies</li>
                  <li>Coastal Hiking Season</li>
                  <li>Spring Harvest Food Festival</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold mb-2">Summer (June-August)</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>Togetsu Summer Festival (July)</li>
                  <li>Beach Sports Competitions</li>
                  <li>Night Market (Every weekend)</li>
                  <li>Firefly Viewing Tours</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold mb-2">Fall (September-November)</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>Autumn Foliage Tours</li>
                  <li>Harvest Moon Festival</li>
                  <li>Traditional Crafts Fair</li>
                  <li>Culinary Week</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold mb-2">Winter (December-February)</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>Winter Illumination Festival</li>
                  <li>New Year Celebrations</li>
                  <li>Hot Spring Experiences</li>
                  <li>Winter Seafood Season</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Cultural Experiences</h2>
          <p className="text-gray-700 mb-8 max-w-3xl">
            Immerse yourself in the unique culture of Hikari through these authentic experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Traditional Crafts Workshops</h3>
              <p className="text-gray-700 mb-4">
                Learn traditional Hikari crafts from local artisans, including pottery, textile weaving, and paper
                making. Take home your own handmade souvenir.
              </p>
              <Link href="/contact" className="text-emerald-600 hover:underline flex items-center">
                Book a workshop <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Culinary Experiences</h3>
              <p className="text-gray-700 mb-4">
                Join cooking classes to learn how to prepare traditional Hikari dishes using fresh local ingredients, or
                book a food tour to sample the best of our island cuisine.
              </p>
              <Link href="/contact" className="text-emerald-600 hover:underline flex items-center">
                Explore culinary experiences <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Tea Ceremony</h3>
              <p className="text-gray-700 mb-4">
                Experience the tranquility and mindfulness of a traditional Japanese tea ceremony in one of our historic
                tea houses, guided by a certified tea master.
              </p>
              <Link href="/contact" className="text-emerald-600 hover:underline flex items-center">
                Reserve a tea ceremony <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Traditional Performances</h3>
              <p className="text-gray-700 mb-4">
                Attend performances of traditional music, dance, and theater that showcase the rich cultural heritage of
                Hikari and its Japanese influences.
              </p>
              <Link href="/contact" className="text-emerald-600 hover:underline flex items-center">
                View performance schedule <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Hikari?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">Start planning your perfect Hikari adventure today.</p>
          <Link
            href="/plan"
            className="bg-emerald-600 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-700 transition"
          >
            Plan Your Visit
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
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
                  <Link href="/" className="text-gray-400 hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition">
                    About Hikari
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

