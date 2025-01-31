import { useContext, useState } from "react";
import { UserContext } from "../utils/usercontext.jsx";

const List = () => {
  const { state } = useContext(UserContext);
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const [list, setList] = useState(null);
  const handleClick = (e) => {
    
  };

  return (
    <>
      <input
        type="text"
        id=""
        value={value}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default List;
