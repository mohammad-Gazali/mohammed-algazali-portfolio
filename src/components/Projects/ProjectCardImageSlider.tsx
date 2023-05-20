import "react-slideshow-image/dist/styles.css";
import { Slide } from 'react-slideshow-image';



const ProjectCardImageSlider = ({ images }: { images: string[] }) => {
  return (
    <section className="max-w-4xl w-full mx-auto sm:px-6">
        <Slide
        transitionDuration={300}
        >
            {images.map(slideImage => (
            <div key={slideImage}>
                <img 
                src={slideImage} 
                />
            </div>
          ))} 
        </Slide>
    </section>
  )
}

export default ProjectCardImageSlider