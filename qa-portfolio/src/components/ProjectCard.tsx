interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  demo: string;
  github: string;
  image?: string;
}

const ProjectCard = ({
  title,
  description,
  tech,
  demo,
  github,
  image,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-2 p-4 w-72 bg-[#03172B] rounded-md shadow-md">
      <div>
        <img
          src={image}
          alt={title}
          className="w-64 h-40 image-center rounded-md"
        />
      </div>

      <p className="font-medium text-base">{title}</p>
      <p className="font-light text-sm">{description}</p>
      <div className="skills flex flex-wrap gap-2 mt-2">
        {tech.map((skill, i) => (
          <span
            key={i}
            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className=" text-sm"
        >
          View Case Study
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <img
            height="32"
            width="32"
            className="scale-50"
            src="https://cdn.simpleicons.org/github/FFFFFF"
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
