import { useEffect, useState } from "react";
import { Form, Input } from "./SearchForm.styled";
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

  return (
    <Form onSubmit={handleSubmit}>
      <svg>
        <use href={icons + "#icon-search"}></use>
      </svg>
      <Input
        type="text"
        name="search"
        placeholder="Search or start new chat"
        value={searchString}
        onChange={handleChange}
      ></Input>
    </Form>
  );
};

export default SearchForm;
