import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'
import { useLoadImage } from './loadImage.hook'
import './App.css'

function App() {
  const img1 = useLoadImage(1)
  const img2 = useLoadImage(2)
  const img3 = useLoadImage(3)

  return (
    <div>
      <h1>Images</h1>

      <div className='images-container'>
        <div className='image-container'>
          {
            img1 ? 
              <img src={image1} style={{ width: '100%'}} alt='image1' />
            :
              <div className='image-skeleton'>:(</div>
          }
        </div>
        
        <div className='image-container'>
          {
            img2 ? 
              <img src={image2} style={{ width: '100%'}} alt='image2'/>
            :
              <div className='image-skeleton'>:(</div>
          }
        </div>

        <div className='image-container'>
          {
            img3 ? 
              <img src={image3} style={{ width: '100%'}} alt='image3'/>
            :
              <div className='image-skeleton'>:(</div>
          }
        </div>
      </div>

    </div>
  );
}

export default App;
