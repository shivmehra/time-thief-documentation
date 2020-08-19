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
    imageUrl: 'img/action.svg',
    description: (
      <>
        Time Thief* is a game that gives you unlimited action in Arcade mode,
        without the constraints of a story.
      </>
    ),
  },
  {
    title: <>Adventure</>,
    imageUrl: 'img/adventure.svg',
    description: (
      <>
        You like an adventure? Well, the story of the Time Thief
        will take you on an adventure. Through Time. Coming back alive though, is in your hands.
      </>
    ),
  },
  {
    title: <>History</>,
    imageUrl: 'img/history.svg',
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
          {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
          {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
          {/* adding the logo here */}
          {
            <img src = {useBaseUrl('img/tt_logo_red.gif')} alt = "Time Thief, the Documentation" height="400" width = "400" align = "center"></img>
          }
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/game-introduction')}>
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
