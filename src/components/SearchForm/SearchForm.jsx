import { useContext } from "react";
import { DeleteIcon, FirstIcon, Form, Input } from "./SearchForm.styled";
import icons from "../../image/icons.svg";
import { FilterContext } from "../Layout/Layout";

const SearchForm = () => {
  const { filter, setFilter } = useContext(FilterContext);

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClear = () => setFilter("");

  return (
    <Form onSubmit={handleSubmit}>
      <FirstIcon onClick={handleSubmit}>
        <use href={icons + "#icon-search"}></use>
      </FirstIcon>
      <Input
        type="text"
        name="search"
        placeholder="Search or start new chat"
        autoComplete="off"
        value={filter}
        onChange={handleChange}
      ></Input>
      {filter !== "" && (
        <DeleteIcon onClick={handleClear}>
          <use href={icons + "#icon-clear"}></use>
        </DeleteIcon>
      )}
    </Form>
  );
};

export default SearchForm;
