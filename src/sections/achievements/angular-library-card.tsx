import { motion } from "motion/react";
import { Code, Users, Zap } from "./icons";
import { Progress } from "../../components/ui/progress";

const AngularLibraryCard = () => {
  return (
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
                <p className="opacity-70">Technical Innovation</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="opacity-70">
                Developed a custom Angular library that dramatically improved
                both developer productivity and runtime performance across
                multiple applications.
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
                  <p className="text-sm opacity-70">Faster runtime speed</p>
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
                  <p className="text-sm opacity-70">Team adoption rate</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Key Improvements</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Build Time Reduction</span>
                    <span className="text-sm font-medium">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Runtime Optimization</span>
                    <span className="text-sm font-medium">80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>

                <div className="space-y-2">
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
  );
};

export default AngularLibraryCard;