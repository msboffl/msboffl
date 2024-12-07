"use client";
import { TypeAnimation } from "react-type-animation";

export function JobRoles() {
  return (
    <TypeAnimation
      sequence={[
        "Fullstack Engineer,",
        500,
        "Backend Engineer,",
        500,
        "Frontend Engineer,",
        500,
      ]}
      repeat={Infinity}
      speed={25}
      className="text-red-650"
    />
  );
}
