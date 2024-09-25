import dayjs from "dayjs";

function JobCard() {
  const skills = ["Javascript", "React", "Nodejs"];
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff("2023-10-28", "day");
  return (
    <div className="mx-40 mb-4 flex justify-between px-6 py-4 bg-zinc-200 rounded-md hover:translate-y-1 hover:scale-103">
      <div className="space-y-2">
        <h1 className="text-lg font-semibold">Frontend Developer - Amazon</h1>
        <p  className="font-medium">Full Time &#x2022; Fresher &#x2022; In-office</p>
        <div className="flex gap-2">
          {skills.map((skill, idx) => (
            <p
            className="border border-gray-500 px-2 bg-transparent rounded-sm text-gray-600 font-medium"
             key={idx}>{skill}</p>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className="font-medium">Posted {diffInDays} days ago</p>
        <a href="">
        <button className="border border-blue-600 bg-transparent text-blue-700 w-24 h-10 rounded-md font-medium hover:bg-blue-600 hover:text-gray-100">Apply</button>
        </a>
      </div>
    </div>
  );
}

export default JobCard;
