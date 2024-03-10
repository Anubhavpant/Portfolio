import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
      <li className={styles.link}>
          <img src={getImageUrl("contact/whatsapp.png")} alt="Email icon" />
          <a href="/">8630979238</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/gmail.png")} alt="Email icon" />
          <a href="/">anubhavpant2000@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/github.png")} alt="Github icon" />
          <a href="https://www.github.com/AnubhavPant">github.com/AnubhavPant</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;