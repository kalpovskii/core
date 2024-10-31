"use server";

import { revalidatePath } from "next/cache";
import { courseRepository } from "./ui/courses.repository";
import { CreateCourseListElementCommand } from "./model/types";

export const createCourseAction = async (
  command: CreateCourseListElementCommand,
  revalidatePagePath: string
) => {
  await courseRepository.createCourseElement(command);
  revalidatePath(revalidatePagePath);
};
