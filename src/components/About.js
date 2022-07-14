import React,{useState} from 'react'

export default function About({image,bloglogo}) {
    
    
    const [image,setImage]=useState("https://via.placeholder.com/215")
    function changeImage(){
        setImage(image)
    }
    
    changeImage();
    return (
    <aside>
        <img src={image} alt={bloglogo} />
        <p>{bloglogo}</p>
    </aside>
  )
}
