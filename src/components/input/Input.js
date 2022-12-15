import { ReactComponent as Search } from "../../assets/images/search.svg";

import "./Input.css";

function Input({ onChange }) {
  return (
    <div className="inputWrapper">
      <Search />
      <input placeholder="Search" onChange={onChange} />
    </div>
  );
}

export default Input;
