import { useEffect } from "react";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FormDataType } from "../Types";

type EditorProps = {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  isSubmitted: boolean;
};

const Editor: React.FC<EditorProps> = ({
  formData,
  setFormData,
  isSubmitted,
}) => {
  function handleEditing(value: string) {
    setFormData((prev) => ({ ...prev, content: value }));
  }

  useEffect(() => {
    if (isSubmitted) {
      setFormData((prev) => ({ ...prev, content: "" })); // Clear content when submitted
    }
  }, [isSubmitted, setFormData]);

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
    "font",
  ];

  const modules = {
    toolbar: {
      container: [
        [{ font: ["default", "serif", "sans-serif", "monospace"] }],
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

  return (
    <div className="editor-container">
      <QuillEditor
        theme="snow"
        value={formData.content}
        formats={formats}
        modules={modules}
        onChange={handleEditing}
        className="editor"
        placeholder="Start writing..."
      />
    </div>
  );
};

export default Editor;
