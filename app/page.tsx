"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, CalendarIcon } from "lucide-react"
import Sidebar from "@/components/sidebar"
import ScheduleGrid from "@/components/schedule-grid"
import FacilityHeader from "@/components/facility-header"

const FACILITIES = [
  { id: 1, code: "FTI-1", name: "01:15 A", capacity: 65, color: "bg-blue-100" },
  { id: 2, code: "FTI-1", name: "01:05 B", capacity: 50, color: "bg-blue-100" },
  { id: 3, code: "FTI-1", name: "01:06", capacity: 40, color: "bg-blue-100" },
  { id: 4, code: "FTI-1", name: "01:10", capacity: 50, color: "bg-blue-100" },
  { id: 5, code: "FTI-1", name: "Hall P", capacity: 30, color: "bg-purple-100" },
  { id: 6, code: "FTI-1", name: "Hall", capacity: 100, color: "bg-purple-100" },
  { id: 7, code: "FTI-1", name: "Musholla", capacity: 160, color: "bg-green-100" },
  { id: 8, code: "FTI-1", name: "02:32", capacity: 45, color: "bg-blue-100" },
]

const EVENTS = [
  { id: 1, facilityId: 1, title: "KELAS", subtitle: "Metodologi A", startTime: 10, duration: 2, color: "bg-red-500" },
  { id: 2, facilityId: 1, title: "KELAS", subtitle: "Metodologi A", startTime: 11, duration: 1.5, color: "bg-red-500" },
  { id: 3, facilityId: 1, title: "KELAS", subtitle: "Metodologi A", startTime: 12, duration: 1, color: "bg-red-500" },
  {
    id: 4,
    facilityId: 3,
    title: "KELAS",
    subtitle: "Design Thinking A",
    startTime: 8,
    duration: 3,
    color: "bg-red-500",
  },
  {
    id: 5,
    facilityId: 3,
    title: "KELAS",
    subtitle: "Design Thinking A",
    startTime: 9,
    duration: 2,
    color: "bg-red-500",
  },
  {
    id: 6,
    facilityId: 3,
    title: "KELAS",
    subtitle: "Design Thinking A",
    startTime: 10,
    duration: 2.5,
    color: "bg-red-500",
  },
  { id: 7, facilityId: 7, title: "PRODI", subtitle: "Kulsum", startTime: 12, duration: 2, color: "bg-blue-600" },
  { id: 8, facilityId: 7, title: "PRODI", subtitle: "Kulsum", startTime: 13, duration: 1.5, color: "bg-blue-600" },
]

export default function Page() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 11, 2)) // Dec 2, 2025
  const [selectedFacility, setSelectedFacility] = useState<number | null>(null)

  const formatDate = (date: Date) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
  }

  const previousDay = () => {
    setCurrentDate(new Date(currentDate.getTime() - 24 * 60 * 60 * 1000))
  }

  const nextDay = () => {
    setCurrentDate(new Date(currentDate.getTime() + 24 * 60 * 60 * 1000))
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <FacilityHeader />

        {/* Calendar Title */}
        <div className="bg-white px-6 py-4 border-b border-border flex items-center gap-3">
          <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white">
            <CalendarIcon size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Kalender</h1>
            <p className="text-sm text-muted-foreground">Sistem Reservasi Ruangan Universitas Islam Indonesia</p>
          </div>
        </div>

        {/* Date Navigation & Filters */}
        <div className="bg-white px-6 py-4 border-b border-border flex items-center gap-4">
          <button onClick={previousDay} className="p-2 hover:bg-muted rounded-lg transition">
            <ChevronLeft size={20} className="text-foreground" />
          </button>
          <div className="bg-yellow-300 text-black px-4 py-2 rounded-lg font-semibold min-w-fit">
            ← Selasa, 2 Desember 2025 →
          </div>
          <button onClick={nextDay} className="p-2 hover:bg-muted rounded-lg transition">
            <ChevronRight size={20} className="text-foreground" />
          </button>

          {/* Filters */}
          <div className="flex gap-3 ml-auto">
            <select className="px-4 py-2 border border-border rounded-lg text-sm text-foreground bg-background">
              <option>Pilih Fakultas</option>
            </select>
            <select className="px-4 py-2 border border-border rounded-lg text-sm text-foreground bg-background">
              <option>Pilih Lantai</option>
            </select>
            <select className="px-4 py-2 border border-border rounded-lg text-sm text-foreground bg-background">
              <option>Cari</option>
            </select>
          </div>
        </div>

        {/* Schedule Grid Container */}
        <div className="flex-1 overflow-auto bg-background p-6">
          <ScheduleGrid facilities={FACILITIES} events={EVENTS} />
        </div>
      </div>

      {/* Right Sidebar - Notifications */}
      <div className="w-20 bg-white border-l border-border flex flex-col items-center py-6 gap-4">
        <div className="w-12 h-12 bg-red-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">
          321
        </div>
        <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">
          64
        </div>
        <div className="w-12 h-12 bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">
          740
        </div>
      </div>
    </div>
  )
}
