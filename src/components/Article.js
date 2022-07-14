import React,{useState} from 'react'

export default function Article(props) {
    const date=props.date==''?"January 1,1970":props.date;
  return (
    <article>
        <h3>{props.title}</h3>
        <small>{date}</small>
        <p>{props.preview}</p>
    </article>
  )
}
