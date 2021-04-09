import React from 'react';
import styled from 'styled-components';
//import { GithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';
import { useSelector } from "react-redux";
const Repos = () => {
  const aRepos = useSelector(({ Repos }) => Repos);
  //console.log(aRepos);
  const oCountLang = {};
  const oMostForked = {};
  const oMostPopularRepo = {};
  // Calculating Most Use & Most popular languages by the user
  aRepos.forEach((repo) => {
    const { language, stargazers_count, name, forks } = repo;
    // Remove the null values from language property
    if (language) {
      // Check if the Property exist or not
      if (oCountLang[language]) {
        oCountLang[language] = {
          label: language,
          value: oCountLang[language].value + 1,
          stars: oCountLang[language].stars + stargazers_count
        }
      } else {
        oCountLang[language] = {
          label: language,
          value: 1,
          stars: stargazers_count
        }
      }
      // console.log(oCountLang);
    }
    oMostForked[name] = {
      label: name,
      value: forks
    };
    oMostPopularRepo[name] = {
      label: name,
      value: stargazers_count
    }
  });
  const mostUsedLang = Object.values(oCountLang);
  const mostPopularLang = Object.values(oCountLang).map(item => {
    return { ...item, value: item.stars };
  });
  const aMostForkedRepo = Object.values(oMostForked).sort((a, b) => {
    return b.value - a.value;
  }).slice(0, 10);
  const aMostPopularRepo = Object.values(oMostPopularRepo).sort((a, b) => {
    return b.value - a.value;
  }).slice(0, 10);
  console.log(mostUsedLang);
  console.log(mostPopularLang);
  console.log(aMostForkedRepo);
  console.log(aMostPopularRepo);

  return <section className="section">
    <Wrapper className='section-center'>
      <Pie3D data={mostUsedLang} />
      <Column3D data={aMostPopularRepo} />
      <Doughnut2D data={mostPopularLang} />
      <Bar3D data={aMostForkedRepo} />
    </Wrapper>
  </section>


};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
