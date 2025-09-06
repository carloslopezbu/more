import { CalendarMini } from "./ui/calendar";
import AddCalendarTask from "./calendar-add-task";
import React from "react";

export default function CalendarSidebar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <aside className="">
      <AddCalendarTask />

      <CalendarMini
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow-sm"
        captionLayout="dropdown"
      />
    </aside>
  );
}
