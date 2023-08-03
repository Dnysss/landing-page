import { navigationData } from '../data';

const Nav = () => {
    return (
        <ul className='flex gap-x-8'>
            {navigationData.map((item, index) => {
                return (
                    <li key={index}>
                        <a href={item.href}>{item.name}</a>
                    </li>
                )
            })}
        </ul>
    )
}

export default Nav;
