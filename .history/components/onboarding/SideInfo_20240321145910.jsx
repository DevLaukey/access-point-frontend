import React from 'react'
import Image from 'next/image'
function SideInfo() {
  return (
    <div className="relative hidden h-screen select-none flex-col justify-center bg-blue-600 bg-gradient-to-br md:flex md:w-1/2">
      <div className="py-16 px-8 text-white xl:w-[40rem]">
        <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
          New Feature
        </span>
        <p className="my-6 text-3xl font-semibold leading-10">
          Create animations with
          <span className="whitespace-nowrap py-2 text-cyan-300">
            drag and drop
          </span>
          .
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          necessitatibus nostrum repellendus ab totam.
        </p>
        <a
          href="#"
          className="font-semibold tracking-wide text-white underline underline-offset-4"
        >
          Learn More
        </a>
      </div>
      <Image
        className="ml-8 w-11/12 max-w-lg rounded-lg object-cover"
        src="/images/SoOmmtD2P6rjV76JvJTc6.png"
      />
    </div>
  );
}

export default SideInfo