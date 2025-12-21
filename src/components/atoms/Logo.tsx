import Image from 'next/image';
import westbalidrivernobg from '~/assets/images/westbalidrivernobg.png';

const Logo = () => (
  <div className="flex items-center">
    <Image 
      src={westbalidrivernobg}
      alt="West Bali Driver Logo" 
      width={60} 
      height={60}
      className="h-8 w-8 md:h-10 md:w-10"
    />
    <span className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
      West Bali Driver 
    </span>
  </div>
);

export default Logo;
