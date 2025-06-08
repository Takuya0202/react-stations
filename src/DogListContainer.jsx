// @ts-check
import { useEffect, useState } from "react"
import BreedsSelect from "./BreedsSelect";
import React from "react";

export const DogListContainer = () => {
  // stateの設定
  const [breeds,setBreeds] = useState([]);
  const [selectedBreed,setSelectedBreed] = useState('affenpinscher');
  const [dogImage,setDogImage] = useState([]);

  // API取得
  async function fetchDogs() {
    const url = 'https://dog.ceo/api/breeds/list/all';
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`APIの取得に失敗しました。ステータス：${res.status}`);
      }
      const data = await res.json();
      console.log(data);
      const arr = Object.keys(data.message);
      setBreeds(arr);
    } catch (error) {
      console.log(error);
    }
  };

  function fetchDogsImage() {
    const url = `https://dog.ceo/api/breed/${selectedBreed}/images/random/6`;
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setDogImage(data.message);
      })
      .catch((e) => {
        console.log(e);
      })
  };

  // レンダリング時の副作用を設定
  useEffect(() => {
    fetchDogs();
  },[])


  return (
    <>
      <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} setSelectedBreed={setSelectedBreed} />
      <button onClick={fetchDogsImage}>表示</button>
      <div>
        {
          dogImage.map((img,idx) => (
            <React.Fragment key={idx}>
              <img src={img} alt="" />
            </React.Fragment>
          ))
        }
      </div>
    </>
  )
}

export default DogListContainer
