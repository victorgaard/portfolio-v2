import Summary from "@components/Summary";
import Navbar from "@components/Navbar";
import SectionRecommendations from "@components/SectionRecommendations";
import SectionExperience from "@components/SectionExperience";
import SectionProjects from "@components/SectionProjects";
import SectionSummary from "@components/SectionAbout";
import Socials from "@components/Socials";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen px-8 lg:px-24">
      <div className="relative mx-auto grid w-full max-w-5xl lg:grid-cols-8">
        <aside className="left-0 top-0 flex flex-col-reverse justify-between gap-8 py-8 lg:sticky lg:col-span-3 lg:h-screen lg:flex-col lg:gap-0 lg:py-20">
          <div className="flex flex-col gap-16">
            <Summary />
            <Navbar />
          </div>
          <Socials />
        </aside>
        <div className="pb-12 lg:col-span-5 lg:px-10 lg:pb-24">
          <SectionSummary />
          <SectionRecommendations />
          <SectionProjects />
          <SectionExperience />
          <Footer />
        </div>
      </div>
    </main>
  );
}
