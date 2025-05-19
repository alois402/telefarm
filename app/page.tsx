import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaLeaf, FaShoppingCart, FaVideo, FaRobot } from "react-icons/fa"
import FeatureCard from "@/components.tsx/feature-card"
import ProductShowcase from "@/app/products/page"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-400 py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Smart Farming Solutions for Modern Agriculture</h1>
              <p className="text-lg mb-8">
                Telefarm provides innovative agricultural inputs, expert training, and AI-powered monitoring to help
                smallholder farmers increase productivity and sustainability.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <Link href="/store">Shop Now</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600"
                >
                  <Link href="/training">Explore Training</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-96">
              <div className="absolute inset-0 bg-white/10 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Smart farming"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<FaShoppingCart className="h-8 w-8 text-green-500" />}
              title="Online Store"
              description="Order smart agricultural inputs online and get them delivered to your doorstep."
              link="/store"
            />
            <FeatureCard
              icon={<FaVideo className="h-8 w-8 text-green-500" />}
              title="Training Programs"
              description="Learn how to use smart agricultural products through our comprehensive training programs."
              link="/training"
            />
            <FeatureCard
              icon={<FaRobot className="h-8 w-8 text-green-500" />}
              title="AI Monitoring"
              description="Real-time monitoring of your farm with AI to detect pests and diseases."
              link="/monitoring"
            />
            <FeatureCard
              icon={<FaLeaf className="h-8 w-8 text-green-500" />}
              title="Sustainable Farming"
              description="Guidance on sustainable farming practices to improve productivity and environmental impact."
              link="/sustainability"
            />
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Products</h2>
          <ProductShowcase />
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/store">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Monitoring Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">AI-Powered Farm Monitoring</h2>
              <p className="text-lg mb-6">
                Our advanced AI technology monitors your farm in real-time, detecting pests and diseases before they
                become a problem. Get instant notifications and recommended solutions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="bg-green-500 rounded-full p-1 mr-3">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Early pest and disease detection
                </li>
                <li className="flex items-center">
                  <span className="bg-green-500 rounded-full p-1 mr-3">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Real-time notifications
                </li>
                <li className="flex items-center">
                  <span className="bg-green-500 rounded-full p-1 mr-3">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Recommended treatment solutions
                </li>
              </ul>
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
                <Link href="/monitoring">Learn More</Link>
              </Button>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=500&width=700"
                alt="AI monitoring dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Transform Your Farm?</h2>
          <p className="text-lg mb-8 text-gray-600">
            Join thousands of farmers who have increased their productivity with Telefarm's smart agricultural
            solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/register">Get Started</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
