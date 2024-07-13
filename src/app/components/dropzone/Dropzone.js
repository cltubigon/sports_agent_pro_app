/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { generateBlurDataURL } from './actions'
import Icon_spinner from '../icons/Icon_spinner'
import { twMerge } from 'tailwind-merge'
import Toast from '../Toast'

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
          placeholder: 'Click to upload file.',     // optional
          quantityLimit: 1,                         // optional
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
    placeholder,
    selectedContainerStyle,
    quantityLimit,
  },
}) => {
  const [toast, settoast] = useState(null)
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (!quantityLimit) {
      acceptedFiles.forEach((file) => {
        setSelectedImages((prevState) => [...prevState, file])
      })
    } else {
      setSelectedImages(acceptedFiles)
      if (rejectedFiles?.length > 0) {
        console.log('rejectedFiles', rejectedFiles)
        settoast({
          description: 'Files rejected',
          status: 'error',
        })
      }
    }
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
    maxFiles: quantityLimit,
  })

  return (
    <div>
      <Toast parameters={{ toast, settoast }} />
      <div
        {...getRootProps()}
        className={twMerge(
          'w-full bg-white text-[#C4C6C9] py-8 px-3 border-[1px] border-secondary border-dashed relative flex flex-col gap-2 justify-center items-center',
          containerStyle
        )}
      >
        <input {...getInputProps()} className="w-full" />
        {isDragActive ? (
          <p>Drop file(s) here ...</p>
        ) : (
          <p className="select-none">
            {placeholder || 'Click to upload files, or drag & drop files here.'}
          </p>
        )}
        {selectedImages.length > 0 && (
          <div
            className={twMerge(
              'grid grid-cols-2 md:grid-cols-4 gap-2 mt-2',
              selectedContainerStyle
            )}
          >
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
    </div>
  )
}

export default CltDropzone
