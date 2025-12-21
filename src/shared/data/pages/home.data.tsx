import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconClock,
  IconComponents,
  IconDownload,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRocket,
  IconCircleArrowDownFilled,
  IconBrandWhatsapp,
  IconPhotoHeart,
  IconCarFilled,
  IconCreditCard,
  IconMap2
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  Icon,
  PricingProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';
import bali_hero from '~/assets/images/bali_hero.jpg';
import alingalingwaterfall from '~/assets/images/alingalingwaterfall.jpg';
import jatiluwihRiceTerrace from '~/assets/images/jatiluwihRiceTerrace.jpg';
import nextJsLogo from '~/assets/images/nextjs-logo.png';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';
import cameraBackImg from '~/assets/images/camera-back.jpg';
import ubud from '~/assets/images/ubud.jpeg';
import uluwatu from '~/assets/images/uluwatu.jpg';
import sunrisecoffee from '~/assets/images/sunrisecoffee.jpeg';
import gasImg from '~/assets/images/gas.jpg';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      Discover Bali like a local - private tours tailored specially for you.
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        Experience the island’s hidden gems, breathtaking nature, and authentic culture with your own English-speaking local guide.
      </span>{' '}
    </>
  ),
  callToAction: {
    text: 'All tour packges',
    href: 'https://github.com/onwidget/tailnext',
    icon: IconCircleArrowDownFilled as Icon,
    targetBlank: true,
  },
  callToAction2: {
    text: 'Contact us',
    href: '/',
    icon: IconBrandWhatsapp as Icon,
  },
  image: {
    src: bali_hero,
    alt: 'Hero TailNext',
  },
};

// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [
    {
      link: 'https://nextjs.org/',
      src: nextJsLogo,
      alt: 'NextJs Logo',
    },
    {
      link: 'https://react.dev/',
      src: reactLogo,
      alt: 'React Logo',
    },
    {
      link: 'https://tailwindcss.com/',
      src: tailwindCssLogo,
      alt: 'Tailwind CSS Logo',
    },
    {
      link: 'https://www.typescriptlang.org/',
      src: typescriptLogo,
      alt: 'Typescript Logo',
    },
  ],
};

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: true,
  columns: 3,
  header: {
    title: (
      <>
        Why Choose <span className="whitespace-nowrap">West Bali Driver</span>?
      </>
    ),
    subtitle:
      "At West Driver Bali, we believe your holiday should be more than just sightseeing—it should be a personal journey into the heart of the island.",
    tagline: '',
  },
  items: [
    {
      title: 'Led by Certified Local Experts',
      description:
        "Travel with guides who grew up here and know Bali by heart.",
      icon: IconPhotoHeart as Icon,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'No Hidden Fees',
      description:
        'Transparent pricing and trusted service.',
      icon: IconComponents as Icon,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Private & Comfortable',
      description:
        "Enjoy the island at your pace, in a clean, air-conditioned car.",
      icon: IconCarFilled as Icon,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Secure, Cashless Booking',
      description:
        'Easy payments for peace of mind.',
      icon: IconCreditCard as Icon,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Custom Itinerary',
      description:
        "Whether you love nature, culture, or adventure, we create a trip just for you.",
      icon: IconMap2 as Icon,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'We serve from the heart',
      description:
        'We believe in giving only the best energy to the world :)',
      icon: IconBulb as Icon,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
  ],
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'Most popular Bali inclusive tour packages',
    subtitle: '',
    tagline: 'Not sure where to go?',
  },
  content:
    (<>
      <b>Northern Charm Tour</b> - Escape the crowds and uncover the serene beauty of Bali’s northern highlands on our Bali Countryside Tour. 
      <p><em>Price: IDR 775,000/person (Minimum 2 persons)</em></p>
    </>),
  items: [
    {
      title: 'Jatiluwih rice terraces',
      description:
        'Walk through the expansive Jatiluwih rice terraces (UNESCO site)',
    },
    {
      title: 'Ulun Danu Beratan Lake Temple',
      description:
        'Admire the floating temple of Ulun Danu Beratan',
    },
    {
      title: 'Banyumala Twin Waterfalls',
      description:
        'Swim beneath the lush Banyumala Twin Waterfalls',
    },
  ],
  image: {
    src: jatiluwihRiceTerrace,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content data on Home page *******************
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,
  content:
    (<>
      <b>Ubud Highlight Tour</b> - Explore Bali’s cultural heart with our private Ubud day tour 
      <p><em>Price: IDR 680.000/person (Min. 2 persons)</em></p>
    </>),
  items: [
    {
      title: 'Visit an ancient Balinese temple',
    },
    {
      title: 'Explore the Sacred Monkey Forest',
    },
    {
      title: 'Enjoy a single swing with stunning rice terrace views',
    },
    {
      title: 'Perfect for couples, families, or friends who want to explore Ubud without the constraints of group tours',
    },
  ],
  image: {
    src: ubud,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};

// Content data on Home page *******************
export const contentHomeThree: ContentProps = {
  id: 'contentOne-on-home-three',
  hasBackground: true,
  content:
    (<>
      <b>Uluwatu Tour</b> - Enjoy a full Uluwatu day tour with banana boat ride 
      <p><em>Price: IDR 650.000/person (Min. 2 persons)</em></p>
    </>),
  items: [
    {
      title: 'Free banana boat ride at Tanjung Benoa',
    },
    {
      title: 'Visit the iconic Padang Padang Beach',
    },
    {
      title: 'Explore Uluwatu Temple on the cliff edge',
    },
    {
      title: 'Watch the Kecak fire dance at sunset',
    },
    {
      title: 'Optional seafood dinner by the ocean',
    },
  ],
  image: {
    src: uluwatu,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: true,
};

export const contentHomeFour: ContentProps = {
  id: 'contentOne-on-home-four',
  hasBackground: true,
  content:
    (<>
      <b>Sunrise Coffee, Traditional Village & Waterfall Tour</b> - Enjoy your morning coffee with stunning views of Mount Batur from Kintamani, explore the peaceful Panglipuran traditional village, and cool off with a refreshing swim at Taman Sari Waterfall. 
      <p><em>Price: IDR 630.000/person (Min. 2 persons)</em></p>
    </>),
  items: [
    {
      title: 'Sunrise coffee overlooking Mount Batur in Kintamani',
    },
    {
      title: 'Visit Panglipuran, one of Bali’s most beautiful traditional villages',
    },
    {
      title: 'Swim at the scenic and serene Taman Sari Waterfall',
    },
  ],
  image: {
    src: sunrisecoffee,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data on Home page *******************
export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  isReversed: false,
  isImageDisplayed: true,
  image: {
    src: gasImg,
    alt: 'Steps image',
  },
  header: {
    title: "Of course, those are just ideas. We know everyone is different - so tell us what you like (surfing, dirt biking, cafe-hopping?), and we'll design something special for you.",
  },
  items: [
    {
      title: 'Step 1',
      description:
        "Contact us on Whatsapp with the kind of activities that you're interested in, and how long you're going to be here.",
      icon: IconArrowDown as Icon,
    },
    {
      title: 'Step 2',
      description:
        "We'll get back to you with a suggested itinerary, as well as the price.",
      icon: IconArrowDown as Icon,
    },
    {
      title: 'Step 3',
      description:
        "Confirm your booking by proceeding to checkout.",
      icon: IconArrowDown as Icon,
    },
    {
      title: "You're all set! We'll be waiting for you in Bali :) ",
    },
  ],
};

// Testimonials data on Home page *******************
export const testimonialsHome: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: true,
  header: {
    title: 'What our customers say about us',
    subtitle:
      '',
  },
  testimonials: [
    {
      name: 'Sarah M.',
      job: 'United States',
      testimonial: `We honestly couldn’t have asked for a better experience in Bali. Our driver was always on time, super friendly, and knew the island like the back of his hand. He suggested places we would never have found on our own, including a small local restaurant with the best nasi goreng I’ve ever had. He made us feel safe and relaxed the entire trip. Bali wouldn’t have been the same without him.`,
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Tayla Kirsten',
      },
      href: '/',
    },
    {
      name: 'Luca & Francesca',
      job: 'Italy',
      testimonial: `This was our first time in Bali and we were a bit overwhelmed at the start, but our guide made everything so easy. He explained the culture, temples, and traditions with real passion, not like a rehearsed tour. We loved that he was flexible and adjusted the schedule based on what we enjoyed most. It felt more like traveling with a local friend than a tour guide.`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Silver Jordan',
      },
      href: '/',
    },
    {
      name: 'Hannah W.',
      job: 'United Kingdom',
      testimonial: `Absolutely brilliant service from start to finish. Communication before arrival was clear and fast, and during the trip everything ran smoothly. Our driver was calm, patient, and had a great sense of humor. Bali traffic can be crazy, but I always felt completely comfortable. I would 100% book again and recommend to anyone visiting Bali.`,
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Kelsey Arden',
      },
      href: '/',
    },
    {
      name: 'Kenji S.',
      job: 'Japan',
      testimonial: `I travel often and have used many guides, but this experience really stood out. The guide was very respectful, knowledgeable, and attentive to small details. He took great photos for me and made sure I understood the history behind each place we visited. The pace was perfect — not rushed, not slow. It was a very memorable trip.`,
      image: {
        src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Sarah Johnson',
      },
      href: '/',
    },
    {
      name: 'Emily & Josh',
      job: 'Australia',
      testimonial: `We booked a full-day tour and ended up extending it because we were having such a great time. Our driver gave us amazing recommendations, from waterfalls to hidden viewpoints, and even helped us avoid crowded tourist spots. He genuinely cared that we were enjoying ourselves. Best decision we made on our Bali holiday.`,
      image: {
        src: 'https://images.unsplash.com/photo-1694287877106-ee22f764aef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Keith Young',
      },
      href: '/',
    },
    {
      name: 'Thomas R.',
      job: 'Germany',
      testimonial: `Professional, reliable, and extremely knowledgeable. The car was clean and comfortable, and the driving was smooth even on long journeys. What impressed me most was how well he explained Balinese culture and daily life — it added so much depth to the trip. This service is worth every rupiah.`,
      image: {
        src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Lisa Gordon',
      },
      href: '/',
    },
  ],
};

// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      "We're here to answer your questions.",
    tagline: 'FAQS',
  },
  items: [
    {
      title: 'Do you offer private or group tours?',
      description: `All our tours are 100% private, which means it’s just you, your companions, and our local guide. This ensures a more personal, flexible, and comfortable experience compared to group tours.`,
    },
    {
      title: 'What’s included in the tour price?',
      description: `Our all-inclusive pricing covers a private car, English-speaking local driver/guide, entrance fees or donations, bottled water, and in some tours, special activities like swings or banana boat rides. Meals and tips are not included unless stated.`,
    },
    {
      title: "Can I customize my itinerary?",
      description: `Absolutely! You can choose from our curated tour packages or tell us what you like, and we’ll create a tailor-made route that fits your schedule and interests.`,
    },
    {
      title: "How do I book and pay for a tour?",
      description: `Booking is easy—you can reserve directly through our website, WhatsApp, or email. We accept secure, cashless payments via credit card, PayPal, and bank transfer. Cash payments in IDR or USD are also welcome.`,
    },
    {
      title: 'Do you cater to special requests or needs?',
      description: `Yes! Whether it’s dietary preferences, celebrating a special occasion, or arranging a sunrise pickup, our team is happy to accommodate. Please let us know in advance so we can prepare everything for you.`,
    }
  ],
};

// Pricing data on Home page *******************
export const pricingHome: PricingProps = {
  id: 'pricing-on-home',
  hasBackground: true,
  header: {
    title: 'Prices for each plan',
    subtitle:
      'Proin eget vestibulum sem, vel ultrices ligula. Vestibulum in eleifend lectus, non mollis odio. Donec nibh ipsum, suscipit non pulvinar quis, lobortis ac lorem.',
    // tagline: 'Pricing',
  },
  prices: [
    {
      title: 'basic',
      price: 29,
      period: 'per month',
      items: [
        {
          description: 'Etiam in libero, et volutpat',
        },
        {
          description: 'Aenean ac nunc dolor tristique',
        },
        {
          description: 'Cras scelerisque accumsan lib',
        },
        {
          description: 'In hac habitasse',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 7-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
    {
      title: 'standard',
      price: 69,
      period: 'per month',
      items: [
        {
          description: 'Proin vel laoreet',
        },
        {
          description: 'Ut efficitur egestas',
        },
        {
          description: 'Pellentesque ut nibh',
        },
        {
          description: 'Donec fringilla sem',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 15-day trial',
        href: '/',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'premium',
      price: 199,
      period: 'per month',
      items: [
        {
          description: 'Curabitur suscipit risus',
        },
        {
          description: 'Aliquam blandit malesuada',
        },
        {
          description: 'Suspendisse sit amet',
        },
        {
          description: 'Suspendisse auctor dui',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 30-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};

// Team data on Home page *******************
export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'Meet our team!',
    subtitle:
      'These are the individuals making magic happen ✨',
    // tagline: 'Team',
  },
  teams: [
    {
      name: 'Cindy Belcher',
      occupation: 'SEO Consultant',
      image: {
        src: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Cindy Belcher',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter as Icon,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin as Icon,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail as Icon,
          href: '#',
        },
      ],
    },
    {
      name: 'Toby Foster',
      occupation: 'Marketing Tech',
      image: {
        src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
        alt: 'Toby Foster',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter as Icon,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin as Icon,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail as Icon,
          href: '#',
        },
      ],
    },
    {
      name: 'Clark Bourne',
      occupation: 'Content Manager',
      image: {
        src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Clark Bourne',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter as Icon,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin as Icon,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail as Icon,
          href: '#',
        },
      ],
    },
    {
      name: 'Bella Chase',
      occupation: 'UX Designer',
      image: {
        src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Bella Chase',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter as Icon,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin as Icon,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail as Icon,
          href: '#',
        },
      ],
    },
  ],
};

// Contact data on Home page *******************
export const contactHome: ContactProps = {
  hasBackground: true,
  header: {
    title: 'Get in Touch',
    subtitle: "Leave a message to us on Whatsapp!",
    tagline: 'Contact',
  },
  content:
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.',
  items: [
    {
      title: 'Our Address',
      description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
      icon: IconMapPin as Icon,
    },
    {
      title: 'Contact',
      description: ['Mobile: +1 (123) 456-7890', 'Mail: tailnext@gmail.com'],
      icon: IconPhoneCall as Icon,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock as Icon,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// CallToAction data *******************
export const callToAction2Home: CallToActionProps = {
  title: 'Next.js + Tailwind CSS',
  subtitle:
    'Aliquam sodales porttitor lacus ac tristique. Etiam posuere elit at leo feugiat sodales. Sed ac mauris quis sem tempor condimentum non at metus.',
  callToAction: {
    text: 'Get template',
    href: 'https://github.com/onwidget/tailnext',
    icon: IconDownload as Icon,
  },
  items: [
    {
      title: 'Get template',
      description: 'Aliquam sodales est lectus, quis.',
      href: 'https://github.com/onwidget/tailnext',
    },
    {
      title: 'Learn more',
      description: 'Class aptent taciti sociosqu ad litora torquent per conubia.',
      href: '/',
    },
    {
      title: 'Subscribe',
      description: 'Morbi orci nunc, euismod ac dui id, convallis.',
      form: {
        icon: IconMail as Icon,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Enter your email address',
        },
        btn: {
          title: 'Subscribe',
          type: 'submit',
        },
      },
    },
  ],
};
