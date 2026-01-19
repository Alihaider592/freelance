// const HireTalentPanel = () => {
//   return (
//     <div className="bg-white">
//       <div className="max-w-[1216px] mx-auto px-8 py-6">

//         <div className="grid grid-cols-[2fr_1fr] gap-12">

//           {/* Left: Actions */}
//           <div>
//             <div className="text-sm font-semibold text-gray-900 mb-4">
//               Hiring Center
//             </div>

//             <div className="grid grid-cols-2 gap-4">

//               <div className="border rounded-md p-4 hover:border-blue-600 cursor-pointer transition">
//                 <div className="text-sm font-medium text-gray-800">
//                   Post a job
//                 </div>
//                 <div className="text-xs text-gray-500 mt-1">
//                   Get proposals from qualified freelancers
//                 </div>
//               </div>

//               <div className="border rounded-md p-4 hover:border-blue-600 cursor-pointer transition">
//                 <div className="text-sm font-medium text-gray-800">
//                   Browse talent
//                 </div>
//                 <div className="text-xs text-gray-500 mt-1">
//                   Search freelancers by skill & availability
//                 </div>
//               </div>

//               <div className="border rounded-md p-4 hover:border-blue-600 cursor-pointer transition">
//                 <div className="text-sm font-medium text-gray-800">
//                   Shortlisted
//                 </div>
//                 <div className="text-xs text-gray-500 mt-1">
//                   View people you saved
//                 </div>
//               </div>

//               <div className="border rounded-md p-4 hover:border-blue-600 cursor-pointer transition">
//                 <div className="text-sm font-medium text-gray-800">
//                   Messages
//                 </div>
//                 <div className="text-xs text-gray-500 mt-1">
//                   Talk to candidates
//                 </div>
//               </div>

//             </div>
//           </div>

//           {/* Right: Live status */}
//           <div>
//             <div className="text-sm font-semibold text-gray-900 mb-4">
//               Hiring status
//             </div>

//             <div className="space-y-3 text-sm">

//               <div className="flex justify-between">
//                 <span className="text-gray-600">Open jobs</span>
//                 <span className="font-medium text-gray-900">3</span>
//               </div>

//               <div className="flex justify-between">
//                 <span className="text-gray-600">New proposals</span>
//                 <span className="font-medium text-gray-900">14</span>
//               </div>

//               <div className="flex justify-between">
//                 <span className="text-gray-600">Active chats</span>
//                 <span className="font-medium text-gray-900">5</span>
//               </div>

//               <div className="flex justify-between">
//                 <span className="text-gray-600">Hires this month</span>
//                 <span className="font-medium text-gray-900">2</span>
//               </div>

//             </div>

//             <div className="mt-6 text-sm text-blue-700 hover:underline cursor-pointer">
//               Go to hiring dashboard →
//             </div>
//           </div>

//         </div>

//       </div>
//     </div>
//   )
// }
// export default HireTalentPanel
import { Link } from "react-router-dom";

const categories = [
  { name: "Frontend Developers", slug: "frontend" },
  { name: "Backend Developers", slug: "backend" },
  { name: "Full-Stack Engineers", slug: "fullstack" },
  { name: "UI/UX Designers", slug: "ui-ux" },
  { name: "SEO Specialists", slug: "seo" },
  { name: "Product Managers", slug: "product-managers" },
  { name: "Marketing Experts", slug: "marketing" },
  { name: "Brand Strategists", slug: "branding" },
];

const HireTalentPanelGuest = () => {
  return (
    <div className="bg-white shadow-lg border-t border-gray-200">
      <div className="max-w-[1216px] mx-auto px-8 py-6">

        <div className="grid grid-cols-[1.4fr_2fr] gap-12">

          {/* Left: How it works */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-semibold text-gray-900 uppercase mb-3 tracking-wide">
                How it works
              </h4>

              <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm">
                <li>Post your job or project brief</li>
                <li>Get matched with top freelancers</li>
                <li>Hire & start working instantly</li>
              </ol>
            </div>

            <button className="mt-6 w-full py-2 px-4 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition text-sm font-medium">
              Sign up to hire
            </button>
          </div>

          {/* Right: Talent categories */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase mb-3 tracking-wide">
              Talent categories
            </h4>

            <ul className="grid grid-cols-2 gap-2 text-gray-600 text-sm">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/talent/${cat.slug}`}
                    className="hover:text-blue-700 cursor-pointer transition"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom strip */}
        <div className="mt-6 pt-4 border-t border-gray-200 text-sm text-gray-500 flex justify-between">
          <span>Hire verified professionals across multiple categories</span>

          <Link
            to="/talent"
            className="text-blue-700 hover:underline cursor-pointer"
          >
            Browse all talent →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HireTalentPanelGuest;
