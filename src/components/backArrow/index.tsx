import Image from 'next/image';
import ArrowSvg from '../images/back-arrow.svg';
import Link from 'next/link';

const BackArrow = ({ href }: any) => {
  return (
    <div className="arrow">
      <Link href={href}>
        <Image src={ArrowSvg} alt="logo" width={25} height={25} />
      </Link>
    </div>
  );
};

export default BackArrow;
