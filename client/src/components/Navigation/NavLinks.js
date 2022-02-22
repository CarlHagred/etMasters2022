import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/users">All users</NavLink>
      </li>
      <li>
        <NavLink to="/rounds">Rounds</NavLink>
      </li>
      <li>
        <NavLink to="/leaderboard">LeaderBoard</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
