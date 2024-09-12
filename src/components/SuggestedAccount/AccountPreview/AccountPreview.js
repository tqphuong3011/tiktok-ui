import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
     return (
          <div className={cx('wrapper')}>
               <div className={cx('header')}>
                    <img
                         className={cx('avatar')}
                         src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/421414077026ad39e0d93437dfb2b3f7~c5_100x100.jpeg?lk3s=a5d48078&nonce=58990&refresh_token=10eb2647e8d0db664d6a9d20c286989a&x-expires=1726264800&x-signature=T%2B1JETV%2FJ9m17STP7l2Qu%2Bm%2Fmqk%3D&shp=a5d48078&shcp=81f88b70"
                         alt=""
                    />
                    <Button primary className={cx('follow-btn')}>
                         Follow
                    </Button>
               </div>
               <div className={cx('body')}>
                    <p className={cx('nickname')}>
                         <strong>quocnguyenphu</strong>
                         <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>Quốc Nguyễn Phú</p>
                    <p className={cx('analytics')}>
                         <strong className={cx('value')}>8.2M </strong>
                         <span className={cx('label')}>Followers</span>
                         <strong className={cx('value')}>1.2M </strong>
                         <span className={cx('label')}>Likes</span>
                    </p>
               </div>
          </div>
     );
}

export default AccountPreview;
