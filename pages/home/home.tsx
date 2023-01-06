import BasicLayout from 'components/Layouts/Basic';
import PageCard from 'components/PageCard';
import Head from 'next/head';

const cardItems = [
  {
    id: 1,
    title: 'UI',
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
        {cardItems.map((item) => (
          <PageCard key={item.id} item={item} />
        ))}
      </BasicLayout>
    </>
  );
};

export default Home;
