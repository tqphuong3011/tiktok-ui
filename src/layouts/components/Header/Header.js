import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
     faCircleQuestion,
     faCoins,
     faEarthAsia,
     faEllipsisVertical,
     faGear,
     faKeyboard,
     faSignOut,
     faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Search from '../Search';
import config from '~/config';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
     {
          icon: <FontAwesomeIcon icon={faEarthAsia} />,
          title: 'English',
          children: {
               title: 'Language',
               data: [
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English',
                    },
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Vietnamese',
                    },
               ],
          },
     },
     {
          icon: <FontAwesomeIcon icon={faCircleQuestion} />,
          title: 'Feedback and help',
          to: '/feedback',
     },
     {
          icon: <FontAwesomeIcon icon={faKeyboard} />,
          title: 'Keyboard shortcuts',
     },
];

function Header() {
     const currentUser = true;

     // Handle logic
     const handleMenuChange = (menuItem) => {
          switch (menuItem.type) {
               case 'language':
                    console.log(menuItem);
                    break;
               default:
                    console.log('default');
          }
     };

     const MENU_USER = [
          {
               icon: <FontAwesomeIcon icon={faUser} />,
               title: 'View profile',
               to: '/@tranphuong',
          },
          {
               icon: <FontAwesomeIcon icon={faCoins} />,
               title: 'Get coins',
               to: '/coin',
          },
          {
               icon: <FontAwesomeIcon icon={faGear} />,
               title: 'Settings',
               to: '/settings',
          },
          ...MENU_ITEMS,
          {
               icon: <FontAwesomeIcon icon={faSignOut} />,
               title: 'Log out',
               to: '/logout',
               separate: true,
          },
     ];

     return (
          <header className={cx('wrapper')}>
               <div className={cx('inner')}>
                    <Link to={config.routes.profile} className={cx('logo-link')}>
                         <img src={images.logo} alt="Tiktok" />
                    </Link>
                    <Search />
                    <div className={cx('actions')}>
                         {currentUser ? (
                              <>
                                   <Tippy delay={[0, 50]} content="Upload" placement="bottom">
                                        <button className={cx('action-btn')}>
                                             <UploadIcon />
                                        </button>
                                   </Tippy>
                                   <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                        <button className={cx('action-btn')}>
                                             <MessageIcon />
                                        </button>
                                   </Tippy>
                                   <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                        <button className={cx('action-btn')}>
                                             <InboxIcon />
                                             <span className={cx('badge')}>12</span>
                                        </button>
                                   </Tippy>
                              </>
                         ) : (
                              <>
                                   <Button text>Upload</Button>
                                   <Button primary>Login</Button>
                              </>
                         )}
                         <Menu items={currentUser ? MENU_USER : MENU_ITEMS} onChange={handleMenuChange}>
                              {currentUser ? (
                                   <Image
                                        className={cx('user-avatar')}
                                        src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                                        alt="Avatar"
                                        fallback="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/9d7801f4c5f46d1df57f46a03dab40f8.jpeg?lk3s=a5d48078&nonce=54400&refresh_token=b4d7ed12f9e5e9d6cdbcb44027706a2d&x-expires=1725955200&x-signature=jKCXZEOegNUrlfbLsTYCAHKZMz4%3D&shp=a5d48078&shcp=b59d6b55"
                                   />
                              ) : (
                                   <button className={cx('more-btn')}>
                                        <FontAwesomeIcon icon={faEllipsisVertical} />
                                   </button>
                              )}
                         </Menu>
                    </div>
               </div>
          </header>
     );
}

export default Header;
