import React, { useState } from "react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import Editor from "../components/Editor";

const CreateBlog: React.FC = () => {
  function handleUploadImg(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.files);
    // console.log(e.target.files?.[0]);
    console.log(e.target.files?.[0]);
  }
  function handleUploadPost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <div className="create-blog-container">
      <form onSubmit={handleUploadPost} className="form-create-blog">
        <input type="text" id="title" name="title" placeholder="Post title" />
        <input
          type="text"
          id="summary"
          name="summary"
          placeholder="Short description of your post"
        />
        <div>
          <label htmlFor="preview-img" className="flex-icon-upload">
            <ArrowUpTrayIcon className="icon-upload" />{" "}
            <span>Upload Image</span>
          </label>
        </div>
        <input
          type="file"
          alt="img"
          style={{ display: "none" }}
          id="preview-img"
          onChange={handleUploadImg}
        />
        <select name="category-blog" >
          <option value="web-development">Web Development</option>
          <option value="app-development">App Development</option>
          <option value="artificial intelligence">
            Artificial Intelligence
          </option>
        </select>
        <Editor />
      </form>
    </div>
  );
};

export default CreateBlog;
