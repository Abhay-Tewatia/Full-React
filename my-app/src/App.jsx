import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")
  const colors = ["red", "green", "blue", "purple", "yellow", "orange", "pink", "cyan", "teal", "brown", "gray", "black", "lime", "gold"];
  return (
    <>
       {/* <div className="w-full h-screen duration-200"
       style={{backgroundColor: color}}
       >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-2xl"> */}
            {/* <button onClick={() => setColor("yellow")}
  className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
  style={{ backgroundColor: "yellow" }}
>Yellow</button>

<button onClick={() => setColor("orange")}
  className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
  style={{ backgroundColor: "orange" }}
>Orange</button>

<button onClick={() => setColor("pink")}
  className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
  style={{ backgroundColor: "pink" }}
>Pink</button>

<button onClick={() => setColor("cyan")}
  className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
  style={{ backgroundColor: "cyan" }}
>Cyan</button>

<button onClick={() => setColor("teal")}
  className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
  style={{ backgroundColor: "teal" }}
>Teal</button>

<button onClick={() => setColor("brown")}
  className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
  style={{ backgroundColor: "brown" }}
>Brown</button>

<button onClick={() => setColor("gray")}
  className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
  style={{ backgroundColor: "gray" }}
>Gray</button>

<button onClick={() => setColor("black")}
  className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
  style={{ backgroundColor: "black" }}
>Black</button>

<button onClick={() => setColor("lime")}
  className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
  style={{ backgroundColor: "lime" }}
>Lime</button>

<button onClick={() => setColor("gold")}
  className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
  style={{ backgroundColor: "gold" }}
>Gold</button> */}



{/* 
            </div>
         </div>
       </div> */}
 <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center gap-3 p-5">
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: c }}
          >
            {c}
          </button>
        ))}
      </div>
    </div>

    </>
  )
}

export default App
