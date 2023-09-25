import React from 'react'
import dateFormat from 'dateformat'


export default function NewsItem(props) {
  let { tittle, description, imageUrl, Newsurl, Time, Author, Source } = props
  return (
    <div>
      <div className="card" >
        <span className="position-absolute top-0 badge translate-middle squre-pill bg-danger" style={{ left: "85%", zIndex: "1" }} >{Source}</span>
        <img src={!imageUrl ? "https://t4.ftcdn.net/jpg/03/13/20/45/240_F_313204500_cbu8ZE400CFC3cNkJ4A66iEd8aFTUyux.jpg" : imageUrl} className="card-img-top" alt="Cant't Open" />
        <div className="card-body">
          <h5 className="card-title">{tittle}...</h5>
          <p className="card-text">{description}...</p>
          <div><small className="text-muted ">By {!Author ? "Unknow" : Author} At {dateFormat(Time, " hh:mm:ss,  mmmm dS yyyy")}</small></div>
          <a href={Newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary my-2">Read More</a>
        </div>
      </div>
    </div>
  )
}





