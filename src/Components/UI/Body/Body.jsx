import React from 'react';
import styles from "./Body.module.css"

const Body = ({text}) => {
    return (
        <div className={styles.container} >
            <p><em>{text}</em></p>
        </div>
    );
};

export default Body;