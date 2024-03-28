import React from "react";

function RadioSelector({
  title,
  description,
  price,
  isSelected,
  onRadioChange,
}) {
  return (
    <div className="relative mb-4">
      <input
        className="peer hidden"
        id={title}
        type="radio"
        name="radio"
        checked={isSelected}
        onChange={onRadioChange}
      />

      <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-gray-900"></span>
      <label
        className="flex cursor-pointer flex-col rounded-2xl border border-gray-300 bg-slate-100/80 dark:border-gray-700 dark:bg-slate-700 p-4 pr-8 sm:pr-16"
        htmlFor={title}
      >
        <div className="flex flex-col mb-2">
          <span className="text-lg font-semibold">{title}</span>
          {price && (
            <>
              <span className="text-lg ml-3 font-semibold">{price}</span>
              <span className="text-muted-foreground"> /year</span>
            </>
          )}
        </div>
        <p className="text-sm sm:text-base">{description}</p>
      </label>
    </div>
  );
}

export default RadioSelector;
