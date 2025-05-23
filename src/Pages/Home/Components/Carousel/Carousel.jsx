import img1 from "/assets/images/banner-desktop/1.jpg";
import img2 from "/assets/images/banner-desktop/2.jpg";
import img3 from "/assets/images/banner-desktop/3.jpg";
import img4 from "/assets/images/banner-desktop/4.jpg";
import img5 from "/assets/images/banner-desktop/5.jpg";


function Carousel(){
    return(
        <div className='uk-position-relative uk-visible-toggle uk-light' tabIndex={-1} uk-slider='center: true'>

            <div className='uk-slider-items uk-child-width-expand uk-grid'>
                <div className='uk-width-auto'>
                    <div className='uk-panel'>
                        <img src={img1} alt="Imagene del Banner promocional..." />
                    </div>
                </div>
                <div className='uk-width-auto'>
                    <div className='uk-panel'>
                        <img src={img2} alt="Imagene del Banner promocional..." />
                    </div>
                </div>
                <div className='uk-width-auto'>
                    <div className='uk-panel'>
                        <img src={img3} alt="Imagene del Banner promocional..." />
                    </div>
                </div>
                <div className='uk-width-auto'>
                    <div className='uk-panel'>
                        <img src={img4} alt="Imagene del Banner promocional..." />
                    </div>
                </div>
                <div className='uk-width-auto'>
                    <div className='uk-panel'>
                        <img src={img5} alt="Imagene del Banner promocional..."  />
                    </div>
                </div>
            </div>

            {/* Controles */}
            <a className='uk-position-center-left uk-position-small uk-hidden-hover' href uk-slidenav-previous uk-slider-item='previous'></a>
            <a className='uk-position-center-right uk-position-small uk-hidden-hover' href uk-slidenav-next uk-slider-item='next'></a>

            {/* Slides */}
        </div>
    )
}

export default Carousel;