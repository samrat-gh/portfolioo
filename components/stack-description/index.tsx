import ExpressIcon from "@/icons/express";
import JSIcon from "@/icons/js";
import MongoDBIcon from "@/icons/mongodb";
import SQLIcon from "@/icons/mysql";
import NestIcon from "@/icons/nest";
import NextIcon from "@/icons/next";
import TailwindIcon from "@/icons/tailwind";
import TypescriptIcon from "@/icons/typescript";

export default function MyStack() {
  const stackList = [
    {
      id: "stack-1",
      name: "Nextjs",
      icon: <NextIcon className="inline" width={50} height={50} />,
    },
    {
      id: "stack-2",
      name: "Tailwind CSS",
      icon: <TailwindIcon className="inline" width={150} height={150} />,
    },
    {
      id: "stack-3",
      name: "Tailwind CSS",
      icon: <JSIcon className="inline" width={50} height={50} />,
    },
    {
      id: "stack-4",
      name: "Tailwind CSS",
      icon: <TypescriptIcon className="inline" width={50} height={50} />,
    },
    {
      id: "stack-5",
      name: "Express",
      icon: (
        <ExpressIcon
          className="inline"
          width={80}
          height={80}
          color="#ffffff"
        />
      ),
    },
    {
      id: "stack-6",
      name: "Nest",
      icon: (
        <NestIcon className="inline" width={100} height={100} color="white" />
      ),
    },
    {
      id: "stack-7",
      name: "MongoDB",
      icon: (
        <MongoDBIcon className="inline" width={50} height={50} color="white" />
      ),
    },
    {
      id: "stack-8",
      name: "SQL",
      icon: <SQLIcon className="inline" width={80} height={80} color="white" />,
    },
  ];
  return (
    <div className="space-y-3">
      <div className="font-bold text-2xl text-slate-200">
        Full-Stack Developer
      </div>
      <div className="text-lg text-gray-300">
        {
          "I specialize in Next.js, React, and Tailwind CSS on the frontend, combined with Express, MongoDB, and PostgreSQL on the backend. I focus on API integration, code structuring, and performance optimization, building scalable and efficient full-stack applications."
        }
      </div>
      <div>
        <div className="grid grid-cols-4 space-x-4 items-center justify-between">
          {stackList.map((stack) => (
            <div key={stack.id} className="flex justify-center items-center">
              {stack.icon}

              {/* <div className="text-lg text-gray-300">{stack.name}</div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
