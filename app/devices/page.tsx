"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Camera,
  Wifi,
  RefreshCw,
  Settings,
  Plus,
  MoreVertical,
  Battery,
  Signal,
  AlertCircle,
  Play,
  Pause,
  Trash2,
  Download,
  Eye,
  Thermometer,
  Droplets,
  Wind,
  Sun,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"

// Mock device data
const devices = [
  {
    id: 1,
    name: "Field Camera 1",
    type: "camera",
    location: "Maize Field - North",
    status: "online",
    battery: 85,
    signal: 92,
    lastUpdate: "2 minutes ago",
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    id: 2,
    name: "Field Camera 2",
    type: "camera",
    location: "Tomato Greenhouse",
    status: "online",
    battery: 72,
    signal: 88,
    lastUpdate: "5 minutes ago",
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    id: 3,
    name: "Weather Station 1",
    type: "weather",
    location: "Central Farm",
    status: "online",
    battery: 95,
    signal: 96,
    lastUpdate: "1 minute ago",
    readings: {
      temperature: 26,
      humidity: 65,
      windSpeed: 8,
      rainfall: 0,
    },
  },
  {
    id: 4,
    name: "Soil Sensor Array 1",
    type: "soil",
    location: "Bean Field - East",
    status: "offline",
    battery: 15,
    signal: 45,
    lastUpdate: "3 hours ago",
    readings: {
      moisture: 42,
      temperature: 22,
      ph: 6.8,
    },
  },
  {
    id: 5,
    name: "Drone 1",
    type: "drone",
    location: "Charging Station",
    status: "charging",
    battery: 60,
    signal: 100,
    lastUpdate: "30 minutes ago",
    image: "/placeholder.svg?height=200&width=350",
  },
]

export default function DevicesPage() {
  const [activeDevices, setActiveDevices] = useState(devices)
  const [selectedDevice, setSelectedDevice] = useState(devices[0])
  const [isStreaming, setIsStreaming] = useState(false)
  const [isAddingDevice, setIsAddingDevice] = useState(false)
  const [newDevice, setNewDevice] = useState({
    name: "",
    type: "",
    location: "",
  })

  const handleAddDevice = () => {
    // In a real app, this would connect to the device and add it to the system
    const device = {
      id: activeDevices.length + 1,
      ...newDevice,
      status: "online",
      battery: 100,
      signal: 95,
      lastUpdate: "Just now",
      image: "/placeholder.svg?height=200&width=350",
    }

    setActiveDevices([...activeDevices, device])
    setIsAddingDevice(false)
    setNewDevice({ name: "", type: "", location: "" })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500"
      case "offline":
        return "bg-red-500"
      case "charging":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">IoT Devices</h1>
          <p className="text-gray-600">Manage your connected devices and view livestreams from your farm.</p>
        </div>
        <Button className="mt-4 md:mt-0" onClick={() => setIsAddingDevice(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add New Device
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex justify-between items-center">
                <span>Your Devices</span>
                <Badge variant="outline">{activeDevices.length}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {activeDevices.map((device) => (
                  <div
                    key={device.id}
                    className={`p-3 rounded-md cursor-pointer transition-colors ${
                      selectedDevice.id === device.id ? "bg-green-50 border border-green-200" : "hover:bg-gray-50"
                    }`}
                    onClick={() => setSelectedDevice(device)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        {device.type === "camera" ? (
                          <Camera className="h-5 w-5 text-green-600 mr-2" />
                        ) : device.type === "weather" ? (
                          <Sun className="h-5 w-5 text-yellow-500 mr-2" />
                        ) : device.type === "soil" ? (
                          <Droplets className="h-5 w-5 text-blue-500 mr-2" />
                        ) : (
                          <Wifi className="h-5 w-5 text-purple-500 mr-2" />
                        )}
                        <div>
                          <span className="font-medium">{device.name}</span>
                          <p className="text-xs text-gray-500">{device.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className={`h-2.5 w-2.5 rounded-full ${getStatusColor(device.status)} mr-2`}></div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Device Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Settings className="h-4 w-4 mr-2" />
                              Configure
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <RefreshCw className="h-4 w-4 mr-2" />
                              Restart
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Remove
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center text-xs text-gray-500">
                      <Battery className="h-3.5 w-3.5 mr-1" />
                      <span className="mr-3">{device.battery}%</span>
                      <Signal className="h-3.5 w-3.5 mr-1" />
                      <span>{device.signal}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader className="pb-2">
              <CardTitle>Device Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Online</span>
                    <span className="font-medium">
                      {activeDevices.filter((d) => d.status === "online").length}/{activeDevices.length}
                    </span>
                  </div>
                  <Progress
                    value={(activeDevices.filter((d) => d.status === "online").length / activeDevices.length) * 100}
                    className="h-2"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Battery Status</span>
                    <span className="font-medium">
                      {Math.round(
                        activeDevices.reduce((sum, device) => sum + device.battery, 0) / activeDevices.length,
                      )}
                      %
                    </span>
                  </div>
                  <Progress
                    value={activeDevices.reduce((sum, device) => sum + device.battery, 0) / activeDevices.length}
                    className="h-2"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Signal Strength</span>
                    <span className="font-medium">
                      {Math.round(activeDevices.reduce((sum, device) => sum + device.signal, 0) / activeDevices.length)}
                      %
                    </span>
                  </div>
                  <Progress
                    value={activeDevices.reduce((sum, device) => sum + device.signal, 0) / activeDevices.length}
                    className="h-2"
                  />
                </div>
              </div>

              <div className="mt-6">
                <Button variant="outline" className="w-full">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh Status
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Tabs defaultValue="livestream" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="livestream">Livestream</TabsTrigger>
              <TabsTrigger value="settings">Device Settings</TabsTrigger>
              <TabsTrigger value="data">Data & Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="livestream">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle>
                      {selectedDevice.name} - {selectedDevice.location}
                    </CardTitle>
                    <div className="flex items-center">
                      <div className={`h-2.5 w-2.5 rounded-full ${getStatusColor(selectedDevice.status)} mr-2`}></div>
                      <span className="text-sm capitalize">{selectedDevice.status}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {selectedDevice.type === "camera" || selectedDevice.type === "drone" ? (
                    <div className="space-y-4">
                      <div className="relative w-full h-[400px] bg-gray-100 rounded-md overflow-hidden">
                        <Image
                          src={selectedDevice.image || "/placeholder.svg"}
                          alt={`${selectedDevice.name} feed`}
                          fill
                          className="object-cover"
                        />
                        {isStreaming && (
                          <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full flex items-center">
                            <div className="h-2 w-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                            Live
                          </div>
                        )}
                        {!isStreaming && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <Button onClick={() => setIsStreaming(true)}>
                              <Play className="h-4 w-4 mr-2" />
                              Start Livestream
                            </Button>
                          </div>
                        )}
                      </div>

                      <div className="flex justify-between">
                        <div className="flex space-x-2">
                          <Button
                            variant={isStreaming ? "default" : "outline"}
                            onClick={() => setIsStreaming(!isStreaming)}
                          >
                            {isStreaming ? (
                              <>
                                <Pause className="h-4 w-4 mr-2" />
                                Pause
                              </>
                            ) : (
                              <>
                                <Play className="h-4 w-4 mr-2" />
                                Start
                              </>
                            )}
                          </Button>
                          <Button variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Record
                          </Button>
                          <Button variant="outline">
                            <Eye className="h-4 w-4 mr-2" />
                            Snapshot
                          </Button>
                        </div>
                        <div>
                          <Select defaultValue="720p">
                            <SelectTrigger className="w-[120px]">
                              <SelectValue placeholder="Quality" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1080p">1080p HD</SelectItem>
                              <SelectItem value="720p">720p HD</SelectItem>
                              <SelectItem value="480p">480p SD</SelectItem>
                              <SelectItem value="360p">360p Low</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-md">
                        <h3 className="font-medium mb-2">Device Information</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500">Status</p>
                            <p className="capitalize">{selectedDevice.status}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Last Update</p>
                            <p>{selectedDevice.lastUpdate}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Battery</p>
                            <p>{selectedDevice.battery}%</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Signal</p>
                            <p>{selectedDevice.signal}%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : selectedDevice.type === "weather" ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-md">
                          <div className="flex items-center mb-2">
                            <Thermometer className="h-5 w-5 text-blue-500 mr-2" />
                            <h3 className="font-medium">Temperature</h3>
                          </div>
                          <p className="text-2xl font-bold">{selectedDevice.readings?.temperature}°C</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-md">
                          <div className="flex items-center mb-2">
                            <Droplets className="h-5 w-5 text-blue-500 mr-2" />
                            <h3 className="font-medium">Humidity</h3>
                          </div>
                          <p className="text-2xl font-bold">{selectedDevice.readings?.humidity}%</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-md">
                          <div className="flex items-center mb-2">
                            <Wind className="h-5 w-5 text-blue-500 mr-2" />
                            <h3 className="font-medium">Wind Speed</h3>
                          </div>
                          <p className="text-2xl font-bold">{selectedDevice.readings?.windSpeed} km/h</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-md">
                          <div className="flex items-center mb-2">
                            <Droplets className="h-5 w-5 text-blue-500 mr-2" />
                            <h3 className="font-medium">Rainfall</h3>
                          </div>
                          <p className="text-2xl font-bold">{selectedDevice.readings?.rainfall} mm</p>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-md">
                        <h3 className="font-medium mb-2">Device Information</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500">Status</p>
                            <p className="capitalize">{selectedDevice.status}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Last Update</p>
                            <p>{selectedDevice.lastUpdate}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Battery</p>
                            <p>{selectedDevice.battery}%</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Signal</p>
                            <p>{selectedDevice.signal}%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : selectedDevice.type === "soil" ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-50 p-4 rounded-md">
                          <div className="flex items-center mb-2">
                            <Droplets className="h-5 w-5 text-green-500 mr-2" />
                            <h3 className="font-medium">Soil Moisture</h3>
                          </div>
                          <p className="text-2xl font-bold">{selectedDevice.readings?.moisture}%</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-md">
                          <div className="flex items-center mb-2">
                            <Thermometer className="h-5 w-5 text-green-500 mr-2" />
                            <h3 className="font-medium">Soil Temperature</h3>
                          </div>
                          <p className="text-2xl font-bold">{selectedDevice.readings?.temperature}°C</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-md col-span-2">
                          <div className="flex items-center mb-2">
                            <AlertCircle className="h-5 w-5 text-green-500 mr-2" />
                            <h3 className="font-medium">Soil pH</h3>
                          </div>
                          <p className="text-2xl font-bold">{selectedDevice.readings?.ph}</p>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-md">
                        <h3 className="font-medium mb-2">Device Information</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500">Status</p>
                            <p className="capitalize">{selectedDevice.status}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Last Update</p>
                            <p>{selectedDevice.lastUpdate}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Battery</p>
                            <p>{selectedDevice.battery}%</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Signal</p>
                            <p>{selectedDevice.signal}%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-[400px]">
                      <div className="text-center">
                        <AlertCircle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium mb-2">No Preview Available</h3>
                        <p className="text-gray-500">This device type doesn't support livestreaming.</p>
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <Link href="/monitoring">View in Monitoring Dashboard</Link>
                  </Button>
                  <Button variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Configure Device
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Device Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="device-name">Device Name</Label>
                    <Input id="device-name" defaultValue={selectedDevice.name} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="device-location">Location</Label>
                    <Input id="device-location" defaultValue={selectedDevice.location} />
                  </div>

                  <div className="space-y-2">
                    <Label>Notification Settings</Label>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="low-battery">Low Battery Alerts</Label>
                          <p className="text-sm text-gray-500">Notify when battery is below 20%</p>
                        </div>
                        <Switch id="low-battery" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="offline-alerts">Offline Alerts</Label>
                          <p className="text-sm text-gray-500">Notify when device goes offline</p>
                        </div>
                        <Switch id="offline-alerts" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="motion-detection">Motion Detection</Label>
                          <p className="text-sm text-gray-500">Notify when motion is detected</p>
                        </div>
                        <Switch id="motion-detection" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Streaming Settings</Label>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="auto-record">Auto-Record</Label>
                          <p className="text-sm text-gray-500">Automatically record when streaming</p>
                        </div>
                        <Switch id="auto-record" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="hd-streaming">HD Streaming</Label>
                          <p className="text-sm text-gray-500">Stream in high definition when available</p>
                        </div>
                        <Switch id="hd-streaming" defaultChecked />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Power Management</Label>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="power-saving">Power Saving Mode</Label>
                          <p className="text-sm text-gray-500">Reduce power consumption when battery is low</p>
                        </div>
                        <Switch id="power-saving" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="scheduled-sleep">Scheduled Sleep</Label>
                          <p className="text-sm text-gray-500">Put device to sleep during specified hours</p>
                        </div>
                        <Switch id="scheduled-sleep" />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="data">
              <Card>
                <CardHeader>
                  <CardTitle>Data & Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-gray-100 h-64 rounded-md flex items-center justify-center">
                      <p className="text-gray-500">Data visualization chart would be displayed here</p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Data Collection</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="data-collection">Data Collection Frequency</Label>
                            <p className="text-sm text-gray-500">How often data is collected from this device</p>
                          </div>
                          <Select defaultValue="15min">
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select frequency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1min">Every minute</SelectItem>
                              <SelectItem value="5min">Every 5 minutes</SelectItem>
                              <SelectItem value="15min">Every 15 minutes</SelectItem>
                              <SelectItem value="30min">Every 30 minutes</SelectItem>
                              <SelectItem value="1hour">Every hour</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Data Storage</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="data-retention">Data Retention Period</Label>
                            <p className="text-sm text-gray-500">How long data is stored before being archived</p>
                          </div>
                          <Select defaultValue="30days">
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select period" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="7days">7 days</SelectItem>
                              <SelectItem value="30days">30 days</SelectItem>
                              <SelectItem value="90days">90 days</SelectItem>
                              <SelectItem value="1year">1 year</SelectItem>
                              <SelectItem value="forever">Forever</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Export Data</h3>
                      <p className="text-sm text-gray-500 mb-2">
                        Download collected data for offline analysis or reporting
                      </p>
                      <div className="flex space-x-2">
                        <Button variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Export as CSV
                        </Button>
                        <Button variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Export as JSON
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Add New Device Modal */}
      {isAddingDevice && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Add New Device</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="new-device-name">Device Name</Label>
                  <Input
                    id="new-device-name"
                    placeholder="e.g., Field Camera 3"
                    value={newDevice.name}
                    onChange={(e) => setNewDevice({ ...newDevice, name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="new-device-type">Device Type</Label>
                  <Select onValueChange={(value) => setNewDevice({ ...newDevice, type: value })}>
                    <SelectTrigger id="new-device-type">
                      <SelectValue placeholder="Select device type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="camera">Camera</SelectItem>
                      <SelectItem value="weather">Weather Station</SelectItem>
                      <SelectItem value="soil">Soil Sensor</SelectItem>
                      <SelectItem value="drone">Drone</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="new-device-location">Location</Label>
                  <Input
                    id="new-device-location"
                    placeholder="e.g., South Field"
                    value={newDevice.location}
                    onChange={(e) => setNewDevice({ ...newDevice, location: e.target.value })}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setIsAddingDevice(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddDevice} disabled={!newDevice.name || !newDevice.type || !newDevice.location}>
                Add Device
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}

      {/* IoT Connection Guide */}
      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
            <h2 className="text-2xl font-bold mb-2">Connect Your IoT Devices</h2>
            <p className="mb-4">
              Our platform supports a wide range of IoT devices for real-time monitoring and data collection. Follow
              these steps to connect your devices:
            </p>
            <ol className="list-decimal list-inside space-y-2 mb-4">
              <li>Power on your device and ensure it's connected to your local network</li>
              <li>Click the "Add New Device" button above</li>
              <li>Enter the device details and follow the connection instructions</li>
              <li>Once connected, your device will appear in the devices list</li>
            </ol>
            <Button asChild>
              <Link href="/products">Shop IoT Devices</Link>
            </Button>
          </div>
          <div className="md:w-1/3 relative h-40 md:h-60 w-full">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="IoT devices"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
