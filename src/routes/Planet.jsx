import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Title from "../Components/UI/Title/Title";
import Body from "../Components/UI/Body/Body";
import {useSelector} from "react-redux";

const Planet = () => {
  const {planet} = useSelector(state=>state)
  const { id } = useParams();
  const [planetData, setPlanetData] = useState({})
  useEffect(() => {
   const planets =  planet.find(({name}) => name === id)
    if(Object.keys(planet).length) {
        setPlanetData((prev) => ({...prev, ...planets}))
    }
  }, [id,planet])

  return (
      <div>
        <Title headingText={planetData.name} headingLevel='h2' />
        <Body text={planetData.gravity}/>
      </div>
  )
};

export default Planet;
