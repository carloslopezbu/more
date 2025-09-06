import React, { useEffect, useMemo, useState } from "react";
import CalendarSidebar from "@/components/calendar-sidebar";
import { z } from "zod";

// --- Tipos y esquema Zod para el evento ---
const EventSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "El nombre es obligatorio"),
  description: z.string().optional(),
  start: z.string().optional(),
  end: z.string().optional(),
});

export default function CalendarDisplay() {
  return (
    <div>
      <CalendarSidebar />
    </div>
  );
}
