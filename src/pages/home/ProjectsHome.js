import React from 'react';
import Btn from '@components/Btn';
import { projects, categories } from '../../files/projects';
import btnIcon from '@imgs/common/btn-subtle-icon-white.svg';

const ProjectsHome = () => {
	const length = projects.length || 0;
	const rnd = Math.floor(Math.random() * length);
	const mainProject = projects[rnd];
	const others = projects
		.filter((f) => f.id !== mainProject.id)
		.sort(() => Math.random() - 0.5);
	if (others.length > 4) {
		others.length = 4;
	}

	console.log(mainProject, others);
	return (
		<section className="section projects section-column p-left p-right">
			<div className="section-title">Мы помогли построить:</div>
			<div className="projects-container">
				<div className="main">
					<div className="projects-container">
						<div className="project">
							<img className="bg" src={mainProject.img} alt="main project" />
							<div className="cover"></div>
							<div className="info">
								<p className="type">
									{categories.filter((f) => f.id === mainProject.cat_id)[0].type}
								</p>
								<div className="title pre-wrap-text">{mainProject.title}</div>
								<div className="btn-container">
									<Btn icon={btnIcon} type="subtle" text="Читать подробнее" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="others">
					<div className="projects-container">
						{others.map((p, i) => {
							return (
								<div className="item" key={`project-${i}`}>
									<div className="project">
										<img className="bg" src={p.img} alt="img" />
										<div className="cover"></div>
										<div className="info">
											<p className="type">
												{categories.filter((f) => f.id === p.cat_id)[0].type}
											</p>
											<div className="title pre-wrap-text">{p.title}</div>
											<div className="btn-container">
												<Btn icon={btnIcon} type="subtle" text="Читать подробнее" />
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectsHome;
