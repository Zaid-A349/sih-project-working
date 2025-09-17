import Header from "/src/components/layout/Header.jsx";

const coursesData = [
  {
    id: "CS301",
    title: "Advanced Web Development",
    instructor: "Dr. Evelyn Reed",
    progress: 75,
    bgColor: "bg-indigo-500",
  },
  {
    id: "MA204",
    title: "Linear Algebra & Applications",
    instructor: "Prof. David Chen",
    progress: 90,
    bgColor: "bg-blue-500",
  },
  {
    id: "PHY102",
    title: "Modern Physics II",
    instructor: "Dr. Sarah Jones",
    progress: 45,
    bgColor: "bg-purple-500",
  },
  {
    id: "HUM401",
    title: "Ethics in Technology",
    instructor: "Dr. Robert Miles",
    progress: 60,
    bgColor: "bg-teal-500",
  },
];

const CourseCard = ({ course }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
    <div
      className={`p-3 inline-block rounded-lg text-white mb-4 ${course.bgColor}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    </div>
    <p className="text-sm font-semibold text-gray-500">{course.id}</p>
    <h3 className="text-lg font-bold text-gray-800 mb-2">{course.title}</h3>
    <p className="text-sm text-gray-600 mb-4">
      Instructor: {course.instructor}
    </p>
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
      <div
        className={`${course.bgColor} h-2.5 rounded-full`}
        style={{ width: `${course.progress}%` }}
      ></div>
    </div>
    <p className="text-right text-sm font-semibold text-gray-500">
      {course.progress}% Complete
    </p>
  </div>
);

export default function MyCoursesPage() {
  return (
    <>
      <Header studentName="Jane Doe" />
      <main className="p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">My Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
    </>
  );
}
