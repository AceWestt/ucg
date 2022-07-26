import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { projects, categories } from '../files/projects';
import TextBlock from '../components/TextBlock';
import Gallery from '../components/Gallery';
import Btn from '../components/Btn';
import { callGet, useAppContext } from '../appContext';
import { getLangString } from '../utils/tools';

const ProjectsDetailed = () => {
	const { lang } = useAppContext();
	const [projects, setProjects] = useState([]);
	const [gov, setGov] = useState('');
	const [soc, setSoc] = useState('');
	useEffect(() => {
		const fetchData = async () => {
			try {
				const maindata = await callGet('api/project');
				if (maindata.status === 200) {
					console.log(maindata.data);
					setProjects(maindata.data.projects);
					setGov(maindata.data[`goverment_name_${lang}`]);
					setSoc(maindata.data[`social_name_${lang}`]);
				}
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, [lang]);
	const { id } = useParams();
	const project = projects?.filter((f) => +f.id === +id)[0] || undefined;
	const type =
		project?.kind === 'goverment' ? gov : project?.kind === 'social' ? soc : '';
	console.log(project);

	if (!project) {
		return '';
	}
	return (
		<div className="page projects-detailed">
			<section className="section go-back p-left">
				<Btn
					type="subtle"
					text={
						lang === 'ru'
							? 'Вернуться к проектам'
							: lang === 'en'
							? 'Back to Projects'
							: 'Proyektlarga qaytish'
					}
					link={{ href: '/projects', router: true }}
				/>
			</section>
			<section className="section content p-left">
				<div className="container">
					<div className="container-header">
						<h2 className="pre-wrap-text">{project[`title_${lang}`]}</h2>
						<p className="type-name">{type}</p>
					</div>
					<img
						className="hero-img"
						src={project.cover}
						alt={project[`title_${lang}`]}
					/>
					{Array.isArray(project[`description_${lang}`]) &&
						project[`description_${lang}`].length > 0 &&
						project[`description_${lang}`].map((f, index) => {
							return (
								<TextBlock
									key={`text-block-${index}`}
									title={f.heading}
									text={f.text}
								/>
							);
						})}
					{Array.isArray(project.gallery) && project.gallery.length > 0 && (
						<>
							<div className="section-title gallery-section-title">
								{getLangString(lang, 'Галерея:', 'Gallery:', 'Galereya')}
							</div>
							<div className="gallery-wrapper">
								<Gallery slides={project.gallery} />
							</div>
						</>
					)}
				</div>
			</section>
		</div>
	);
};

export default ProjectsDetailed;
