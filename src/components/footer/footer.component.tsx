import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";

import CertificateLogo from "@/assets/logo/certificate.svg";
import EnamadLogo from "@/assets/logo/enamad.svg";
import SamandehiLogo from "@/assets/logo/idk.svg";
import MingcuteYoutubeFill from "@/assets/icons/MingcuteYoutubeFill";
import MingcuteLinkedinFill from "@/assets/icons/MingcuteLinkedinFill";
import MingcuteTelegramFill from "@/assets/icons/MingcuteTelegramFill";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.writings}>
        <div className={styles.logo}>دکتر آنلاین</div>
        <p className={styles.description}>
          دکتر من یک پلتفرم جستجو خدمات پزشکی رزرو و نوبت دهی آنلاین است.
        </p>
      </div>
      <div className={styles.visuals}>
        <ul className={styles.certificates}>
          <li>
            <Link href="#">
              <Image src={CertificateLogo} alt="SSL" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={EnamadLogo} alt="enamad" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={SamandehiLogo} alt="samandehi" />
            </Link>
          </li>
        </ul>
        <ul className={styles.socials}>
          <li>
            <Link href="#">
              <MingcuteYoutubeFill />
            </Link>
          </li>
          <li>
            <Link href="#">
              <MingcuteLinkedinFill />
            </Link>
          </li>
          <li>
            <Link href="#">
              <MingcuteTelegramFill />
            </Link>
          </li>
        </ul>
      </div>
      <p className={styles.copy}>
        تمامی حقوق مادی و معنوی این وبسایت متعلق به دکتر آنلاین است.
      </p>
    </footer>
  );
};

export default Footer;
