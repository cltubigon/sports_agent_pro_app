/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Image from 'next/image'
import { useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { generateBlurDataURL } from './actions'
import Icon_spinner from '../icons/Icon_spinner'
import { twMerge } from 'tailwind-merge'

// guide:
// Add these
// const [selectedImages, setSelectedImages] = useState([])
// const [imagesWithBlurDataUrl, setImagesWithBlurDataUrl] = useState(null)

{
  /* <CltDropzone
        parameters={{
          selectedImages,
          setSelectedImages,
          imagesWithBlurDataUrl,
          setImagesWithBlurDataUrl,
        }}
      /> */
}

const CltDropzone = ({
  parameters: {
    selectedImages,
    setSelectedImages,
    imagesWithBlurDataUrl,
    setImagesWithBlurDataUrl,
    containerStyle,
  },
}) => {
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    acceptedFiles.forEach((file) => {
      setSelectedImages((prevState) => [...prevState, file])
    })
  }, [])
  const onUpload = async () => {
    let formData = new FormData()
    for (const image of selectedImages) {
      formData.append(image.name, image)
    }
    const blurDataImages = await generateBlurDataURL(formData)
    const newSelectedImages = selectedImages?.map((image) => {
      const data = blurDataImages.find((item) => item.key === image.path)
      const newFile = { file: image, blurDataURL: data.blurDataURL }
      return newFile
    })
    setImagesWithBlurDataUrl(newSelectedImages)
  }
  useEffect(() => {
    if (selectedImages?.length <= 0) return
    onUpload()
  }, [selectedImages])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
  })

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div
          className={twMerge(
            'bg-white text-[#C4C6C9] py-[7px] px-3 border-[1px] border-secondary border-dashed',
            containerStyle
          )}
        >
          {isDragActive ? (
            <p>Drop file(s) here ...</p>
          ) : (
            <p>Click to upload files, or drag & drop files here.</p>
          )}
        </div>
      </div>

      {selectedImages.length > 0 && (
        <div className={'grid grid-cols-2 md:grid-cols-4 gap-2 mt-2'}>
          {selectedImages?.map((image, index) => {
            return (
              <div key={index} className="relative">
                <Image
                  src={`${URL.createObjectURL(image)}`}
                  width={300}
                  height={300}
                  quality={100}
                  key={index}
                  alt="uploaded image"
                  className="my-auto"
                />
                {!imagesWithBlurDataUrl && (
                  <Icon_spinner className="absolute animate-spin top-0 bottom-0 right-0 left-0 mx-auto my-auto size-10 text-white" />
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default CltDropzone
