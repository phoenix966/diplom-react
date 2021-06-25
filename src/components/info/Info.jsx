import './info.sass';

function Info({title,text,imgSrc}) {
  return (
    <div className="info">
      <div className="info__oval">
        <img src={imgSrc} alt="icon" className="info__icon" />
      </div>
      <div className="info__wrap">
        <h2 className="info__title">{title}</h2>
        <p className="info__text">{text}</p>
      </div>
    </div>
  )
}

export default Info
