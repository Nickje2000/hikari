import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Plane, Ship, Hotel, Utensils, Car, CreditCard } from "lucide-react"

export default function PlanPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Planning a trip to Hikari"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Plan Your Visit</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
            Everything you need to know to plan the perfect Hikari Island getaway
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Getting to Hikari</h2>
          <p className="text-gray-700 mb-8 max-w-3xl">
            Hikari Island is accessible by both air and sea, with regular connections from mainland Japan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <Plane className="h-6 w-6 text-emerald-600 mr-3" />
                <h3 className="text-xl font-bold">By Air</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Togetsu International Airport (TGI) serves as the main gateway to Hikari Island, with daily flights
                from:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
                <li>Tokyo (Narita and Haneda) - 2 hour flight</li>
                <li>Osaka (Kansai) - 1.5 hour flight</li>
                <li>Fukuoka - 1 hour flight</li>
                <li>Seoul, South Korea - 2.5 hour flight</li>
              </ul>
              <p className="text-gray-700">
                The airport is located 20 minutes from downtown Togetsu, with taxi and shuttle services available.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <Ship className="h-6 w-6 text-emerald-600 mr-3" />
                <h3 className="text-xl font-bold">By Sea</h3>
              </div>
              <p className="text-gray-700 mb-4">Ferry services connect Hikari to several ports in western Japan:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
                <li>Fukuoka - 4 hour journey</li>
                <li>Matsue - 3 hour journey</li>
                <li>Niigata - 5 hour journey</li>
              </ul>
              <p className="text-gray-700">
                Ferries arrive at Togetsu Harbor in the heart of the capital city. Both passenger and vehicle ferries
                are available.
              </p>
            </div>
          </div>

          <div className="bg-emerald-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-3">Travel Tips</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                Book flights and ferries in advance, especially during peak tourist seasons (April-May and July-August).
              </li>
              <li>Consider purchasing the Hikari Travel Pass for discounted transportation within the island.</li>
              <li>Check weather conditions before traveling, especially if taking the ferry during winter months.</li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Accommodation</h2>
          <p className="text-gray-700 mb-8 max-w-3xl">
            Hikari offers a wide range of accommodation options to suit every preference and budget.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Luxury resort in Hikari"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Hotel className="h-5 w-5 text-emerald-600 mr-2" />
                  <h3 className="font-bold">Luxury Resorts</h3>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  Five-star beachfront properties with world-class amenities, spas, and fine dining. Most are located
                  along the eastern coast.
                </p>
                <p className="text-sm text-gray-500">Price range: ¥30,000-60,000 per night</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Traditional ryokan in Hikari"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Hotel className="h-5 w-5 text-emerald-600 mr-2" />
                  <h3 className="font-bold">Traditional Ryokans</h3>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  Authentic Japanese inns offering tatami rooms, futon bedding, and traditional cuisine. Many include
                  onsen (hot spring) facilities.
                </p>
                <p className="text-sm text-gray-500">Price range: ¥15,000-40,000 per night</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Budget accommodation in Hikari"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Hotel className="h-5 w-5 text-emerald-600 mr-2" />
                  <h3 className="font-bold">Budget Options</h3>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  Hostels, guesthouses, and budget hotels offering comfortable accommodations for travelers watching
                  their expenses.
                </p>
                <p className="text-sm text-gray-500">Price range: ¥5,000-15,000 per night</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-3">Accommodation Tips</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Book accommodations at least 3 months in advance for peak seasons.</li>
              <li>Many ryokans include breakfast and dinner in their rates.</li>
              <li>Consider staying in different areas of the island to experience its diverse landscapes.</li>
              <li>Ask about special packages that include tours or cultural experiences.</li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Getting Around</h2>
          <p className="text-gray-700 mb-8 max-w-3xl">
            Hikari Island offers various transportation options to help you explore all it has to offer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <Car className="h-5 w-5 text-emerald-600 mr-2" />
                <h3 className="font-bold">Rental Cars</h3>
              </div>
              <p className="text-gray-700 mb-2">
                The most flexible way to explore the island. Rental agencies are available at the airport and in
                Togetsu.
              </p>
              <p className="text-sm text-gray-500">International driving permit required for foreign visitors.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <MapPin className="h-5 w-5 text-emerald-600 mr-2" />
                <h3 className="font-bold">Public Transportation</h3>
              </div>
              <p className="text-gray-700 mb-2">
                Efficient bus network connecting major towns and attractions. Trains run along the eastern coast.
              </p>
              <p className="text-sm text-gray-500">
                The Hikari Travel Pass offers unlimited travel for 3, 5, or 7 days.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <MapPin className="h-5 w-5 text-emerald-600 mr-2" />
                <h3 className="font-bold">Taxis & Ride Services</h3>
              </div>
              <p className="text-gray-700 mb-2">
                Readily available in urban areas. Many hotels offer shuttle services to popular attractions.
              </p>
              <p className="text-sm text-gray-500">Ride-hailing apps are also available throughout the island.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <MapPin className="h-5 w-5 text-emerald-600 mr-2" />
                <h3 className="font-bold">Bicycle Rentals</h3>
              </div>
              <p className="text-gray-700 mb-2">
                A popular option for exploring Togetsu and coastal areas. Many hotels offer bicycle rentals.
              </p>
              <p className="text-sm text-gray-500">Dedicated cycling paths are available in many areas.</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Sample Itineraries</h2>
          <p className="text-gray-700 mb-8 max-w-3xl">
            Here are some suggested itineraries to help you make the most of your visit to Hikari Island.
          </p>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4">3-Day Highlights Tour</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-emerald-700">Day 1: Togetsu Exploration</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Morning: Visit Togetsu Harbor and the Historic District</li>
                    <li>Afternoon: Explore the Hikari Cultural Center</li>
                    <li>Evening: Dinner at a traditional restaurant in downtown Togetsu</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-700">Day 2: Natural Wonders</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Morning: Hike the lower trails of Mount Hikari</li>
                    <li>Afternoon: Relax at Crystal Bay Beach</li>
                    <li>Evening: Seafood dinner at a coastal restaurant</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-700">Day 3: Cultural Immersion</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Morning: Visit the Ancient Temple Complex</li>
                    <li>Afternoon: Traditional craft workshop</li>
                    <li>Evening: Farewell dinner with cultural performance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4">5-Day Comprehensive Tour</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-emerald-700">Days 1-2: Togetsu and Surroundings</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Explore the capital city's attractions</li>
                    <li>Visit the Hikari Botanical Gardens</li>
                    <li>Enjoy the nightlife and culinary scene</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-700">Days 3-4: Coastal Exploration</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Beach hopping along the eastern coast</li>
                    <li>Water sports and snorkeling</li>
                    <li>Visit fishing villages and sample fresh seafood</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-700">Day 5: Mountain Region</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Full-day excursion to Mount Hikari</li>
                    <li>Visit mountain temples and hot springs</li>
                    <li>Farewell dinner with panoramic views</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practical Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <CreditCard className="h-5 w-5 text-emerald-600 mr-2" />
                <h3 className="font-bold">Currency & Payment</h3>
              </div>
              <p className="text-gray-700 mb-2">
                The local currency is the Togetsuen (¥). Major credit cards are widely accepted in urban areas, but it's
                advisable to carry cash for rural locations.
              </p>
              <p className="text-sm text-gray-700">ATMs are available at the airport, banks, and convenience stores.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <Calendar className="h-5 w-5 text-emerald-600 mr-2" />
                <h3 className="font-bold">Best Time to Visit</h3>
              </div>
              <p className="text-gray-700 mb-2">
                Spring (March-May) and fall (September-November) offer mild weather and fewer crowds. Summer
                (June-August) is ideal for beach activities but can be crowded.
              </p>
              <p className="text-sm text-gray-700">
                Winter (December-February) is quieter but some attractions may have limited hours.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <Utensils className="h-5 w-5 text-emerald-600 mr-2" />
                <h3 className="font-bold">Dining</h3>
              </div>
              <p className="text-gray-700 mb-2">
                Hikari cuisine blends traditional Japanese flavors with local ingredients. Seafood is a specialty,
                particularly in coastal areas.
              </p>
              <p className="text-sm text-gray-700">
                Vegetarian options are available in most restaurants, especially in Togetsu.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <MapPin className="h-5 w-5 text-emerald-600 mr-2" />
                <h3 className="font-bold">Language</h3>
              </div>
              <p className="text-gray-700 mb-2">
                Japanese is the official language. English is spoken in tourist areas, hotels, and major attractions.
              </p>
              <p className="text-sm text-gray-700">
                Translation apps and pocket dictionaries can be helpful for exploring off the beaten path.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Book Your Hikari Adventure?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Our tourism office can help you customize your perfect itinerary and make all necessary arrangements.
          </p>
          <Link
            href="/contact"
            className="bg-emerald-600 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-700 transition"
          >
            Contact Our Tourism Office
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
                  <Link href="/explore" className="text-gray-400 hover:text-white transition">
                    Explore
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

