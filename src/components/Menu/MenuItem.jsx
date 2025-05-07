import { Menu_li, Button } from "./Menu.styled";

export const MenuItem = ({ text, active ,onMenuItemClick }) => {
  
  return <Menu_li onClick={onMenuItemClick} className={active && "active"}>
                    <Button type="button">{text}</Button>
         </Menu_li>
}