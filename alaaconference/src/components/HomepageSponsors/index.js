import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import './HomepageSponsors.css';

const SponsorLogos = [
  {
    thumbnail: 'img/sponsor_logos/lexisnexis.jpg',
  },
  {
    thumbnail: 'img/sponsor_logos/cup.png',
  },
  {
    thumbnail: 'img/sponsor_logos/leocussen.jpg',
  },
  {
    thumbnail: 'img/sponsor_logos/thomsonreuters.png',
  },
  {
    thumbnail: 'img/sponsor_logos/cald.jpg',
  },
  {
    thumbnail: 'img/sponsor_logos/oup.png',
  },
];

function Feature({thumbnail, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.SponsorfeatureSvg} role="img" src={thumbnail} />
      </div>
    </div>
  );
}

export default function HomepageSponsors() {
  return (
    <section className={styles.Sponsorfeatures}>
      <div className="container">
        <div className="SponsorHeading">
          <h1>With Thanks to Our Sponsors</h1>
        </div>
        <div className="row">
          {SponsorLogos.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
