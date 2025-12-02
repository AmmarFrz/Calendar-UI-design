import { Home, Calendar, Trash2, Users, BarChart3, Settings } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="w-16 bg-white border-r border-border flex flex-col items-center py-6 gap-8">
      <div>Menu</div>
      <button className="p-3 rounded-lg hover:bg-muted transition text-muted-foreground hover:text-foreground">
        <Home size={24} />
      </button>
      <button className="p-3 rounded-lg bg-blue-500 text-white">
        <Trash2 size={24} />
      </button>
      <button className="p-3 rounded-lg hover:bg-muted transition text-muted-foreground hover:text-foreground">
        <Calendar size={24} />
      </button>
      <button className="p-3 rounded-lg hover:bg-muted transition text-muted-foreground hover:text-foreground">
        <Users size={24} />
      </button>
      <button className="p-3 rounded-lg hover:bg-muted transition text-muted-foreground hover:text-foreground">
        <BarChart3 size={24} />
      </button>
      <button className="p-3 rounded-lg hover:bg-muted transition text-muted-foreground hover:text-foreground">
        <Settings size={24} />
      </button>
    </div>
  )
}
