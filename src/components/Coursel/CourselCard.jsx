import styles from "./CourselCard.module.css";

function MyComponent({image,work,name,rating,description}) {
  return (
    <>
      <div className={styles.div}>
        <img loading="lazy" src={rating} className={styles.img} />
        <div className={styles.div2}>Amazing work!</div>
        <div className={styles.div3}>
          {description}
        </div>
        <div className={styles.div4}>
          <img loading="lazy" src={image} className={styles.img2} />
          <div className={styles.div5}>
            <div className={styles.div6}>{name}</div>
            <div className={styles.div7}>{work}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyComponent;
