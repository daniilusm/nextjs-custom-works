import BasicLayout from 'components/Layouts/Basic';
import PageCard from 'components/PageCard';
import Slider from 'components/Slider';
import VerticalSlider from 'components/VerticalSlider';
import Head from 'next/head';
import React from 'react';

const cardItems = [
  {
    id: 1,
    title: 'Parallax',
    route: '/parallax',
  },
  {
    id: 2,
    title: 'Gun model',
    route: '/3d-model',
  },
];

const Home = () => {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      {/* <BasicLayout title="Welcome"> */}
      {/* <Slider>
          {cardItems.map((item) => (
            <PageCard key={item.id} item={item} />
          ))}
        </Slider> */}
      <VerticalSlider />
      {/* </BasicLayout> */}
    </>
  );
};

export default Home;
