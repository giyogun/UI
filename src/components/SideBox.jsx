import { RAW } from "../rawData";
import './SideBox.css';

const someFunc = (x) => {
  let y = (
    <p>
      <span>Julie</span> increased <span> Indeed - US's quota</span>
    </p>
  );
  if (x.action === "added_leads") {
    y = (
      <p>
        <span>{x.person.name}</span> {x.action.split("_")[0]} new{" "}
        {x.action.split("_")[1]} to <span>{x.target}</span>
      </p>
    );
  }
  if (x.action === "archived_team") {
    y = (
      <p>
        <span>{x.person.name}</span> {x.action.split("_")[0]} the{" "}
        {x.action.split("_")[1]} <span>{x.target}</span>
      </p>
    );
  }

  return y;
};

function SideBox() {
  return (
    <div className="side-box">
      <div className="box-title">
        <div className="box-title-item">Activity</div>
      </div>
      <div className="hr-side"></div>
      {RAW[0].activities.map((item) => (
        <div className="activity" key={item.id}>
          <img src={item.person.avatar} alt={item.action} className="activity-item-pic" />
          <div className="summary">
            {someFunc(item)}
            <div>{item.created_at}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SideBox;
