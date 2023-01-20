import BasicLayout from 'components/Layouts/Basic';
import PageCard from 'components/PageCard';
import Slider from 'components/Slider';
import Head from 'next/head';
import React from 'react';

const cardItems = [
  {
    id: 1,
    title: 'Parallax',
    route: '/parallax',
  },
  // {
  //   id: 2,
  //   title: 'Photos slider',
  //   route: '/slider',
  // },
  // {
  //   id: 3,
  //   title: 'Drag&Drop',
  //   route: '/dnd',
  // },
  // {
  //   id: 4,
  //   title: 'Animations',
  //   route: '/animations',
  // },
];

const Home = () => {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <BasicLayout title="Welcome">
        <Slider>
          {cardItems.map((item) => (
            <PageCard key={item.id} item={item} />
          ))}
        </Slider>
      </BasicLayout>
    </>
  );
};

export default Home;
