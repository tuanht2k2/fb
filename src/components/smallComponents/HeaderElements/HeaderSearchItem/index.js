import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './HeaderSearchItem.module.scss';
const cx = classNames.bind(styles);

function HeaderSearchItem({ user }) {
  const handleDelete = (e, user) => {
    if (e.target.id == 'history-delete') {
      e.target.parentElement.remove();
      const users = JSON.parse(localStorage.getItem('userSearched'));
      const newUsers = users.filter((userLS) => userLS.id !== user.id);
      const jsonData = JSON.stringify(newUsers);
      localStorage.setItem('userSearched', jsonData);
      e.preventDefault();
    }
  };

  // store data to Local Storage
  const handleSearch = (userSearch, e) => {
    const Data = JSON.parse(localStorage.getItem('userSearched'));
    if (e.target.id !== 'history-delete') {
      if (Data) {
        const isExist = Data.find((user) => {
          return user.id === userSearch.id;
        });
        if (!isExist) {
          Data.push(userSearch);
          const jsonData = JSON.stringify(Data);
          localStorage.setItem('userSearched', jsonData);
        }
      } else {
        console.log('chua co data');
        const jsonData = JSON.stringify([userSearch]);
        localStorage.setItem('userSearched', jsonData);
      }
    }
  };

  return (
    <li className={cx('search-item')}>
      <Link
        className={cx('search-item-link')}
        to={`/users/${user.id}`}
        onClick={(e) => {
          handleSearch(user, e);
        }}
      >
        <img className={cx('search-item-img')} src={user.avt} />
        <div className={cx('search-item-info')}>
          <span className={cx('info-name')}>{user.name}</span>
          <span className={cx('info-relationship')}>Bạn bè</span>
        </div>
        <div
          className={cx('delete')}
          id="history-delete"
          onClick={(e) => {
            handleDelete(e, user);
          }}
        >
          <FontAwesomeIcon icon={faXmark} className={cx('x-mark')} />
        </div>
      </Link>
    </li>
  );
}

export default HeaderSearchItem;
