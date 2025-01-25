import { useState, useRef } from "react";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = () => {
  const [value, setValue] = useState("");
  const editorRef = useRef<QuillEditor>(null);
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "clean",
    "code-block",
  ];
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "blockquote", "code-block"],

        [{ color: [] }],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
      ],
    },
    clipboard: {
      matchVisual: true,
    },
  };
  function handleEditing(value: string) {
    // editorRef.current?.focus();
    setValue(value);
  }
  function handlePost() {
    console.log(value);
  }
  function imageHandler() {}
  return (
    <div className="editor-container">
      <QuillEditor
        ref={editorRef}
        theme="snow"
        value={value}
        formats={formats}
        modules={modules}
        onChange={handleEditing}
        className="editor"
        placeholder="Start writing..."
      />
      <button onClick={handlePost}>Post</button>
    </div>
  );
};

export default Editor;
