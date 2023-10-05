import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { Global } from "../Utils/Contexts/Global"

const NavBar = () => {
  const { cartProducts, setSearchByCategory } = useContext(Global)

  const handleCategoryClick = category => setSearchByCategory(category)

  const leftMenu = [
    {
      to: '/',
      text: 'Shopi',
      onClick: () => handleCategoryClick(null),
      className: 'font-semibold text-lg',
    },
    {
      to: '/',
      text: 'All',
      onClick: () => handleCategoryClick(null),
      className: '',
    },
    {
      to: '/man-clothing',
      text: `Man's Clothing`,
      onClick: () => handleCategoryClick(`men's clothing`),
      className: '',
    },
    {
      to: '/woman-clothing',
      text: `Woman's Clothing`,
      onClick: () => handleCategoryClick(`women's clothing`),
      className: '',
    },
    {
      to: '/electronics',
      text: 'Electronics',
      onClick: () => handleCategoryClick(`electronics`),
      className: '',
    },
    {
      to: '/jewelry',
      text: 'Jewelry',
      onClick: () => handleCategoryClick(`jewelery`),
      className: '',
    },
  ]

  const rightMenu = [
    {
      to: '/',
      text: 'example@example.com',
      className: 'text-black/60'
    },
    {
      to: '/my-orders',
      text: 'My Orders',
      className: ''
    },
    {
      to: '/my-account',
      text: 'My Account',
      className: ''
    },
    {
      to: '/sing-in',
      text: 'Sing In',
      className: ''
    },
    {
      to: '/',
      text: '🛒',
      className: ''
    }
  ]

  const selectedOption = 'underline underline-offset-4'

  return (
    <nav className="
      flex flex-row w-full bg-zinc-950 justify-between items-center top-0 fixed z-10 py-5 px-8 text-sm font-light
    ">
      <ul className="
        flex flex-row items-center gap-3
      ">
        {
          leftMenu.map((link, index) => (
            <li 
              key={link.text}
              className={link.className}
            >
              <NavLink 
                to={link.to}
                onClick={link.onClick}
                className={({isActive}) => isActive && index !== 0 ? selectedOption : undefined}
              >
                { link.text }
              </NavLink>
            </li>
          ))
        }
      </ul>
      
      <ul className="
        flex flex-row items-center gap-3
      ">
        {
          rightMenu.map( (link, index) => (
            <li 
              key={link.text}
              className={link.className}
            >
              <NavLink 
                to={link.to}
                className={({isActive}) => isActive && index !== 0 ? selectedOption : undefined}
              >
                {link.text === '🛒' ? `${link.text} ${cartProducts.length}` : `${link.text}`}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export { NavBar }