import React from 'react';
import CommonHero from '../components/CommonHero';
import { useState } from 'react';
import { useEffect } from 'react';
import Btn from '../components/Btn';
import btnIcon from '@imgs/common/btn-subtle-icon-white.svg';
import { callGet, useAppContext } from '../appContext';
import allCover from '@imgs/projects/allCover.jpg';
import { getLangString } from '../utils/tools';

const Projects = () => {
	const [backendData, setBackendData] = useState({});
	const { lang } = useAppContext();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const maindata = await callGet('api/project');
				if (maindata.status === 200) {
					console.log(backendData);
					setBackendData(maindata.data);
				}
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	const [activeCategory, setActiveCategory] = useState(0);
	const [projectsFiltered, setProjects] = useState(backendData.projects || []);

	useEffect(() => {
		if (activeCategory !== 0) {
			const filtered =
				backendData.projects?.filter((f) => f.kind === activeCategory) || [];
			setProjects(filtered);
		} else {
			setProjects(backendData.projects || []);
		}
	}, [backendData, activeCategory]);
	return (
		<div className="page projects">
			<CommonHero
				title={backendData[`block_name_${lang}`]}
				img={backendData.block_cover}
			/>
			<section className="section section-main section-column p-left p-right">
				<div className="section categories">
					<div
						style={{
							backgroundColor: activeCategory === 0 ? '' : '#878786',
						}}
						className={`category ${activeCategory === 0 ? 'active' : ''}`}
						onClick={() => setActiveCategory(0)}
					>
						<img
							className="bg"
							src={allCover}
							alt={getLangString(
								lang,
								'Все проекты',
								'All Projects',
								'Barcha proyektlar'
							)}
						/>
						<div className="inner">
							{backendData.goverment_icon && (
								<img
									className="icon"
									src={backendData.goverment_icon}
									alt={backendData[`goverment_name_${lang}`]}
								/>
							)}
							<span>
								{getLangString(
									lang,
									'Все проекты',
									'All Projects',
									'Barcha proyektlar'
								)}
							</span>
						</div>
					</div>
					<div
						style={{
							backgroundColor: activeCategory === 'goverment' ? '' : '#2B2B2A',
						}}
						className={`category ${activeCategory === 'goverment' ? 'active' : ''}`}
						onClick={() => setActiveCategory('goverment')}
					>
						<img
							className="bg"
							src={backendData.goverment_cover}
							alt={backendData[`goverment_name_${lang}`]}
						/>
						<div className="inner">
							{backendData.goverment_icon && (
								<img
									className="icon"
									src={backendData.goverment_icon}
									alt={backendData[`goverment_name_${lang}`]}
								/>
							)}
							<span>{backendData[`goverment_name_${lang}`]}</span>
						</div>
					</div>
					<div
						style={{
							backgroundColor: activeCategory === 'social' ? '' : '#5C5C59',
						}}
						className={`category ${activeCategory === 'social' ? 'active' : ''}`}
						onClick={() => setActiveCategory('social')}
					>
						<img
							className="bg"
							src={backendData.social_cover}
							alt={backendData[`social_name_${lang}`]}
						/>
						<div className="inner">
							{backendData.goverment_icon && (
								<img
									className="icon"
									src={backendData.social_icon}
									alt={backendData[`social_name_${lang}`]}
								/>
							)}
							<span>{backendData[`social_name_${lang}`]}</span>
						</div>
					</div>
				</div>
				<div className="section projects">
					{projectsFiltered.map((p, i) => {
						let typeString = '';
						typeString =
							p.kind === 'social'
								? backendData[`social_name_${lang}`]
								: backendData[`goverment_name_${lang}`];
						return (
							<div className="project" key={`project-${i}`}>
								<img className="bg" src={p.cover} alt="img" />
								<div className="info">
									{typeString && <div className="type">{typeString}</div>}
									<h3 className="title">{p[`title_${lang}`]}</h3>
									<div className="btn-container">
										<Btn
											type="subtle"
											text={getLangString(
												lang,
												'Читать подробнее',
												'Read more',
												"Batafsil ma'lumot"
											)}
											icon={btnIcon}
											link={{ href: `/projects/${p.id}`, router: true }}
										/>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</div>
	);
};

export default Projects;
