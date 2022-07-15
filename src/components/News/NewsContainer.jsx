import React from "react";
import {connect} from "react-redux";
import News from "./News";

let mapStateToProps = (state) => {
    return {
        NewsData: state.NewsPage.NewsData,
    }
}
let mapDispatchToProps = () => {
    return {

    }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;