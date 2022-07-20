import React from 'react';
import heroImg from '@imgs/projects/hero.jpg';
import CommonHero from '../components/CommonHero';
import { projects, categories } from '../files/projects';
import { useState } from 'react';
import { useEffect } from 'react';
import Btn from '../components/Btn';
import btnIcon from '@imgs/common/btn-subtle-icon-white.svg';

const Projects = () => {
	const [activeCategory, setActiveCategory] = useState(0);
	const [projectsFiltered, setProjects] = useState([]);

	useEffect(() => {
		if (activeCategory > 0) {
			const filtered = projects.filter((f) => f.cat_id === activeCategory);
			setProjects(filtered);
		} else {
			setProjects(projects);
		}
	}, [activeCategory]);
	return (
		<div className="page projects">
			<CommonHero title="Мы помогли построить" img={heroImg} />
			<section className="section section-main section-column p-left p-right">
				<div className="section categories">
					{categories.map((c, i) => {
						return (
							<div
								style={{
									backgroundColor: activeCategory === c.id ? '' : c.coverColor,
								}}
								key={`project-cat-${i}`}
								className={`category ${activeCategory === c.id ? 'active' : ''}`}
								onClick={() => setActiveCategory(c.id)}
							>
								<img className="bg" src={c.cover} alt={c.title} />
								<div className="inner">
									{c.icon && <img className="icon" src={c.icon} alt={c.title} />}
									<span>{c.title}</span>
								</div>
							</div>
						);
					})}
				</div>
				<div className="section projects">
					{projectsFiltered.map((p, i) => {
						const typeString =
							categories.filter((f) => f.id === p.cat_id)[0]?.type || '';
						return (
							<div className="project" key={`project-${i}`}>
								<img className="bg" src={p.img} alt="img" />
								<div className="info">
									{typeString && <div className="type">{typeString}</div>}
									<h3 className="title">{p.title}</h3>
									<div className="btn-container">
										<Btn
											type="subtle"
											text="Читать подробнее"
											icon={btnIcon}
											link={{ href: `/projects/${i}` }}
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
