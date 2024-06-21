import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageSponsors from '@site/src/components/HomepageSponsors';
import {EOIButton, RegisterButton} from '@site/src/components/EOIButton';
import RegisterBanner from '@site/src/components/EOIBanner';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          {siteConfig.tagline}
        </p>
        <p className="hero__subtitle">
          Hosted at <a href='flinders_ncc'>Flinders University's New City Campus!</a>
        </p>
        <img src="img/Flinders_University_Logo_Horizontal_RGB_Master.png" style={{height: '50px'}}></img>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`2024 ALAA Conference`}
      description="Australasian Legal Academics Association Conference 2024 <head />">
      <HomepageHeader />
      <main>
        <RegisterButton registerURL='/registration' buttonText='ALAA 2024 Conference Registration' />
        <p style={{textAlign: "center"}}>
          <strong>REGISTRATION CLOSES 20 JUNE 2024</strong>
        </p>
        <HomepageFeatures />
        <HomepageSponsors />
      </main>
    </Layout>
  );
}
