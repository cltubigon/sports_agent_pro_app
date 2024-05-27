import SplitTest1 from './SplitTest1'
import SplitTest2 from './SplitTest2'

const TestingVariant = () => {
  return (
    <div className={'container md:px-6 lg:px-10 xl:px-0 flex flex-col'}>
      {/* <UploadTest /> */}
      {/* <AuthTest /> */}
      <SplitTest1 />
      <SplitTest2 />
    </div>
  )
}

export default TestingVariant
