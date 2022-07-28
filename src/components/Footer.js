import React from 'react';
import logo from '../imgs/common/logo-white.svg';
// import facebookIcn from '@imgs/common/facebookicn.svg';
// import twitterIcn from '@imgs/common/twittericn.svg';
import footerBg from '@imgs/common/footerbg.svg';
// import { plants } from '../files/plants';
import { useAppContext } from '../appContext';
import { Link } from 'react-router-dom';
const Footer = () => {
	const { common, lang } = useAppContext();
	return (
		<footer className="section section-footer section-column p-left p-right">
			<img src={footerBg} alt="img" className="footer-bg-img" />
			<div className="footer-header">
				<Link className="logo" to="/">
					<img src={logo} alt="logo" />
				</Link>
				{Array.isArray(common.socials) && common.socials.length > 0 && (
					<div className="social-links">
						{common.socials.map((s, i) => {
							return (
								<a
									href={s.url}
									target="_blank"
									rel="noreferrer"
									key={`footer-social-${i}`}
								>
									<img src={s.icon} alt="fb" />
								</a>
							);
						})}
					</div>
				)}
			</div>
			{Array.isArray(common.menu?.items) && common.menu?.items.length > 0 && (
				<div className="links">
					{common.menu?.items.map((l, i) => {
						return (
							<div className="link-group" key={`footer-link-group-${i}`}>
								{l.data?.[`title_${lang}`] && l.data.url && (
									<Link className="text-menu" to={l.data.url}>
										{l.data[`title_${lang}`]}
									</Link>
								)}
								{Array.isArray(l.children) &&
									l.children.length > 0 &&
									l.children.map((ch, chi) => {
										return (
											<Link
												key={`footer-link-group-${i}-${chi}`}
												className="text-mini"
												to={ch.data?.url}
											>
												{ch.data?.[`title_${lang}`]}
											</Link>
										);
									})}
							</div>
						);
					})}
				</div>
			)}

			<div className="copy text-mini">
				© UnitedCementGroup. All Rights Reserved{' '}
			</div>
		</footer>
	);
};

export default Footer;
