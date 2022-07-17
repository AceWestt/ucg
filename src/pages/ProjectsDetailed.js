import React from 'react';
import { useParams } from 'react-router-dom';
import { projects, categories } from '../files/projects';
import TextBlock from '../components/TextBlock';
import Gallery from '../components/Gallery';
import Btn from '../components/Btn';

const ProjectsDetailed = () => {
	const { id } = useParams();
	const project = projects[id];
	const type = categories.filter((f) => f.id === project.cat_id)[0]?.type || '';
	return (
		<div className="page projects-detailed">
			<section className="section go-back p-left">
				<Btn type="subtle" text="Вернуться к списку заводов" />
			</section>
			<section className="section content p-left">
				<div className="container">
					<div className="container-header">
						<h2 className="pre-wrap-text">{project.title}</h2>
						<p className="type-name">{type}</p>
					</div>
					<img className="hero-img" src={project.img} alt={project.title} />
					{Array.isArray(project.fields) &&
						project.fields.length > 0 &&
						project.fields.map((f, index) => {
							if (f.type === 'text-block') {
								return (
									<TextBlock key={`text-block-${index}`} title={f.title} text={f.text} />
								);
							}

							if (f.type === 'h2') {
								return <h2 key={`h2-${index}`}>{f.text}</h2>;
							}
							return '';
						})}
					{Array.isArray(project.gallery) && project.gallery.length > 0 && (
						<>
							<div className="section-title gallery-section-title">Галерея:</div>
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
