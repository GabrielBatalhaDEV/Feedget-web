import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";

export function Wildget() {
  const [isWildgetOpen, setIsWildgetOpen] = useState(false);

  function toogleWidgetVisibility() {
    setIsWildgetOpen(!isWildgetOpen);
  }

  return (
    <div className=" absolute bottom-4 right-4">
      {isWildgetOpen && <p>Hello World!</p>}
      <button
        className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group "
        onClick={toogleWidgetVisibility}
      >
        <ChatTeardropDots className="w-6 h-6 " />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2">Feedback</span>
        </span>
      </button>
    </div>
  );
}