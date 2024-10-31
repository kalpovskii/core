import { revalidatePath } from "next/cache";
import { CourseItem } from "../ui/course-item";
import { courseRepository } from "../ui/courses.repository";

export async function CoursesList({
  revalidatePagePath,
}: {
  revalidatePagePath: string;
}) {
  const coursesList = await courseRepository.getCoursesList();
  const handleDeleteAction = async (courseId: string) => {
    "use server";

    await courseRepository.deleteCourseElement({ id: courseId });
    revalidatePath(revalidatePagePath);
  };

  return (
    <div className="flex flex-col gap-3">
      {coursesList.map((course) => (
        <CourseItem
          key={course.id}
          course={course}
          onDelete={handleDeleteAction.bind(null, course.id)}
        />
      ))}
    </div>
  );
}
