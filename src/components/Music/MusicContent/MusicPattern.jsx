import React from "react";
import music_pattern from "./MusicPattern.module.css";

const MusicPattern = (props) => {
    return (
        <div className={music_pattern.content}>
            <div className={music_pattern.content__image}>
                <a href="#"><img src={ props.images }/></a>
            </div>
            <div className={music_pattern.author}>
                <a href="#">{ props.Author }</a>
            </div>
            <div className={music_pattern.name__music}>
                <a href="#">{ props.NameMusic }</a>
            </div>
        </div>
    )
}

export default MusicPattern;