import React from 'react';
import styles from '../styles/Home.module.css';
import NewArticle from './NewArticle';
import Article from './Article';

export default function Home() {

  const articlesData = [
    {
      nameArticle: 'PHANTOM I White',
      descArticle: 'A class of its own.',
      url: './images/phantom1.png'
    },
    {
      nameArticle: 'PHANTOM II Gold',
      descArticle: 'Pure sound.',
      url: './images/phantom2.png'
    },
    {
      nameArticle: 'PHANTOM II Black',
      descArticle: 'Deeply nomadic.',
      url: './images/phantom3.png'
    },
    {
      nameArticle: 'PHANTOM II White',
      descArticle: 'Intensively immersive.',
      url: './images/phantom4.png'
    },
  ];

  const Articles = articlesData.map((data, i)=>{
    return <Article
    key = {i}{...data}
    />
  })

  return <>
    <NewArticle title = 'DIONE SOUNDBAR' />
    <div className={styles.articlesContainer}>{Articles}</div>

  </>;

}
