import styles from "./StatusHeader.module.css";
import Button from "../UI/Button/Button";
import Title from "../UI/Title/Title";
import {useSelector} from "react-redux";
import {useState} from "react";

const StatusHeader = () => {
    const {planet} = useSelector(state => state)
    const [num,setNum]= useState(0)
    const {name, population} = planet[num]
    const displayPlanet = ()=>{
        if(num <= planet.length-2){
            setNum(num+ 1)
        }
        else{
            setNum(0)
        }
    }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Title headingLevel="h2" headingText={name} />
        <p>{population} Creature Live there</p>
      </div>
        <Button name={"Another Planet"} type={"button"} color={"primary"} onClick={displayPlanet} />
    </div>
  );
};

export default StatusHeader;
