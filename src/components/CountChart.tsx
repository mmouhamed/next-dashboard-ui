"use client";

import exp from "constants";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Girls",
    count: 50,
    fill: "#CFC4FF",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#FAE27C",
  },
  {
    name: "Total",
    count: 106,
    fill: "white",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};
const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* Titlte */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* Chart */}
      <div
        className=" relative w-full
      h-[75%]"
      >
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          width={40}
          height={40}
          className="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* Bottom */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-yellow rounded-full " />
          <h1 className="font-bold">7,007</h1>
          <h2 className="text-xs">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-purple rounded-full " />
          <h1 className="font-bold">3,130</h1>
          <h2 className="text-xs">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
