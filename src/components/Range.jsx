import React from "react";
const rangeArr = (start, stop, step = 1) =>
  Array(Math.ceil((stop - start) / step))
    .fill(start)
    .map((x, y) => x + y * step);
const Range = ({ count, green, red, orange, yellow }) => {
  return (
    <div
      className="w-full bg-gray-200 h-3 flex items-start p-0 justify-between rounded-sm 
    "
    >
      {[...Array(count * 2)].map((elementInArray, index) => {
        let num = count - (index + 1);
        let greenRange = rangeArr(green[0], green[1]);
        let orangeRange = rangeArr(orange[0], orange[1]);
        let yellowRange = rangeArr(yellow[0], yellow[1]);
        let redRange = rangeArr(red[0], red[1]);
        return (
          <>
            <span
              key={index}
              className={`h-full ${
                greenRange.includes(num)
                  ? "bg-green-400"
                  : orangeRange.includes(num)
                  ? "bg-orange-400"
                  : yellowRange.includes(num)
                  ? "bg-yellow-400"
                  : orangeRange.includes(num)
                  ? "bg-orange-400"
                  : redRange.includes(num)
                  ? "bg-red-400"
                  : ""
              }   ${index+1===(count)?"border-l-4 border-l-black":"border-l-2 border-l-gray-400"} w-full `}
            ></span>
          </>
        );
      })}
    </div>
  );
};

export default Range;
