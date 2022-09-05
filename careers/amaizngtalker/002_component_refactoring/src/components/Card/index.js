import styles from "./card.module.scss";

export const Card = ({ children }) => {
  return (
    <div className={styles.card}>
      {children}
    </div>
  )
}