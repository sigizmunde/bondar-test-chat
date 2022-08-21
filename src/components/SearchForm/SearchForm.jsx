import { useEffect, useState } from "react";
import { DeleteIcon, FirstIcon, Form, Input } from "./SearchForm.styled";
import icons from "../../image/icons.svg";

const SearchForm = ({ onSearch }) => {
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    onSearch(searchString);
  }, [searchString, onSearch]);

  //   const clearForm = () => {
  //     setSearchString("");
  //   };

  const handleChange = (e) => {
    setSearchString(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchString);
  };

  const handleClear = () => setSearchString("");

  return (
    <Form onSubmit={handleSubmit}>
      <FirstIcon onClick={handleSubmit}>
        <use href={icons + "#icon-search"}></use>
      </FirstIcon>
      <Input
        type="text"
        name="search"
        placeholder="Search or start new chat"
        value={searchString}
        onChange={handleChange}
      ></Input>
      {searchString.trim() !== "" && (
        <DeleteIcon onClick={handleClear}>
          <use href={icons + "#icon-clear"}></use>
        </DeleteIcon>
      )}
    </Form>
  );
};

export default SearchForm;
