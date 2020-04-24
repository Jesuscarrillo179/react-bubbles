import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  const getBubbles = () => {
    axiosWithAuth()
    .get('/api/colors')
    .then(res => {
        setColorList(res.data)
    })
  }

  useEffect(()=>{
    getBubbles()
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} getBubbles={getBubbles}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
