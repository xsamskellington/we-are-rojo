import Image from 'next/image';
import ArrowSvg from '../images/back-arrow.svg';
import Link from 'next/link';

const BackArrow = ({ href }: any) => {
  return (
    <div>
      <Link href={href}>
        <Image src={ArrowSvg} alt="back arrow" width={25} height={25} />
      </Link>
    </div>
  );
};

export default BackArrow;
