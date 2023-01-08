import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import { Sidebar, Complementary, Story } from '../../components/smallComponents/HomeComponents';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('Wrapper')}>
      <aside className={cx('sidebar')}>
        <Sidebar />
      </aside>
      <div className={cx('content')}>
        <div className={cx('story-wrapper')}>
          <Story />
        </div>
      </div>
      <aside className={cx('complementary')}>
        <Complementary />
      </aside>
    </div>
  );
}

export default Home;
