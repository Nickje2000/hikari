import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Hikari Island</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Utopia Project</h2>
          <p className="text-foreground/80 mb-4">
            Hikari Island was established as a visionary "Utopia Project" - a harmonious blend of Japanese tradition and
            modern innovation. Located in the Japanese Sea, our island nation has developed into a thriving community
            with a unique cultural identity.
          </p>
          <p className="text-foreground/80 mb-4">
            With approximately 300,000 residents, Hikari has grown from a small settlement to a prosperous island nation
            with Togetsu as its vibrant capital city.
          </p>
          <p className="text-foreground/80">
            Our name "Hikari" (光) means "light" in Japanese, symbolizing our bright vision for the future while
            honoring our cultural heritage.
          </p>
        </div>
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Aerial view of Hikari Island"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Government & Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <h3 className="text-xl font-medium mb-3">Political Structure</h3>
            <p className="text-foreground/80">
              Hikari operates as a democratic republic with an elected president and parliamentary system. Our
              government prioritizes sustainability, education, and quality of life for all citizens.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <h3 className="text-xl font-medium mb-3">Leadership</h3>
            <p className="text-foreground/80">
              The current president leads with a vision of sustainable development, cultural preservation, and
              international cooperation, particularly with Japan and other neighboring countries.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <h3 className="text-xl font-medium mb-3">International Relations</h3>
            <p className="text-foreground/80">
              While maintaining our independence, Hikari enjoys strong diplomatic and economic ties with Japan and other
              nations in the region, making it an ideal destination for international visitors.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Our People & Culture</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <p className="text-foreground/80 mb-4">
              The people of Hikari are known for their warm hospitality and rich cultural traditions. Our population
              includes both native Hikari residents and Japanese citizens who have made our island their home.
            </p>
            <p className="text-foreground/80 mb-4">
              Visitors often remark on the unique blend of traditional Japanese customs with our own distinct Hikari
              cultural elements. This fusion is evident in our architecture, cuisine, festivals, and daily life.
            </p>
            <p className="text-foreground/80">
              Tourism is an important part of our economy, and we welcome visitors from around the world to experience
              our unique way of life. Our residents take pride in sharing our island's beauty and traditions with
              guests.
            </p>
          </div>
          <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Local residents of Hikari Island"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Safety & Security</h2>
        <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
          <p className="text-foreground/80 mb-4">
            Hikari Island is known for being one of the safest destinations in the region. Our well-trained police force
            ensures the safety of both residents and visitors throughout the island.
          </p>
          <p className="text-foreground/80 mb-4">
            The island maintains a professional security infrastructure that allows tourists to explore with peace of
            mind. Crime rates are exceptionally low, and our emergency services are readily available should they be
            needed.
          </p>
          <p className="text-foreground/80">
            While enjoying your stay in Hikari, we simply ask that visitors respect local customs and regulations to
            ensure a pleasant experience for everyone.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Education & Innovation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="University campus in Hikari"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-foreground/80 mb-4">
              Education is highly valued in Hikari, with excellent schools and a prestigious university that attracts
              students from across Asia. Our educational system combines Japanese academic rigor with innovative
              teaching methods.
            </p>
            <p className="text-foreground/80 mb-4">
              Visitors interested in cultural exchange can participate in various workshops and classes to learn
              traditional arts, crafts, and cooking techniques during their stay.
            </p>
            <p className="text-foreground/80">
              Hikari also invests in sustainable technology and environmental conservation, making it a model for
              eco-friendly development in the region.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

