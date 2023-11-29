import Summary from "@components/Summary";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import SectionRecommendations from "@components/SectionRecommendations";
import SectionAbout from "@components/SectionAbout";
import SectionExperience from "@components/SectionExperience";
import SectionProjects from "@components/SectionProjects";

export default function Home() {
  return (
    <main className="relative min-h-screen px-8 md:px-24">
      <div className="relative mx-auto grid w-full max-w-5xl md:grid-cols-2">
        <aside className="left-0 top-0 flex flex-col-reverse justify-between gap-8 py-8 md:sticky md:h-screen md:flex-col md:gap-0 md:py-20">
          <div className="flex flex-col gap-16">
            <Summary />
            <Navbar />
          </div>
          <Footer />
        </aside>
        <div className="pb-24">
          <SectionAbout />
          <SectionRecommendations />
          <SectionExperience />
          <SectionProjects />
        </div>
      </div>
    </main>
  );
}
