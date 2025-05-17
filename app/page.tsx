import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"

// Mock data
const featuredNFTs = [
  {
    id: "1",
    name: "Cosmic Perspective #31",
    image: "/placeholder.svg?height=400&width=400",
    price: "1.5",
    currency: "ETH",
    creator: {
      name: "cosmicartist",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    likes: 159,
  },
  {
    id: "2",
    name: "Abstract Dimensions #08",
    image: "/placeholder.svg?height=400&width=400",
    price: "2.3",
    currency: "ETH",
    creator: {
      name: "abstracto",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    likes: 243,
  },
  {
    id: "3",
    name: "Digital Dreams #15",
    image: "/placeholder.svg?height=400&width=400",
    price: "0.8",
    currency: "ETH",
    creator: {
      name: "dreamweaver",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    likes: 87,
  },
  {
    id: "4",
    name: "Neon Jungle #42",
    image: "/placeholder.svg?height=400&width=400",
    price: "1.2",
    currency: "ETH",
    creator: {
      name: "neonartist",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    likes: 112,
  },
  {
    id: "5",
    name: "Cyber Punk #19",
    image: "/placeholder.svg?height=400&width=400",
    price: "1.8",
    currency: "ETH",
    creator: {
      name: "cybercreator",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    likes: 178,
  },
  {
    id: "6",
    name: "Ethereal Visions #27",
    image: "/placeholder.svg?height=400&width=400",
    price: "3.1",
    currency: "ETH",
    creator: {
      name: "etherealartist",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    likes: 205,
  },
  {
    id: "7",
    name: "Future Worlds #11",
    image: "/placeholder.svg?height=400&width=400",
    price: "2.5",
    currency: "ETH",
    creator: {
      name: "futurevisions",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    likes: 132,
  },
  {
    id: "8",
    name: "Astral Planes #04",
    image: "/placeholder.svg?height=400&width=400",
    price: "1.7",
    currency: "ETH",
    creator: {
      name: "astralcreator",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    likes: 167,
  },
]

const topSellers = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: `Artist ${i + 1}`,
  username: `artist${i + 1}`,
  avatar: `/placeholder.svg?height=60&width=60`,
  sales: (Math.random() * 100 + 10).toFixed(2),
  verified: i < 5,
}))

const topCollections = [
  {
    id: "1",
    name: "Bored Ape Yacht Club",
    image: "/placeholder.svg?height=300&width=400",
    creator: {
      name: "bayc",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    itemCount: 10000,
  },
  {
    id: "2",
    name: "Azuki",
    image: "/placeholder.svg?height=300&width=400",
    creator: {
      name: "azuki",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    itemCount: 8700,
  },
  {
    id: "3",
    name: "Doodles",
    image: "/placeholder.svg?height=300&width=400",
    creator: {
      name: "doodles",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    itemCount: 5000,
  },
]

const categories = [
  {
    name: "Art",
    image: "/placeholder.svg?height=200&width=400",
    itemCount: 12453,
  },
  {
    name: "Collectibles",
    image: "/placeholder.svg?height=200&width=400",
    itemCount: 8721,
  },
  {
    name: "Photography",
    image: "/placeholder.svg?height=200&width=400",
    itemCount: 5324,
  },
  {
    name: "Music",
    image: "/placeholder.svg?height=200&width=400",
    itemCount: 3198,
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 hero-gradient">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight">
                Discover, Collect & Sell <span className="gradient-text">Extraordinary</span> NFTs
              </h1>
              <p className="text-lg text-white/70">
                Explore the best NFT marketplace with our beautiful collections. Buy, sell and collect the best NFTs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Explore
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-white hover:bg-primary/10">
                  Create
                </Button>
              </div>
              <div className="flex gap-8 mt-4">
                <div>
                  <p className="text-3xl font-bold">200K+</p>
                  <p className="text-white/70">Collections</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">10K+</p>
                  <p className="text-white/70">Artists</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">423K+</p>
                  <p className="text-white/70">Community</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="gradient-border p-3 rounded-xl">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Featured NFT"
                  width={500}
                  height={500}
                  className="w-full rounded-lg"
                />
                <div className="mt-4 p-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Cosmic Perspective #31</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Image
                          src="/placeholder.svg?height=24&width=24"
                          alt="Creator"
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <span className="text-sm text-white/70">@cosmicartist</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-white/70">Current Bid</p>
                      <p className="font-medium">1.5 ETH</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured NFTs */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-poppins">Featured NFTs</h2>
              <p className="text-white/70 mt-2">Explore the best NFTs handpicked by our team</p>
            </div>
            <Link href="/explore" className="group flex items-center gap-2 text-primary hover:underline">
              View All
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredNFTs.map((nft) => (
              <div key={nft.id} className="bg-[#1A1A1A] rounded-xl overflow-hidden card-hover-effect">
                <Link href={`/item/${nft.id}`} className="block relative">
                  <Image
                    src={nft.image || "/placeholder.svg"}
                    alt={nft.name}
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md rounded-full p-2">
                    <Heart className="h-4 w-4 text-white" />
                  </div>
                </Link>
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium truncate">{nft.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-white/70">
                      <Heart className="h-3 w-3 fill-white/70 text-white/70" />
                      <span>{nft.likes}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src={nft.creator.avatar || "/placeholder.svg"}
                      alt={nft.creator.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="text-xs text-white/70">@{nft.creator.name}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-[#2A2A2A]">
                    <div>
                      <p className="text-xs text-white/70">Current Price</p>
                      <p className="font-medium">
                        {nft.price} <span className="text-white/70">{nft.currency}</span>
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="border-primary text-white hover:bg-primary/10">
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Sellers */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-poppins">Top Sellers</h2>
              <p className="text-white/70 mt-2">The best performing creators on the marketplace this month</p>
            </div>
            <Link href="/top-sellers" className="group flex items-center gap-2 text-primary hover:underline">
              View All
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {topSellers.map((seller) => (
              <Link
                key={seller.id}
                href={`/author/${seller.username}`}
                className="bg-[#1A1A1A] rounded-xl p-4 flex flex-col items-center text-center hover:bg-[#2A2A2A] transition-colors"
              >
                <div className="relative">
                  <Image
                    src={seller.avatar || "/placeholder.svg"}
                    alt={seller.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  {seller.verified && (
                    <div className="absolute -bottom-1 -right-1 bg-primary rounded-full w-5 h-5 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-3 h-3 text-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <h3 className="font-medium mt-3">{seller.name}</h3>
                <p className="text-sm text-white/70 mt-1">{seller.sales} ETH</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Collections */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-poppins">Top Collections</h2>
              <p className="text-white/70 mt-2">Browse the most popular collections in the marketplace</p>
            </div>
            <Link href="/explore" className="group flex items-center gap-2 text-primary hover:underline">
              View All
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topCollections.map((collection) => (
              <Link
                key={collection.id}
                href={`/collection/${collection.id}`}
                className="block bg-[#1A1A1A] rounded-xl overflow-hidden card-hover-effect"
              >
                <div className="relative">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    width={400}
                    height={300}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-black/50 backdrop-blur-md rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image
                        src={collection.creator.avatar || "/placeholder.svg"}
                        alt={collection.creator.name}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <span className="text-xs">@{collection.creator.name}</span>
                    </div>
                    <span className="text-xs text-white/70">{collection.itemCount} items</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{collection.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins">Browse by Category</h2>
            <p className="text-white/70 mt-2 max-w-2xl mx-auto">
              Explore the NFTs in the most featured categories. We have all type of items in our marketplace.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/explore?category=${category.name.toLowerCase()}`}
                className="group relative block overflow-hidden rounded-xl card-hover-effect"
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={400}
                  height={200}
                  className="w-full aspect-[2/1] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                  <h3 className="font-medium text-lg">{category.name}</h3>
                  <p className="text-sm text-white/70">{category.itemCount} items</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">Create and Sell Your NFTs</h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Join our community and start creating, collecting and selling your NFTs. Get started with the easiest and
              most secure NFT marketplace.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Creating
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
