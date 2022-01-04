import avatar from '../../../assets/images/avatar.png'
import styles from "./Avatar.module.css"
const Avatar = () => {
    return (
        <img src={avatar} alt='avatar' className={styles.container}/>
    );
};

export default Avatar;