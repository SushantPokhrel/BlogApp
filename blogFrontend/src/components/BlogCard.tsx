import React from "react";
import {
  HandThumbUpIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
interface BlogCardProps {
  id: string;
  title: string;
  content: string;
  summary: string;
  author: string;
  img: string;
  likes: number;
  comments: number;
  date:string
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  content,
  summary,
  author,
  img,
  likes,
  comments,
  date
}) => {
  return (
    <Link to="" className="blog-link" onClick={() => console.log(id)}>
      <div className="blog-card">
        <div className="blog-author">
          <img
            src="https://miro.medium.com/v2/resize:fill:64:64/0*icKuIram7e9VQWDw"
            alt="profile"
          />
          <p className="blog-writer">{author}</p>
        </div>
        <div className="blog-description">
          <div className="blog-description-left txt-truncation">
            <h2 className="blog-title">{title}</h2>
            <p className="blog-summary">{summary}</p>
            <div className="blog-extra">
              <span className="post-date">{date}</span>{" "}
              <div className="blog-likes-container">
                <HandThumbUpIcon className="blog-likes sm-icon" />
                <span className="blog-likes-count"> {likes}</span>
              </div>
              <div className="blogs-cmt-container">
                <ChatBubbleOvalLeftEllipsisIcon className="sm-icon" />
                <span> {comments}</span>
              </div>
            </div>
          </div>
          <div className="blog-img-container">
            <img src={img} alt={title} className="blog-img" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
