import React from "react";
import music from "./Music.module.css"
import MusicPattern from "./MusicContent/MusicPattern";

const Music = (props) => {
    //Playlist music
    let PlaylistElement = props.state.MusicPlaylistData.map ( music => <MusicPattern Author={ music.Author } NameMusic={ music.NameMusic } images={ music.images } /> )
    //Author music
    let AuthorElement = props.state.MusicAuthorData.map ( music => <MusicPattern Author={ music.Author } NameMusic={ music.NameMusic } images={ music.images } /> )

    return (
        <div className={music.container}>
            <div className={music.search__bar}>
                <div className={music.search__text}>Find music</div>
                <div className={music.search}>
                    <input type="text"/>
                    <a href="#"><img src="http://cdn.onlinewebfonts.com/svg/img_534826.png" alt="Search"/></a>
                </div>
            </div>

            <div className={music.music__pattern_container}>
                <div className={music.music__pattern_text}>Playlists</div>
                <div className={music.music__decorate_line}></div>
                <div className={music.music__pattern_element}>
                    { PlaylistElement }
                </div>
                <div className={music.music__decorate_line}></div>
                <div className={music.music__pattern_text}>Authors</div>
                <div className={music.music__decorate_line}></div>
                <div className={music.music__pattern_element}>
                    { AuthorElement }
                </div>
                <div className={music.music__decorate_line}></div>
            </div>
        </div>
    )
}

export default Music;