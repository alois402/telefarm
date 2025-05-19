import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Award, Users, Target, Leaf, TrendingUp, Globe } from "lucide-react"

// Mock team data
const teamMembers = [
  {
    name: "Mr. Juma Brian",
    role: "Founder & CEO",
    bio: "Software engineer, Sustainable development expert with 3 years experience in Entrepreneurship and innovation ecosystem performing key roles in strategic partnerships, fundraising, business planning and foresighting, with deep knowledge on smart agriculture technologies.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "",
    role: "CTO",
    bio: "Expert in IoT and AI applications for agriculture with a background in computer science.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "",
    role: "Head of Training",
    bio: "Agricultural extension specialist with a passion for educating smallholder farmers.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "",
    role: "Product Development",
    bio: "Agricultural engineer focused on creating practical solutions for African farmers.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Telefarm</h1>
            <p className="text-lg md:text-xl">
              Transforming agriculture through technology to empower smallholder farmers across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Telefarm Limited Company was founded in the year 2024 with a simple mission: to make smart agricultural
                technologies accessible to smallholder farmers across Africa.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder, Mr. Juma Brian, witnessed firsthand the challenges faced by the telephone farmers in his community.
                Despite their hard work, many struggled with issues of transparency and accountability, unpredictable weather patterns, pest infestations, and
                limited access to modern farming techniques.
              </p>
              <p className="text-gray-600 mb-4">
                Inspired to make a difference, he assembled a team of agricultural experts and technology specialists
                to create affordable, user-friendly smart farming solutions tailored to the unique needs of kenyan and African farmers as a whole.
              </p>
              <p className="text-gray-600">
                Today, Telefarm serves hundreds of farmers across Kenya, providing them with the tools,
                knowledge, and support they need to increase yields, reduce losses, and build sustainable livelihoods.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Telefarm team in the field"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission, Vision & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Telefarm, we're driven by a clear purpose and guided by strong values that shape everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To empower smallholder farmers with accessible technology and knowledge that increases productivity,
                  sustainability, and income.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  A future where every farmer in Africa has access to smart agricultural technologies, enabling food
                  security and prosperity for all.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <Leaf className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Sustainability in all we do</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Community-centered approach</span>
                  </li>
                  <li className="flex items-start">
                    <Globe className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Innovation with local relevance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse team combines expertise in agriculture, technology, and education to create solutions that
              make a real difference in farmers' lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-none shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-green-600 mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Since our founding, we've been measuring our success by the positive change we create in farming
              communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">700+</div>
              <p className="text-gray-600">Farmers Trained</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">35%</div>
              <p className="text-gray-600">Average Yield Increase</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">12,000</div>
              <p className="text-gray-600">Hectares Monitored</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">1</div>
              <p className="text-gray-600">Country Served</p>
            </div>
          </div>

          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex">
                <div className="relative h-24 w-24 rounded-full overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Farmer portrait"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Mary Wanjiku, Nakuru, Kenya</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    "After installing Telefarm's soil sensors and following their training program, my maize yield
                    increased by 40%. The AI pest detection system saved my crop from a potential locust infestation."
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="relative h-24 w-24 rounded-full overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Farmer portrait"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Joseph Mutua, Kitui, Kenya</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    "The smart irrigation system from Telefarm has reduced my water usage by 30% while improving my
                    tomato quality. The training I received has transformed how I approach farming."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We collaborate with organizations that share our commitment to sustainable agriculture and farmer
              empowerment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-gray-100 h-24 rounded-md flex items-center justify-center">
                <div className="w-32 h-12 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Agricultural Revolution</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're a farmer looking for solutions, an investor interested in our work, or a potential partner,
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/products">Explore Our Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
