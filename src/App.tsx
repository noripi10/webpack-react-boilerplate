import React, { FC } from 'react';
import './css/app.scss';

export const App: FC = () => {
  return (
    <div className='container'>
      <header>header!</header>
      <main className='main'>
        main
        <img src={require('./assets/image1.jpeg')} alt='image1' width={120} height={120} />
      </main>
      <footer>footer</footer>
    </div>
  );
};
