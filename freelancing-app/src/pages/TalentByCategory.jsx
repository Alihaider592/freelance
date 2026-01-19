import { useParams } from "react-router-dom";

const TalentByCategory = () => {
  const { category } = useParams();

  // TEMP data (later API)
  const talents = [
    { id: 1, name: "Ali", category: "frontend" },
    { id: 2, name: "Ahmed", category: "backend" },
    { id: 3, name: "Sara", category: "frontend" },
    { id: 4, name: "Usman", category: "ui-ux" },
  ];

  const filteredTalents = talents.filter(
    (t) => t.category === category
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold mb-6 capitalize">
        {category.replace("-", " ")} Professionals
      </h1>

      {filteredTalents.length === 0 ? (
        <p className="text-gray-500">No talent found in this category.</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {filteredTalents.map((talent) => (
            <div
              key={talent.id}
              className="border rounded-lg p-4 hover:shadow transition"
            >
              <h3 className="font-medium">{talent.name}</h3>
              <p className="text-sm text-gray-500 capitalize">
                {talent.category}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TalentByCategory;
