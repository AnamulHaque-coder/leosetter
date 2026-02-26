import { motion } from "framer-motion";
import { Github, Facebook, Linkedin, MessageCircle, ArrowLeft, Code, Rocket, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBackground from "@/components/AnimatedBackground";
import IPadCursor from "@/components/IPadCursor";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/AHJ32",
    icon: Github,
    description: "Check out my projects & contributions",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/anamul.haque2061/",
    icon: Facebook,
    description: "Connect with me on Facebook",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/anamul-haque-786943ahj2061/",
    icon: Linkedin,
    description: "Let's network professionally",
  },
  {
    name: "Discord",
    url: "https://discord.com/users/930090340956930110",
    icon: MessageCircle,
    description: "Chat with me on Discord",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as const } },
};

const About = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden animated-bg">
      <AnimatedBackground />
      <IPadCursor />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-16"
        >
          {/* Avatar / Initials */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-24 h-24 rounded-full mx-auto mb-6 glass-strong flex items-center justify-center"
          >
            <span className="text-3xl font-bold text-gradient">AH</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className="text-gradient">Anamul Haque</span>
          </h1>

          <div className="flex items-center justify-center gap-3 mb-6">
            {[Code, Rocket, Sparkles].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 300 }}
              >
                <Icon className="w-5 h-5 text-muted-foreground" />
              </motion.div>
            ))}
          </div>

          <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
            A restless tinkerer and self-proclaimed nerd who wakes up with ideas and goes to bed
            debugging them. Whether it's crafting tools nobody asked for or diving headfirst into
            rabbit holes of code, building things out of sheer curiosity is the whole point.
          </p>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-4 sm:grid-cols-2"
        >
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="glass-card rounded-2xl p-5 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl glass-strong flex items-center justify-center shrink-0 group-hover:glow-primary transition-shadow duration-300">
                <social.icon className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <span className="font-semibold text-foreground block">{social.name}</span>
                <span className="text-sm text-muted-foreground">{social.description}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
