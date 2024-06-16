"use client";
import { LeftSide } from "../leftSide/LeftSide"
import { RightSide } from "../rightSide/RightSide"
import styles from '../../styles/home.module.css'
export const Home = () => {
    return (
        <div className={styles.home}>
            <LeftSide/>
            <RightSide/>
        </div>
    )
}