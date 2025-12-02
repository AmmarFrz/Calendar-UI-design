"use client"

interface Facility {
  id: number
  code: string
  name: string
  capacity: number
  color: string
}

interface Event {
  id: number
  facilityId: number
  title: string
  subtitle: string
  startTime: number
  duration: number
  color: string
}

interface ScheduleGridProps {
  facilities: Facility[]
  events: Event[]
}

export default function ScheduleGrid({ facilities, events }: ScheduleGridProps) {
  const hours = Array.from({ length: 10 }, (_, i) => 7 + i) // 7:00 to 16:00
  const hourHeight = 80 // pixels

  return (
    <div className="bg-white rounded-lg border border-border overflow-hidden">
      {/* Header with Facilities */}
      <div className="flex border-b border-border">
        <div className="w-16 bg-muted p-2 flex items-center justify-center text-xs font-semibold text-foreground"></div>
        {facilities.map((facility) => (
          <div key={facility.id} className="flex-1 min-w-32 p-3 text-center border-r border-border last:border-r-0">
            <p className="text-xs font-semibold text-muted-foreground">{facility.code}</p>
            <p className="text-sm font-bold text-foreground">{facility.name}</p>
            <p className="text-xs text-muted-foreground">({facility.capacity})</p>
          </div>
        ))}
      </div>

      {/* Time Grid */}
      <div className="flex">
        {/* Time Column */}
        <div className="w-16 border-r border-border bg-muted">
          {hours.map((hour) => (
            <div
              key={hour}
              className="p-2 text-right text-xs font-semibold text-foreground border-b border-border"
              style={{ height: hourHeight }}
            >
              {`${String(hour).padStart(2, "0")}:00`}
            </div>
          ))}
        </div>

        {/* Facility Columns */}
        {facilities.map((facility) => (
          <div key={facility.id} className="flex-1 min-w-32 border-r border-border last:border-r-0">
            <div className="relative" style={{ height: hours.length * hourHeight }}>
              {/* Hour Grid Lines */}
              {hours.map((hour) => (
                <div
                  key={`grid-${hour}`}
                  className="absolute w-full border-b border-border"
                  style={{
                    top: (hour - 7) * hourHeight,
                    height: hourHeight,
                  }}
                />
              ))}

              {/* Events */}
              {events
                .filter((event) => event.facilityId === facility.id)
                .map((event) => (
                  <div
                    key={event.id}
                    className={`absolute left-1 right-1 rounded-md p-2 text-white text-xs font-semibold cursor-pointer hover:shadow-lg transition overflow-hidden ${event.color}`}
                    style={{
                      top: (event.startTime - 7) * hourHeight + 4,
                      height: event.duration * hourHeight - 8,
                    }}
                  >
                    <div className="font-bold">{event.title}</div>
                    <div className="text-xs opacity-90">{event.subtitle}</div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
