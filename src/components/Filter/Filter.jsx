import React from "react";
import styled from "styled-components";

const FilterWrapper = styled.div`
  margin-bottom: 20px;
`;

const FilterInput = styled.input`
  padding: 10px;
  font-size: 14px;
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Filter = ({ value, onChange }) => {
  return (
    <FilterWrapper>
      <FilterInput
        type="text"
        placeholder="Фільтр задач..."
        value={value}
        onChange={onChange}
      />
    </FilterWrapper>
  );
};

export default Filter;
