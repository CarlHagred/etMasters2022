import { NavLink } from 'react-router-dom';
import './NavLinks.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const NavLinks = () => {
  const ColorButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#3A504B',
    borderColor: '#f7f7f7',
    fontFamily: ['Roboto'].join(','),
  });
  return (
    <ul className="nav-links">
      <li>
        <ColorButton variant="contained">
          <NavLink to="/adminlogin">Admin Login</NavLink>
        </ColorButton>
      </li>
      <li>
        <ColorButton variant="contained">
          <NavLink to="/playerLogin">Player Login</NavLink>
        </ColorButton>
      </li>
      <li>
        <ColorButton variant="contained">
          <NavLink to="/users">All users</NavLink>
        </ColorButton>
      </li>
      <li>
        <ColorButton variant="contained">
          <NavLink to="/rounds">Rounds</NavLink>
        </ColorButton>
      </li>
      <li>
        <ColorButton variant="contained">
          <NavLink to="/leaderboard">LeaderBoard</NavLink>
        </ColorButton>
      </li>
    </ul>
  );
};

export default NavLinks;
