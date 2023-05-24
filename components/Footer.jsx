import React, { use } from "react";
import styles from '../styles/Footer.module.css';
import { useState } from "react";
import { Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";



export default function Footer() {

    const [isModalVisible, setModalVisible] = useState(false);
    const showModal = () => {
        event.preventDefault();
        setModalVisible(!isModalVisible);
    }

    const modalContent = (<>
        <FontAwesomeIcon icon={faXmark} className={styles.xIcon} onClick={()=>{setModalVisible(false)}} />
        <div className={styles.inputContainer}>
            <input placeholder="Nom" type="text" />
            <input placeholder="Prénom" type="text" />
            <input placeholder="Indiquez votre adresse Mail" type="email" />
            <textarea placeholder="Décrivez nous votre problème" rows="8" cols="70"></textarea> 
            <input className='discover' type="submit" />
        </div>
        </>
    )

    return (<>
            <div className={styles.footerContainer}>
                <a href="#">ABOUT</a>
                <a href="" onClick={() => showModal()}>CONTACT</a>
                <a href="#">SUPPORT</a>
                <a href="#">STORES</a>
            </div>
            {isModalVisible && (
                <div id="react-modals">
                    <Modal
                        mask={false} 
                        getContainer="#react-modals"
                        visible={isModalVisible}
                        closable={false}
                        footer={null}
                        style={{
                            opacity: '0.9'
                        }}>
                        {modalContent}
                    </Modal>
                </div>
            )}

    </>
    )
}