"use client";
import { AddToList } from "@/components";
import ToDoLists from "@/components/ToDoLists";
import React from "react";

const Home = () => {
  return (
    <div className=" w-screen h-screen flex flex-col items-center justify-center px-4 gap-6">
      <p className="text-3xl font-semibold to-gray-100">ToDO List 🚀</p>
      <div className="w-full md:w-1/2 rounded-lg px-6 py-8 border border-zinc-800 ">
        <AddToList />
        <ToDoLists />
      </div>
    </div>
  );
};

export default Home;
