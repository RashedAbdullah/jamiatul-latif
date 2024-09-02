import { getSingleTeacher } from "@/actions";

const SingleTeacherPage = async ({ params: { id, lang } }) => {
  const teacher = await getSingleTeacher(id);
  return <div className="container">{teacher.name}</div>;
};

export default SingleTeacherPage;
