import React from "react";
import BlogCard from "../components/BlogCard";
import axios from "axios";
import { Stack, Skeleton } from "@mui/material";
import ErrorBlog from "../components/ErrorBlog";
import BlogCardSkeleton from "../components/SkeletonUI";

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

const ForYou: React.FC = () => {
  const [allBlogs, setAllBlogs] = React.useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string>("");
  const SkeletonArray = Array.from({ length: 5 });

  React.useEffect(() => {
    async function getBlogs() {
      try {
        const res = await axios.get("http://localhost:8001/post/blogs");
        if (res.data.length > 0) {
          setAllBlogs(res.data);
          setIsLoading(false);
          console.log(res.data);
        }
      } catch (e) {
        setError("error");
      }
    }
    getBlogs();
  }, []);
  console.log(isLoading, allBlogs);
  if (error.length) return <ErrorBlog />;
  else if (isLoading) {
    return SkeletonArray.map(() => {
      return <BlogCardSkeleton />;
    });
  }

  return (
    <div>
      {allBlogs.map((blog) => (
        <BlogCard
          key={blog._id}
          id={blog._id}
          title={blog.title}
          content={blog.content}
          summary={blog.summary}
          author={blog.author}
          url={blog.img}
          likes={blog.likes}
          comments={blog.commentCount}
        />
      ))}
    </div>
  );
};

export default ForYou;
