"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, ImageIcon, FileIcon, Film, Music, Package, Layers } from "lucide-react"

export default function CreateCollectionPage() {
  return (
    <div className="min-h-screen">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-4 mb-8 text-center">
            <h1 className="text-3xl font-bold font-poppins">Create New Item</h1>
            <p className="text-white/70 mx-auto max-w-2xl">
              Choose "Single" if you want your collectible to be one of a kind or "Multiple" if you want to sell one
              collectible multiple times
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {/* Single Item Card */}
            <Link href="/create-item">
              <Card className="bg-[#1A1A1A] border-[#2A2A2A] hover:border-primary transition-colors h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-[#2A2A2A] rounded-full flex items-center justify-center mb-6">
                    <Package className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold mb-3">Single Item</h2>
                  <p className="text-white/70">
                    Create a one-of-a-kind collectible. Each single NFT is a unique asset on the blockchain.
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Multiple Items Card */}
            <Link href="/create-multiple">
              <Card className="bg-[#1A1A1A] border-[#2A2A2A] hover:border-primary transition-colors h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-[#2A2A2A] rounded-full flex items-center justify-center mb-6">
                    <Layers className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold mb-3">Multiple Items</h2>
                  <p className="text-white/70">
                    Create a collection of multiple NFTs at once. Perfect for creating a series of related items.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="mt-16">
            <h2 className="text-xl font-semibold mb-6 text-center">Choose File Type</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] hover:border-primary rounded-xl p-4 flex flex-col items-center gap-3 cursor-pointer transition-colors">
                <div className="w-12 h-12 bg-[#2A2A2A] rounded-full flex items-center justify-center">
                  <ImageIcon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm">Image</span>
              </div>
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] hover:border-primary rounded-xl p-4 flex flex-col items-center gap-3 cursor-pointer transition-colors">
                <div className="w-12 h-12 bg-[#2A2A2A] rounded-full flex items-center justify-center">
                  <Film className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm">Video</span>
              </div>
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] hover:border-primary rounded-xl p-4 flex flex-col items-center gap-3 cursor-pointer transition-colors">
                <div className="w-12 h-12 bg-[#2A2A2A] rounded-full flex items-center justify-center">
                  <Music className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm">Audio</span>
              </div>
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] hover:border-primary rounded-xl p-4 flex flex-col items-center gap-3 cursor-pointer transition-colors">
                <div className="w-12 h-12 bg-[#2A2A2A] rounded-full flex items-center justify-center">
                  <FileIcon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm">Document</span>
              </div>
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] hover:border-primary rounded-xl p-4 flex flex-col items-center gap-3 cursor-pointer transition-colors">
                <div className="w-12 h-12 bg-[#2A2A2A] rounded-full flex items-center justify-center">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm">3D Model</span>
              </div>
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] hover:border-primary rounded-xl p-4 flex flex-col items-center gap-3 cursor-pointer transition-colors">
                <div className="w-12 h-12 bg-[#2A2A2A] rounded-full flex items-center justify-center">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm">Any File</span>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-xl font-semibold mb-4">Need Help Getting Started?</h2>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Check out our comprehensive guides and tutorials to help you create and sell your first NFT.
            </p>
            <Button variant="outline" className="border-primary text-white hover:bg-primary/10">
              View Tutorials
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
