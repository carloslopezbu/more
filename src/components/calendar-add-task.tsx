import { Button } from "./ui/button";
import { Plus, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "./ui/dropdown-menu";

export default function AddCalendarTask() {
  const task: string[] = ["Evento", "Tarea"];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="lg" className="h-14 px-6 text-lg">
          <Plus size={28} /> Crear <ChevronDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {task.map((t) => (
          <DropdownMenuItem>{t}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
