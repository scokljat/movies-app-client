import Navbar from "../navbar/Navbar";
import Input from "../input/Input";

function Header({ setText }) {
  return (
    <>
      <Navbar />
      <Input onChange={(e) => setText(e.target.value)} />
    </>
  );
}

export default Header;
