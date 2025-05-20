import { motion } from "motion/react";
import { Award, Code, Clock, TrendingUp, Users, Zap } from "./icons";
import { Progress } from "../../components/ui/progress";
import Header from "../../components/ui/header";
import Container from "../../components/ui/container";

export default function Achievements() {
  return (
    <Container
      id="projects-section"
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
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          <div className="h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-achievement-card rounded-lg border-4 border-violet-600/40">
            <div>
              <div className="bg-achievement-card p-6 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-violet-900/30 text-violet-300">
                    <Code className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">
                      Angular Performance Library
                    </h3>
                    <p className="opacity-70">
                      Technical Innovation
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="opacity-70">
                    Developed a custom Angular library that dramatically
                    improved both developer productivity and runtime performance
                    across multiple applications.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2 bg-muted/50 p-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-amber-500" />
                        <h4 className="font-semibold">Performance Boost</h4>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold">3</span>
                        <span className="text-xl">-</span>
                        <span className="text-3xl font-bold">10</span>
                        <span className="text-lg font-medium">&times;</span>
                      </div>
                      <p className="text-sm opacity-70">
                        Faster runtime speed
                      </p>
                    </div>

                    <div className="space-y-2 bg-muted/50 p-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-emerald-500" />
                        <h4 className="font-semibold">Developer Impact</h4>
                      </div>
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold">100</span>
                        <span className="text-lg font-medium">%</span>
                      </div>
                      <p className="text-sm opacity-70">
                        Team adoption rate
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Key Improvements</h4>
                    <div
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Build Time Reduction</span>
                        <span className="text-sm font-medium">95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>

                    <div
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Runtime Optimization</span>
                        <span className="text-sm font-medium">80%</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>

                    <div
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Code Reusability</span>
                        <span className="text-sm font-medium">95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rapid Career Growth Achievement */}
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
                    <h3 className="font-bold text-xl">
                      Accelerated Career Growth
                    </h3>
                    <p className="opacity-70">
                      Professional Achievement
                    </p>
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

                    <div
                      className="relative pl-10 pb-8"
                    >
                      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-emerald-900/30 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                      </div>
                      <h4 className="font-semibold flex items-center gap-2">
                        <Clock className="h-4 w-4" /> Starting Position
                      </h4>
                      <p className="text-sm opacity-70 mt-1">
                        Joined as a Junior Developer with strong fundamentals
                        and eagerness to learn
                      </p>
                    </div>

                    <div
                      className="relative pl-10 pb-8"
                    >
                      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-emerald-900/30 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                      </div>
                      <h4 className="font-semibold flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" /> Growth Period
                      </h4>
                      <p className="text-sm opacity-70 mt-1">
                        Took on challenging projects, mentored junior
                        developers, and contributed to architectural decisions
                      </p>
                    </div>

                    <div
                      className="relative pl-10"
                    >
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
                    <h4 className="font-semibold mb-3">
                      Key Skills Demonstrated
                    </h4>
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
      </div>
    </Container>
  );
}
