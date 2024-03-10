import { getImageUrl } from "../../utils";
import styles from './ProjectCard.module.css';

const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img src={getImageUrl(imageSrc)} alt="img" className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          <li key={id}>{skill}</li>;
        })}
      </ul>
      <div className={styles.links}>
        <a className={styles.link} target="_blank" href={demo}>Demo</a>
        <a className={styles.link} target="_blank" href={source}>Source</a>
      </div>
    </div>
  );
};

export default ProjectCard;
