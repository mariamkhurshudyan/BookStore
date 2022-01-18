import styles from './Planets.module.css'
import Planet from "../Planet/Planet";
import {useSelector} from "react-redux";

const Planets = () => {
    const {planet} = useSelector(state => state)
    return (
        <>
        <div className={styles.container}>
            {planet.map((planet, index)=>(
                <Planet key={index} title={planet.name} terrain={planet.terrain} name={planet.name}/>
            ))
            }
        </div>
        </>
    );
};

export default Planets;