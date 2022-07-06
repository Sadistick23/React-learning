import React from "react";
import newspost from "./NewsPost.module.css";

const NewsPost = (props) => {
    return (
        <div className={newspost.container}>
            <div className={newspost.content}>
                <div className={newspost.content__header}>
                    <div className={newspost.news__avatar}><a href="#"><img
                        src={ props.AvatarGroup }/></a>
                    </div>
                    <div>
                        <div className={newspost.news__name}><a href="#">{ props.GroupsName }</a></div>
                        <div className={newspost.news__date}>{ props.Date }</div>
                    </div>
                </div>
                <div className={newspost.content__main}>
                    <div className={newspost.content__description}>
                        { props.Description }
                    </div>
                    <div className={newspost.content__images}>
                        <figure className={`${newspost.content__images1} ${newspost.gallery__img}`}><img className={newspost.gallery__img} src={ props.ContentImage1 }/></figure>
                        <figure className={`${newspost.content__images2} ${newspost.gallery__img}`}><img className={newspost.gallery__img} src={ props.ContentImage2 }/></figure>
                        <figure className={`${newspost.content__images3} ${newspost.gallery__img}`}><img className={newspost.gallery__img} src={ props.ContentImage3 }/></figure>
                        <figure className={`${newspost.content__images4} ${newspost.gallery__img}`}><img className={newspost.gallery__img} src={ props.ContentImage4 }/></figure>
                        <figure className={`${newspost.content__images5} ${newspost.gallery__img}`}><img className={newspost.gallery__img} src={ props.ContentImage5 }/></figure>
                        <figure className={`${newspost.content__images6} ${newspost.gallery__img}`}><img className={newspost.gallery__img} src={ props.ContentImage6 }/></figure>
                    </div>
                    <div className={newspost.container__footer}>
                        <div className={newspost.authornews}><a href="#">{ props.PostAuthor }</a></div>
                        <div className={newspost.button}>
                            <div>
                                <a href="#">
                                    <div className={newspost.button__style}>
                                        <img src="https://img.icons8.com/material-outlined/24/like--v1.png"/>
                                        <div className={newspost.count}>{ props.LikeCount }</div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <div className={newspost.button__style}>
                                        <img
                                            src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/external-comment-communication-royyan-wijaya-detailed-outline-royyan-wijaya.png"/>
                                        <div className={newspost.count}>{ props.CommentCount }</div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <div className={newspost.button__style}>
                                        <img
                                            src="https://img.icons8.com/external-bearicons-detailed-outline-bearicons/24/external-Repost-social-media-bearicons-detailed-outline-bearicons.png"/>
                                        <div className={newspost.count}>{ props.RepostCount }</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsPost;