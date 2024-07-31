'use client'
import QuillEditor from '@/app/components/ReactQuill/QuillEditor'
import { useStore } from 'zustand'
import buildStore from '@/utilities/store/buildStore'

const Brief = () => {
  const { brief, setbrief } = useStore(buildStore)
  return (
    <div className={'flex flex-col gap-1 mb-2'}>
      <p className={''}>
        Brief <span className="text-red-500">*</span>
      </p>
      <QuillEditor
        className={'h-[200px]'}
        setValue={setbrief}
        defaultValue={brief}
      />
    </div>
  )
}

export default Brief
