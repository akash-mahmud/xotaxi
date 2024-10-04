import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <>
    
    
 <UserButton afterSwitchSessionUrl="/"/>
 <button>
Hello
 </button>
    </>
  );
}
