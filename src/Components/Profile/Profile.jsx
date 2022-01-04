import styles from "./Profile.module.css"
import Avatar from "../UI/Avatar/Avatar";
import Title from "../UI/Title/Title";
import {PicksData} from "../Picks/PicksData";

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
            <div className={styles.analytics}>
                <Title headingText='You have read 4 of 30 books in 2018' headingLevel='h3'/>
                    <div className={styles.covers}>
                        {PicksData.map(cover=>(
                            <img src={cover.imgURL} alt='read'/>
                        ))}
                    </div>
            </div>

        </div>
    );
};

export default Profile;