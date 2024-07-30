import { useSearchParams } from "react-router-dom";

function Filter() {
  const [searchParam, setSearchParam] = useSearchParams();
  const age = searchParam.get("age");
  const city = searchParam.get("city");
  return (
    <>
      <h1>Filter</h1>
      <h3>Age : {age}</h3>
      <h3>City : {city}</h3>
      <input
        type="text"
        onChange={(e) => setSearchParam({ city: e.target.value })}
        placeholder="Enter city name"
      />
      <input
        type="text"
        onChange={(e) => setSearchParam({ age: e.target.value })}
        placeholder="Enter age"
      />
    </>
  );
}
export default Filter;
