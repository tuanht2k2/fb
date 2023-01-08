import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef } from 'react';

import Styles from './Sidebar.module.scss';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const dataTab = [
  {
    img: 'https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-1/272336083_3026925627574896_1792533910318518264_n.jpg?stp=dst-jpg_s480x480&_nc_cat=103&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=BTFQLHB0WP0AX_TOsEy&_nc_ht=scontent.fhan14-3.fna&oh=00_AfAJo54URIiWRwG9sdp7qSiR_skhGD4lPTMPlq-dSgPuYA&oe=6391005A',
    title: 'Đinh Công Tuấn',
    to: '/user/dinhcongtuan',
  },
  {
    img: 'https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/P3LEV6Y0FCf.png',
    title: 'Bạn bè',
    to: '/friends',
  },
  {
    img: 'https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/ob1CgXwDORG.png',
    title: 'Watch',
    to: '/watch',
  },
  {
    img: 'https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/P3LEV6Y0FCf.png',
    title: 'Nhóm',
    to: '/group',
  },
  {
    img: 'https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/0cF-NVaaM2z.png',
    title: 'Sự kiện',
    to: '/event',
  },
  {
    img: 'https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/3YkGLxHO24x.png',
    title: 'Gần đây nhất',
    to: '/recent',
  },
  {
    img: 'https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/hZ_wPvPD4VY.png',
    title: 'Chiến dịch gây quỹ',
    to: '/fundraisingcampaign',
  },
  {
    img: 'https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/Rwoc8jeB73K.png',
    title: 'Chơi game',
    to: '/playinggame',
  },
  {
    img: 'https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/qirqv2EkNyF.png',
    title: 'Đã lưu',
    to: '/saved',
  },
  {
    img: 'https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/hwvo7RvTzNz.png',
    title: 'Facebook Pay',
    to: '/facebookpay',
  },
  {
    img: 'https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/CpdWrf1nzR2.png',
    title: 'Hiến máu',
    to: '/blooddonations',
  },
  {
    img: 'https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/Jr0q8qKF2-Y.png',
    title: 'Trung tâm khoa học khí hậu',
    to: '/climatescienceinfo',
  },
  {
    img: 'https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/fNPcDZC-2PD.png',
    title: 'Ứng phó khẩn cấp',
    to: '/crisisresponse',
  },
  {
    img: 'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/vxMUnHhu6Do.png',
    title: 'Sức khỏe cảm xúc',
    to: '/emotional_health',
  },
  {
    img: 'https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/1Xvrz50fHMF.png',
    title: 'Messenger Nhí',
    to: '/messenger_kids',
  },
  {
    img: 'https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/Yd7d7vTJ0VE.png',
    title: 'Vật phẩm kĩ thuật số',
    to: '/digital_wallets',
  },
  {
    img: '',
    title: 'Xem thêm',
    to: '',
    isBtn: true,
  },
];

const cx = classNames.bind(Styles);

function Sidebar() {
  const [elementsRender, setElementsRender] = useState(8);
  const [isLoadMore, setIsLoadMore] = useState(false);

  const loadMoreIconRef = useRef();
  const loadMoreTitleRef = useRef();

  const handleLoadMore = () => {
    if (!isLoadMore) {
      setIsLoadMore(true);
      setElementsRender(dataTab.length - 1);
      loadMoreIconRef.current.style.transform = 'rotate(180deg)';
      loadMoreTitleRef.current.innerText = 'Ẩn bớt';
    } else {
      setIsLoadMore(false);
      setElementsRender(8);
      loadMoreIconRef.current.style.transform = 'rotate(0)';
      loadMoreTitleRef.current.innerText = 'Xem thêm';
    }
  };

  return (
    <div className={cx('wrapper')}>
      <ul className={cx('list-wrapper')}>
        {dataTab.map((data, index) =>
          index < elementsRender || index == dataTab.length - 1 ? (
            <li className={cx('list-item')} key={index}>
              {!data.isBtn ? (
                <Link className={cx('item-link')} to={data.to}>
                  <img className={cx('item-img')} src={data.img} />
                  <span className={cx('item-title')}>{data.title}</span>
                </Link>
              ) : (
                <div className={cx('item-link', 'btn-load-more')} onClick={handleLoadMore}>
                  <span className={cx('item-wrapper')} ref={loadMoreIconRef}>
                    <FontAwesomeIcon icon={faCaretDown} className={cx('item-icon')} />
                  </span>
                  <span className={cx('item-title')} ref={loadMoreTitleRef}>
                    {data.title}
                  </span>
                </div>
              )}
            </li>
          ) : null,
        )}
      </ul>
    </div>
  );
}

export default Sidebar;
