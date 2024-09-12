import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import * as userService from '~/services/userService';
const cx = classNames.bind(styles);

function SuggestedAccount({ label }) {
     const users = userService.getUsers().then((res) => console.log(res));
     console.log(users);
     users.map((result) => console.log(result));
     return (
          <div className={cx('wrapper')}>
               <p className={cx('label')}>{label}</p>
               <AccountItem />
               <AccountItem />
               <AccountItem />
               <p className={cx('more-btn')}>See all</p>
          </div>
     );
}

SuggestedAccount.propTypes = {
     label: PropTypes.string.isRequired,
};
export default SuggestedAccount;
