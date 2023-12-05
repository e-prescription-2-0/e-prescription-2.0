import style from './DashboardNavigation.module.css'
import { dashBoardNavData } from '../../../constants/dashBoardNavData';


import DashboardNavigationItem from "./DashboardNavigationItem";

const DashboardNavigation = () => {

    const role = 'doctor' // coming and depend of redux/context state 
 

  return (
    <aside className={style['aside-navigation-container']}>
      <nav>
        <ul className={style['aside-nav-list']}>
            {dashBoardNavData[role].map((x,index) => <DashboardNavigationItem key={index}{...x}/>)}
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardNavigation;
