import { FaStar } from "react-icons/fa";
const  profilecards=[
    {
        id : "1",
        Name : "Ali Haider",
        image : "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
        category :"Web Devloper",
        email : "ali@gmail.com",
        discription : "A profile description about development highlights your drive for growth, learning, and achieving goals, showcasing skills like problem-solving, adaptability, leadership, and strategic thinking, often with quantifiable results from past roles, tailored to your field (e.g., tech, training, business) to emphasize your ability to improve performance and drive success for yourself and organizations.",
    },
    {
        id : "2",
        Name : "Danish",
        image : "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740&q=80",
        category :"front-end developer",
        email : "ali1@gmail.com",
        discription : "A profile description about development highlights your drive for growth, learning, and achieving goals, showcasing skills like problem-solving, adaptability, leadership, and strategic thinking, often with quantifiable results from past roles, tailored to your field (e.g., tech, training, business) to emphasize your ability to improve performance and drive success for yourself and organizations.",
    },
    {
        id : "3",
        Name : "Ali Hassan",
        image : "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
        category :"back-end developer",
        email : "ali2@gmail.com",
        discription : "A profile description about development highlights your drive for growth, learning, and achieving goals, showcasing skills like problem-solving, adaptability, leadership, and strategic thinking, often with quantifiable results from past roles, tailored to your field (e.g., tech, training, business) to emphasize your ability to improve performance and drive success for yourself and organizations.",
    },
    {
        id : "4",
        Name : "Ali Raza",
        image : "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
        category :"Softwear Devloper",
        email : "ali4@gmail.com",
        discription : "A profile description about development highlights your drive for growth, learning, and achieving goals, showcasing skills like problem-solving, adaptability, leadership, and strategic thinking, often with quantifiable results from past roles, tailored to your field (e.g., tech, training, business) to emphasize your ability to improve performance and drive success for yourself and organizations.",
    },
]
const TopFreelancer = () => {
  return (
<div className="max-w-[1200px] mx-auto px-4 mt-12">
  <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
    Top Freelancers
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {profilecards.map((profile) => (
      <div
        key={profile.id}
        className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-xl transition"
      >
        {/* Top row */}
        <div className="flex gap-4 items-start mb-4">
          {/* Image */}
          <img
            src={profile.image}
            alt={profile.Name}
            className="w-20 h-20 rounded-xl object-cover border-2 border-blue-500"
          />

          {/* Right side */}
          <div className="flex-1">
            {/* Name + stars row */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {profile.Name}
                </h3>
                <p className="text-xs text-gray-500">
                  {profile.email}
                </p>
              </div>

              {/* Stars on the right */}
              <div className="flex gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="w-3.5 h-3.5 text-yellow-400" />
                ))}
              </div>
            </div>

            {/* Category */}
            <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600">
              {profile.category}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">
          {profile.discription}
        </p>

        {/* Footer */}
        <button className="w-full py-2 text-sm font-semibold text-blue-600 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition">
          View Profile
        </button>
      </div>
    ))}
  </div>
</div>


  );
};

export default TopFreelancer;



