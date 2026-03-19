"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";

interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
}

function ToolbarButton({
  onClick,
  active,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded px-2 py-1 text-xs font-medium transition-colors ${
        active
          ? "bg-accent text-white"
          : "text-text-muted hover:bg-gray-100 hover:text-primary"
      }`}
    >
      {children}
    </button>
  );
}

export default function RichTextEditor({
  content,
  onChange,
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
      }),
      Image,
      Link.configure({ openOnClick: false }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-sm max-w-none min-h-[200px] px-4 py-3 focus:outline-none",
      },
    },
  });

  if (!editor) return null;

  function addImage() {
    const url = prompt("Afbeelding URL:");
    if (url) {
      editor?.chain().focus().setImage({ src: url }).run();
    }
  }

  function addLink() {
    const url = prompt("Link URL:");
    if (url) {
      editor?.chain().focus().setLink({ href: url }).run();
    }
  }

  return (
    <div className="rounded-lg border border-border">
      <div className="flex flex-wrap gap-1 border-b border-border px-2 py-1.5">
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive("bold")}
        >
          B
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive("italic")}
        >
          I
        </ToolbarButton>
        <ToolbarButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          active={editor.isActive("heading", { level: 2 })}
        >
          H2
        </ToolbarButton>
        <ToolbarButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          active={editor.isActive("heading", { level: 3 })}
        >
          H3
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive("bulletList")}
        >
          Lijst
        </ToolbarButton>
        <ToolbarButton
          onClick={addLink}
          active={editor.isActive("link")}
        >
          Link
        </ToolbarButton>
        <ToolbarButton onClick={addImage}>Afbeelding</ToolbarButton>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
