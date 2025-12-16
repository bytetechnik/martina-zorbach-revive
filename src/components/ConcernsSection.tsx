import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  Sun, 
  Heart, 
  Compass, 
  User,
  ChevronDown,
  ArrowRight
} from "lucide-react";

const concerns = [
  {
    id: "leadership",
    icon: Briefcase,
    title: "Ich möchte meine Führungskompetenzen stärken",
    color: "primary",
    questions: [
      "Wie kann ich mich als neue Führungskraft optimal vorbereiten?",
      "Wie meistere ich Herausforderungen in einer anspruchsvollen Führungsposition?",
      "Wie fördere ich konstruktive Zusammenarbeit im Team und mit meinen Vorgesetzten?",
    ],
    link: "/karriere-fuehrung#fuehrungskraefte",
  },
  {
    id: "retirement",
    icon: Sun,
    title: "Ich möchte meinen Ruhestand aktiv und bewusst gestalten",
    color: "accent",
    questions: [
      "Wann ist der richtige Zeitpunkt für mich aufzuhören?",
      "Wie bringe ich mein Berufsleben zu einem positiven Abschluss?",
      "Wie finde ich neue Aufgaben und baue ein neues Netzwerk auf?",
    ],
    link: "/lebenszeitplus-ruhestandscoaching",
  },
  {
    id: "transition",
    icon: Heart,
    title: "Ich möchte tiefgreifende Veränderungen konstruktiv bewältigen",
    color: "primary",
    questions: [
      "Wie gehe ich mit bedeutenden Veränderungen um?",
      "Wie bewältige ich persönliche und familiäre Umbrüche wie Verlust, Trennung oder Auszug der Kinder?",
      "Wie kann ich mit medizinischen Diagnosen und gesundheitlichen Herausforderungen umgehen?",
    ],
    link: "/karriere-fuehrung#life-transition",
  },
  {
    id: "career",
    icon: Compass,
    title: "Ich möchte beruflich mehr erreichen und zufriedener werden",
    color: "accent",
    questions: [
      "Welche Aufgaben, Jobprofile und Unternehmenskultur passen zu mir?",
      "Was sind meine Stärken und wie kann ich sie einsetzen?",
      "Wie finde ich die richtige Position?",
    ],
    link: "/karriere-fuehrung#karriere",
  },
  {
    id: "personality",
    icon: User,
    title: "Ich möchte mich selbst und meine Persönlichkeit besser verstehen",
    color: "primary",
    questions: [
      "Was prägt mein Verhalten, meine Gedanken und meine Wahrnehmung?",
      "Was sind meine Motive und Stärken?",
      "Wie kann ich meine Schwächen ausgleichen?",
    ],
    link: "/karriere-fuehrung#persoenlichkeit",
  },
];

const ConcernCard = ({ concern, isOpen, onToggle, index }: {
  concern: typeof concerns[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) => {
  const Icon = concern.icon;
  const isPrimary = concern.color === "primary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div
        className={`rounded-2xl overflow-hidden transition-all duration-500 ${
          isOpen 
            ? isPrimary 
              ? "glass-primary shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.3)]" 
              : "glass-accent shadow-[0_20px_60px_-15px_hsl(var(--accent)/0.4)]"
            : "glass-subtle hover:shadow-lg"
        }`}
      >
        {/* Header - Clickable */}
        <button
          onClick={onToggle}
          className="w-full p-6 flex items-start gap-4 text-left"
        >
          <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? isPrimary ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
              : isPrimary ? "bg-primary/10 text-primary" : "bg-accent/20 text-accent-foreground"
          }`}>
            <Icon size={24} />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className={`font-display text-lg md:text-xl transition-colors ${
              isOpen ? "text-foreground" : "text-foreground group-hover:text-primary"
            }`}>
              {concern.title}
            </h3>
          </div>

          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              isOpen 
                ? isPrimary ? "bg-primary/20 text-primary" : "bg-accent/30 text-accent-foreground"
                : "bg-secondary text-muted-foreground"
            }`}
          >
            <ChevronDown size={18} />
          </motion.div>
        </button>

        {/* Expanded Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-6 pb-6">
                <div className="pt-2 border-t border-border/30">
                  <ul className="space-y-3 mt-4">
                    {concern.questions.map((question, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          isPrimary ? "bg-primary" : "bg-accent"
                        }`} />
                        <span className="font-body text-muted-foreground">{question}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Link
                    to={concern.link}
                    className={`mt-6 inline-flex items-center gap-2 font-body font-medium transition-all hover:gap-3 ${
                      isPrimary ? "text-primary" : "text-accent-foreground"
                    }`}
                  >
                    Mehr erfahren
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export const ConcernsSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleConcern = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      {/* Question 1: Concerns Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block font-body text-sm tracking-widest uppercase text-primary mb-4">
              Finden Sie Ihr Thema
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Was beschäftigt Sie <span className="text-primary italic">gerade</span>?
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Wählen Sie das Thema, das am besten zu Ihrer aktuellen Situation passt
            </p>
          </motion.div>

          <div className="grid gap-4 max-w-3xl mx-auto">
            {concerns.map((concern, index) => (
              <ConcernCard
                key={concern.id}
                concern={concern}
                isOpen={openId === concern.id}
                onToggle={() => toggleConcern(concern.id)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

    </>
  );
};
