import React, { useState } from 'react';
import {
  SearchbarContainer,
  InputsContainer,
  Label,
  ModelInput,
  SearchBtn,
} from './Searchbar.styled';

export default function Searchbar({ search, reset }) {

  return (
    <SearchbarContainer >
      <InputsContainer>
        <Label htmlFor="modelTitle">Car brand</Label>
        <ModelInput
          id="modelTitle"
          placeholder="Enter the text"
          // onChange={handleChange}
          value={search}
        />
        <SearchBtn type="submit" onClick={search}>
          Search
        </SearchBtn>
        <SearchBtn type="button" onClick={reset}>
          Reset
        </SearchBtn>
      </InputsContainer>
    </SearchbarContainer>
  );
}
