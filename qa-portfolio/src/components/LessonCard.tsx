import { Clock, Dot, Presentation } from "lucide-react";

export interface LessonProps {
  category: string;
  status: boolean;
  image: string;
  title: string;
  description: string;
  duration: string;
  noOfLessons: number;
  stack: string[];
  link: string;
}

const LessonCard = ({
  category,
  status,
  image,
  title,
  description,
  duration,
  noOfLessons,
  stack,
  link,
}: LessonProps) => {
  return (
    <article className="flex h-full flex-col gap-4 rounded-xl border border-border bg-bg-secondary p-4 shadow-md">
      <div className="flex justify-between items-center">
        <span className="text-sm text-text-blue-gray">{category}</span>
        <span className="rounded-full bg-bg-card px-3 py-1 text-xs text-text-secondary">
          {status ? "Completed" : "In progress"}
        </span>
      </div>
      <img
        src={image}
        alt=""
        className="h-40 w-full rounded-lg object-cover"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-text-secondary">{description}</p>
      </div>
      <div className="mt-auto flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <Clock aria-hidden="true" size={16} />
          <span>{duration}</span>
        </div>
        <Dot aria-hidden="true" />
        <div className="flex items-center gap-2">
          <Presentation aria-hidden="true" size={16} />
          <span>{noOfLessons} lessons</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {stack.map((stackItem, index) => (
          <span
            key={index}
            className="rounded bg-bg-card px-2 py-1 text-xs text-text-secondary"
          >
            {stackItem}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-primary hover:underline"
      >
        Explore lessons
      </a>
    </article>
  );
};

export default LessonCard;
