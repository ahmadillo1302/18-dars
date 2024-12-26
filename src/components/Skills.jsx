import {
  Docer,
  Html,
  Nest,
  Node,
  Typescript,
  React,
  Redux,
  Tailwindcss,
} from "../assets";

export default function Skills() {
  return (
    <>
      <p
        id="skill"
        className="text-4xl text-center font-extrabold p-5 text-white pt-32"
      >
        Skills
      </p>
      <hr />
      <section className="py-32">
        <div className="bg-[#6A1E55] py-20 px-10 mx-32 bg-opacity-50 text-white font-extrabold text-3xl text-center">
          <p className="">BackEnd</p>
          <div className="grid grid-cols-2 gap-10">
            <img className="h-64 max-w-[500px] " src={Typescript} alt="logo" />
            <img className="h-64 max-w-[500px] " src={Node} alt="logo" />
            <img className="h-64 max-w-[500px] " src={Nest} alt="logo" />
            <img className="h-64 max-w-[500px] " src={Docer} alt="logo" />
          </div>
        </div>
        <div className="bg-[#6A1E55] py-20 px-10 mx-32 bg-opacity-50 text-white font-extrabold text-3xl text-center">
          <p>FrontEnd</p>
          <div className="grid grid-cols-2 gap-10">
            <img className="h-64 max-w-[500px] " src={Html} alt="logo" />
            <img className="h-64 max-w-[500px] " src={React} alt="logo" />
            <img className="h-64 max-w-[500px] " src={Redux} alt="logo" />
            <img className="h-64 max-w-[500px] " src={Tailwindcss} alt="logo" />
          </div>
        </div>
      </section>
    </>
  );
}
