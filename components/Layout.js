import Link from "next/link";
import { GrMenu } from "react-icons/gr";

const NavBar = ({ href, text }) => {
  return (
    <div>
      <div>
        <Link href={href}>{text}</Link>
        {/* <button onClick={() => console.log("Menu")}> */}
        <GrMenu size={24} color="white" />
        {/* </button> */}
      </div>
      <h1>Hello</h1>
    </div>
  );
};

export default NavBar;
