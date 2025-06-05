

export default function ProjectDemoButton({projectPreviewLink, projectStatus}: any) {
    
    const projectActivePreview = projectStatus === "Complete"

    return (
        <a href={projectPreviewLink}aria-disabled={!projectActivePreview} tabIndex={projectActivePreview ? 0 : -1}
            className={projectActivePreview? "hover:underline" : "cursor-not-allowed pointer-events-none"}
        >
            {projectActivePreview ? "Preview" : projectStatus}
        </a>
    )
}