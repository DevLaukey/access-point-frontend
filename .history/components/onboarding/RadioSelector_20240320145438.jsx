import React from "react";

function RadioSelector({ tier, description, isSelected, onRadioChange }) {
  return (
    <div className="relative mb-4">
      <input
        className="peer hidden"
        id={tier}
        type="radio"
        name="radio"
        checked={isSelected}
        onChange={onRadioChange}
      />
      <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white dark:bg-slate-600 peer-checked:border-gray-900"></span>
      <label
        className="flex cursor-pointer flex-col rounded-2xl border border-gray-300 bg-slate-100/80 p-4 pr-8 sm:pr-16"
        htmlFor={tier}
      >
        <span className="mb-2 text-lg font-semibold">{tier} Team</span>
        <p className="text-sm sm:text-base">{description}</p>
      </label>
    </div>
  );
}

export default RadioSelector;
