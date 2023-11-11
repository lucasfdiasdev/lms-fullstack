import HeaderItem from './headerItem';
import { headerItemData } from '@/app/data/data';

interface HeaderRoutesProps {
  
};

const HeaderRoutes: React.FC<HeaderRoutesProps> = ({
  
}) => {
  const routes = headerItemData;
  
  return (
    <div
      className='hidden 800px:flex'
    >
      {
        routes.map((item) => (
          <HeaderItem
            key={item.href}
            label={item.label}
            href={item.href}
          />
        ))
      }

    </div>
  );
};

export default HeaderRoutes;