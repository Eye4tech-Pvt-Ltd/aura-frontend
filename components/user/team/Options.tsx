import { Trash2, Edit3 } from "lucide-react";
import React from "react";

const Options = ({ onEdit, onDelete }: { onEdit: () => void; onDelete: () => void }) => {
  return (
    <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg flex flex-col">
      <button
        onClick={onEdit}
        className= "cc flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
      >
        <Edit3 size={16} /> Edit
      </button>

      <button
        onClick={onDelete}
        className="cursor-pointer flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-red-500"
      >
        <Trash2 size={16} /> Delete
      </button>
    </div>
  );
};

export default Options;
