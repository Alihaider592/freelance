import { FaCode, FaPaintBrush, FaBullhorn, FaServer } from "react-icons/fa"

const data = [
  { icon: <FaCode />, title: "Developers", desc: "React, Node, Full-Stack" },
  { icon: <FaPaintBrush />, title: "Designers", desc: "UI, UX, Branding" },
  { icon: <FaBullhorn />, title: "Marketing", desc: "SEO, Ads, Growth" },
  { icon: <FaServer />, title: "Backend", desc: "APIs, Databases" }
]

const HireTalentPanel = () => {
  return (
    <div className="max-w-[1216px] mx-auto px-10 py-12">
      <div className="grid grid-cols-4 gap-8">
        {data.map((item, i) => (
          <div
            key={i}
            className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition cursor-pointer"
          >
            <div className="text-blue-600 text-3xl mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HireTalentPanel
