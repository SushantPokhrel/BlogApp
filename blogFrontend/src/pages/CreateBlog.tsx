import React, { useState, useEffect } from "react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import Editor from "../components/Editor";
import { FormDataType } from "../Types";
import axios from "axios";

const CreateBlog: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    title: "",
    summary: "",
    category: "web development",
    image: null,
    content: "",
  });

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false); // Track submission state

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleUploadImg(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, image: file }));

    // Generate URL for the selected image file to display it
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    } else {
      setImageUrl(null); // Reset the URL if no file is selected
    }
  }

  async function handleUploadPost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.category ||
      !formData.summary ||
      !formData.image
    ) {
      console.log("could not upload your post");
      return;
    }

    setIsSubmitting(true); // Set submitting to true

    const form = new FormData();
    form.append("title", formData.title);
    form.append("category", formData.category);
    form.append("summary", formData.summary);
    form.append("image", formData.image);

    try {
      await axios.post("http://127.0.0.1:8001/post/blog", form, {
        headers: {
          "Content-Type": "multipart/form-data", // explicitly specifying to confirm
        },
      });

      // Reset form state after successful submission
      setFormData({
        title: "",
        summary: "",
        category: "web development",
        image: null,
        content: "",
      });
      setImageUrl(null);
      setIsSubmitted(true);
    } catch (e) {
      console.log(e);
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  }

  useEffect(() => {
    return () => {
      // Cleanup image URL on component unmount and imageURL state change
      // usEffect cleanup runs after component unmount and on re-render for every prev state value
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);

  return (
    <div className="create-blog-container">
      <form onSubmit={handleUploadPost} className="form-create-blog">
        <h1 style={{ textAlign: "center" }}>Write your story</h1>

        {/* Title Input */}
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Post title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />

        {/* Summary Input */}
        <input
          type="text"
          id="summary"
          name="summary"
          placeholder="Short description of your post"
          value={formData.summary}
          onChange={handleInputChange}
          required
        />

        {/* Image Upload */}
        <div>
          <label htmlFor="preview-img" className="flex-icon-upload">
            <ArrowUpTrayIcon className="icon-upload" />{" "}
            <span> Upload Image</span>
          </label>
        </div>
        <input
          type="file"
          name="image"
          alt="img"
          style={{ display: "none" }}
          id="preview-img"
          onChange={handleUploadImg}
        />

        {/* Display the selected image */}
        {imageUrl && (
          <div style={{ position: "relative" }}>
            <img
              src={imageUrl}
              alt="Preview"
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
            <span
              style={{
                backgroundColor: "white",
                position: "absolute",
                top: "0",
                right: "0",
                padding: "6px",
                color: "red",
                fontSize: "20px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => setImageUrl(null)}
            >
              X
            </span>
          </div>
        )}

        {/* Category Selector */}
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        >
          <option value="web development">Web Development</option>
          <option value="app development">App Development</option>
          <option value="artificial intelligence">
            Artificial Intelligence
          </option>
        </select>

        {/* Content Editor */}
        <Editor
          setFormData={setFormData}
          formData={formData}
          isSubmitted={isSubmitted}
        />

        {/* Submit Button */}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Publishing..." : "Publish"}
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
