import classNames from 'classnames/bind';

import styles from './Default.module.scss';
import { Header } from '../../smallComponents';
const cx = classNames.bind(styles);

function Default({ children }) {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <Header />
      </header>
      <div className={cx('main')}>{children}</div>
    </div>
  );
}

export default Default;
