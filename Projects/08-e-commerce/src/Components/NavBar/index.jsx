import { NavLink } from "react-router-dom"

const NavBar = () => {
  const leftMenu = [
    {
      to: '/',
      text: 'Shopi',
      className: 'font-semibold text-lg'
    },
    {
      to: '/',
      text: 'All',
      className: ''
    },
    {
      to: '/clothes',
      text: 'Clothes',
      className: ''
    },
    {
      to: '/electronics',
      text: 'Electronics',
      className: ''
    },
    {
      to: '/furnitures',
      text: 'Furnitures',
      className: ''
    },
    {
      to: '/toys',
      text: 'Toys',
      className: ''
    },
    {
      to: '/others',
      text: 'Others',
      className: ''
    }
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
      flex flex-row w-full justify-between items-center fixed z-10 py-5 px-8 text-sm font-light
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
                {link.text}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export { NavBar }