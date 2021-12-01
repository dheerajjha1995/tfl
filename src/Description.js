import React from 'react'
import ReactPlayer from "react-player";
import "./Description.css";
import { Carousel } from 'react-carousel-minimal';

const Description = ({key, category, image, name, vid, detail}) => {
    const data=[
        {image: image[0]},
        {image: image[1]},
        {image: image[2]},
        {image: image[3]},
    ]

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }

    return (
        <div className = "desc">
            <h2>{name}</h2>
            <h4>Standard: {category}</h4>
            <p></p>
            <div >
                <div >
                <Carousel
                    data={data}
                    time={2000}
                    width="850px"
                    height="500px"
                    captionStyle={captionStyle}
                    radius="10px"
                    slideNumber={true}
                    slideNumberStyle={slideNumberStyle}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnails={true}
                    thumbnailWidth="100px"
                    style={{
                    textAlign: "center",
                    maxWidth: "850px",
                    maxHeight: "500px",
                    margin: "40px auto",
                    }}
                />
                </div>
            </div>
            <div className="video">
                <ReactPlayer
                    url={vid}
                    alt="Can't load"
                />
            </div>
            <p>Description: </p>
            {detail}

            </div>
    )
}

export default Description
