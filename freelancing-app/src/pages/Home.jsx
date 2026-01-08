import HeroButtons from "../components/searchbar";
import PopularCategory from "../components/populercategory";
import TopFreelancer from "../components/topfreelancer";
import Howitwork from "../components/how_it_work";
import FAQ from "../components/FAQ";
import Footer from "../components/footer";
function App() {
  return (
    <div className="w-full h-screen">
      {/* Hero Section */}
      <div
        className="relative w-full h-[70%] mt-[5%] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.mediabistro.com/wp-content/uploads/2016/06/successful-freelancer-repeat-work_opt.jpg')",
          backgroundPosition: "center 10%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-[1216px] mx-auto h-full flex flex-col justify-center px-6">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-2xl">
            Hire Top Talent or <br />
            Get Hired Faster
          </h1>

          <p className="text-gray-200 text-lg md:text-xl mt-4 max-w-xl">
            Connect with skilled freelancers and trusted clients worldwide.
          </p>
          <HeroButtons />
        </div>
      </div>
      <PopularCategory />
      <TopFreelancer/>
      <Howitwork />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
