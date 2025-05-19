import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Clock, Users, Calendar, PlayCircle } from "lucide-react"

// Mock training data
const trainings = [
  {
    id: 1,
    title: "Introduction to Smart Farming",
    description: "Learn the basics of smart farming technologies and how they can improve your agricultural practices.",
    image: "/placeholder.svg?height=300&width=500",
    duration: "2 hours",
    participants: 24,
    date: "June 15, 2025",
    type: "online",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Soil Sensor Installation and Usage",
    description: "Hands-on training on how to install, calibrate, and interpret data from soil sensors.",
    image: "/placeholder.svg?height=300&width=500",
    duration: "3 hours",
    participants: 12,
    date: "June 20, 2025",
    type: "in-person",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "Drone Mapping for Crop Monitoring",
    description: "Learn how to use drones for mapping your fields and monitoring crop health.",
    image: "/placeholder.svg?height=300&width=500",
    duration: "4 hours",
    participants: 8,
    date: "June 25, 2025",
    type: "in-person",
    level: "Advanced",
  },
  {
    id: 4,
    title: "Precision Irrigation Techniques",
    description: "Discover water-saving irrigation techniques using smart controllers and sensors.",
    image: "/placeholder.svg?height=300&width=500",
    duration: "2 hours",
    participants: 20,
    date: "July 5, 2025",
    type: "online",
    level: "Intermediate",
  },
  {
    id: 5,
    title: "Pest and Disease Identification",
    description: "Learn to identify common pests and diseases affecting crops in your region.",
    image: "/placeholder.svg?height=300&width=500",
    duration: "3 hours",
    participants: 30,
    date: "July 10, 2025",
    type: "online",
    level: "Beginner",
  },
  {
    id: 6,
    title: "Data-Driven Farm Management",
    description: "Use agricultural data to make informed decisions and improve farm productivity.",
    image: "/placeholder.svg?height=300&width=500",
    duration: "4 hours",
    participants: 15,
    date: "July 15, 2025",
    type: "in-person",
    level: "Advanced",
  },
]

// Video tutorials
const tutorials = [
  {
    id: 1,
    title: "Setting Up Your First Smart Sensor",
    duration: "15 min",
    thumbnail: "/placeholder.svg?height=200&width=350",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Interpreting Soil Moisture Data",
    duration: "12 min",
    thumbnail: "/placeholder.svg?height=200&width=350",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "Troubleshooting Common Sensor Issues",
    duration: "18 min",
    thumbnail: "/placeholder.svg?height=200&width=350",
    level: "Intermediate",
  },
  {
    id: 4,
    title: "Drone Flight Planning for Farm Mapping",
    duration: "22 min",
    thumbnail: "/placeholder.svg?height=200&width=350",
    level: "Advanced",
  },
]

export default function TrainingPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <h1 className="text-3xl font-bold mb-2">Farmer Training Center</h1>
      <p className="text-gray-600 mb-8">
        Enhance your farming skills with our expert-led training sessions and video tutorials.
      </p>

      <Tabs defaultValue="workshops" className="mb-12">
        <TabsList className="mb-6">
          <TabsTrigger value="workshops">Workshops & Courses</TabsTrigger>
          <TabsTrigger value="videos">Video Tutorials</TabsTrigger>
        </TabsList>

        <TabsContent value="workshops">
          {/* Filters */}
          <div className="mb-8 flex flex-wrap gap-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Type</h3>
              <div className="flex gap-2">
                <Badge variant="outline" className="cursor-pointer">
                  All
                </Badge>
                <Badge variant="outline" className="cursor-pointer">
                  Online
                </Badge>
                <Badge variant="outline" className="cursor-pointer">
                  In-person
                </Badge>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Level</h3>
              <div className="flex gap-2">
                <Badge variant="outline" className="cursor-pointer">
                  All
                </Badge>
                <Badge variant="outline" className="cursor-pointer">
                  Beginner
                </Badge>
                <Badge variant="outline" className="cursor-pointer">
                  Intermediate
                </Badge>
                <Badge variant="outline" className="cursor-pointer">
                  Advanced
                </Badge>
              </div>
            </div>
          </div>

          {/* Training Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainings.map((training) => (
              <Card key={training.id} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={training.image || "/placeholder.svg"}
                    alt={training.title}
                    fill
                    className="object-cover"
                  />
                  <Badge
                    className="absolute top-2 right-2"
                    variant={training.type === "online" ? "default" : "secondary"}
                  >
                    {training.type === "online" ? "Online" : "In-person"}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">{training.title}</h3>
                    <Badge>{training.level}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{training.description}</p>
                  <div className="flex flex-col space-y-2 text-sm">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{training.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{training.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{training.participants} participants max</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Register Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tutorials.map((tutorial) => (
              <Card key={tutorial.id} className="overflow-hidden">
                <div className="relative h-40 w-full group">
                  <Image
                    src={tutorial.thumbnail || "/placeholder.svg"}
                    alt={tutorial.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayCircle className="h-12 w-12 text-white" />
                  </div>
                  <Badge className="absolute top-2 right-2">{tutorial.level}</Badge>
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-semibold mb-2">{tutorial.title}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{tutorial.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline">View All Tutorials</Button>
          </div>
        </TabsContent>
      </Tabs>

      {/* Training Calendar */}
      <div className="bg-gray-50 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4">Upcoming Training Schedule</h2>
        <p className="mb-6">View our complete training calendar and plan your learning journey with Telefarm.</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-green-100">
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Training</th>
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Duration</th>
                <th className="p-3 text-left">Availability</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {trainings.slice(0, 4).map((training, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-3">{training.date}</td>
                  <td className="p-3 font-medium">{training.title}</td>
                  <td className="p-3">{training.type}</td>
                  <td className="p-3">{training.duration}</td>
                  <td className="p-3">{training.participants} spots</td>
                  <td className="p-3">
                    <Button size="sm">Register</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-center">
          <Button variant="outline">View Full Calendar</Button>
        </div>
      </div>

      {/* Request Custom Training */}
      <div className="bg-green-50 rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
            <h2 className="text-2xl font-bold mb-2">Need Custom Training?</h2>
            <p className="mb-4">
              We offer tailored training sessions for farmer groups and cooperatives. Our experts can come to your
              location and provide specialized training on smart farming techniques.
            </p>
            <Button>Request Custom Training</Button>
          </div>
          <div className="md:w-1/3 relative h-40 md:h-60 w-full">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Custom training session"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
