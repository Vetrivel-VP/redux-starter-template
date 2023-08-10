"use client";
import React from "react";
import { MdDelete } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

const ToDoLists = () => {
  return (
    <div className="w-full bg-zinc-800 my-4 rounded-lg px-4 py-3 flex flex-col items-center justify-center gap-2">
      <AnimatePresence>
        {todos?.length > 0 ? (
          <>
            {todos
              .slice()
              .sort((a, b) => b.id - a.id)
              .map((item) => (
                <ListCard key={item.id} index={item.id} toDo={item.item} />
              ))}
          </>
        ) : (
          <>
            <p className="text-lg text-[#888] font-semibold">
              No Active Activities
            </p>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

const ListCard = ({ toDo, index }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="w-full bg-black px-4 py-3 rounded-lg flex items-center justify-between"
    >
      <p className="text-lg text-[#555] font-semibold">{toDo}</p>
      <motion.div whileTap={{ scale: 0.9 }} className=" cursor-pointer">
        <MdDelete className="text-2xl text-red-500" />
      </motion.div>
    </motion.div>
  );
};

export default ToDoLists;
