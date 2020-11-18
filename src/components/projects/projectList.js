import React from 'react';
import ProjectSummary from './projectsummary';
import { Link } from 'react-router-dom'

const ProjectList = ({projectsasprops}) => {
    
    return (
        <div className="project-list section">
            { projectsasprops && projectsasprops.map(project => {
                return (
                    <Link to = { '/project/' + project.id} key={project.id}>
                    <ProjectSummary project={project} />
                    </Link>
                )
            }) }
        </div>
    )
}

export default ProjectList