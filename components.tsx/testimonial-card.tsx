import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  name: string
  location: string
  quote: string
}

export default function TestimonialCard({ name, location, quote }: TestimonialCardProps) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <Quote className="h-8 w-8 text-green-500 mb-4 opacity-50" />
        <p className="text-gray-600 mb-6 italic">{quote}</p>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </CardContent>
    </Card>
  )
}