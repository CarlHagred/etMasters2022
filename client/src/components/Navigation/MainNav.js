import Header from './Header';
import NavLinks from './NavLinks';
import './MainNav.css';

const MainNav = (props) => {
  return (
    <Header>
      <h1 className="main-nav__title">ET Masters</h1>
      <nav>
        <NavLinks />
      </nav>
    </Header>
  );
};

export default MainNav;
