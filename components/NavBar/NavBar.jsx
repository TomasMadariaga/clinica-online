import './NavBar.css'

export const NavBar = () => {
  return (
    <nav>
      <a href='#' className='logo'>Logo</a>
      <ul>
        <li><a href='#'>Perfil</a></li>
        <li><a href='#'>Blog</a></li>
        <li><a href='#'>Iniciar sesion</a></li>
      </ul>
    </nav>
  );
};
