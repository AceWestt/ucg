import React, { useState } from 'react';
import plusBtn from '@imgs/about/plusbtn.svg';
import downloadBtn from '@imgs/common/filedownload.svg';
import samplePdf from '@files/sample.pdf';
import toggleColumnBtn from '@imgs/common/expandBlockButton.svg';
import cert1 from '@files/finotchcert/UCG_IFRS FS 2005-2007 Signed.pdf';
import cert2 from '@files/finotchcert/UCG_IFRS FS 2008 Signed.pdf';
import cert3 from '@files/finotchcert/UCG_IFRS FS 2010 Signed.pdf';
import cert4 from '@files/finotchcert/UCG_IFRS FS 2011 Signed.pdf';
import cert5 from '@files/finotchcert/UCG_IFRS FS 2012 Signed.pdf';
import cert6 from '@files/finotchcert/UCG_IFRS FS 2013 Signed.pdf';
import cert7 from '@files/finotchcert/UCG_IFRS FS 2014 Signed.pdf';
import cert8 from '@files/finotchcert/UCG_IFRS FS 2015 Signed.pdf';
import cert9 from '@files/finotchcert/UCG_IFRS FS 2016 Signed.pdf';
import cert10 from '@files/finotchcert/UCG_IFRS FS 2017 Signed.pdf';
import cert11 from '@files/finotchcert/UCG_IFRS FS 2018 Signed.pdf';
import cert12 from '@files/finotchcert/UCG_IFRS FS 2019 Signed.pdf';
import cert13 from '@files/finotchcert/UCG_IFRS FS 2020 Signed.pdf';
import cert2_1 from '@files/uch/Certificate of Change of Name_Incorporation_UCG.pdf';
import cert2_2 from '@files/uch/Certificate of Registered Office UCG.PDF';
import cert2_3 from '@files/uch/UCG-CERTIFICATE OF DIRECTORS.pdf';

const ForInvestors = ({ id = '' }) => {
	return (
		<section
			className="section for-investors section-column p-left p-right"
			id={id}
		>
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
				src: cert1,
			},
			{
				title: 'UCG_IFRS FS 2008 Singed',
				src: cert2,
			},
			{
				title: 'UCG_IFRS FS 2009 Singed',
				src: cert3,
			},

			{
				title: 'UCG_IFRS FS 2010 Singed',
				src: cert4,
			},
			{
				title: 'UCG_IFRS FS 2011 Singed',
				src: cert5,
			},
			{
				title: 'UCG_IFRS FS 2012 Singed',
				src: cert6,
			},
			{
				title: 'UCG_IFRS FS 2013 Singed',
				src: cert7,
			},
			{
				title: 'UCG_IFRS FS 2014 Singed',
				src: cert8,
			},
			{
				title: 'UCG_IFRS FS 2015 Singed',
				src: cert9,
			},

			{
				title: 'UCG_IFRS FS 2016 Singed',
				src: cert10,
			},
			{
				title: 'UCG_IFRS FS 2017 Singed',
				src: cert11,
			},
			{
				title: 'UCG_IFRS FS 2019 Singed',
				src: cert12,
			},
			{
				title: 'UCG_IFRS FS 2020 Singed',
				src: cert13,
			},
		],
	},
	{
		title: 'Учредительные документы',
		files: [
			{
				title: 'Certificate of Change of Name_Incorporation_UCG',
				src: cert2_1,
			},
			{
				title: 'Certificate of Registered Office UCG',
				src: cert2_2,
			},
			{
				title: 'UCG-CERTIFICATE OF DIRECTORS',
				src: cert2_3,
			},
		],
	},
];
