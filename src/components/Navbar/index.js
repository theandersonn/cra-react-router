import { Link } from 'react-router-dom';
import './styles.scss';

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/users'}>Usuários</Link></li>
        <li><Link to={'/contact'}>Contato</Link></li>
      </ul>
    </nav>
  )
}