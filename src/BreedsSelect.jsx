import React, { useState } from "react";

// @ts-check
export const BreedsSelect = ({breeds,selectedBreed,setSelectedBreed}) => {
  return(
    <>
      <select value={selectedBreed} onChange={(e) => {setSelectedBreed(e.target.value)}}>
        {
          breeds.map((breed,idx) => (
            <option value={breed} key={idx}>{breed}</option>
          ))
        }
      </select>
    </>
  );
};

export default BreedsSelect;
