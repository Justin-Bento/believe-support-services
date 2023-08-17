"use client"

import * as React from "react"
import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri"
import { DayPicker } from "react-day-picker"
import { buttonVariants } from "./Button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={"p-3" + className}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: (
            buttonVariants({ variant: "outline" }),
            "w-10 h-10 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-opacity-50 rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: (
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent" +
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: (
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary-300 text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary-300 focus:text-primary-foreground",
        day_today: "bg-gray-200 text-gray-950",
        day_outside: "text-opacity-50 opacity-50",
        day_disabled: "text-opacity-50 opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }:any) => <RiArrowLeftFill className="h-4 w-4" />,
        IconRight: ({ ...props }:any) => <RiArrowRightFill className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
