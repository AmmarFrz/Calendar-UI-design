import { CheckCircle } from "lucide-react"

export default function FacilityHeader() {
  return (
    <div className="bg-white border-b border-border px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          S
        </div>
        <div>
          <p className="font-semibold text-foreground">Susi Suriname</p>
          <p className="text-xs text-muted-foreground">2025@gmail.usuraname.id</p>
        </div>
      </div>
      <button className="p-2 rounded-lg hover:bg-muted transition text-primary">
        <CheckCircle size={20} />
      </button>
    </div>
  )
}
