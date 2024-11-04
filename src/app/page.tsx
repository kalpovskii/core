import { CoursesList } from "@/features/courses-list/pub/courses-list";
import { CreateCourseForm } from "@/features/courses-list/pub/create-course-form";

export default async function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 sm:items-start">
      <h1>Courses</h1>
      <CreateCourseForm revalidatePagePath="/" className="max-w-[300px]" />
      <CoursesList revalidatePagePath="/" />
    </main>
  );
}
