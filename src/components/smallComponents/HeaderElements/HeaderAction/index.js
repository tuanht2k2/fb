import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';

import style from './HeaderAction.module.scss';
import { AncIcon, MessageIcon } from '../../../../assets/Icons';
import images from '../../../../assets/images';
import ActionMenu from '../ActionMenu';

const cx = classNames.bind(style);

function HeaderAction() {
  return (
    <div className={cx('action-wrapper')}>
      <ul className={cx('action-list')}>
        {/* Menu */}
        <HeadlessTippy interactive trigger="click" placement="bottom" render={(attrs) => <ActionMenu />}>
          <li className={cx('action-item')}>
            <FontAwesomeIcon width={'21px'} height={'21px'} icon={faList} className={cx('action-item-icon')} />
          </li>
        </HeadlessTippy>

        <li className={cx('action-item')}>
          <MessageIcon width={'21px'} height={'21px'} className={cx('action-item-icon')} />
        </li>
        <li className={cx('action-item')}>
          <AncIcon width={'21px'} height={'21px'} className={cx('action-item-icon')} />
        </li>
        <li className={cx('action-item')}>
          <Link className={cx('avatar-wrapper')} to={'/account'}>
            <img src={images.default_avt} alt="avatar" className={cx('avatar')} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HeaderAction;
