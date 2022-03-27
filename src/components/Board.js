import React from "react";

function Board({ children, title, count }) {
  return (
    <div className="w-1/3 h-100 flex flex-col" style={{ minWidth: "300px" }}>
      <h2 className="mb-2 text-center text-base letter-spacing-tight uppercase flex items-center justify-evenly">
        {title}
        {count > -1 && (
          <small className="block ml-1">{`count: ${count}`}</small>
        )}
      </h2>
      <div className="grow overflow-y-auto overflow-x-hidden bg-white rounded-lg p-3 relative">
        {children}
      </div>
    </div>
  );
}

export default Board;
