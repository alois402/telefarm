import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

// Mock product data
const products = [
  {
    id: 1,
    name: "Smart Soil Sensor",
    description: "Real-time monitoring of soil moisture, temperature, and nutrient levels.",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Sensors",
    inStock: true,
  },
  {
    id: 2,
    name: "Precision Irrigation System",
    description: "Water-efficient irrigation system with smart controls and scheduling.",
    price: 249.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Irrigation",
    inStock: true,
  },
  {
    id: 3,
    name: "Drone Crop Monitoring",
    description: "Aerial crop monitoring drone with HD camera and automated flight paths.",
    price: 899.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Drones",
    inStock: false,
  },
  {
    id: 4,
    name: "Organic Pest Control Kit",
    description: "Environmentally friendly pest control solutions for various crops.",
    price: 59.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Pest Control",
    inStock: true,
  },
  {
    id: 5,
    name: "Smart Weather Station",
    description: "Local weather monitoring with forecasting and alerts for farm management.",
    price: 129.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Sensors",
    inStock: true,
  },
  {
    id: 6,
    name: "High-Yield Seed Variety Pack",
    description: "Drought-resistant, high-yield seed varieties for diverse crops.",
    price: 45.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Seeds",
    inStock: true,
  },
]

// Categories for filtering
const categories = ["All", "Sensors", "Irrigation", "Drones", "Pest Control", "Seeds", "Fertilizers", "Tools"]

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Smart Agricultural Products</h1>

      {/* Filters */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge key={category} variant={category === "All" ? "default" : "outline"} className="cursor-pointer">
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <Badge variant="secondary">{product.category}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-2xl font-bold text-green-600">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline">
                <Link href={`/products/${product.id}`}>View Details</Link>
              </Button>
              <Button disabled={!product.inStock}>{product.inStock ? "Add to Cart" : "Out of Stock"}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
