import styles from "./checkbox.module.scss";

export const Checkbox = ({ id, label, onChange, checked }) => {
  return (
    <label htmlFor={id} className={styles.label}>
      <input
        type="checkbox"
        id={id}
        name={id}
        onChange={onChange}
        checked={checked}
      />
      {label}
    </label>
  )
}