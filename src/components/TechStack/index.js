import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const TechList = [
  {
    title: "Secluded",
    des: "Windows版下载",
    techLogo:
      "https://s1.ax1x.com/2022/10/16/xBM9Nq.jpg",
    description: "Secluded的Windows版",
    backcolor: "#1effbf",
    link: "https://guyinga.lanzouw.com/b012595ng",
  },
  {
    title: "Secluded",
    des: "安卓版下载",
    techLogo:
      "https://s1.ax1x.com/2022/10/16/xBM9Nq.jpg",
    description: "Secluded的Android版",
    backcolor: "#ff831e",
    link: "https://guyinga.lanzouw.com/b012595ra",
  },
  {
    title: "官方公测群",
    des: "Secluded公测组",
    techLogo:
      "https://s1.ax1x.com/2022/10/16/xBM9Nq.jpg",
    description: "https://s1.ax1x.com/2022/10/16/xBM9Nq.jpg",
    backcolor: "#0fff4b",
    link: "https://jq.qq.com/?_wv=1027&k=zr4HT3mb",
  },
];

function Techs({ title, description, des, link, techLogo, backcolor }) {
  return (
    <a href={link} target={"_blank"} className={clsx("col col--3")}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          className={styles.card}
          style={{
            background: backcolor,
          }}
        >
          {/* <div className={styles.cardlogo}>
            <img src={techLogo} alt="cardLogo" />
      </div> */}
          <div className={styles.cardinfo}>
            <img src={techLogo} className={styles.cardlogo} alt="cardLogo" />
            <p className={styles.title}>{title}</p>
            <p className={styles.subtitle}>{des}</p>
          </div>
          <div className={styles.cardbio}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

function Techaa() {
  return (
    <div className={styles.carda}>
      <div className={styles.cardname}>Quote of the month</div>
      <div className={styles.quote}>
        <svg
          width="80"
          height="80"
          viewBox="0 0 330 307"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M302.258 176.221C320.678 176.221 329.889 185.432 329.889 203.853V278.764C329.889 297.185 320.678 306.395 302.258 306.395H231.031C212.61 306.395 203.399 297.185 203.399 278.764V203.853C203.399 160.871 207.902 123.415 216.908 91.4858C226.323 59.1472 244.539 30.902 271.556 6.75027C280.562 -1.02739 288.135 -2.05076 294.275 3.68014L321.906 29.4692C328.047 35.2001 326.614 42.1591 317.608 50.3461C303.69 62.6266 292.228 80.4334 283.223 103.766C274.626 126.69 270.328 150.842 270.328 176.221H302.258ZM99.629 176.221C118.05 176.221 127.26 185.432 127.26 203.853V278.764C127.26 297.185 118.05 306.395 99.629 306.395H28.402C9.98126 306.395 0.770874 297.185 0.770874 278.764V203.853C0.770874 160.871 5.27373 123.415 14.2794 91.4858C23.6945 59.1472 41.9106 30.902 68.9277 6.75027C77.9335 -1.02739 85.5064 -2.05076 91.6467 3.68014L119.278 29.4692C125.418 35.2001 123.985 42.1591 114.98 50.3461C101.062 62.6266 89.6 80.4334 80.5942 103.766C71.9979 126.69 67.6997 150.842 67.6997 176.221H99.629Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div className={styles.bodytext}>Fortune favors the bold.</div>
      <div className={styles.author}>
        - by Virgil <br /> <span>Latin poet</span>{" "}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height=""
      >
        <path fill="none" d="M0 0H24V24H0z"></path>
        <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
      </svg>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className={styles.Techss}>
      <div className="container">
        <div className="row">
          {TechList.map((props, idx) => (
            <Techs key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
