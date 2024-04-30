import "../styles/introCard.scss";

export default function IntroCard() {
  return (
    <div className="introCard">
      <div className="introImgWrapper">
        <img src="/src/assets/intro1.jpg" alt="image" />
      </div>
      <div className="introTextWrapper">
        <h3>Macrame歷史</h3>
        <div>
          <p>古巴比起源，歷經千年，成為現代時尚手工藝。</p>
        </div>
      </div>
    </div>
  );
}
