import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './HeaderSearch.module.scss';
import { default as SearchItem } from '../HeaderSearchItem';
import instance from '../../../../callApi';

const cx = classNames.bind(styles);

function HeaderSearch() {
  const [inputValue, setInputValue] = useState('');
  const [usersData, setUsersData] = useState([]);
  const inputRef = useRef();

  const handleType = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleGetDataLocalStorage = () => {
    const arr = JSON.parse(localStorage.getItem('userSearched'));
    if (arr) {
      return arr;
    } else {
      return [];
    }
  };

  useEffect(() => {
    instance.get('/users').then((res) => setUsersData(res.data));
  }, [inputValue]);

  return (
    <Fragment>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
      <HeadlessTippy
        trigger="click"
        interactive
        placement="bottom"
        render={(attrs) => (
          <div className={cx('search-wrapper')}>
            <div className={cx('header')}>
              <span className={cx('desc', 'header-item')}>Tìm kiếm gần đây</span>
              <Link className={cx('edit', 'header-item')} to="/searchediting">
                Chỉnh sửa
              </Link>
            </div>
            <ul className={cx('search-item-list')}>
              {inputValue
                ? usersData
                    .filter((user) => user.name.includes(inputValue))
                    .map((userSearch, index) => <SearchItem key={index} user={userSearch} />)
                : handleGetDataLocalStorage().map((user, index) => <SearchItem key={index} user={user} />)}
            </ul>
          </div>
        )}
      >
        <input
          ref={inputRef}
          className={cx('search-input')}
          placeholder="Tìm kiếm trên Facebook"
          value={inputValue}
          onChange={(e) => {
            handleType(e);
          }}
        />
      </HeadlessTippy>
    </Fragment>
  );
}

export default HeaderSearch;
