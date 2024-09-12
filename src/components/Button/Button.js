import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
     to,
     href,
     primary = false,
     outline = false,
     small = false,
     large = false,
     text = false,
     disabled = false,
     round = false,
     children,
     className,
     leftIcon,
     rightIcon,
     onClick,
     ...passProps
}) {
     let Comp = 'button';
     const props = { onClick, ...passProps };

     if (disabled) {
          Object.keys(props).forEach((key) => {
               if (key.startsWith('on') && typeof props[key] === 'function') {
                    delete props[key];
               }
          });
     }

     if (to) {
          Comp = Link;
          props.to = to;
     } else if (href) {
          Comp = 'a';
          props.href = href;
     }

     const classes = cx('wrapper', {
          [className]: className,
          primary,
          outline,
          small,
          large,
          text,
          round,
          disabled,
     });
     return (
          <Comp className={classes} {...props}>
               {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
               <span className={cx('title')}>{children}</span>
               {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
          </Comp>
     );
}

Button.prototype = {
     to: PropTypes.string,
     href: PropTypes.string,
     primary: PropTypes.bool,
     outline: PropTypes.bool,
     small: PropTypes.bool,
     large: PropTypes.bool,
     text: PropTypes.bool,
     disabled: PropTypes.bool,
     round: PropTypes.bool,
     children: PropTypes.node.isRequired,
     className: PropTypes.string,
     leftIcon: PropTypes.node,
     rightIcon: PropTypes.node,
     onClick: PropTypes.func,
};

export default Button;
