import React from "react";
import news from "./News.module.css"
import NewsPost from "./NewsPost/NewsPost";

const News = (state) => {

    let NewsElement = state.NewsData.map ( news => <NewsPost AvatarGroup={ news.AvatarGroup }
                                                             GroupsName={ news.GroupsName }
                                                             Date={ news.Date }
                                                             key={news.id}
                                                             Description={ news.Description }
                                                             ContentImage1={ news.ContentImage1 }
                                                             ContentImage2={ news.ContentImage2 }
                                                             ContentImage3={ news.ContentImage3 }
                                                             ContentImage4={ news.ContentImage4 }
                                                             ContentImage5={ news.ContentImage5 }
                                                             ContentImage6={ news.ContentImage6 }
                                                             PostAuthor={ news.PostAuthor }
                                                             LikeCount={ news.LikeCount }
                                                             CommentCount={ news.CommentCount }
                                                             RepostCount={ news.RepostCount } /> )

    return (
        <div className={news.container}>
            { NewsElement }
        </div>
    )
}

export default News;