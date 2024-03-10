import { getImageUrl } from "../../utils";
import styles from "./Education.module.css";
import education from "../../data/education.json";

const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h1 className={styles.title}>Education</h1>
      <div className={styles.content}>
        <ul className={styles.education}>
          {education.map((ed,id) => {
            return (
              <li key={id} className={styles.educationItems}>
                <img
                  src={getImageUrl(ed.imageSrc)}
                  alt={`${ed.instituteName} Logo`}
                />
                <div className={styles.educationDetails}>
                  <h3>{`${ed.degree}, ${ed.instituteName}`}</h3>
                  <p>{`${ed.startDate} - ${ed.endDate}`}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Education;
