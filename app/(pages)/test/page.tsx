import { Metadata } from 'next';
import Features4 from '~/components/widgets/Features4';

import {
  ijenBromoTours,
} from '~/shared/data/pages/services.data';

export const metadata: Metadata = {
  title: 'Test',
};

const Page = () => {
  return (
    <>
      <Features4 {...ijenBromoTours} />
    </>
  );
};

export default Page;
