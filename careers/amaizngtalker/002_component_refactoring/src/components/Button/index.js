import styles from "./button.module.scss";

export const Button = ({ children, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  )
}