import { motion } from "motion/react";
import Container from "../../components/ui/container";
import Header from "../../components/ui/header";
import AngularLibraryCard from "./angular-library-card";
import RapidCareerGrowthCard from "./rapid-career-growth-card";

export default function Achievements() {
  return (
    <Container
      id="achievements-section"
      className="pt-10 mb-40 min-h-screen scroll-mt-10"
      section
    >
      <Header animation>Key Achievements</Header>
      <motion.p
        className="w-fit sm:text-lg/8 text-base/8 mt-4"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
      >
        Milestones that showcase my technical expertise and career growth
      </motion.p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mt-4">
        {/* Angular Library Achievement */}
        <AngularLibraryCard />

        {/* Rapid Career Growth Achievement */}
        <RapidCareerGrowthCard />
      </div>
    </Container>
  );
}
