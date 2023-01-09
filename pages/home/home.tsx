import BasicLayout from 'components/Layouts/Basic';
import PageCard from 'components/PageCard';
import Slider from 'components/Slider';
import Head from 'next/head';

const cardItems = [
  {
    id: 1,
    title: 'Photo data',
    route: '/photo',
    description: 'Return photo data by only url',
  },
  {
    id: 2,
    title: 'Buttons',
    route: '/buttons',
    description: 'Exemple button styles',
  },
  {
    id: 3,
    title: 'Inputs',
    route: '/inputs',
    description: 'Some exemples input elements',
  },
  {
    id: 4,
    title: 'Photos slider',
    route: '/slider',
    description: 'Photos slider with dots',
  },
  {
    id: 5,
    title: 'Drag&Drop',
    route: '/dnd',
    description: 'Drag and drop elements',
  },
];

const Home = () => {
  return (
    <>
      <Head>
        <title>Title MF</title>
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
