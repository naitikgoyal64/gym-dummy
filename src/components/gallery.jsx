import React, { useState } from 'react'
import './gallery.css'

const Gallery = () => {

    const images = [
        { src: '/wallpaper.jpg', alt: 'Gym workout area' },
        { src: '/wallpaper2.jpg', alt: 'Gym equipment' },
        { src: '/wallpaper3.jpg', alt: 'Strength training' },
        { src: '/wp.jpg', alt: 'Gym interior' },
        { src: '/wallpaper.jpg', alt: 'Fitness training' },
        { src: '/wallpaper3.jpg', alt: 'Gym workout' }
    ]

    const [selectedImage, setSelectedImage] = useState(null)

    const nextImage = () => {
        setSelectedImage((selectedImage + 1) % images.length)
    }

    const previousImage = () => {
        setSelectedImage(
            (selectedImage - 1 + images.length) % images.length
        )
    }

    const closeGallery = () => {
        setSelectedImage(null)
    }

    return (
        <section className="gallery" id="gallery">

            <h2>Our Gallery</h2>

            <p className="gallery-subtitle">
                A glimpse of our gym, training and fitness environment.
            </p>

            <div className="gallery-container">

                {images.map((image, index) => (
                    <div
                        className="gallery-item"
                        key={index}
                        onClick={() => setSelectedImage(index)}
                    >
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}

            </div>


            {/* Full Screen Gallery */}

            {selectedImage !== null && (
                <div className="gallery-overlay">

                    <button
                        className="close-btn"
                        onClick={closeGallery}
                    >
                        ×
                    </button>

                    <button
                        className="prev-btn"
                        onClick={previousImage}
                    >
                        ‹
                    </button>

                    <img
                        className="fullscreen-image"
                        src={images[selectedImage].src}
                        alt={images[selectedImage].alt}
                    />

                    <button
                        className="next-btn"
                        onClick={nextImage}
                    >
                        ›
                    </button>

                </div>
            )}

        </section>
    )
}

export default Gallery