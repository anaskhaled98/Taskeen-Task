import Select from "react-select";

const TantMenu = ({ hajList, setTentValue, extractInfo }) => {
  const data = JSON.parse(localStorage.getItem("DATALIST"));
  const exactData = data ? extractInfo(data) : hajList;
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }

  let tents = exactData.map((item) => {
    const { tent } = item;
    return tent;
  });

  tents = removeDuplicates(tents);

  let options = tents.map((tents) => {
    return { value: tents, label: tents };
  });

  options.unshift({ value: "Clear", label: "Clear" });

  const onChangeSelectHandler = (e) => {
    setTentValue(e.value);
  };

  return (
    <Select
      options={options}
      onChange={onChangeSelectHandler}
      placeholder="Tent"
      classNames={{
        input: () => "",
        placeholder: () => "!text-customize-gold ",
        singleValue: () => "!text-customize-gold ",
        control: () =>
          `flex h-10 w-[137.5px] items-center justify-between gap-4 rounded-md 
         pl-2 pr-2 border !border-customize-gold 
         `,
        indicatorSeparator: () => "hidden",
        option: () => "!text-gray-800",
        menu: () => "bg-gray-100",
      }}
    />
  );
};

export default TantMenu;
