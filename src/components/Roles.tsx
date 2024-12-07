"use client";
import { TypeAnimation } from "react-type-animation";

export function JobRoles() {
  return (
    <div className="font-sans text-5xl font-bold tracking-[3px]">
      <TypeAnimation
        sequence={[
          "Full Stack Engineer,",
          500,
          "Back End Engineer,",
          500,
          "Front End Engineer,",
          500,
        ]}
        repeat={Infinity}
        speed={15}
        className="text-red-650"
      />
    </div>
  );
}
