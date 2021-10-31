import { motion } from "framer-motion";
import Link from "next/link";

export default function Nav() {
  const setTransition = (delay) => ({
    duration: 0.5,
    delay: delay,
    ease: "easeOut",
  });
  return (
    <div style={{ position: "absolute", width: "100vw" }}>
      <div className="nav001">
        <div style={{ width: "60px" }}>
          <br />
          <div >
            <a href="/" style={{ fill: "#FFF" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 409.71 144.89"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      class="cls-1"
                      d="M26.29,138.63a45.21,45.21,0,0,1-19.44-18.1Q0,108.7,0,92.22v-.29H40v.19a22.49,22.49,0,0,0,1.88,9.62,13.61,13.61,0,0,0,5.33,6.07,15.39,15.39,0,0,0,8.08,2.07q7,0,10.61-4.39t3.6-12.87V0h41.82V92.91q0,24.77-14.45,38.37t-41,13.61Q38.86,144.89,26.29,138.63Z"
                    />
                    <polygon
                      class="cls-1"
                      points="185.98 142.33 139.53 142.33 116.95 104.14 111.71 110.99 100.42 127.83 71.27 142.33 71.27 0 111.71 0 111.71 72.79 112.5 72.79 138.94 33.43 183.42 33.43 147.19 79.89 185.98 142.33"
                    />
                    <path
                      class="cls-1"
                      d="M251.7,0H199.23L152.77,142.33h44L204.15,114h42.62l7.39,28.31h44ZM211.86,84.53l13.21-50.6h.79l13.21,50.6Z"
                    />
                    <path
                      class="cls-2"
                      d="M392.65,139.81a31.16,31.16,0,0,0,12.72-14.15q4.33-9.27,4.34-22.29V33.44H369.27V94.49q0,8.19-3.85,12.92T354,112.15a14.49,14.49,0,0,1-8.23-2.27,14.94,14.94,0,0,1-5.28-6.27,21,21,0,0,1-1.87-9V33.44H298.16V142.33H338.6V122.11h.78q4,11,12.28,16.81t20.67,5.77Q384.27,144.69,392.65,139.81Z"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <br />
        </div>
        <div>
          <Link href="/">home&nbsp;&nbsp;</Link>
          <Link href="/">store&nbsp;&nbsp;</Link>
          <Link href="#">donate&nbsp;&nbsp;</Link>
          <Link href="#member">member&nbsp;&nbsp;</Link>
          <Link href="#">contact&nbsp;&nbsp;</Link>
        </div>
      </div>
    </div>
  );
}
