import { sponsor1, sponsor2, sponsor3, sponsor4 } from "../assets";
import styles from "../style";

const Partner = () => {
  return (
    <section className={`${styles.paddingX} ${styles.paddingY}`}>
      <h3 className={`${styles.supHead} text-center`}>Our Trusted Partners</h3>
      <div className="flex flex-wrap items-center justify-between py-6">
        <img
          src={sponsor1}
          alt="sponsor1"
          className={`${styles.sponsorImg} h-[62px]`}
        />
        <img
          src={sponsor2}
          alt="sponsor1"
          className={`${styles.sponsorImg} h-[89px]`}
        />
        <img
          src={sponsor3}
          alt="sponsor1"
          className={`${styles.sponsorImg} h-[86px]`}
        />
        <img
          src={sponsor4}
          alt="sponsor1"
          className={`${styles.sponsorImg} h-[49px]`}
        />
      </div>
    </section>
  );
};

export default Partner;
