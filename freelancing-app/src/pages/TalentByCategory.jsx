import { useParams } from "react-router-dom";

const TalentByCategory = () => {
  const { category } = useParams();
  const talents = [
    { id: 1, name: "Ali", category: "frontend", rate: "$25/hr", skills: ["React", "Tailwind"] },
    { id: 2, name: "Ahmed", category: "backend", rate: "$30/hr", skills: ["Node", "MongoDB"] },
    { id: 3, name: "Sara", category: "frontend", rate: "$28/hr", skills: ["Next.js", "CSS"] },
    { id: 4, name: "Usman", category: "ui-ux", rate: "$20/hr", skills: ["Figma", "UX Research"] },
  ];

  const filteredTalents = talents.filter(
    (t) => t.category === category
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 capitalize">
            {category.replace("-", " ")} Experts
          </h1>
          <p className="text-gray-500 mt-2">
            Hire verified professionals ready to start working
          </p>
        </div>

        {filteredTalents.length === 0 ? (
          <div className="bg-white rounded-xl p-8 text-center shadow">
            <p className="text-gray-500">
              No talent found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTalents.map((talent) => (
              <div
                key={talent.id}
                className="bg-white rounded-xl border hover:shadow-lg transition-all duration-300"
              >
                <div className="p-5 border-b">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold">
                      {talent.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {talent.name}
                      </h3>
                      <p className="text-sm text-gray-500 capitalize">
                        {talent.category}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-600 mb-3">
                    Skills
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {talent.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">
                      {talent.rate}
                    </span>
                    <button className="text-sm px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default TalentByCategory;
