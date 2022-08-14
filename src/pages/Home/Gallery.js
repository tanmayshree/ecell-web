import Gallery from 'react-grid-gallery';
import { IMAGES } from './GalleryData';

import './Gallery.css';
import Section_Title from '../../components/Title';
const GalleryPage = () => {
    return ( 
      <div style={{marginTop: "150px"}} className='gallery-page'>
      <Section_Title title={"Gallery"} />
      <div className='gallery-wrapper'z>
      <Gallery images={IMAGES} enableImageSelection={false} enableKeyboardInput={true} onClickImage={{}} margin={7.5} backdropClosesModal={true}/>
    </div>
    </div>
     );
}
 
export default GalleryPage;