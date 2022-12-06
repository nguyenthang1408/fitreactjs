import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    title,
    small = false,
    large = false,
    primary = false,
    disabled = false,
    outline = false,
    onClick,
    rounded,
    className,
    leftIcon,
    rightIcon,
}) {
    let Comp = 'button';

    const props = {
        onClick,
    };

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        disabled,
        rounded,
        [className]: className,
    });

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{title}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
