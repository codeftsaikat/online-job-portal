function SearchBar() {
  return (
    <div className="flex gap-4 justify-center my-8">
      <select className="w-60 py-3 px-4 rounded-sm rounded-t-md bg-zinc-200 font-semibold cursor-pointer">
        <option className="text-gray-400" value="" disabled hidden selected>
          Job Role
        </option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="Developer Advocate">Developer Advocate</option>
      </select>
      <select className="w-60 py-3 px-4 rounded-sm rounded-t-md bg-zinc-200 font-semibold cursor-pointer">
        <option className="text-gray-400" value="" disabled hidden selected>
          Job Type
        </option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
      </select>
      <select className="w-60 py-3 px-4 rounded-sm rounded-t-md bg-zinc-200 font-semibold cursor-pointer">
        <option className="text-gray-400" value="" disabled hidden selected>
          Location
        </option>
        <option value="Remote">Remote</option>
        <option value="In-Office">In-Office</option>
        <option value="Hybrid">Hybrid</option>
      </select>
      <select className="w-60 py-3 px-4 rounded-sm rounded-t-md bg-zinc-200 font-semibold cursor-pointer">
        <option className="text-gray-400" value="" disabled hidden selected>
          Experience
        </option>
        <option value="Fresher">Fresher</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Mid Level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>
      <button className="w-60 hover:border bg-gray-300 text-gray-800 hover:bg-blue-600 hover:text-white font-bold rounded-sm rounded-t-md py-3 px-10">Search</button>
    </div>
  );
}

export default SearchBar;
