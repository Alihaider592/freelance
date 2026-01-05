import { i, image } from "framer-motion/client";
const  profilecards=[
    {
        id : "1",
        Name : "Ali Haider",
        image : "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
        category :"Web Devloper",
        Ratings : "https://www.google.com/search?q=simple+yellow+star&sca_esv=a616d0ede2c8591f&sxsrf=AE3TifMkwOHiqhExhyUnSN4x4dfsi69RRg%3A1767612727620&ei=N6FbaZPJJaGL9u8PmuPJoQ8&ved=0ahUKEwjTwOvFpvSRAxWhhf0HHZpxMvQQ4dUDCBE&uact=5&oq=simple+yellow+star&gs_lp=Egxnd3Mtd2l6LXNlcnAiEnNpbXBsZSB5ZWxsb3cgc3RhcjIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgUQABjvBTIIEAAYgAQYogQyCBAAGIAEGKIESO1RUNINWM5NcAR4AZABAJgBogOgAYI0qgEIMi0xNS43LjG4AQPIAQD4AQGYAhqgAsU0wgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICExAuGIAEGLADGEMYyAMYigXYAQHCAhkQLhiABBiwAxjRAxhDGMcBGMgDGIoF2AEBwgIKECMYgAQYJxiKBcICChAuGIAEGEMYigXCAgoQABiABBhDGIoFwgIKECMY8AUYJxjJAsICCBAAGIAEGLEDwgILEAAYgAQYsQMYgwHCAhkQLhiABBhDGIoFGJcFGNwEGN4EGOAE2AEBwgINEC4YgAQYsQMYQxiKBcICEBAuGIAEGNEDGEMYxwEYigXCAhEQLhiABBixAxjRAxiDARjHAcICDRAAGIAEGLEDGEMYigXCAhAQABiABBixAxiDARiKBRgKwgILEAAYgAQYkQIYigXCAgsQABiABBixAxiKBcICBxAAGIAEGA3CAgoQABiABBgUGIcCwgIIEAAYCBgNGB6YAwCIBgGQBhO6BgYIARABGAmSBws0LjAuMTAuMTEuMaAH1sEBsgcJMi0xMC4xMS4xuAeINMIHCTItMTQuMTEuMcgH_wGACAA&sclient=gws-wiz-serp#sv=CAMSZxowKg4teE9TdUltbU92TGJfTTIOLXhPU3VJbW1PdkxiX006DkVEZXFCakNnYmozbHJNIAQqLwobX1lhRmJhZXY3QjVPRTl1OFB0YjczbUFjXzQ1Eg4teE9TdUltbU92TGJfTRgAMAEYByCDgov5CjACSgoIAhACGAIgAigC",
        email : "ali@gmail.com",
        discription : "A profile description about development highlights your drive for growth, learning, and achieving goals, showcasing skills like problem-solving, adaptability, leadership, and strategic thinking, often with quantifiable results from past roles, tailored to your field (e.g., tech, training, business) to emphasize your ability to improve performance and drive success for yourself and organizations.",
    },
    {
        id : "2",
        Name : "Danish",
        image : "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740&q=80",
        category :"front-end developer",
        Ratings : "https://www.google.com/search?q=simple+yellow+star&sca_esv=a616d0ede2c8591f&sxsrf=AE3TifMkwOHiqhExhyUnSN4x4dfsi69RRg%3A1767612727620&ei=N6FbaZPJJaGL9u8PmuPJoQ8&ved=0ahUKEwjTwOvFpvSRAxWhhf0HHZpxMvQQ4dUDCBE&uact=5&oq=simple+yellow+star&gs_lp=Egxnd3Mtd2l6LXNlcnAiEnNpbXBsZSB5ZWxsb3cgc3RhcjIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgUQABjvBTIIEAAYgAQYogQyCBAAGIAEGKIESO1RUNINWM5NcAR4AZABAJgBogOgAYI0qgEIMi0xNS43LjG4AQPIAQD4AQGYAhqgAsU0wgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICExAuGIAEGLADGEMYyAMYigXYAQHCAhkQLhiABBiwAxjRAxhDGMcBGMgDGIoF2AEBwgIKECMYgAQYJxiKBcICChAuGIAEGEMYigXCAgoQABiABBhDGIoFwgIKECMY8AUYJxjJAsICCBAAGIAEGLEDwgILEAAYgAQYsQMYgwHCAhkQLhiABBhDGIoFGJcFGNwEGN4EGOAE2AEBwgINEC4YgAQYsQMYQxiKBcICEBAuGIAEGNEDGEMYxwEYigXCAhEQLhiABBixAxjRAxiDARjHAcICDRAAGIAEGLEDGEMYigXCAhAQABiABBixAxiDARiKBRgKwgILEAAYgAQYkQIYigXCAgsQABiABBixAxiKBcICBxAAGIAEGA3CAgoQABiABBgUGIcCwgIIEAAYCBgNGB6YAwCIBgGQBhO6BgYIARABGAmSBws0LjAuMTAuMTEuMaAH1sEBsgcJMi0xMC4xMS4xuAeINMIHCTItMTQuMTEuMcgH_wGACAA&sclient=gws-wiz-serp#sv=CAMSZxowKg4teE9TdUltbU92TGJfTTIOLXhPU3VJbW1PdkxiX006DkVEZXFCakNnYmozbHJNIAQqLwobX1lhRmJhZXY3QjVPRTl1OFB0YjczbUFjXzQ1Eg4teE9TdUltbU92TGJfTRgAMAEYByCDgov5CjACSgoIAhACGAIgAigC",
        email : "ali1@gmail.com",
        discription : "A profile description about development highlights your drive for growth, learning, and achieving goals, showcasing skills like problem-solving, adaptability, leadership, and strategic thinking, often with quantifiable results from past roles, tailored to your field (e.g., tech, training, business) to emphasize your ability to improve performance and drive success for yourself and organizations.",
    },
    {
        id : "3",
        Name : "Ali Hassan",
        image : "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
        category :"back-end developer",
        Ratings : "https://www.google.com/search?q=simple+yellow+star&sca_esv=a616d0ede2c8591f&sxsrf=AE3TifMkwOHiqhExhyUnSN4x4dfsi69RRg%3A1767612727620&ei=N6FbaZPJJaGL9u8PmuPJoQ8&ved=0ahUKEwjTwOvFpvSRAxWhhf0HHZpxMvQQ4dUDCBE&uact=5&oq=simple+yellow+star&gs_lp=Egxnd3Mtd2l6LXNlcnAiEnNpbXBsZSB5ZWxsb3cgc3RhcjIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgUQABjvBTIIEAAYgAQYogQyCBAAGIAEGKIESO1RUNINWM5NcAR4AZABAJgBogOgAYI0qgEIMi0xNS43LjG4AQPIAQD4AQGYAhqgAsU0wgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICExAuGIAEGLADGEMYyAMYigXYAQHCAhkQLhiABBiwAxjRAxhDGMcBGMgDGIoF2AEBwgIKECMYgAQYJxiKBcICChAuGIAEGEMYigXCAgoQABiABBhDGIoFwgIKECMY8AUYJxjJAsICCBAAGIAEGLEDwgILEAAYgAQYsQMYgwHCAhkQLhiABBhDGIoFGJcFGNwEGN4EGOAE2AEBwgINEC4YgAQYsQMYQxiKBcICEBAuGIAEGNEDGEMYxwEYigXCAhEQLhiABBixAxjRAxiDARjHAcICDRAAGIAEGLEDGEMYigXCAhAQABiABBixAxiDARiKBRgKwgILEAAYgAQYkQIYigXCAgsQABiABBixAxiKBcICBxAAGIAEGA3CAgoQABiABBgUGIcCwgIIEAAYCBgNGB6YAwCIBgGQBhO6BgYIARABGAmSBws0LjAuMTAuMTEuMaAH1sEBsgcJMi0xMC4xMS4xuAeINMIHCTItMTQuMTEuMcgH_wGACAA&sclient=gws-wiz-serp#sv=CAMSZxowKg4teE9TdUltbU92TGJfTTIOLXhPU3VJbW1PdkxiX006DkVEZXFCakNnYmozbHJNIAQqLwobX1lhRmJhZXY3QjVPRTl1OFB0YjczbUFjXzQ1Eg4teE9TdUltbU92TGJfTRgAMAEYByCDgov5CjACSgoIAhACGAIgAigC",
        email : "ali2@gmail.com",
        discription : "A profile description about development highlights your drive for growth, learning, and achieving goals, showcasing skills like problem-solving, adaptability, leadership, and strategic thinking, often with quantifiable results from past roles, tailored to your field (e.g., tech, training, business) to emphasize your ability to improve performance and drive success for yourself and organizations.",
    },
    {
        id : "4",
        Name : "Ali Raza",
        image : "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
        category :"Softwear Devloper",
        Ratings : "https://www.google.com/search?q=simple+yellow+star&sca_esv=a616d0ede2c8591f&sxsrf=AE3TifMkwOHiqhExhyUnSN4x4dfsi69RRg%3A1767612727620&ei=N6FbaZPJJaGL9u8PmuPJoQ8&ved=0ahUKEwjTwOvFpvSRAxWhhf0HHZpxMvQQ4dUDCBE&uact=5&oq=simple+yellow+star&gs_lp=Egxnd3Mtd2l6LXNlcnAiEnNpbXBsZSB5ZWxsb3cgc3RhcjIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgUQABjvBTIIEAAYgAQYogQyCBAAGIAEGKIESO1RUNINWM5NcAR4AZABAJgBogOgAYI0qgEIMi0xNS43LjG4AQPIAQD4AQGYAhqgAsU0wgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICExAuGIAEGLADGEMYyAMYigXYAQHCAhkQLhiABBiwAxjRAxhDGMcBGMgDGIoF2AEBwgIKECMYgAQYJxiKBcICChAuGIAEGEMYigXCAgoQABiABBhDGIoFwgIKECMY8AUYJxjJAsICCBAAGIAEGLEDwgILEAAYgAQYsQMYgwHCAhkQLhiABBhDGIoFGJcFGNwEGN4EGOAE2AEBwgINEC4YgAQYsQMYQxiKBcICEBAuGIAEGNEDGEMYxwEYigXCAhEQLhiABBixAxjRAxiDARjHAcICDRAAGIAEGLEDGEMYigXCAhAQABiABBixAxiDARiKBRgKwgILEAAYgAQYkQIYigXCAgsQABiABBixAxiKBcICBxAAGIAEGA3CAgoQABiABBgUGIcCwgIIEAAYCBgNGB6YAwCIBgGQBhO6BgYIARABGAmSBws0LjAuMTAuMTEuMaAH1sEBsgcJMi0xMC4xMS4xuAeINMIHCTItMTQuMTEuMcgH_wGACAA&sclient=gws-wiz-serp#sv=CAMSZxowKg4teE9TdUltbU92TGJfTTIOLXhPU3VJbW1PdkxiX006DkVEZXFCakNnYmozbHJNIAQqLwobX1lhRmJhZXY3QjVPRTl1OFB0YjczbUFjXzQ1Eg4teE9TdUltbU92TGJfTRgAMAEYByCDgov5CjACSgoIAhACGAIgAigC",
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
              shadow-md p-6 text-center
              hover:shadow-xl hover:scale-105
              transform transition-all duration-300
              flex flex-col items-center
            "
          >
            {/* Image */}
            <img
              src={profile.image}
              alt={profile.Name}
              className="w-28 h-28 rounded-full object-cover mb-4 border-2 border-teal-500"
            />

            {/* Name */}
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {profile.Name}
            </h3>

            {/* Category */}
            <p className="text-sm text-gray-500 mb-2">{profile.category}</p>

            {/* Email */}
            <p className="text-sm text-gray-400 mb-2">{profile.email}</p>

            {/* Ratings Placeholder */}
            <div className="flex justify-center mb-3">
              {/* replace with star images or icons if available */}
              <span className="text-yellow-400 text-lg">★★★★★</span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 line-clamp-3">
              {profile.discription}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopFreelancer;

