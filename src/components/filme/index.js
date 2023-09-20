import "./styles.css";

export default function Filme({ background, title }) {
  return (
    <div className="film">
      <div className="cover">
        <img src={background} alt="Cover"/>
      </div>
      <div className="title">{title}</div>
    </div>
  );
}
