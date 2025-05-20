import { motion } from "motion/react";
import { Award, Clock, TrendingUp } from "./icons";

const RapidCareerGrowthCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay: 0.4,
      }}
    >
      <div className="h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-achievement-card border-4 border-emerald-600/40 rounded-lg">
        <div>
          <div className="bg-achievement-card p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-emerald-900/30 text-emerald-300">
                <Award className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Accelerated Career Growth</h3>
                <p className="opacity-70">Professional Achievement</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="opacity-70">
                Promoted to Senior Developer in just 1.5 years based on
                demonstrated technical abilities, leadership skills, and
                consistent high-quality work.
              </p>

              <div className="relative">
                <div className="absolute left-[0.95rem] top-0 bottom-0 w-0.5 bg-emerald-600/70"></div>

                <div className="relative pl-10 pb-8">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-emerald-900/30 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <Clock className="h-4 w-4" /> Starting Position
                  </h4>
                  <p className="text-sm opacity-70 mt-1">
                    Joined as a Junior Developer with strong fundamentals and
                    eagerness to learn
                  </p>
                </div>

                <div className="relative pl-10 pb-8">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-emerald-900/30 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" /> Growth Period
                  </h4>
                  <p className="text-sm opacity-70 mt-1">
                    Took on challenging projects, mentored junior developers,
                    and contributed to architectural decisions
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-emerald-900/30 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <Award className="h-4 w-4" /> Senior Promotion
                  </h4>
                  <p className="text-sm opacity-70 mt-1">
                    Promoted to Senior Developer after just 1.5 years,
                    recognizing technical excellence and leadership
                  </p>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Key Skills Demonstrated</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Technical Expertise",
                    "Problem Solving",
                    "Mentorship",
                    "Architecture Design",
                    "Team Leadership",
                    "Innovation",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-emerald-900/30 text-emerald-300 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RapidCareerGrowthCard;