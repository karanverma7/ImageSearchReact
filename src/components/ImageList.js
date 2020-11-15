import React from 'react'
import './ImageList.css'
import ImageFrame from './ImageFrame'


const ImageList = props => {

    const newList = props.images.map( image => <ImageFrame key={image.id} image={image}/>)
    
    return (
        <div className="image-list">{newList}</div>
    )
}

export default ImageList;