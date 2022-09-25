import React from "react";
import styles from "./styles.module.css";

function Button({ children }) {
	return (
		<>
			<button type="submit" className={styles.Button}>
				{children}
			</button>
		</>
	);
}

export default Button;
