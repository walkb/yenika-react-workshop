import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo/Logo";
import ClickCounter from "@/components/ClickCounter/ClickCounter";
import Profile from "@/components/Profile/Profile";
// Import your necessary components here!


// Note, this project is using Tailwind CSS (which is why the className looks a little funny.)
// It is basically a shorthand for styling inline.
// Our website does not currently use Tailwind CSS!

export default function Home() {
  return (
    <div className="flex flex-col items-center p-32 gap-2">
      <h1 className="font-bold text-2xl">React Component Tutorial</h1>

      {/* You'll be modifying the div below. */}
      <div className="bg-black rounded-full">
        <Image src={"/FooterLogo.png"} alt="" width={100} height={100}></Image>
      </div>

      <h2 className="text-xl text-zinc-600">September 26, 2024</h2>


      {/* ---------- YOUR CODE BELOW ----------- */}



      {/* ---------- YOUR CODE ABOVE ---------- */}
    </div>
  );
}
