import React, { FunctionComponent } from 'react'

import './Projects.scss'

interface Props {
	projectImg: string
	projectName: string
	projectInfo: string
	projectSite?: string
	githubRepo?: string
}

const Projects: FunctionComponent<Props> = ({
	projectImg,
	projectName,
	projectInfo,
	projectSite,
	githubRepo,
}) => {
	let projectURL
	if (projectSite !== undefined) {
		projectURL = (
			<a href={projectSite} target='_blank' rel='noopener noreferrer'>
				<button>Live Site</button>
			</a>
		)
	}
	return (
		<div className='projectContainer'>
			<img src={projectImg} alt='' />
			<div className='projectContent'>
				<h3>{projectName}</h3>
				<p>{projectInfo}</p>
			</div>
			<div className='projectBtns'>
				{projectURL}
				<a href={githubRepo} target='_blank' rel='noopener noreferrer'>
					<button>Github</button>
				</a>
			</div>
		</div>
	)
}

export default Projects
