import Image from "next/image"
import Link from "next/link"
import { Calendar, Utensils, Paintbrush, BookOpen, Gift } from "lucide-react"

export default function CulturePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Traditional Hikari cultural ceremony"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Culture & Customs</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
            Discover the rich cultural heritage and traditions of Hikari Island
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">The Unique Culture of Hikari</h2>
          <p className="text-foreground/80 mb-4">
            Hikari's culture represents a fascinating blend of traditional Japanese influences and unique local
            traditions that have evolved over centuries. As an island nation with strong ties to Japan, Hikari has
            developed its own distinct cultural identity while preserving important elements of its heritage.
          </p>
          <p className="text-foreground/80 mb-4">
            Visitors to Hikari often remark on the harmonious way traditional customs coexist with modern innovations.
            This cultural duality is evident in our architecture, cuisine, arts, and daily life, creating a rich
            tapestry of experiences for travelers to explore.
          </p>
          <p className="text-foreground/80">
            This guide will help you understand and appreciate the cultural nuances of Hikari, ensuring a more
            meaningful and respectful visit to our island.
          </p>
        </div>

        {/* Etiquette & Customs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Essential Etiquette & Customs</h2>
          <p className="text-foreground/80 mb-8 text-center max-w-3xl mx-auto">
            Understanding these basic customs will help you navigate social situations and show respect for local
            traditions during your visit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-4">Greetings & Social Interactions</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start">
                  <span className="font-medium mr-2">Bowing:</span>
                  <span>
                    The traditional greeting is a bow, with depth indicating respect level. A slight nod is acceptable
                    for tourists, but deeper bows show greater respect.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Handshakes:</span>
                  <span>
                    While bowing is traditional, handshakes are increasingly common in business and with tourists.
                    Follow the local person's lead.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Personal Space:</span>
                  <span>
                    Hikari culture values personal space and modest physical contact. Avoid excessive touching or overly
                    familiar behavior with new acquaintances.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Business Cards:</span>
                  <span>
                    If exchanging business cards, offer and receive with both hands and a slight bow. Take a moment to
                    read the card before putting it away.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-4">Dining Etiquette</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start">
                  <span className="font-medium mr-2">Chopsticks:</span>
                  <span>
                    Never stick chopsticks upright in rice (resembles funeral rituals) or pass food directly from
                    chopsticks to chopsticks.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Before Eating:</span>
                  <span>Say "Itadakimasu" (I gratefully receive) before beginning a meal.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Slurping:</span>
                  <span>
                    Unlike Western customs, slurping noodles is acceptable and even shows appreciation for the food.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Pouring Drinks:</span>
                  <span>It's customary to pour drinks for others, not yourself. Your companions will reciprocate.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Tipping:</span>
                  <span>
                    Following Japanese custom, tipping is not expected or necessary in restaurants or for services.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-4">Visiting Temples & Shrines</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start">
                  <span className="font-medium mr-2">Purification:</span>
                  <span>
                    Use the water pavilion (chōzuya) at the entrance to rinse your hands and mouth before entering.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Shoes:</span>
                  <span>
                    Remove shoes when entering temple buildings. Look for shoe racks or slippers provided for visitors.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Photography:</span>
                  <span>
                    Always check if photography is permitted. Many sacred areas prohibit photos, especially of certain
                    artifacts.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Respect:</span>
                  <span>
                    Speak quietly and avoid touching religious objects or artifacts. Follow any specific instructions
                    posted at each site.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-4">General Customs</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start">
                  <span className="font-medium mr-2">Shoes:</span>
                  <span>
                    Remove shoes when entering homes, traditional ryokans, and some restaurants. Look for shoe racks or
                    slippers at entrances.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Gifts:</span>
                  <span>
                    If invited to a local's home, bringing a small gift is appreciated. Gifts should be wrapped and
                    presented with both hands.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Public Behavior:</span>
                  <span>
                    Quietness and orderliness are valued in public spaces. Avoid loud conversations on public
                    transportation.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Masks:</span>
                  <span>
                    Wearing masks when ill is a common courtesy in Hikari, as in Japan. This practice predates recent
                    global health concerns and is considered respectful.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Punctuality:</span>
                  <span>
                    Being on time is highly valued. Arrive a few minutes early for appointments, tours, or reservations.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Festivals & Celebrations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Festivals & Celebrations</h2>
          <p className="text-foreground/80 mb-8 max-w-3xl">
            Hikari's calendar is filled with vibrant festivals and celebrations that showcase our cultural heritage.
            These events offer visitors a unique opportunity to experience local traditions, music, dance, and cuisine.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Cherry Blossom Festival in Hikari"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 text-emerald-600 mr-2" />
                  <h3 className="font-bold">Cherry Blossom Festival</h3>
                </div>
                <p className="text-foreground/80 text-sm mb-2">April | Togetsu Park</p>
                <p className="text-foreground/80 text-sm">
                  Celebrate the blooming of cherry blossoms with traditional music, dance performances, and food stalls
                  throughout the park.
                </p>
              </div>
            </div>

            <div className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Togetsu Summer Festival"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 text-emerald-600 mr-2" />
                  <h3 className="font-bold">Togetsu Summer Festival</h3>
                </div>
                <p className="text-foreground/80 text-sm mb-2">July | Togetsu Harbor</p>
                <p className="text-foreground/80 text-sm">
                  Our largest festival featuring parades, fireworks, traditional boat races, and performances throughout
                  the capital city.
                </p>
              </div>
            </div>

            <div className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Harvest Moon Festival"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 text-emerald-600 mr-2" />
                  <h3 className="font-bold">Harvest Moon Festival</h3>
                </div>
                <p className="text-foreground/80 text-sm mb-2">September | Island-wide</p>
                <p className="text-foreground/80 text-sm">
                  A celebration of the autumn harvest with traditional ceremonies, agricultural displays, and special
                  moon-viewing events.
                </p>
              </div>
            </div>

            <div className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Winter Illumination Festival"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 text-emerald-600 mr-2" />
                  <h3 className="font-bold">Winter Illumination</h3>
                </div>
                <p className="text-foreground/80 text-sm mb-2">December-January | Togetsu</p>
                <p className="text-foreground/80 text-sm">
                  Experience the magic of winter with spectacular light displays, ice sculptures, and seasonal
                  performances throughout the city.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-accent text-accent-foreground p-6 rounded-lg">
            <div className="flex items-start">
              <Calendar className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
              <p className="text-sm text-foreground/80">
                For a complete calendar of festivals and cultural events, visit the{" "}
                <Link href="/explore" className="text-emerald-600 hover:underline">
                  Explore page
                </Link>{" "}
                or contact the Hikari Tourism Office for the most up-to-date information.
              </p>
            </div>
          </div>
        </div>

        {/* Arts & Crafts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Traditional Arts & Crafts</h2>
          <p className="text-foreground/80 mb-8 max-w-3xl">
            Hikari has a rich tradition of arts and crafts that blend Japanese techniques with unique local influences.
            Many of these traditional crafts are still practiced today, and visitors can observe artisans at work or
            participate in workshops.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border border-border">
              <div className="flex items-center mb-4">
                <Paintbrush className="h-5 w-5 text-emerald-600 mr-2" />
                <h3 className="text-xl font-bold">Hikari Pottery</h3>
              </div>
              <p className="text-foreground/80 mb-4">
                Known for its distinctive emerald glazes derived from local minerals, Hikari pottery combines
                traditional Japanese techniques with unique island aesthetics. The coastal town of Minato is famous for
                its pottery studios and workshops.
              </p>
              <p className="text-foreground/80">
                <span className="font-medium">Where to experience:</span> Minato Pottery Village, Hikari Cultural Center
              </p>
            </div>

            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border border-border">
              <div className="flex items-center mb-4">
                <Paintbrush className="h-5 w-5 text-emerald-600 mr-2" />
                <h3 className="text-xl font-bold">Textile Weaving</h3>
              </div>
              <p className="text-foreground/80 mb-4">
                Hikari's textile tradition features intricate patterns inspired by the island's natural landscapes.
                Local weavers use both traditional looms and modern techniques to create beautiful fabrics, often
                incorporating the island's native plants for natural dyes.
              </p>
              <p className="text-foreground/80">
                <span className="font-medium">Where to experience:</span> Traditional Crafts Museum, Mountain Village
                Workshops
              </p>
            </div>

            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border border-border">
              <div className="flex items-center mb-4">
                <Paintbrush className="h-5 w-5 text-emerald-600 mr-2" />
                <h3 className="text-xl font-bold">Paper Making</h3>
              </div>
              <p className="text-foreground/80 mb-4">
                Similar to Japanese washi, Hikari paper is renowned for its durability and beauty. Made from local plant
                fibers, this traditional paper is used for calligraphy, art, and practical items like lamps and screens.
              </p>
              <p className="text-foreground/80">
                <span className="font-medium">Where to experience:</span> Paper Craft Center, Hikari Cultural Center
              </p>
            </div>
          </div>
        </div>

        {/* Cuisine */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Culinary Traditions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
            <div>
              <p className="text-foreground/80 mb-4">
                Hikari cuisine represents a fascinating fusion of traditional Japanese cooking techniques with local
                ingredients and influences. The island's location provides abundant seafood, while the fertile volcanic
                soil produces excellent rice, vegetables, and tea.
              </p>
              <p className="text-foreground/80 mb-4">
                Meals in Hikari follow the Japanese aesthetic of balance and seasonality, with careful attention to
                presentation and the use of fresh, local ingredients. Each region of the island has its own specialties,
                reflecting the local environment and cultural influences.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Utensils className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Signature Dishes</h4>
                    <ul className="list-disc pl-5 space-y-1 text-foreground/80 mt-2">
                      <li>Hikari-style Sushi - Featuring unique local seafood and mountain vegetables</li>
                      <li>Emerald Tea - A distinctive green tea grown in the mountain regions</li>
                      <li>Seafood Hot Pot - A communal dish with seasonal seafood and vegetables</li>
                      <li>Island Rice Cakes - Sweet treats made with local rice and filled with bean paste</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Traditional Hikari cuisine"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border border-border mb-8">
            <h3 className="text-xl font-bold mb-4">Dining Customs</h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start">
                <span className="font-medium mr-2">Meal Structure:</span>
                <span>
                  Traditional meals consist of rice, a main dish, and several side dishes, all served together rather
                  than in courses.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Seasonal Focus:</span>
                <span>
                  Menus change with the seasons, highlighting the freshest available ingredients. Asking for seasonal
                  specialties is appreciated by chefs.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Tea Culture:</span>
                <span>
                  Green tea is served with most meals. Hikari's special emerald tea is a local specialty worth trying.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Communal Dining:</span>
                <span>
                  Many dishes are designed to be shared. It's common for groups to order several dishes and share them
                  among the table.
                </span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link href="/contact" className="inline-flex items-center text-emerald-600 font-medium hover:underline">
              Book a culinary experience or cooking class <Calendar className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Language */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Language</h2>
          <p className="text-foreground/80 mb-6 max-w-3xl">
            The official language of Hikari is Japanese, with some unique local dialects and expressions. While English
            is widely spoken in tourist areas, learning a few basic Japanese phrases will enhance your experience and
            show respect for the local culture.
          </p>

          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border border-border mb-8">
            <div className="flex items-center mb-4">
              <BookOpen className="h-5 w-5 text-emerald-600 mr-2" />
              <h3 className="text-xl font-bold">Useful Phrases</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex justify-between">
                    <span className="font-medium">Hello:</span>
                    <span>Konnichiwa</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Thank you:</span>
                    <span>Arigatou gozaimasu</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Please:</span>
                    <span>Onegaishimasu</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Excuse me:</span>
                    <span>Sumimasen</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Yes:</span>
                    <span>Hai</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex justify-between">
                    <span className="font-medium">No:</span>
                    <span>Iie</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Delicious:</span>
                    <span>Oishii</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Beautiful:</span>
                    <span>Kirei</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Where is...?:</span>
                    <span>...wa doko desu ka?</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">How much?:</span>
                    <span>Ikura desu ka?</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-accent text-accent-foreground p-6 rounded-lg">
            <div className="flex items-start">
              <BookOpen className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
              <p className="text-sm text-foreground/80">
                The Hikari Tourism Office provides free language guides for visitors. You can pick one up at the
                airport, ferry terminal, or any tourism information center.
              </p>
            </div>
          </div>
        </div>

        {/* Souvenirs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Traditional Souvenirs</h2>
          <p className="text-foreground/80 mb-8 max-w-3xl">
            Take home a piece of Hikari's culture with these traditional souvenirs, each representing an aspect of our
            island's heritage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border border-border">
              <div className="flex items-center mb-3">
                <Gift className="h-5 w-5 text-emerald-600 mr-2" />
                <h3 className="font-bold">Hikari Pottery</h3>
              </div>
              <p className="text-foreground/80 text-sm mb-2">
                Tea sets, vases, and decorative items featuring the distinctive emerald glazes unique to our island.
              </p>
              <p className="text-foreground/60 text-sm">
                Where to buy: Minato Pottery Village, Hikari Cultural Center Shop, Togetsu Market
              </p>
            </div>

            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border border-border">
              <div className="flex items-center mb-3">
                <Gift className="h-5 w-5 text-emerald-600 mr-2" />
                <h3 className="font-bold">Emerald Tea</h3>
              </div>
              <p className="text-foreground/80 text-sm mb-2">
                Our specialty green tea grown in the mountain regions, known for its unique flavor and health benefits.
              </p>
              <p className="text-foreground/60 text-sm">
                Where to buy: Tea specialty shops, Hikari Botanical Gardens Shop, Togetsu Market
              </p>
            </div>

            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border border-border">
              <div className="flex items-center mb-3">
                <Gift className="h-5 w-5 text-emerald-600 mr-2" />
                <h3 className="font-bold">Handwoven Textiles</h3>
              </div>
              <p className="text-foreground/80 text-sm mb-2">
                Scarves, table linens, and decorative items made with traditional weaving techniques and natural dyes.
              </p>
              <p className="text-foreground/60 text-sm">
                Where to buy: Traditional Crafts Museum Shop, Mountain Village Workshops, Togetsu Department Stores
              </p>
            </div>

            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border border-border">
              <div className="flex items-center mb-3">
                <Gift className="h-5 w-5 text-emerald-600 mr-2" />
                <h3 className="font-bold">Handmade Paper Products</h3>
              </div>
              <p className="text-foreground/80 text-sm mb-2">
                Stationery, lamps, screens, and art pieces made from traditional Hikari paper.
              </p>
              <p className="text-foreground/60 text-sm">
                Where to buy: Paper Craft Center, Hikari Cultural Center Shop, Artisan Boutiques
              </p>
            </div>

            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border border-border">
              <div className="flex items-center mb-3">
                <Gift className="h-5 w-5 text-emerald-600 mr-2" />
                <h3 className="font-bold">Culinary Gifts</h3>
              </div>
              <p className="text-foreground/80 text-sm mb-2">
                Local specialties like preserved seafood, sweets, and cooking ingredients that showcase Hikari's unique
                flavors.
              </p>
              <p className="text-foreground/60 text-sm">
                Where to buy: Togetsu Market, Food Specialty Shops, Department Store Food Halls
              </p>
            </div>

            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border border-border">
              <div className="flex items-center mb-3">
                <Gift className="h-5 w-5 text-emerald-600 mr-2" />
                <h3 className="font-bold">Traditional Crafts</h3>
              </div>
              <p className="text-foreground/80 text-sm mb-2">
                Wooden carvings, bamboo items, and other handcrafted goods that represent Hikari's artistic traditions.
              </p>
              <p className="text-foreground/60 text-sm">
                Where to buy: Artisan Workshops, Hikari Cultural Center Shop, Togetsu Market
              </p>
            </div>
          </div>
        </div>

        {/* Cultural Experiences */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Immersive Cultural Experiences</h2>
          <p className="text-foreground/80 mb-8 text-center max-w-3xl mx-auto">
            Enhance your visit with these authentic cultural experiences that allow you to engage more deeply with
            Hikari's traditions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Tea ceremony in Hikari"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3">Traditional Tea Ceremony</h3>
                <p className="text-foreground/80 mb-4">
                  Experience the tranquility and mindfulness of a traditional Japanese tea ceremony in one of our
                  historic tea houses, guided by a certified tea master.
                </p>
                <Link href="/contact" className="text-emerald-600 hover:underline flex items-center">
                  Book a tea ceremony experience
                </Link>
              </div>
            </div>

            <div className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Pottery workshop in Hikari"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3">Artisan Workshops</h3>
                <p className="text-foreground/80 mb-4">
                  Learn traditional crafts from local artisans, including pottery, textile weaving, and paper making.
                  Create your own handmade souvenir to take home.
                </p>
                <Link href="/contact" className="text-emerald-600 hover:underline flex items-center">
                  Find available workshops
                </Link>
              </div>
            </div>

            <div className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Cooking class in Hikari"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3">Cooking Classes</h3>
                <p className="text-foreground/80 mb-4">
                  Join cooking classes to learn how to prepare traditional Hikari dishes using fresh local ingredients.
                  Classes range from basic to advanced levels.
                </p>
                <Link href="/contact" className="text-emerald-600 hover:underline flex items-center">
                  Book a culinary experience
                </Link>
              </div>
            </div>

            <div className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Traditional performance in Hikari"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3">Cultural Performances</h3>
                <p className="text-foreground/80 mb-4">
                  Attend performances of traditional music, dance, and theater that showcase the rich cultural heritage
                  of Hikari and its Japanese influences.
                </p>
                <Link href="/contact" className="text-emerald-600 hover:underline flex items-center">
                  View performance schedule
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Experience the Culture of Hikari</h2>
          <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
            Our tourism office can help you plan cultural experiences that match your interests and schedule.
          </p>
          <Link
            href="/contact"
            className="bg-emerald-600 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-700 transition"
          >
            Contact Us to Plan Your Cultural Experience
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
                  <Link href="/plan" className="text-gray-400 hover:text-white transition">
                    Plan Your Visit
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
                  <Link href="/faq" className="text-gray-400 hover:text-white transition">
                    FAQs
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

