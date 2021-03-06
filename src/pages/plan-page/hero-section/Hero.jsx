import React from 'react';
import blackcupWebpSm from '../../../assets/images/plan/mobile/hero-blackcup.webp';
import blackcupJpgSm from '../../../assets/images/plan/mobile/hero-blackcup.jpg';
import blackcupWebpMd from '../../../assets/images/plan/tablet/hero-blackcup.webp';
import blackcupJpgMd from '../../../assets/images/plan/tablet/hero-blackcup.jpg';
import blackcupWebpLg from '../../../assets/images/plan/desktop/hero-blackcup-lg.webp';
import blackcupJpgLg from '../../../assets/images/plan/desktop/hero-blackcup-lg.jpg';
import styles from './_hero-plan.module.scss';

const Hero = () => {
  return (
    <section className={styles.heroPlanSection}>
      <picture>
        <source
          srcSet={`${blackcupWebpLg} 1024w, ${blackcupJpgLg} 1024w`}
          type="image/webp"
          media="(min-width: 1024px)"
        />
        <source
          srcSet={`${blackcupWebpMd} 768w, ${blackcupJpgMd} 768w`}
          type="image/webp"
          media="(min-width: 768px)"
        />
        <source srcSet={`${blackcupWebpSm}`} type="image/webp" />
        <img
          src={blackcupJpgSm}
          alt="White cupcake"
          className={styles.heroPlan}
        />
      </picture>
      <div className={styles.planHeroTextBox}>
        <span className={styles.planTitle}>Create a plan</span>
        <p className={styles.planDescription}>
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </div>
    </section>
  );
};

export default Hero;
