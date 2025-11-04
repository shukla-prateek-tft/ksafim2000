import { useEffect } from "react";

type UseElementsExistOnEnter = (
  classNames: string[],
  callback: () => void
) => void;

const useElementsExistOnEnter: UseElementsExistOnEnter = (
  classNames = [],
  callback
) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        requestAnimationFrame(() => {
          const anyExist = classNames.some((className) =>
            document.querySelector(`.${className}`)
          );
          if (!anyExist) {
            callback();
          }
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [classNames, callback]);
};

export default useElementsExistOnEnter;
