"use client";

import { NavigationBar } from "@/app/components";
import { useTabs } from "@/app/hooks/TabsContext";
import AwardsPage from "@/app/pages/AwardsPage";
import CertificationPage from "@/app/pages/CertificationPage";
import ExperiencePage from "@/app/pages/ExperiencePage";
import ProjectPage from "@/app/pages/ProjectPage";
import RecommendationPage from "@/app/pages/RecommendationPage";

export default function NewPage() {
  const { activeTab } = useTabs();

  return (
    <>
      <div className="relative flex flex-col justify-center items-center my-auto h-screen">
        {/* Floating Tab */}
        <NavigationBar />

        <div className="relative w-[70%] h-[80%] flex items-center bg-white/60 backdrop-blur-md border border-white/30 shadow-lg z-0 rounded-3xl">
          {activeTab === 1 ? (
            <ExperiencePage />
          ) : activeTab === 2 ? (
            <ProjectPage />
          ) : activeTab === 3 ? (
            <CertificationPage />
          ) : activeTab === 4 ? (
            <AwardsPage />
          ) : (
            <RecommendationPage />
          )}
        </div>
      </div>
    </>
  );
}
