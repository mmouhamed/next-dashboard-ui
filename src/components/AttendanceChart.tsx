"use client";

import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 40,
    absent: 24,
  },
  {
    name: "Tues",
    present: 30,
    absent: 13,
  },
  {
    name: "Wed",
    present: 20,
    absent: 98,
  },
  {
    name: "Thurs",
    present: 27,
    absent: 39,
  },
  {
    name: "Fri",
    present: 18,
    absent: 48,
  },
  {
    name: "Sat",
    present: 23,
    absent: 38,
  },
  {
    name: "Sun",
    present: 34,
    absent: 43,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg w-full h-full p-4">
      <div>
        <h1 className="text-lg font-semibold">Attendance Chart</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar dataKey="absent" fill="#FAE27C" legendType="circle" />
          <Bar dataKey="present" fill="#CFC4FF" legendType="circle" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
