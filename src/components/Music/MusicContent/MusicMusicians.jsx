import React from "react";
import music from "../Music.module.css";
import MusicPattern from "./MusicPattern";

const MusicMusicians = (state) => {
    debugger
    let PlaylistElement = state.musicPlaylistData.map(music => <MusicPattern Author={music.Author}
                                                                             NameMusic={music.NameMusic}
                                                                             images={music.images}/>)
    let AuthorElement = state.musicAuthorData.map(music => <MusicPattern Author={music.Author}
                                                                         NameMusic={music.NameMusic}
                                                                         images={music.images}/>)

    return (
        <div className={music.container}>
            <div className={music.music__pattern_container}>
                <div className={music.music__pattern_text}>Playlists</div>
                <div className={music.music__decorate_line}></div>
                <div className={music.music__pattern_element}>
                    {PlaylistElement}
                </div>
                <div className={music.music__decorate_line}></div>
                <div className={music.music__pattern_text}>Authors</div>
                <div className={music.music__decorate_line}></div>
                <div className={music.music__pattern_element}>
                    {AuthorElement}
                </div>
                <div className={music.music__decorate_line}></div>
            </div>
        </div>
    )
}

export default MusicMusicians;