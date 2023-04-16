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
          className={`${styles.sponsorImg} sm:h-[62px] h-[30px]`}
        />
        <img
          src={sponsor2}
          alt="sponsor1"
          className={`${styles.sponsorImg} sm:h-[89px] h-[50px]`}
        />
        <img
          src={sponsor3}
          alt="sponsor1"
          className={`${styles.sponsorImg} sm:h-[86px] h-[50px]`}
        />
        <img
          src={sponsor4}
          alt="sponsor1"
          className={`${styles.sponsorImg} sm:h-[49px] h-[29px]`}
        />
      </div>
    </section>
  );
};

export default Partner;
