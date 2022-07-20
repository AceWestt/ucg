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
	submitButton = false,
	action = () => {},
	link = {},
}) => {
	if (!icon) {
		icon = defaultIcon;
		if (type === 'secondary' || type === 'subtle') {
			icon = defaultIconSec;
		}
	}
	if (disabled) {
		icon = disabledIcn;
		action = () => {};
	}
	if (link && link.href && link.href.length > 0) {
		return (
			<a
				href={link.href}
				className={`btn ${type} ${customClass} ${disabled ? 'disabled' : ''}`}
			>
				{icon && <img src={icon} alt={text} />}
				{text && <span>{text}</span>}
			</a>
		);
	}
	if (submitButton && !disabled) {
		return (
			<button
				className={`btn ${type} ${customClass} ${disabled ? 'disabled' : ''}`}
				type="submit"
			>
				{icon && <img src={icon} alt={text} />}
				{text && <span>{text}</span>}
			</button>
		);
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
