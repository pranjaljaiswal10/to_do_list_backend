import { useContext, useState } from "react";
import { UserContext } from "../utils/usercontext.jsx";
import axios from "axios";
import { BASE_URL } from "../utils/constant.js";

const List = () => {
  const { state } = useContext(UserContext);
  const [data, setData] = useState({
    content: "",
    complete: false,
  });
  const handleChange = (e) => {
    e.target.id === "content"
      ? setData({
          ...data,
          [e.target.id]: e.target.value,
        })
      : setData({ ...data, [e.target.id]: !data.complete });
  };
  const [list, setList] = useState(null);
  const handleClick = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${BASE_URL}/api/v1/todo`, data);
    const json = response.data;
    setList(json);
    console.log(json);
  };

  return (
    <>
      <input
        type="text"
        id="content"
        value={data.content}
        onChange={(e) => handleChange(e)}
      />
     {list && <input
        type="checkbox"
        id="complete"
        checked={data.complete}
        onChange={(e) => handleChange(e)}
      />
           }    
             <button onClick={handleClick}>Add</button>
    </>
  );
};

export default List;
