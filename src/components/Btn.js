import React from 'react';
import defaultIcon from '../imgs/common/btn-primary-icon.svg';
import defaultIconSec from '../imgs/common/btn-secondary-icon.svg';
import disabledIcn from '@imgs/common/btn-disabled-icon.svg';

const Btn = ({
	customClass = '',
	type = 'primary',
	text = '',
	icon,
	disabled = false,
	action = () => {},
}) => {
	if (!icon) {
		icon = defaultIcon;
		if (type === 'secondary' || type === 'subtle') {
			icon = defaultIconSec;
		}
		if (disabled) {
			icon = disabledIcn;
			action = () => {};
		}
	}
	return (
		<div
			className={`btn ${type} ${customClass} ${disabled ? 'disabled' : ''}`}
			onClick={action}
		>
			{icon && <img src={icon} alt={text} />}
			{text && <span>{text}</span>}
		</div>
	);
};

export default Btn;
