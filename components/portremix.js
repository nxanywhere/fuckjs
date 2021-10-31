import "../styles/Home.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Portremix() {
  const setTransition = (delay) => ({
    duration: 1,
    delay: delay,
    ease: "easeOut",
  });

  // const Container = {
  //   width: "100vw", // *! ห้ามยุ่ง
  //   height: "100vh", // *? ตั้งความสูงของ Section
  //   display: "flex",
  //   justifyContent: "center", // *? ตั้งชิดซ้าย (flex-start) | ชิดขวา (flex-end)
  //   alignItems: "center", // *? ตั้งชิดบน (flex-start) | ชิดล่าง (flex-end)
  // };
  const Contant = {
    // width: 1424, // *? ตั้งความกว้าง Container ข้างใน
    color: "#FFF",
    padding: "0 24px",
  };

  const SongData = [
    {
      className: "card23",
      imgSrc: "/Lisa1.jpg",
      imgAlt: "Lalisa",
      title: "Lisa - Lalisa | Rodhare Version",
      des: "งานนี้บอกก่อนเลยว่าไฟไหม้มากๆ และใช้เวลาที่เร็วมากที่สุดและเตรียมแทบไม่ทัน ส่วนโจทย์ก็ไม่ได้เน้นอะไรมาก ลำซิ่งและท่อนท้ายกันตรึมใส่ความเป็นบ้านๆไป",
      link: "https://www.youtube.com/watch?v=sW6c0OlASOQ",
    },
    {
      className: "card24",
      imgSrc: "/bphlt.jpg",
      imgAlt: "Lalisa",
      title: "Blackpink - How You Like That | Rodhare Version",
      des: "งานนี้ก็ไฟไหม้เช่นกันแต่นัดหมายกับเจมส์ไว้จะมาทำด้วยกันที่บ้านสักคืนหนึ่งและตัดคลิปในวันเดียวกัน",
      link: "https://www.youtube.com/watch?v=xqbze_XLwXA",
    },
    {
      className: "card25",
      imgSrc: "/icream.png",
      imgAlt: "Lalisa",
      title: "Blackpink - Ice Cream | Rodhare Version",
      des: "งานนี้ก็ไฟไหม้เช่นกันและวางโครงไว้ก่อนล่วงหน้า แต่หลังเพลงออกก็แก้เกือบไม่ทันเช่นกัน!!",
      link: "https://www.youtube.com/watch?v=pZbDFuZHhbs",
    },
    {
      className: "card26",
      imgSrc: "/itzy001.png",
      imgAlt: "Lalisa",
      title: "ITZY - Not Shy | Rodhare Version",
      des: "เพลงนี้จะทำแบบสไตล์ลูกทุ่งหมอลำแบบฟิวชั่นเลย ซึ่งมีพี่เต้ยมาแจมพิณและกีต้าร์ด้วย (Toey Guitarist)",
      link: "https://www.youtube.com/watch?v=W198sILmuxY",
    },
  ];

  return (
    <div className="fuckContainer">
      <div className="fuckContent">
        <motion.b
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={setTransition(0.25)}
          className="clr fnt"
        >
          Music Remix
        </motion.b>
        <br />
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={setTransition(0.75)}
          style={{ width: "100%", textAlign: "center" }}
        >
          Remix in Thaistyle Version
        </motion.a>
        <br />
        <br />
        <br />
        <div>
          <div className="cardContent">
            {SongData?.map((kuy, i) => (
              <SongSection 
              class={kuy.className}
              src={kuy.imgSrc}
              Alt={kuy.imgAlt}
              title={kuy.title}
              des={kuy.des}
              link={kuy.link}
              key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const SongSection = (naHee) => (
  <section className={naHee.class}>
    <Image src={naHee.src} alt={naHee.Alt} width={888} height={480} />
    <br />
    <br />
    <b>{naHee.title}</b>
    <br />
    <br />
    <a className="pmt">{naHee.des}</a>
    <br />
    <br />
    <a href={naHee.link} className="box pmt">
      กดฟังที่นี่
    </a>
  </section>
);
