import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { default as Action } from '../HeaderElements/HeaderAction';
import { default as Search } from '../HeaderElements/HeaderSearch';
import styles from './Header.module.scss';
import images from '../../../assets/images';
import { AncIcon, GroupIcon, HomeIcon, WatchIcon, UserIcon, MessageIcon } from '../../../assets/Icons';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      {/* Brand */}
      <div className={cx('brand')}>
        <Link className={cx('logo-wrapper')} to="/">
          <img className={cx('logo')} src={images.logo} alt="Facebook Market" />
        </Link>
        <div className={cx('search')}>
          <Search />
        </div>
      </div>

      {/* Header Menu */}

      <nav className={cx('tab')}>
        <ul className={cx('tab-list')}>
          <Tippy content="Home" interactive className={cx('custom-tippy')}>
            <li className={cx('tab-item-wrapper')}>
              <div className={cx('icon-wrapper')}>
                <Link className={cx('tab-item-icon')} to={'/'}>
                  <HomeIcon width={'28px'} height={'28px'} />
                </Link>
              </div>
              <div className={cx('tab-item-active', 'is-active')}></div>
            </li>
          </Tippy>
          <Tippy content="Watch" interactive className={cx('custom-tippy')}>
            <li className={cx('tab-item-wrapper')}>
              <div className={cx('icon-wrapper')}>
                <Link className={cx('tab-item-icon')} to={'/watch'}>
                  <WatchIcon width={'28px'} height={'28px'} />
                </Link>
              </div>
              <div className={cx('tab-item-active')}></div>
            </li>
          </Tippy>
          <Tippy content="Friend" className={cx('custom-tippy')}>
            <li className={cx('tab-item-wrapper')}>
              <div className={cx('icon-wrapper')}>
                <Link className={cx('tab-item-icon')} to={'/friends'}>
                  <UserIcon width={'28px'} height={'28px'} />
                </Link>
              </div>
              <div className={cx('tab-item-active')}></div>
            </li>
          </Tippy>
          <Tippy content="Annoucements" className={cx('custom-tippy')} interactive>
            <li className={cx('tab-item-wrapper')}>
              <div className={cx('icon-wrapper')}>
                <Link className={cx('tab-item-icon')} to={'/annoucement'}>
                  <AncIcon width={'28px'} height={'28px'} />
                </Link>
              </div>
              <div className={cx('tab-item-active')}></div>
            </li>
          </Tippy>
          <Tippy content="Group" interactive className={cx('custom-tippy')}>
            <li className={cx('tab-item-wrapper')}>
              <div className={cx('icon-wrapper')}>
                <Link className={cx('tab-item-icon')} to={'/groups'}>
                  <GroupIcon width={'28px'} height={'28px'} />
                </Link>
              </div>
              <div className={cx('tab-item-active')}></div>
            </li>
          </Tippy>
        </ul>
      </nav>

      {/* Action */}

      <Action />
    </header>
  );
}

export default Header;
