import "../styles/introCard.scss";
import { motion } from "framer-motion";

export default function IntroCard({ picLink, title, text }) {
  return (
    <motion.div
      initial={{ y: 300 }}
      whileInView={{ y: 10 }}
      transition={{ bounce: 0.4, duration: 0.8 }}
      viewport={{ once: true }}
      className="introCard"
    >
      <div className="introImgWrapper">
        <img src={picLink || "/no-image.png"} alt="image" />
      </div>
      <div className="introTextWrapper">
        <h3>{title}</h3>
        <div>
          <p>{text}</p>
        </div>
      </div>
    </motion.div>
  );
}
