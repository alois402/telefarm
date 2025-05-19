"use client"

// Adapted from shadcn/ui toast component
import { useState } from "react"

type ToastProps = {
  title?: string
  description?: string
  type?: "default" | "success" | "error" | "warning"
  duration?: number
}

type Toast = ToastProps & {
  id: string
  visible: boolean
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = (props: ToastProps) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast: Toast = {
      id,
      visible: true,
      duration: 5000, // Default duration
      type: "default", // Default type
      ...props,
    }

    setToasts((prevToasts) => [...prevToasts, newToast])

    // Auto dismiss
    if (newToast.duration !== Number.POSITIVE_INFINITY) {
      setTimeout(() => {
        dismissToast(id)
      }, newToast.duration)
    }

    return id
  }

  const dismissToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.map((t) => (t.id === id ? { ...t, visible: false } : t)))

    // Remove from state after animation (300ms)
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id))
    }, 300)
  }

  return {
    toast,
    dismissToast,
    toasts,
  }
}
