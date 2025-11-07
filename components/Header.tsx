import logo from '@/public/images/logo.svg';
import Image from 'next/image';

const Header = () => {

  return (
    <div className='header px-[96px] py-[18px] text-white flex justify-between w-full h-full'>
      <Image src={logo} alt="logo" />
      <div className='flex h-full self-center text-sm gap-20'>
        <p>Home</p>
        <p>About</p>
        <p>Blog</p>
        <p>Services</p>
      </div>
      <button className='animation-button border border-white/30 self-center h-fit text-white rounded-full'>
        <div className='button flex justify-center box'>
          Contact
        </div>
      </button>
    </div>
  )
}

export default Header