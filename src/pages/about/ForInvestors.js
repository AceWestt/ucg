import React, { useState } from 'react';
import plusBtn from '@imgs/about/plusbtn.svg';
import downloadBtn from '@imgs/common/filedownload.svg';
import samplePdf from '@files/sample.pdf';
import toggleColumnBtn from '@imgs/common/expandBlockButton.svg';

const ForInvestors = () => {
	return (
		<section className="section for-investors section-column p-left p-right">
			<div className="section-title">Инвесторам:</div>
			<div className="columns">
				{columns.map((c, index) => {
					return <Column key={`column-${index}`} title={c.title} files={c.files} />;
				})}
			</div>
		</section>
	);
};

const Column = ({ title = '', files = [] }) => {
	const [expanded, setExpanded] = useState(false);
	return (
		<div className={`column ${expanded ? 'expanded' : ''}`}>
			<div className="column-head">
				<div className="column-head-title">{title}</div>
				<div className="column-head-open-btn" onClick={() => setExpanded(true)}>
					<img src={plusBtn} alt="expand" />
				</div>
			</div>
			<div className="column-body">
				<div className="files">
					{files.map((f, i) => {
						return (
							<div className="file" key={`file-${i}`}>
								<span>{f.title}</span>
								<a href={f.src} key={i} download>
									<img src={downloadBtn} alt="download" />
								</a>
							</div>
						);
					})}
				</div>
			</div>
			<div className="toggle-btn" onClick={() => setExpanded(!expanded)}>
				<img src={toggleColumnBtn} alt="toggle" />
			</div>
		</div>
	);
};

export default ForInvestors;

const columns = [
	{
		title: 'Финансовая отчетность',
		files: [
			{
				title: 'UCG_IFRS FS 2005-2007 Singed',
				src: samplePdf,
			},
			{
				title: 'UCG_IFRS FS 2005-2007 Singed',
				src: samplePdf,
			},
			{
				title: 'UCG_IFRS FS 2005-2007 Singed',
				src: samplePdf,
			},
			{
				title: 'UCG_IFRS FS 2005-2007 Singed',
				src: samplePdf,
			},
		],
	},
	{
		title: 'Учредительные документы',
		files: [
			{
				title: 'UCG_IFRS FS 2005-2007 Singed',
				src: samplePdf,
			},
			{
				title: 'UCG_IFRS FS 2005-2007 Singed',
				src: samplePdf,
			},
			{
				title: 'UCG_IFRS FS 2005-2007 Singed',
				src: samplePdf,
			},
			{
				title: 'UCG_IFRS FS 2005-2007 Singed',
				src: samplePdf,
			},
		],
	},
];
