import React from "react";

function Board({ children, title, count }) {
  const labelStyles = "mb-4 text-teal-900 font-bold"
  return (
    <div className="w-1/3 h-100 flex flex-col min-w-[300px]">
      <h2 className="mb-2 text-center text-base letter-spacing-tight uppercase flex items-center justify-evenly">
        <span className={labelStyles}>{title}</span>
        {count > -1 && (
          <small className="block ml-1">{`count: ${count}`}</small>
        )}
      </h2>
      <div className="overflow-y-auto overflow-x-hidden bg-white rounded-lg p-3 relative flex flex-col gap-4 grow shadow-sm">
        {children}
      </div>
    </div>
  );
}

export default Board;
