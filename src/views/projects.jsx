import React from 'react';
import Cover from 'components/projects/Cover';
import ProjectBody from 'components/projects/ProjectBody';
import ProjectHead from 'components/projects/ProjectHead';

const ProjectsPage = () => {
    document.title = "K-DATA - Projects";

    return (
        <div className="mt-16">
            <Cover />

            <div className="bg-gray-200">
                <ProjectHead />
            </div>

            <div className="bg-grey-0 p-4">
                <ProjectBody />
            </div>
        </div>
    );
}

export default ProjectsPage;