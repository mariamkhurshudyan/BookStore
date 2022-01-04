import styles from "./Profile.module.css"
import Avatar from "../UI/Avatar/Avatar";
import Title from "../UI/Title/Title";

const Profile = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
            <Avatar/>
            <div className={styles.about}>
            <Title headingText='Noubar' headingLevel='h4'/>
            <p>Joined since 2021</p>
            </div>
            </div>
        </div>
    );
};

export default Profile;