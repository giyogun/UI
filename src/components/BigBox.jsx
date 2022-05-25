import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoMdChatboxes } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";

import "./BigBox.css";

function BigBox(props) {
  return (
    <div className="inner-box">
      <div className="box-title">
        <div className="box-title-item">All Teams</div>
        <span className="box-title-item">
          Showing {props.teams.length} out of {props.teams.length} items
        </span>
      </div>
      <div className="hr-box"></div>
      <ul>
        <div className="box-wrapper">
          {props.teams.map((data) => (
            <div className="small-box" key={data.id}>
              <div className="box-info">
                <div className="company-info">
                  <img src={data.image} alt="" className="box-pic" />
                  <div className="info-text">
                    <h5>{data.name}</h5>
                    <p>Created {data.created_at}</p>
                  </div>
                </div>
                <div className={data.is_favorited ? "star" : ""}>
                  {data.is_favorited ? <AiFillStar /> : <AiOutlineStar />}
                </div>
              </div>
              <p className="company-desc">{data.description}</p>
              {/* <hr /> */}
              <div className="hr-inner-box"></div>

              <div className="box-footer">
                <IoMdChatboxes />
                <span>{data.campaigns_count} Campaigns</span>
                <RiContactsFill />
                <span>{data.leads_count} Leads</span>
              </div>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default BigBox;
