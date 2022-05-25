import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GiWhaleTail } from "react-icons/gi";
import { IoMdChatboxes } from "react-icons/io";
import { MdOutlineHomeWork } from "react-icons/md";
import { RiContactsFill, RiPulseLine } from "react-icons/ri";
import "./Sidebar.css";


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="item">
        <GiWhaleTail />
      </div>
      <div className="item">
        <IoMdChatboxes />
      </div>
      <div className="item">
        <MdOutlineHomeWork />
      </div>
      <div className="item">
        <RiContactsFill />
      </div>
      <div className="item pulse">
        <RiPulseLine />
      </div>
      <div className="item end">
        <AiOutlineQuestionCircle />
      </div>
    </div>
  );
}

export default Sidebar;
