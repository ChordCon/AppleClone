import styles from "./OtherGoods.module.css";

const OtherGoods = () => {
  return (
    <container className={styles.contentInner}>
      <div style={{ position: "relative" }}>
        <img width={"100%"} src="/img/macbook pro1.png" alt="MacBook Pro 13" />
        <div className={styles.textsW}>
          <h2 className={styles.goodsName}>MacBook Pro 13</h2>
          <a className={styles.link} href="./">
            더 알아보기
          </a>
          <a className={styles.link} href="./">
            구입하기
          </a>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <img width={"100%"} src="/img/iPhone131.png" alt="iPhone 13 Pro" />
        <div className={styles.textsB}>
          <h2 className={styles.goodsName}>iPhone 13 Pro</h2>
          <a className={styles.link} href="./">
            더 알아보기
          </a>
          <a className={styles.link} href="./">
            구입하기
          </a>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <img width={"100%"} src="/img/ipadair1.png" alt="iPad air" />
        <div className={styles.textsB}>
          <h2 className={styles.goodsName}>iPad air</h2>
          <a className={styles.link} href="./">
            더 알아보기
          </a>
          <a className={styles.link} href="./">
            구입하기
          </a>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        {" "}
        <img width={"100%"} src="/img/iwatch1.png" alt="iWatch" />
        <div className={styles.textsW}>
          <h2 className={styles.goodsName}>iWatch</h2>
          <a className={styles.link} href="./">
            더 알아보기
          </a>
          <a className={styles.link} href="./">
            구입하기
          </a>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        {" "}
        <img width={"100%"} src="/img/AirPods Pro1.png" alt="AirPods Pro" />
        <div className={styles.textsW}>
          <h2 className={styles.goodsName}>AirPods Pro</h2>
          <a className={styles.link} href="./">
            더 알아보기
          </a>
          <a className={styles.link} href="./">
            구입하기
          </a>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        {" "}
        <img width={"100%"} src="/img/aptv1.png" alt="iTV" />
        <div className={styles.textsB}>
          <h2 className={styles.goodsName}>iTV</h2>
          <a className={styles.link} href="./">
            더 알아보기
          </a>
          <a className={styles.link} href="./">
            구입하기
          </a>
        </div>
      </div>
    </container>
  );
};

export default OtherGoods;
