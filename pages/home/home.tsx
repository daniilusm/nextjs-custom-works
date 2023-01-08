import BasicLayout from 'components/Layouts/Basic';
import PageCard from 'components/PageCard';
import Slider from 'components/Slider';
import Head from 'next/head';

const cardItems = [
  {
    id: 1,
    title: 'UI',
    route: '/ui',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, repudiandae minima. Cupiditate possimus ut nam.',
  },
  {
    id: 2,
    title: 'Buttons',
    route: '/ui',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, repudiandae minima. Cupiditate possimus ut nam.',
  },
  {
    id: 3,
    title: 'Inputs',
    route: '/ui',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, repudiandae minima. Cupiditate possimus ut nam.',
  },
  {
    id: 4,
    title: 'Hovers',
    route: '/ui',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, repudiandae minima. Cupiditate possimus ut nam.',
  },
];

const Home = () => {
  return (
    <>
      <Head>
        <title>Title MF</title>
      </Head>
      <BasicLayout>
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
