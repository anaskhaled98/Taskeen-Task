import { useEffect, useState } from "react";
import CampMenu from "./components/CampMenu";
import DataList from "./components/DataList";
import SearchBar from "./components/SearchBar";
import TantMenu from "./components/TantMenu";
import mapImage from "./assets/tent_pic.png";

function App() {
  const [hajList, setHajList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [campValue, setCampValue] = useState("");
  const [showMap, setShowMap] = useState(false);
  const [tentValue, setTentValue] = useState("");

  useEffect(() => {
    fetchDataFromLocalStorage();
  }, [searchValue, campValue]);

  const extractInfo = (data) => {
    return data.map((item) => {
      let {
        hajjId: id,
        name,
        genderId: gender,
        campNumber: center,
        tentNumber: tent,
        bedNumber: bed,
      } = item;
      name = name
        .split(" ")
        .map((word, index) => {
          if (index < 2)
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(" ");

      return {
        id,
        name,
        gender,
        center,
        tent,
        bed,
      };
    });
  };

  const setNamesFelterArray = (filteredData) => {
    return filteredData.filter((item) => {
      const nameArray = item.name.split(" ");
      const searchHandeled = searchValue.toLowerCase().trim();
      if (
        nameArray[0].toLowerCase().startsWith(searchHandeled) ||
        nameArray[1].toLowerCase().startsWith(searchHandeled) ||
        item.name.toLowerCase().startsWith(searchHandeled)
      ) {
        return item;
      }
    });
  };

  function fetchData() {
    fetch("/Data.json")
      .then((data) => data.json())
      .then((data) => {
        let exactData = extractInfo(data);
        exactData =
          !searchValue && searchValue.trim() === ""
            ? exactData
            : setNamesFelterArray(exactData);

        if (campValue && campValue !== "Clear") {
          exactData = exactData.filter(
            (element) => element.center === campValue
          );
        } else {
          exactData = extractInfo(data);
          exactData =
            !searchValue && searchValue.trim() === ""
              ? exactData
              : setNamesFelterArray(exactData);
        }
        setHajList(exactData);
        localStorage.setItem("DATALIST", JSON.stringify(data));
      });
  }

  const fetchDataFromLocalStorage = () => {
    const data = localStorage.getItem("DATALIST");
    if (data) {
      let exactData = extractInfo(JSON.parse(data));
      exactData =
        !searchValue && searchValue.trim() === ""
          ? exactData
          : setNamesFelterArray(exactData);

      if (campValue && campValue !== "Clear") {
        exactData = exactData.filter((element) => element.center === campValue);
      } else {
        exactData = extractInfo(JSON.parse(data));
        exactData =
          !searchValue && searchValue.trim() === ""
            ? exactData
            : setNamesFelterArray(exactData);
      }
      setHajList(exactData);
    } else {
      fetchData();
    }
  };

  return (
    <div className="flex ">
      <div className="w-[800px]">
        <div className="flex gap-3">
          <SearchBar setSearchValue={setSearchValue} />
          <CampMenu
            hajList={hajList}
            extractInfo={extractInfo}
            setCampValue={setCampValue}
          />
          <TantMenu
            hajList={hajList}
            setTentValue={setTentValue}
            extractInfo={extractInfo}
          />
        </div>
        <DataList hajList={hajList} showMap={showMap} setShowMap={setShowMap} />
      </div>
      <div className="mt-10 ml-16">
        {showMap && <img src={mapImage} alt="map image" />}
      </div>
    </div>
  );
}

export default App;
