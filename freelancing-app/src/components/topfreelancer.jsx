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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {profilecards.map((profile) => (
          <div
            key={profile.id}
            className="
              bg-white border border-gray-200 rounded-3xl
              shadow-md p-6 flex flex-col justify-between
              hover:shadow-xl hover:scale-105 transform transition-all duration-300
              h-[400px]
            "
          >
            {/* Top: Service Name + Stars */}
            <div className="flex flex-col items-center mb-4">
              <h3 className="text-lg font-semibold text-teal-600 text-center">
                {profile.category}
              </h3>
              <div className="flex mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className="text-yellow-400 w-5 h-5"
                  />
                ))}
              </div>
            </div>

            {/* Middle: Description */}
            <p className="text-gray-600 text-sm text-center flex-1 overflow-hidden line-clamp-4">
              {profile.discription}
            </p>

            {/* Bottom: Profile Image + Name */}
            <div className="flex flex-col items-center mt-4">
              <img
                src={profile.image}
                alt={profile.Name}
                className="w-20 h-20 rounded-full object-cover border-2 border-teal-500 mb-2"
              />
              <h4 className="text-gray-900 font-semibold">{profile.Name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopFreelancer;


