"use client";
import Image from "next/image";
import { title } from "process";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 0,
    date: "2022-01-01",
    title: "New Year",
    description: "Happy New Year",
  },
  { id: 1, date: "2022-01-14", title: "Pongal", description: "Happy Pongal" },

  {
    id: 2,
    date: "2022-02-14",
    title: "Valentine's Day",
    description: "Happy Valentine's Day",
  },
  { id: 3, date: "2022-03-14", title: "Pi Day", description: "Happy Pi Day" },
  {
    id: 4,
    date: "2022-04-01",
    title: "April Fools",
    description: "Happy April Fools",
  },
  {
    id: 5,
    date: "2022-04-14",
    title: "Tamil New Year",
    description: "Happy Tamil New Year",
  },
  {
    id: 6,
    date: "2022-05-01",
    title: "Labor Day",
    description: "Happy Labor Day",
  },
  {
    id: 7,
    date: "2022-06-01",
    title: "Children's Day",
    description: "Happy Children's Day",
  },
  {
    id: 8,
    date: "2022-07-01",
    title: "Canada Day",
    description: "Happy Canada Day",
  },
  {
    id: 9,
    date: "2022-08-01",
    title: "Civic Holiday",
    description: "Happy Civic Holiday",
  },
  {
    id: 10,
    date: "2022-09-01",
    title: "Labor Day",
    description: "Happy Labor Day",
  },
  {
    id: 11,
    date: "2022-10-01",
    title: "Thanksgiving",
    description: "Happy Thanksgiving",
  },
  {
    id: 12,
    date: "2022-11-01",
    title: "Halloween",
    description: "Happy Halloween",
  },
  {
    id: 13,
    date: "2022-12-01",
    title: "Christmas",
    description: "Happy Christmas",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-slate-100 p-4 rounded-md">
      <Calendar
        className="bg-white p-4 rounded-md"
        onChange={onChange}
        value={value}
      />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src={"/moreDark.png"} alt="more" width={20} height={20} />
      </div>
      <div>
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-blueSky even:border-t-purple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.date}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
