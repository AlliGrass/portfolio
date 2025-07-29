
interface ProjectDemoButtonProps {
    projectPreviewLink: string,
    projectStatus: string
}

export default function ProjectDemoButton({projectPreviewLink, projectStatus}: ProjectDemoButtonProps) {
    
    const projectActivePreview = projectStatus === "Complete"

    return (
        <a href={projectPreviewLink} aria-disabled={!projectActivePreview} tabIndex={projectActivePreview ? 0 : -1}
            className="border rounded p-1 border-defined-light bg-button-light hover:bg-hover-light dark:border-defined-dark dark:bg-button-dark hover:dark:bg-hover-dark">
            {projectActivePreview ? "Preview" : projectStatus}
        </a>
    )
}