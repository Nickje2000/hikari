import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Hikari Island FAQ"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
            Everything you need to know about visiting Hikari Island
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">General Information</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6 bg-card text-foreground">
                <AccordionTrigger className="text-lg font-medium py-4">
                  Where is Hikari Island located?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  <p className="text-foreground/80 mb-4">
                    Hikari Island is located in the Japanese Sea, northwest of mainland Japan. It's approximately a
                    2-hour flight from Tokyo or a 3-5 hour ferry ride from various ports in western Japan.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6 bg-card text-foreground">
                <AccordionTrigger className="text-lg font-medium py-4">
                  What is the best time to visit Hikari?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  <p className="text-foreground/80 mb-4">
                    Hikari enjoys a temperate climate with four distinct seasons. Spring (March-May) and fall
                    (September-November) offer mild weather and beautiful natural scenery. Summer (June-August) is
                    perfect for beach activities, while winter (December-February) is quieter but still offers unique
                    experiences like hot springs and winter festivals.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6 bg-card text-foreground">
                <AccordionTrigger className="text-lg font-medium py-4">
                  What language is spoken in Hikari?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  <p className="text-foreground/80 mb-4">
                    The official language is Japanese. However, English is widely spoken in tourist areas, major hotels,
                    and attractions. Many signs and menus in tourist areas are available in both Japanese and English.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6 bg-card text-foreground">
                <AccordionTrigger className="text-lg font-medium py-4">
                  What currency is used in Hikari?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  <p className="text-foreground/80 mb-4">
                    The local currency is the Togetsuen (¥), which is pegged to the Japanese Yen at a 1:1 ratio.
                    Japanese Yen is also widely accepted throughout the island. Major credit cards are accepted in most
                    establishments in urban areas, but it's advisable to carry cash when visiting rural locations.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Travel & Transportation</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="travel-1" className="border rounded-lg px-6 bg-card text-foreground">
                <AccordionTrigger className="text-lg font-medium py-4">
                  Do I need a visa to visit Hikari?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  <p className="text-foreground/80 mb-4">
                    Visa requirements for Hikari follow the same rules as mainland Japan. Visitors from many countries
                    can stay for up to 90 days without a visa for tourism purposes. Please check with your nearest
                    Japanese embassy or consulate for specific requirements based on your nationality.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="travel-2" className="border rounded-lg px-6 bg-card text-foreground">
                <AccordionTrigger className="text-lg font-medium py-4">How do I get to Hikari Island?</AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  <p className="text-foreground/80 mb-2">There are two main ways to reach Hikari:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      By Air: Togetsu International Airport (TGI) offers daily flights from Tokyo, Osaka, and other
                      major Japanese cities.
                    </li>
                    <li>
                      By Sea: Regular ferry services operate from several ports in western Japan, including Fukuoka,
                      Matsue, and Niigata.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="travel-3" className="border rounded-lg px-6 bg-card text-foreground">
                <AccordionTrigger className="text-lg font-medium py-4">
                  What's the best way to get around the island?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  <p className="text-foreground/80 mb-2">Hikari offers several transportation options:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Public Transportation: An efficient network of buses and trains connects major towns and
                      attractions.
                    </li>
                    <li>
                      Rental Cars: Available at the airport and in Togetsu (international driving permit required).
                    </li>
                    <li>Taxis and Ride Services: Readily available in urban areas.</li>
                    <li>Bicycles: A popular option for exploring Togetsu and coastal areas.</li>
                  </ul>
                  <p className="text-foreground/80 mt-2">
                    The Hikari Travel Pass offers unlimited use of public transportation for 3, 5, or 7 days and is
                    recommended for tourists.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="travel-4" className="border rounded-lg px-6 bg-card text-foreground">
                <AccordionTrigger className="text-lg font-medium py-4">
                  Is Hikari Island accessible for people with disabilities?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  <p className="text-foreground/80 mb-4">
                    Major attractions, hotels, and transportation hubs in Hikari are equipped with accessibility
                    features. Public buses have wheelchair access, and many hotels offer accessible rooms. The Hikari
                    Tourism Office can provide specific information about accessible attractions and services. We
                    recommend contacting them in advance to help plan your visit.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Accommodation & Dining</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="accom-1" className="border rounded-lg px-6 bg-card text-foreground">
                <AccordionTrigger className="text-lg font-medium py-4">
                  What types of accommodation are available in Hikari?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  <p className="text-foreground/80 mb-2">Hikari offers a wide range of accommodation options:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Luxury Resorts: Five-star beachfront properties with world-class amenities.</li>
                    <li>Traditional Ryokans: Authentic Japanese inns with tatami rooms and traditional cuisine.</li>
                    <li>Boutique Hotels: Charming accommodations in urban and scenic locations.</li>
                    <li>Budget Options: Hostels, guesthouses, and budget hotels for travelers on a budget.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="accom-2" className="border rounded-lg px-6 bg-card text-foreground">
                <AccordionTrigger className="text-lg font-medium py-4">
                  When should I book my accommodation?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  <p className="text-foreground/80 mb-4">
                    We recommend booking accommodations at least 3 months in advance, especially if you plan to visit
                    during peak seasons (cherry blossom season in April, summer months of July-August, and autumn
                    foliage in November). For major festivals and holidays, booking 6 months in advance is advisable.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="accom-3" className="border rounded-lg px-6 bg-card text-foreground">
                <AccordionTrigger className="text-lg font-medium py-4">What is Hikari cuisine like?</AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  <p className="text-foreground/80 mb-4">
                    Hikari cuisine blends traditional Japanese cooking techniques with local ingredients. Seafood is a
                    specialty, particularly in coastal areas. The island is known for its fresh fish, unique seaweed
                    varieties, and locally grown rice. Don't miss trying Hikari-style sushi, seafood hot pot, and our
                    famous green tea desserts.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="accom-4" className="border rounded-lg px-6 bg-card text-foreground">
                <AccordionTrigger className="text-lg font-medium py-4">
                  Are there vegetarian/vegan dining options?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  <p className="text-foreground/80 mb-4">
                    Yes, vegetarian and vegan options are increasingly available, especially in Togetsu and tourist
                    areas. Many restaurants offer plant-based versions of traditional dishes, and there are several
                    dedicated vegetarian restaurants on the island. It's helpful to learn basic phrases to communicate
                    dietary restrictions or look for restaurants with English menus.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Activities & Attractions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="act-1" className="border rounded-lg px-6 bg-card text-foreground">
                <AccordionTrigger className="text-lg font-medium py-4">
                  What are the must-see attractions in Hikari?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  <p className="text-foreground/80 mb-2">Top attractions include:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Togetsu Harbor and Historic District</li>
                    <li>Mount Hikari and its hiking trails</li>
                    <li>Crystal Bay Beach</li>
                    <li>Hikari Cultural Center</li>
                    <li>Ancient Temple Complex</li>
                    <li>Hikari Botanical Gardens</li>
                  </ul>
                  <p className="text-foreground/80 mt-2">
                    Visit our{" "}
                    <Link href="/explore" className="text-emerald-600 hover:underline">
                      Explore page
                    </Link>{" "}
                    for more detailed information.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="act-2" className="border rounded-lg px-6 bg-card text-foreground">
                <AccordionTrigger className="text-lg font-medium py-4">
                  What outdoor activities are available?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  <p className="text-foreground/80 mb-2">Hikari offers numerous outdoor activities:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Hiking and mountain trails</li>
                    <li>Water sports (swimming, snorkeling, kayaking, paddleboarding)</li>
                    <li>Cycling along coastal and mountain routes</li>
                    <li>Fishing excursions</li>
                    <li>Beach activities</li>
                    <li>Nature photography tours</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="act-3" className="border rounded-lg px-6 bg-card text-foreground">
                <AccordionTrigger className="text-lg font-medium py-4">
                  Are there cultural experiences for visitors?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  <p className="text-foreground/80 mb-2">Yes, Hikari offers many cultural experiences:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Traditional craft workshops (pottery, textile weaving, paper making)</li>
                    <li>Tea ceremony experiences</li>
                    <li>Cooking classes featuring local cuisine</li>
                    <li>Traditional music and dance performances</li>
                    <li>Cultural festivals throughout the year</li>
                    <li>Temple visits and meditation sessions</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="act-4" className="border rounded-lg px-6 bg-card text-foreground">
                <AccordionTrigger className="text-lg font-medium py-4">
                  Do I need to book tours in advance?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  <p className="text-foreground/80 mb-4">
                    Popular tours and cultural experiences often sell out, especially during peak tourist seasons. We
                    recommend booking at least 1-2 weeks in advance for most activities, and even earlier for
                    specialized experiences like tea ceremonies or craft workshops. The Hikari Tourism Office can assist
                    with bookings and recommendations.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Practical Information</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="prac-1" className="border rounded-lg px-6 bg-card text-foreground">
                <AccordionTrigger className="text-lg font-medium py-4">
                  Is Hikari Island safe for tourists?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  <p className="text-foreground/80 mb-4">
                    Hikari is known for being one of the safest destinations in the region with very low crime rates. As
                    with any travel destination, we recommend taking standard precautions with your belongings. The
                    island has a well-trained police force and dedicated tourist police who speak English and can assist
                    visitors.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="prac-2" className="border rounded-lg px-6 bg-card text-foreground">
                <AccordionTrigger className="text-lg font-medium py-4">
                  What emergency services are available?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  <p className="text-foreground/80 mb-2">Emergency services include:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Emergency Hotline: 110</li>
                    <li>Ambulance/Medical: 119</li>
                    <li>Fire Department: 119</li>
                    <li>Coast Guard: 118</li>
                    <li>Tourist Helpline (24/7): +81-123-789-456</li>
                  </ul>
                  <p className="text-foreground/80 mt-2">
                    Togetsu General Hospital and the International Medical Center provide comprehensive medical services
                    with English-speaking staff.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="prac-3" className="border rounded-lg px-6 bg-card text-foreground">
                <AccordionTrigger className="text-lg font-medium py-4">
                  Is tipping customary in Hikari?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  <p className="text-foreground/80 mb-4">
                    Following Japanese custom, tipping is not expected or necessary in Hikari. In restaurants, hotels,
                    and taxis, the price you're quoted is the price you pay. Service charges are typically included in
                    bills at high-end establishments. Excellent service is considered standard rather than something
                    that requires additional payment.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="prac-4" className="border rounded-lg px-6 bg-card text-foreground">
                <AccordionTrigger className="text-lg font-medium py-4">
                  What about internet and mobile connectivity?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  <p className="text-foreground/80 mb-4">
                    Hikari has excellent internet and mobile coverage throughout the island. Free Wi-Fi is available in
                    most hotels, restaurants, and public spaces in urban areas. For mobile connectivity, you can rent a
                    pocket Wi-Fi device at the airport or purchase a local SIM card. Major international roaming
                    services also work well on the island.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="bg-accent p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-foreground/80 mb-6">
              If you couldn't find the answer to your question, our tourism experts are ready to help. Contact us
              directly for personalized assistance with planning your Hikari Island experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition text-center"
              >
                Contact Us
              </Link>
              <Link
                href="/plan"
                className="bg-secondary text-secondary-foreground border border-primary px-6 py-3 rounded-md font-medium hover:bg-secondary/80 transition text-center"
              >
                Plan Your Visit
              </Link>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to Experience Hikari?</h2>
            <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
              Start planning your perfect Hikari adventure today.
            </p>
            <Link href="/explore" className="inline-flex items-center text-emerald-600 font-medium hover:underline">
              Explore our attractions <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
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
                  <Link href="/culture" className="text-gray-400 hover:text-white transition">
                    Culture & Customs
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

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-foreground/60">
            <p>&copy; {new Date().getFullYear()} Hikari Tourism Authority. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

