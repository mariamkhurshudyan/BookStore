import styles from './Planet.module.css';
import {useNavigate} from "react-router-dom";

const Planet = ({ title , terrain, name}) => {
    const navigate = useNavigate()
    return (
        <div className={styles.container} onClick={()=>{navigate(`planet/${name}`)}}>
            <img src='https://cdn.pixabay.com/photo/2016/08/03/06/22/space-1565986_1280.jpg' alt='Planet Cover'/>
            <p><strong>{title}</strong></p>
            <div className={styles.status}>
                <div className={styles.info}>
                    <p><strong>{title}</strong></p>
                    <p>{terrain}</p>
                </div>
            </div>
        </div>
    );
};

export default Planet;