import React from 'react';
import Layout from 'components/layout';
import { CalonGebetanList } from 'components/homeSections';

const Home: React.FC = () => (
  <Layout title="Gebetapp">
    <CalonGebetanList />
  </Layout>
);

export default Home;
