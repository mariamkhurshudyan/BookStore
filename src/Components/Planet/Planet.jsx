import styles from './Planet.module.css';
import Title from "../UI/Title/Title";
import {useNavigate} from "react-router-dom";

const Planet = ({ title , terrain, name}) => {
    const navigate = useNavigate()
    return (
        <div className={styles.container} onClick={()=>{navigate(`planet/${name}`)}}>
            <img src='https://cdn.pixabay.com/photo/2016/08/03/06/22/space-1565986_1280.jpg' alt='Planet Cover'/>
            <Title headingLevel='h3' headingText={title}/>
            <div className={styles.status}>
                <p>{terrain}</p>
                <div className={styles.info}>
                        <p>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default Planet;