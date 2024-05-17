import "../styles/introCard.scss";

export default function IntroCard({ picLink, title, text }) {
  return (
    <div className="introCard">
      <div className="introImgWrapper">
        <img src={picLink} alt="image" />
      </div>
      <div className="introTextWrapper">
        <h3>{title}</h3>
        <div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
