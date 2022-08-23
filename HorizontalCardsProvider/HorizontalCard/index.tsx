import React from "react";

export interface HorizontalCardProps{
  title: string
  text: string
  image: string
}

export default function HorizontalCard({
  image, 
  text, 
  title
}: HorizontalCardProps){
  return(
      <div>
          <img src={image} alt={title}/>
          <p>
            <strong>{title}</strong>
          </p>
          <p>
            {text}
          </p>
      </div>
  )
}