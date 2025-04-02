import Image from "next/image"
import Link from "next/link"
import { MapPin, Calendar } from "lucide-react"

export default function AttractionsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Attractions in Hikari</h1>
      <p className="text-foreground/80 mb-12 max-w-3xl">
        Discover the many wonders of Hikari Island, from natural landscapes to cultural landmarks. Our island offers a
        diverse range of experiences for every type of traveler.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Attraction Card 1 */}
        <div className="group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-card">
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
            <p className="text-foreground/80 text-sm mb-4">
              The bustling heart of our capital city, where traditional fishing boats dock alongside modern yachts.
              Enjoy fresh seafood restaurants and artisan shops along the waterfront.
            </p>
            <div className="flex items-center text-sm text-foreground/60">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Open daily, best at sunset</span>
            </div>
          </div>
        </div>

        {/* Attraction Card 2 */}
        <div className="group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-card">
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
            <p className="text-foreground/80 text-sm mb-4">
              Our island's highest peak offers breathtaking panoramic views. Hiking trails for all skill levels wind
              through lush forests to the summit.
            </p>
            <div className="flex items-center text-sm text-foreground/60">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Best during spring and fall</span>
            </div>
          </div>
        </div>

        {/* Attraction Card 3 */}
        <div className="group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-card">
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
            <p className="text-foreground/80 text-sm mb-4">
              Immerse yourself in our island's history and traditions through interactive exhibits, art galleries, and
              regular cultural performances.
            </p>
            <div className="flex items-center text-sm text-foreground/60">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Open Tue-Sun, 9am-5pm</span>
            </div>
          </div>
        </div>

        {/* Attraction Card 4 */}
        <div className="group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-card">
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
            <p className="text-foreground/80 text-sm mb-4">
              Our most popular beach featuring pristine white sand and crystal-clear waters. Perfect for swimming,
              snorkeling, and water sports.
            </p>
            <div className="flex items-center text-sm text-foreground/60">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Best during summer months</span>
            </div>
          </div>
        </div>

        {/* Attraction Card 5 */}
        <div className="group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-card">
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
            <p className="text-foreground/80 text-sm mb-4">
              Explore our extensive collection of native plants and flowers in beautifully landscaped gardens. Don't
              miss the traditional Japanese section with its serene pond and tea house.
            </p>
            <div className="flex items-center text-sm text-foreground/60">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Open daily, 8am-6pm</span>
            </div>
          </div>
        </div>

        {/* Attraction Card 6 */}
        <div className="group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-card">
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
            <p className="text-foreground/80 text-sm mb-4">
              Visit our historic temples dating back centuries, showcasing traditional Japanese Buddhist architecture
              and peaceful meditation gardens.
            </p>
            <div className="flex items-center text-sm text-foreground/60">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Open daily, 7am-5pm</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-accent p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-4">Seasonal Attractions</h2>
        <p className="text-foreground/80 mb-6">
          Hikari Island offers unique experiences throughout the year. Plan your visit to coincide with these seasonal
          highlights:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg">
            <h3 className="font-bold mb-2">Spring (March-May)</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>Cherry Blossom Festival (April)</li>
              <li>Spring Equinox Ceremonies</li>
              <li>Coastal Hiking Season</li>
              <li>Spring Harvest Food Festival</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg">
            <h3 className="font-bold mb-2">Summer (June-August)</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>Togetsu Summer Festival (July)</li>
              <li>Beach Sports Competitions</li>
              <li>Night Market (Every weekend)</li>
              <li>Firefly Viewing Tours</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg">
            <h3 className="font-bold mb-2">Fall (September-November)</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>Autumn Foliage Tours</li>
              <li>Harvest Moon Festival</li>
              <li>Traditional Crafts Fair</li>
              <li>Culinary Week</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg">
            <h3 className="font-bold mb-2">Winter (December-February)</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>Winter Illumination Festival</li>
              <li>New Year Celebrations</li>
              <li>Hot Spring Experiences</li>
              <li>Winter Seafood Season</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Ready to Experience Hikari?</h2>
        <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
          Our tourism office can help you plan the perfect itinerary based on your interests and the length of your
          stay.
        </p>
        <Link
          href="/contact"
          className="bg-emerald-600 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-700 transition"
        >
          Contact Us to Plan Your Visit
        </Link>
      </div>
    </div>
  )
}

