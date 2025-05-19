"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  AlertCircle,
  Camera,
  Droplets,
  Thermometer,
  Wind,
  Sun,
  Bug,
  Leaf,
  RefreshCw,
  ChevronRight,
  BarChart3,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data for detected issues
const detectedIssues = [
  {
    id: 1,
    type: "pest",
    name: "Aphids",
    location: "Maize Field - North Section",
    severity: "Medium",
    detectedAt: "2 hours ago",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Aphid infestation detected on maize leaves. These small sap-sucking insects can cause stunted growth and transmit plant viruses.",
    recommendation:
      "Apply neem oil spray or introduce ladybugs as natural predators. Monitor the situation closely over the next 48 hours.",
  },
  {
    id: 2,
    type: "disease",
    name: "Powdery Mildew",
    location: "Tomato Greenhouse",
    severity: "High",
    detectedAt: "1 day ago",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Powdery mildew infection detected on tomato plants. This fungal disease appears as white powdery spots on leaves and stems.",
    recommendation:
      "Apply fungicide treatment immediately. Improve air circulation in the greenhouse and reduce humidity levels.",
  },
  {
    id: 3,
    type: "nutrient",
    name: "Nitrogen Deficiency",
    location: "Bean Field - East Section",
    severity: "Low",
    detectedAt: "3 days ago",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Early signs of nitrogen deficiency detected in bean plants. Older leaves are showing yellowing from the tip toward the base.",
    recommendation:
      "Apply nitrogen-rich fertilizer according to soil test recommendations. Consider adding organic matter to improve soil fertility.",
  },
]

// Mock sensor data
const sensorData = {
  soil: {
    moisture: 42,
    temperature: 22,
    ph: 6.8,
    nutrients: {
      nitrogen: 65,
      phosphorus: 45,
      potassium: 70,
    },
  },
  weather: {
    temperature: 26,
    humidity: 65,
    windSpeed: 8,
    rainfall: 0,
    forecast: "Sunny",
  },
}

export default function MonitoringPage() {
  const [selectedIssue, setSelectedIssue] = useState(detectedIssues[0])
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleAnalyzeNow = () => {
    setIsAnalyzing(true)
    setTimeout(() => {
      setIsAnalyzing(false)
    }, 3000)
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <h1 className="text-3xl font-bold mb-2">AI Farm Monitoring</h1>
      <p className="text-gray-600 mb-8">
        Real-time monitoring and analysis of your farm with AI-powered pest and disease detection.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Live Camera Feed</h2>
                <Button onClick={handleAnalyzeNow} disabled={isAnalyzing} className="flex items-center">
                  {isAnalyzing ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Camera className="h-4 w-4 mr-2" />
                      Analyze Now
                    </>
                  )}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-[400px] bg-gray-100 rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Farm camera feed"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full flex items-center">
                  <div className="h-2 w-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                  Live
                </div>
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <Button size="sm" variant="secondary">
                    <Camera className="h-4 w-4 mr-1" /> Switch Camera
                  </Button>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button variant="outline" className="text-left justify-start">
                  <Camera className="h-4 w-4 mr-2" /> Maize Field
                </Button>
                <Button variant="outline" className="text-left justify-start">
                  <Camera className="h-4 w-4 mr-2" /> Tomato Greenhouse
                </Button>
                <Button variant="outline" className="text-left justify-start">
                  <Camera className="h-4 w-4 mr-2" /> Bean Field
                </Button>
                <Button variant="outline" className="text-left justify-start">
                  <Camera className="h-4 w-4 mr-2" /> Storage Area
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="h-full">
            <CardHeader className="pb-2">
              <h2 className="text-xl font-bold">Sensor Data</h2>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="soil">
                <TabsList className="mb-4">
                  <TabsTrigger value="soil">Soil</TabsTrigger>
                  <TabsTrigger value="weather">Weather</TabsTrigger>
                </TabsList>

                <TabsContent value="soil" className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-md">
                    <div className="flex items-center">
                      <Droplets className="h-5 w-5 text-blue-500 mr-2" />
                      <span>Moisture</span>
                    </div>
                    <span className="font-semibold">{sensorData.soil.moisture}%</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-md">
                    <div className="flex items-center">
                      <Thermometer className="h-5 w-5 text-red-500 mr-2" />
                      <span>Temperature</span>
                    </div>
                    <span className="font-semibold">{sensorData.soil.temperature}°C</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-md">
                    <div className="flex items-center">
                      <BarChart3 className="h-5 w-5 text-purple-500 mr-2" />
                      <span>pH Level</span>
                    </div>
                    <span className="font-semibold">{sensorData.soil.ph}</span>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-sm font-semibold mb-3">Nutrient Levels</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <span className="w-24 text-sm">Nitrogen</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-green-500 rounded-full"
                            style={{ width: `${sensorData.soil.nutrients.nitrogen}%` }}
                          ></div>
                        </div>
                        <span className="ml-2 text-sm">{sensorData.soil.nutrients.nitrogen}%</span>
                      </div>

                      <div className="flex items-center">
                        <span className="w-24 text-sm">Phosphorus</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-500 rounded-full"
                            style={{ width: `${sensorData.soil.nutrients.phosphorus}%` }}
                          ></div>
                        </div>
                        <span className="ml-2 text-sm">{sensorData.soil.nutrients.phosphorus}%</span>
                      </div>

                      <div className="flex items-center">
                        <span className="w-24 text-sm">Potassium</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-purple-500 rounded-full"
                            style={{ width: `${sensorData.soil.nutrients.potassium}%` }}
                          ></div>
                        </div>
                        <span className="ml-2 text-sm">{sensorData.soil.nutrients.potassium}%</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="weather" className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-md">
                    <div className="flex items-center">
                      <Thermometer className="h-5 w-5 text-red-500 mr-2" />
                      <span>Temperature</span>
                    </div>
                    <span className="font-semibold">{sensorData.weather.temperature}°C</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-md">
                    <div className="flex items-center">
                      <Droplets className="h-5 w-5 text-blue-500 mr-2" />
                      <span>Humidity</span>
                    </div>
                    <span className="font-semibold">{sensorData.weather.humidity}%</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                    <div className="flex items-center">
                      <Wind className="h-5 w-5 text-gray-500 mr-2" />
                      <span>Wind Speed</span>
                    </div>
                    <span className="font-semibold">{sensorData.weather.windSpeed} km/h</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-md">
                    <div className="flex items-center">
                      <Sun className="h-5 w-5 text-yellow-500 mr-2" />
                      <span>Forecast</span>
                    </div>
                    <span className="font-semibold">{sensorData.weather.forecast}</span>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-6">
                <Button variant="outline" className="w-full">
                  View Detailed Reports
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Detected Issues */}
      <h2 className="text-2xl font-bold mb-4">Detected Issues</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="pb-2">
              <h3 className="text-lg font-semibold">Recent Detections</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {detectedIssues.map((issue) => (
                  <div
                    key={issue.id}
                    className={`p-3 rounded-md cursor-pointer transition-colors ${
                      selectedIssue.id === issue.id ? "bg-green-50 border border-green-200" : "hover:bg-gray-50"
                    }`}
                    onClick={() => setSelectedIssue(issue)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center">
                        {issue.type === "pest" ? (
                          <Bug className="h-5 w-5 text-red-500 mr-2" />
                        ) : issue.type === "disease" ? (
                          <Leaf className="h-5 w-5 text-orange-500 mr-2" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
                        )}
                        <span className="font-medium">{issue.name}</span>
                      </div>
                      <Badge
                        variant={
                          issue.severity === "High"
                            ? "destructive"
                            : issue.severity === "Medium"
                              ? "default"
                              : "outline"
                        }
                      >
                        {issue.severity}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">{issue.location}</p>
                    <p className="text-xs text-gray-400">Detected {issue.detectedAt}</p>
                    <div className="flex justify-end mt-2">
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <Button variant="outline" className="w-full">
                  View All Detections
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Issue Details</h3>
                <Badge
                  variant={
                    selectedIssue.severity === "High"
                      ? "destructive"
                      : selectedIssue.severity === "Medium"
                        ? "default"
                        : "outline"
                  }
                >
                  {selectedIssue.severity} Severity
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="relative h-48 w-full rounded-md overflow-hidden">
                    <Image
                      src={selectedIssue.image || "/placeholder.svg"}
                      alt={selectedIssue.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Type:</span>
                      <span className="text-sm font-medium capitalize">{selectedIssue.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Location:</span>
                      <span className="text-sm font-medium">{selectedIssue.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Detected:</span>
                      <span className="text-sm font-medium">{selectedIssue.detectedAt}</span>
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-2">{selectedIssue.name}</h3>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">Description</h4>
                    <p className="text-gray-700">{selectedIssue.description}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">Recommended Action</h4>
                    <p className="text-gray-700">{selectedIssue.recommendation}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button>View Treatment Options</Button>
                    <Button variant="outline">Mark as Resolved</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Get Started with AI Monitoring */}
      <div className="mt-12 bg-green-50 rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
            <h2 className="text-2xl font-bold mb-2">Get Started with AI Monitoring</h2>
            <p className="mb-4">
              Our AI-powered monitoring system helps you detect pests, diseases, and nutrient deficiencies early, saving
              you time and resources. Install our smart cameras and sensors on your farm to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button>
                <Link href="/products">Shop Monitoring Equipment</Link>
              </Button>
              <Button variant="outline">
                <Link href="/contact">Request Consultation</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/3 relative h-40 md:h-60 w-full">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="AI monitoring system"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
