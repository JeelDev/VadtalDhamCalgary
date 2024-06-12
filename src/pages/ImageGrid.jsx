import React from 'react';
import '../styles/style.css';



const images = [
    { src: '../assets/images/image1.jpeg', alt: 'Image 1', download: 'image1.jpg' },
    { src: '../assets/images/image2.jpeg', alt: 'Image 2', download: 'image2.jpg' },
    { src: '../assets/images/image3.jpeg', alt: 'Image 3', download: 'image3.jpg' },
    { src: '../assets/images/image4.jpeg', alt: 'Image 4', download: 'image4.jpg' },
    { src: '../assets/images/image5.jpeg', alt: 'Image 5', download: 'image5.jpg' },
    { src: '../assets/images/image6.jpeg', alt: 'Image 6', download: 'image6.jpg' },
    { src: '../assets/images/image7.jpeg', alt: 'Image 7', download: 'image7.jpg' },
    { src: '../assets/images/image8.jpeg', alt: 'Image 8', download: 'image8.jpg' },
    { src: '../assets/images/image9.jpeg', alt: 'Image 9', download: 'image9.jpg' },
    { src: '../assets/images/image10.jpeg', alt: 'Image 10', download: 'image10.jpg' },
];

const ImageGrid = () => {
    return (
        <div className="image-grid">
            {images.map((image, index) => (
                <div className="image-container" key={index}>
                    <img src={image.src} alt={image.alt} className="image" />
                    <a href={image.src} download={image.download} className="download-button">
                        Download
                    </a>
                </div>
            ))}
        </div>
    );
};

export default ImageGrid;
