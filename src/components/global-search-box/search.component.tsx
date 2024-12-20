import React from "react";

import styles from "./search.module.css";
import MingcuteSearch2Line from "@/assets/icons/MingcuteSearch2Line";
import MingcuteLocation2Line from "@/assets/icons/MingcuteLocation2Line";

const GlobalSearchBox = () => {
  return (
    <div className={styles["global-search-box"]}>
      <div className={styles.prefix}>
        <MingcuteSearch2Line />
      </div>
      <input
        type="text"
        placeholder="نام بیماری، تخصص، پزشک، بیمارستان و ..."
      />
      <div className={styles.divider}></div>
      <div className={styles.suffix}>
        <button>
          <MingcuteLocation2Line />
          همه شهرها
        </button>
      </div>
    </div>
  );
};

export default GlobalSearchBox;
