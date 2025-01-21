import React from "react";
import BlogCard from "../components/BlogCard";
import axios from "axios";

const ForYou: React.FC = () => {
  interface BlogPost {
    _id: string;
    title: string;
    author: string;
    content: string;
    img: string;
    summary: string;
    likes: number;
    commentCount: number;
  }

  const [allBlogs, setAllBlogs] = React.useState<BlogPost[]>([]);

  React.useEffect(() => {
    async function getBlogs() {
      try {
        const res = await axios.get("http://localhost:8001/post/blogs");
        console.log(res.data);
        setAllBlogs(res.data);
      } catch (e) {
        console.log(e);
      }
    }
    getBlogs();
  }, []);

  return (
    <div>
      {allBlogs.map((blog) => {
        return (
          <BlogCard
            key={blog._id}
            id = {blog._id}
            title={blog.title}
            content={blog.content}
            summary={blog.summary}
            author={blog.author}
            url={blog.img}
            likes={blog.likes}
            comments={blog.commentCount}
            
          />
        );
      })}
    </div>
  );
};

export default ForYou;
