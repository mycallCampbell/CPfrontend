import Image from "next/image";
import styles from "./CartIcon.module.css";

function CartIcon() {
  return (
    <div className={styles.cartIconContainer}>
      <>
        <Image src={"/logo.png"} width={62.5} height={62.5} />
      </>
    </div>
  );
}

export default CartIcon;
