import Image from 'next/image'
import ViewSource from '../components/view-source'

const Intrinsic = () => (
  // <div>
  //   {/* <ViewSource pathname="pages/layout-intrinsic.js" /> */}
  //   <h1>Image Component With Layout Intrinsic</h1>

  // </div>
  <Image
  alt="Mountains"
  src="/mountains.jpg"
  layout="intrinsic"
  width={700}
  height={475}
/>
)

export default Intrinsic
