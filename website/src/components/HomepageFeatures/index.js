import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "",
    Svg: require("/static/img/img2E.svg").default,
    description: (
      <>
        No more jangling keychains or forgetting combinations, Just plug in your
        USB for seamless access and sensations. From encrypted files to secret
        realms, it's your gatekeeper.
      </>
    ),
  },
  {
    title: "",
    Svg: require("/static/img/img3E.svg").default,
    description: (
      <>
        When your USB key vanishes, causing endless pressure, Fear not, for a
        solution is here, quick and spry, you'll locate it in the blink of an
        eye. Retrieve lost USB keys easily.
      </>
    ),
  },
  {
    title: "",
    Svg: require("/static/img/img4E.svg").default,
    description: (
      <>
        In a world filled with digital footprints, a revolutionary solution
        emerges. With a simple USB insertion, your sensitive files vanish from
        prying eyes. No more worries about unauthorized access.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
