import Link from "next/link";

export const LessonNavigation = ({
  nextUrl,
  prevUrl,
  nextText,
  prevText,
}: {
  nextUrl: string;
  prevUrl: string;
  nextText: string;
  prevText: string;
}) => {
  return (
    <div className="flex flex-row w-full">
      {prevText && prevUrl && (
        <div className="me-auto w-2/3 lg:w-1/3 mt-5 p-3 border rounded border-gray-500">
          <span className="block">Previous Lesson:</span>
          <Link className="inline-block" href={prevUrl}>
            {prevText}
          </Link>
        </div>
      )}
      {nextText && nextUrl && (
        <div className="ms-auto w-2/3 lg:w-1/3 mt-5 p-3 border rounded border-gray-500">
          <span className="block">Next Lesson:</span>
          <Link className="inline-block" href={nextUrl}>
            {nextText}
          </Link>
        </div>
      )}
    </div>
  );
};
