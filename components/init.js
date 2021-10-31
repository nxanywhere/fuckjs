import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

export default function init() {
  const setTransition = (delay) => ({
    duration: 1,
    delay: delay,
    ease: "easeOut",
  });

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className="ctr">
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={setTransition(0)}
          >
            All remix songs from
          </motion.a>
          <br />
          <motion.b
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={setTransition(0.25)}
            className="clr fnt"
          >
            Music Inspiration
          </motion.b>
          <br />
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={setTransition(0.75)}
          >
            Thai Style Remix / Morlum / Rodhare
          </motion.a>
          <br />
          <div style={{ height: "14vh" }}>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={setTransition(1)}
              className="pmt"
            >
              เจ้าพ่อรถแห่สมชื่อ มาทุกอย่างที่คิดว่ามันไม่มี
            </motion.a>
            <br />
            <br />
            <div className="btn1">
              <a href="#portremix" className="box pmt">
                ดูผลงานสุดปั่นของชาวคณะ
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
    // <Portremix />
  );
}
