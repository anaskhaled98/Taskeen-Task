import Select from "react-select";

const CampMenu = ({ hajList, setCampValue, extractInfo }) => {
  const data = JSON.parse(localStorage.getItem("DATALIST"));
  const exactData = data ? extractInfo(data) : hajList;

  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }

  let camps = exactData.map((item) => {
    const { center } = item;
    return center;
  });

  camps = removeDuplicates(camps);

  let options = camps.map((camp) => {
    return { value: camp, label: camp };
  });

  options.unshift({ value: "Clear", label: "Clear" });

  const onChangeSelectHandler = (e) => {
    setCampValue(e.value);
  };

  return (
    <Select
      options={options}
      placeholder="Camp"
      onChange={onChangeSelectHandler}
      classNames={{
        input: () => "",
        placeholder: () => "!text-customize-gold ",
        singleValue: () => "!text-customize-gold ",
        control: () =>
          `flex h-10 w-[147.5px] items-center justify-between gap-4 rounded-md 
         pl-2 pr-2 border !border-customize-gold 
         `,
        indicatorSeparator: () => "hidden",
        option: () => "!text-gray-800",
        menu: () => "bg-gray-100",
      }}
    />
  );
};

export default CampMenu;
