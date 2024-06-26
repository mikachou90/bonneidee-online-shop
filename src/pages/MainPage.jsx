import "../styles/mainPage.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import IntroCard from "../components/IntroCard";
import RecommendItem from "../components/RecommendItem";
import { AlertSnackbar } from "../components/Alert";
import { motion } from "framer-motion";

export default function MainPage() {
  const [isFav, setIsFav] = useState({
    isAddToFav: false,
    isRemoveFav: false,
  });

  return (
    <>
      <AlertSnackbar
        message="已加入收藏清單"
        severity="success"
        open={isFav.isAddToFav}
        setOpen={setIsFav}
      />

      <AlertSnackbar
        message="已移除收藏清單"
        severity="success"
        open={isFav.isRemoveFav}
        setOpen={setIsFav}
      />
      <section id="bannerSection">
        <div className="bannerWrapper">
          <div className="bannerTittleWrapper">
            <h1>
              找尋生活中的好點子 <br />
              探索手工編織的美好
            </h1>
            <Link to="/products">探索更多</Link>
          </div>
        </div>
      </section>

      <div id="mainPage">
        <section id="introSection">
          <h2>關於Bonne idée</h2>

          <div className="aboutShop left">
            <motion.div
              initial={{ y: 300 }}
              whileInView={{ y: 10 }}
              transition={{ bounce: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="aboutImg"
            >
              <img src="https://i.imgur.com/sc4AZ4S.jpeg" alt="decor picture" />
            </motion.div>

            <div className="aboutTextWrapper">
              <h3>好點子手作</h3>
              <div className="aboutText">
                <p>
                  我們的目標是透過手工編織，將美好的點子融入生活中，為每個角落帶來獨特的溫暖與風格。
                </p>
              </div>
            </div>
          </div>

          <div className="aboutShop right">
            <motion.div
              initial={{ y: 300 }}
              whileInView={{ y: 10 }}
              transition={{ bounce: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="aboutImg"
            >
              <img src="https://i.imgur.com/SqtviWa.jpg" alt="decor picture" />
            </motion.div>

            <div className="aboutTextWrapper">
              <h3>童心玩趣</h3>
              <div className="aboutText">
                <p>
                  品牌名稱Bonne
                  idée來自法文「好點子」之意，發音類似「蹦泥地」，寓意著為您帶來裝飾靈感，就像是童年時頑皮地跳進雨天水泥坑般的快樂與無憂。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="aboutMacrame">
          <div className="titleWrapper">
            <h2>About macrame</h2>
            <h3>手工編織介紹</h3>
          </div>
          <div className="introWrapper">
            <IntroCard
              title="Macrame歷史"
              text="Macrame起源於古代巴比倫，發展至今已有數千年歷史。16至17世紀歐洲流行，後來隨著歐洲探險家傳入世界各地。20世紀再次興起，成為時尚的手工藝品。"
              picLink="https://i.imgur.com/oW7ZWog.jpeg"
              className="icon"
            />
            <IntroCard
              title="編織風格"
              text="Macrame以結、繩製成繩結或裝飾品，具有靈活多變的編織結構，常與自然元素結合，呈現原始有機的美感。"
              picLink="https://i.imgur.com/X8P2ZIN.jpeg"
              className="icon"
            />
            <IntroCard
              title="現代應用"
              text="現今Macrame仍廣泛應用於裝飾品、牆掛、懸掛盆栽等，是受歡迎的手工藝，反映著藝術和美學的交匯。"
              picLink="https://i.imgur.com/eSmTAPC.jpeg"
              className="icon"
            />
          </div>
        </section>

        <section id="allProducts">
          <div className="titleWrapper">
            <h2>New Products</h2>
            <h3>挖掘新上架的Bonne idee商品</h3>
          </div>

          <RecommendItem setIsFav={setIsFav} />

          <Link to="/products" className="allProductBtn">
            更多商品
          </Link>
        </section>
      </div>
    </>
  );
}
