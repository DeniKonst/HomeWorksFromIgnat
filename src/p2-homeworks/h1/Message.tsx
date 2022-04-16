import React from 'react'
import styles from "./Message.module.css";


export type propsType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: propsType) {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.avatar_wrap}>
                    <img className={styles.avatar}
                         // alt={"Короткое описание изображения"}
                         src={props.avatar}/>
                </div>
                <div className={styles.corner_wrap}>
                    <div className={styles.corner}></div>
                </div>
                <div className={styles.message}>
                    <div>
                        <p className={styles.message_name}> {props.name} </p>
                        <p className={styles.message_message}> {props.message} </p>
                    </div>
                    <div className={styles.time}> {props.time} </div>
                </div>
            </div>
        </div>
    )
}

export default Message
