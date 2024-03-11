import { getImageUrl } from "../../utils";
import styles from './MainSection.module.css';


const MainSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,I'm Annnnnnubhav</h1>
        <p className={styles.description}>I'm a Software Engineer</p>
        <button  onClick={()=>{window.open("../../../resume/AnubhavResume.pdf")}}  className={styles.contactBtn}>Download Resume</button>
      </div>
      <img src={getImageUrl("main/mainImage.png")}
      alt="abc"
      className={styles.mainImg} />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default MainSection
