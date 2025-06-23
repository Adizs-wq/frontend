import Link from 'next/link';
import Image from 'next/image';

import Header from './components/Header/Header';
import Main from './components/Mainbody/Main';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}