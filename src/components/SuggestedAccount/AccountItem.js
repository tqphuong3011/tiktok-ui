// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
     const renderPreview = (props) => (
          <div className={cx('preview')} tabIndex="-1" {...props}>
               <PopperWrapper>
                    <AccountPreview />
               </PopperWrapper>
          </div>
     );
     return (
          <div>
               <Tippy interactive delay={[500, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                    <div className={cx('account-item')}>
                         <img
                              className={cx('avatar')}
                              src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/421414077026ad39e0d93437dfb2b3f7~c5_100x100.jpeg?lk3s=a5d48078&nonce=58990&refresh_token=10eb2647e8d0db664d6a9d20c286989a&x-expires=1726264800&x-signature=T%2B1JETV%2FJ9m17STP7l2Qu%2Bm%2Fmqk%3D&shp=a5d48078&shcp=81f88b70"
                              alt=""
                         />
                         <div className={cx('item-info')}>
                              <p className={cx('nickname')}>
                                   <strong>quocnguyenphu</strong>
                                   <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                              </p>
                              <p className={cx('name')}>Quốc Nguyễn Phú</p>
                         </div>
                    </div>
               </Tippy>
          </div>
     );
}

AccountItem.propTypes = {};

export default AccountItem;
