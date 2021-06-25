import './info.sass';

function Info() {
  return (
    <div className="info">
      <div className="info__oval">
        <img src="assets/img/icon.png" alt="icon" className="info__icon" />
      </div>
      <div className="info__wrap">
        <h2 className="info__title">Analyzing User Data</h2>
        <p className="info__text">Who are you developing for? How will they use your design? Building user personas can answer these.</p>
      </div>
    </div>
  )
}

export default Info
