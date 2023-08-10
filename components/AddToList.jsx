"use client";
import React, { useState } from "react";
import { BsCardChecklist, BsPlus } from "react-icons/bs";
import { motion } from "framer-motion";

const AddToList = () => {
  const [value, setValue] = useState("");
  const handleClick = () => {};
  return (
    <div className="w-full flex items-center justify-center px-8 py-4 rounded-lg bg-zinc-800 gap-4 ">
      <BsCardChecklist className="text-2xl text-[#555]" />
      <input
        type="text"
        placeholder="Add to your list"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1 h-12 bg-transparent px-2 text-xl font-semibold text-[#777] outline-none border-none placeholder:text-[#555]"
      />
      <motion.div
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="p-2 rounded-md border border-emerald-400 cursor-pointer group hover:bg-emerald-400"
      >
        <BsPlus className="text-2xl text-emerald-400 group-hover:text-white" />
      </motion.div>
    </div>
  );
};

export default AddToList;
