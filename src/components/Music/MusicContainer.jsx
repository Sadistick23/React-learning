import React from "react";
import {connect} from "react-redux";
import MusicMusicians from "./MusicContent/MusicMusicians";

let mapStateToProps = (state) => {
    return {
        musicPlaylistData: state.MusicPage.MusicPlaylistData,
        musicAuthorData: state.MusicPage.MusicAuthorData,
    }
}
let mapDispatchToProps = () => {
    return {

    }
}

const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(MusicMusicians);

export default MusicContainer;