import Form from '../common/Form';
import Headline from '../common/Headline';
import { ContactProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import CTA from '../common/CTA';
import {
  IconBrandWhatsapp
} from '@tabler/icons-react';

const Contact = ({ header, content, items, form, id, hasBackground = false }: ContactProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-6xl">
    {header && <Headline header={header} titleClass="text-3xl sm:text-5xl" />}
    <div className="flex items-stretch justify-center">
      <CTA callToAction={{
    text: 'Contact us',
    href: '/',
    icon: IconBrandWhatsapp,
  }} linkClass="btn" />
    </div>
  </WidgetWrapper>
);

export default Contact;
