// @ts-check
// export default Description
import { useState } from "react";
import DogImage from "./DogImage";

export const Description = () => {
  const [dogUrl , setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg');
  async function fetchDogUrl() {
    const url = 'https://dog.ceo/api/breeds/image/random';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`エラー：ステータス ${response.status}`);
      }
      const data = await response.json();
      return data.message;
    } catch (e) {
      // console.log(e.message);
    }
  }
  async function changeHandler() {
    const updateUrl = await fetchDogUrl();
    if (updateUrl) {
      setDogUrl(updateUrl);
    }
  }
  return(
    <>
      <main className='main'>
        <div className='card'>
          <h2>犬の画像を表示するサイトです。</h2>
          <DogImage imageUrl={dogUrl} />
        </div>
        <div className='div_button'>
          <button onClick={changeHandler} className='button'>クリックしたら画像を変更</button>
        </div>
      </main>
    </>
  )
};
export default Description;