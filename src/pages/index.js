import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Action</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Time Thief* is a game that gives you unlimited action in Arcade mode,
        without the constraints of a story.
      </>
    ),
  },
  {
    title: <>Adventure</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        You like an adventure? Well, the story of the Time Thief
        will take you on an adventure. Through Time. Coming back alive though, is in your hands.
      </>
    ),
  },
  {
    title: <>History</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        History is a place with many treasures. And many dangers.
        There a number of priceless treasures, but they are not left unguarded.
        Steal history's most valuable artifacts from the mightiest Rulers and Conquerors.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentaion of Time Thief, the game.">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              See Documentaion
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
