import dayjs from 'dayjs';

import { navIcons, navLinks } from '../constants';
import useWindowStore from '../store/window';



const Navbar = () => {

    const { openWindow } = useWindowStore();

  return (
    <nav>
        <div>
            <img src="/images/logo.svg" alt="logo-image" />
            <p className="font-bold">Alina's Portfolio</p>

            <ul>
                {navLinks.map(({ id, name, type }) => (
                    <li key={id} onClick={() => openWindow(type)} className='hover:underline hover:underline-offset-4 cursor-pointer'>
                        <p>{name}</p>
                    </li>
                ))}
            </ul>
        </div>

        <div>
            <ul>
                {navIcons.map(({ id, img }) => (
                    <li key={id}>
                        <img src={img} alt={`icon-${id}`}/>
                    </li>
                ))}
            </ul>

            <time dateTime="">
               {dayjs().format("ddd MMM D h:mm A")} 
            </time>
        </div>
    </nav>
  )
}

export default Navbar;