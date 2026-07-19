"use client";
import { MotionConfig } from "framer-motion"
import { LeftSide } from "../leftSide/LeftSide"
import { RightSide } from "../rightSide/RightSide"
import styles from '../../styles/home.module.css'

export const Home = () => {
    return (
        <MotionConfig reducedMotion="user">
            <div className={styles.home}>
                <LeftSide/>
                <RightSide/>
            </div>
        </MotionConfig>
    )
}
