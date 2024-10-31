import "./DataList.css";
import eye from "../assets/eye.svg";
const NAV_SECTIONS = ["Id", "Name", "Gender", "Center(Camp)", "Tent", "Bed"];

const DataList = ({ hajList, showMap, setShowMap }) => {
  const onClickHandler = () => {
    setShowMap(!showMap);
  };
  return (
    <div className="mt-6">
      <nav className="text-center grid gap-2 grid-cols-6  font-semibold w-full p-3 pl-2 pr-7 bg-bg-gold rounded-md">
        {NAV_SECTIONS.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </nav>
      <ul className="vertical-scroll-menu">
        {hajList?.map((item) => (
          <li
            key={item.id}
            className="text-center text-[14px] items-center grid gap-2 grid-cols-6 text-s w-full p-3 pl-4 pr-4 border-b-[1px] rounded-md"
          >
            <span>{item.id}</span>
            <span>{item.name}</span>
            <span>{item.gender ? "male" : "female"}</span>
            <span>{item.center}</span>
            <div className="grid grid-cols-2">
              <span className="justify-self-end">{item.tent}</span>
              <button onClick={onClickHandler}>
                <img src={eye} alt="eye icon" />
              </button>
            </div>
            <span>{item.bed}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
