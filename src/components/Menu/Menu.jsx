import { Menu_ul } from './Menu.styled';
import { MenuItem } from './MenuItem';

const Menu = ({categories, activeIdx, onClick}) => {

  return  <Menu_ul>
              {categories.map((item, idx) =>  <MenuItem key={idx} 
                                                        active={categories[activeIdx]===item} 
                                                        text={item} 
                                                        onMenuItemClick={onClick} />)
              }
          </Menu_ul>
  }

export default Menu;