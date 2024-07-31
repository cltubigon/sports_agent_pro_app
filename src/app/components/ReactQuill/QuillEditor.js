'use client'
import 'react-quill/dist/quill.snow.css'
import './QuillStyle.css'
import dynamic from 'next/dynamic'
import { twMerge } from 'tailwind-merge'

{
  /* <QuillEditor setValue={setaccordingTo} defaultValue={defaultValue} /> */
}

const modules = {
  toolbar: [
    //[{ 'font': [] }],
    // [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    // ["link", "image"],
    // [{ align: [] }, { color: [] }, { background: [] }],
    // ["clean"],
  ],
}

// const formats = [
//   //   'font',
//   //   "header",
//   "bold",
//   "italic",
//   "underline",
//   "strike",
//   "blockquote",
//   "list",
//   "bullet",
//   "indent",
//   "link",
//   //   "image",
//   "align",
//   "color",
//   "background",
// ]
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

function QuillEditor({ className, setValue, defaultValue, placeholder }) {
  const handleChange = (content, delta, source, editor) => {
    // const data = { content, delta, source, editor }  // Available Data
    setValue(content)
  }

  return (
    <div
      className={twMerge('flex w-full mb-[43px] h-[300px] relative', className)}
    >
      <ReactQuill
        style={{ height: '100%', width: '100%' }}
        theme="snow"
        modules={modules}
        defaultValue={defaultValue}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  )
}

export default QuillEditor
