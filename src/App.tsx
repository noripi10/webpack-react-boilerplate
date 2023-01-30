import { FC } from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Image } from '@/components/Image';

import './css/app.scss';

export const App: FC = () => {
  return (
    <div className='container'>
      <Header />
      <main className='main'>
        <h1>App.tsx</h1>
        <Image />
      </main>
      <Footer />
    </div>
  );
};
