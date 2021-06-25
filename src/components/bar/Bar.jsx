import './bar.sass';

function Bar({value,time}) {
  return (
    <div className="info-bar">
      <span className="info-bar__text info-bar__text--line">{value}</span>
      <span className="info-bar__text">{time}</span>
    </div>
  )
}

export default Bar
