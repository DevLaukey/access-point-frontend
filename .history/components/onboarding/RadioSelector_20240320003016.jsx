import React from 'react'

function RadioSelector() {
  return (
  <div className="relative mb-4">
          <input
            className="peer hidden"
            id="radio_1"
            type="radio"
            name="radio"
            checked
          />
          <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-gray-900"></span>
          <label
            className="flex cursor-pointer flex-col rounded-2xl border border-gray-300 bg-slate-100/80 p-4 pr-8 sm:pr-16"
            htmlFor="radio_1"
          >
            <span className="mb-2 text-lg font-semibold">Small Team</span>
            <p className="text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              mollitia corporis non fugiat ratione.
            </p>
          </label>
        </div>
        <div className="relative mb-4">
          <input
            className="peer hidden"
            id="radio_2"
            type="radio"
            name="radio"
          />
          <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-gray-900"></span>
          <label
            className="flex cursor-pointer flex-col rounded-2xl border border-gray-300 bg-slate-100/80 p-4 pr-8 sm:pr-16"
            htmlFor="radio_2"
          >
            <span className="mb-2 text-lg font-semibold">Large Team</span>
            <p className="text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              mollitia corporis non fugiat ratione.
            </p>
          </label>
        </div>  )
}

export default RadioSelector