import "./Skills.module.css";
import { getImageUrl } from "../../utils";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";

const Skills = () => {
  return (
    <div className={styles.container} id="skills">
      <div className={styles.skillHeading}>
        <h2 className={styles.skillHeading}>Skills</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
