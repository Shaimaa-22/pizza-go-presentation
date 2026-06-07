"use client"

import { motion } from "framer-motion"
import {
  StaggerContainer,
  StaggerItem,
  TextReveal,
  GlowingBorder,
  FloatingCard,
  AnimatedCounter,
} from "./slide-transitions"
import {
  Zap,
  Clock,
  Users,
  Link2,
  Globe,
  Server,
  Database,
  Wifi,
  Cog,
  Monitor,
  Lock,
  CreditCard,
  Bell,
  CheckCircle2,
  XCircle,
  Award,
  Smartphone,
  Brain,
  Languages,
  Layers,
  Sparkles,
  Pizza,
} from "lucide-react"

// Slide 0: Title
export function TitleSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 relative">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
        className="mb-8"
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-accent to-pizza-red flex items-center justify-center glow-orange">
          <Pizza className="w-16 h-16 text-background" />
        </div>
      </motion.div>

      <motion.h1
        className="text-7xl md:text-9xl font-bold gradient-text text-glow mb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.4 }}
      >
        PIZZA GO
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-muted-foreground text-center max-w-3xl mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Smart Web-Based Pizza Ordering & Automated Preparation System
      </motion.p>

      <motion.div
        className="flex flex-col items-center gap-4 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex items-center gap-8">
          <span className="text-lg">Shaimaa Dwedar</span>
        </div>
        <span className="text-sm opacity-60">Supervisor: Dr. Emad Hamadeh</span>
        <span className="text-sm opacity-60">Graduation Project | 2025-2026</span>
      </motion.div>

      <motion.div
        className="absolute bottom-16 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className="text-sm text-muted-foreground">Press arrow keys or swipe to navigate</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-primary"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  )
}

// Slide 1: Problem Statement
export function ProblemSlide() {
  const problems = [
    { icon: Zap, title: "Inconsistent Quality", desc: "Manual preparation can vary from one order to another" },
    { icon: Clock, title: "Slow Service", desc: "Traditional preparation may cause long waiting times" },
    { icon: Users, title: "Labor Dependency", desc: "Food preparation depends heavily on manual work" },
    { icon: Link2, title: "Limited Integration", desc: "Ordering systems are often separated from machine execution" },
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="mb-12"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-center">
          <span className="text-accent">The</span> <span className="text-foreground">Problem</span>
        </h2>
      </motion.div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {problems.map((problem, i) => (
          <StaggerItem key={i}>
            <GlowingBorder>
              <div className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{problem.title}</h3>
                  <p className="text-muted-foreground text-sm">{problem.desc}</p>
                </div>
              </div>
            </GlowingBorder>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  )
}

// Slide 2: Solution
export function SolutionSlide() {
  const components = [
    { icon: Globe, title: "Web Platform", color: "from-blue-500 to-cyan-500" },
    { icon: Server, title: "Node.js Backend", color: "from-primary to-yellow-500" },
    { icon: Database, title: "PostgreSQL DB", color: "from-green-500 to-emerald-500" },
    { icon: Wifi, title: "MQTT", color: "from-purple-500 to-pink-500" },
    { icon: Cog, title: "ESP32 Machine", color: "from-accent to-red-500" },
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <motion.h2
        className="text-5xl md:text-7xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <span className="gradient-text">The Solution</span>
      </motion.h2>

      <motion.p
        className="text-xl text-muted-foreground text-center max-w-2xl mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <TextReveal text="An integrated website and automated pizza preparation machine" delay={0.3} />
      </motion.p>

      <StaggerContainer className="flex flex-wrap justify-center gap-4">
        {components.map((comp, i) => (
          <StaggerItem key={i}>
            <FloatingCard delay={i * 0.1}>
              <motion.div
                className="relative p-6 rounded-2xl bg-card border border-border/50 flex flex-col items-center gap-3 w-36"
                whileHover={{ borderColor: "rgba(243, 156, 18, 0.5)" }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${comp.color} flex items-center justify-center`}>
                  <comp.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">{comp.title}</span>
              </motion.div>
            </FloatingCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <motion.div
        className="mt-12 flex items-center gap-3 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-sm">Technologies:</span>
        <div className="flex gap-2">
          {["Next.js", "Node.js", "PostgreSQL", "MQTT", "ESP32"].map((tech, i) => (
            <span key={i} className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

// Slide 3: System Architecture
export function ArchitectureSlide() {
  const layers = [
    { name: "Frontend", items: ["Next.js / React", "Responsive UI", "Order Interface"], color: "border-blue-500" },
    { name: "Backend", items: ["Node.js + Express", "REST API", "Stripe Payment"], color: "border-primary" },
    { name: "Database", items: ["PostgreSQL", "Users & Orders", "Machine Logs"], color: "border-green-500" },
    { name: "IoT Layer", items: ["MQTT Protocol", "ESP32 Controller", "Machine Commands"], color: "border-purple-500" },
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <motion.h2 className="text-5xl md:text-6xl font-bold mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        System <span className="gradient-text">Architecture</span>
      </motion.h2>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl w-full">
        {layers.map((layer, i) => (
          <StaggerItem key={i}>
            <motion.div
              className={`p-5 rounded-xl bg-card/80 backdrop-blur border-l-4 ${layer.color} h-full`}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <h3 className="text-lg font-bold text-foreground mb-3">{layer.name}</h3>
              <ul className="space-y-2">
                {layer.items.map((item, j) => (
                  <motion.li
                    key={j}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 + j * 0.05 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <motion.div className="mt-8 flex items-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
        {["Order", "Payment", "MQTT Command", "Machine Execution"].map((step, i) => (
          <div key={i} className="flex items-center">
            <span className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium">{step}</span>
            {i < 3 && (
              <motion.span className="mx-2 text-primary" animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}>
                →
              </motion.span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

// Slide 4: Hardware
export function HardwareSlide() {
  const components = [
    { name: "ESP32 Microcontroller", qty: "1x", price: "80" },
    { name: "Linear Actuators", qty: "6x", price: "1200" },
    { name: "Stepper Motors", qty: "3x", price: "400" },
    { name: "Relay Modules", qty: "20x", price: "300" },
    { name: "Motor Drivers", qty: "3x", price: "240" },
    { name: "Power Supplies", qty: "Multiple", price: "300" },
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <motion.h2 className="text-5xl md:text-6xl font-bold mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Hardware <span className="gradient-text">Implementation</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        <StaggerContainer className="space-y-3">
          {components.map((comp, i) => (
            <StaggerItem key={i}>
              <motion.div
                className="flex items-center justify-between p-4 rounded-lg bg-card/60 backdrop-blur border border-border/50"
                whileHover={{ scale: 1.02, borderColor: "rgba(243, 156, 18, 0.3)" }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs text-primary bg-primary/20 px-2 py-1 rounded">{comp.qty}</span>
                  <span className="text-foreground">{comp.name}</span>
                </div>
                <span className="text-muted-foreground">{comp.price} ILS</span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <motion.div className="flex flex-col items-center justify-center" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, type: "spring" }}>
          <GlowingBorder className="w-full">
            <div className="p-8 text-center">
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Estimated Hardware Cost</span>
              <div className="mt-2">
                <AnimatedCounter value={9000} prefix="~" suffix=" ILS" className="text-5xl font-bold gradient-text" />
              </div>
              <div className="mt-4 flex justify-center gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-400">Prototype Ready</span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400">IoT-Based Design</span>
              </div>
            </div>
          </GlowingBorder>
        </motion.div>
      </div>
    </div>
  )
}

// Slide 5: Web Platform
export function WebPlatformSlide() {
  const features = [
    { icon: Lock, title: "User Authentication", desc: "Secure login and registration" },
    { icon: Pizza, title: "Pizza Customization", desc: "Choose size and toppings" },
    { icon: CreditCard, title: "Payment Processing", desc: "Secure Stripe payment" },
    { icon: Bell, title: "Real-time Tracking", desc: "Live order status updates" },
    { icon: Monitor, title: "Admin Dashboard", desc: "Order and system management" },
    { icon: Layers, title: "Order Management", desc: "Complete order workflow" },
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <motion.h2 className="text-5xl md:text-6xl font-bold mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Web <span className="gradient-text">Platform</span>
      </motion.h2>

      <motion.p className="text-muted-foreground mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        A responsive website connected to backend, database, payment, and machine control
      </motion.p>

      <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
        {features.map((feature, i) => (
          <StaggerItem key={i}>
            <motion.div
              className="p-5 rounded-xl bg-card/60 backdrop-blur border border-border/50 flex flex-col items-center text-center gap-3"
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(243, 156, 18, 0.5)",
                boxShadow: "0 0 30px rgba(243, 156, 18, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm">{feature.title}</h3>
              <p className="text-xs text-muted-foreground">{feature.desc}</p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  )
}

// Slide 6: Testing Results
export function TestingSlide() {
  const tests = [
    { name: "User Registration", status: true },
    { name: "Login Authentication", status: true },
    { name: "Pizza Customization", status: true },
    { name: "Payment Processing", status: true },
    { name: "PostgreSQL Transactions", status: true },
    { name: "MQTT Communication", status: true },
    { name: "ESP32 Command Reception", status: true },
    { name: "Machine Execution", status: true },
    { name: "Order Status Updates", status: true },
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <motion.h2 className="text-5xl md:text-6xl font-bold mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Testing <span className="gradient-text">Results</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <StaggerContainer className="space-y-2">
          {tests.map((test, i) => (
            <StaggerItem key={i}>
              <motion.div className="flex items-center justify-between p-3 rounded-lg bg-card/40 backdrop-blur" whileHover={{ x: 5 }}>
                <span className="text-foreground text-sm">{test.name}</span>
                {test.status ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <XCircle className="w-5 h-5 text-red-500" />}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <motion.div className="flex flex-col items-center justify-center" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, type: "spring" }}>
          <div className="relative">
            <motion.div className="w-48 h-48 rounded-full border-8 border-green-500/30 flex items-center justify-center" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-6xl font-bold text-green-500">9/9</span>
              <span className="text-sm text-muted-foreground mt-2">Tests Passed</span>
            </div>
          </div>
          <motion.div className="mt-6 px-6 py-3 rounded-full bg-green-500/20 text-green-400 font-medium" animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
            100% Success Rate
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

// Slide 7: Competition Analysis
export function CompetitionSlide() {
  const competitors = [
    { name: "Pizza Go", web: true, customize: true, integrated: true, cost: "Low", highlight: true },
    { name: "Let's Pizza", web: false, customize: false, integrated: false, cost: "High", highlight: false },
    { name: "Picnic Pizza Robot", web: false, customize: true, integrated: false, cost: "Very High", highlight: false },
    { name: "Robotic Food Systems", web: true, customize: false, integrated: true, cost: "High", highlight: false },
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <motion.h2 className="text-5xl md:text-6xl font-bold mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Competitive <span className="gradient-text">Analysis</span>
      </motion.h2>

      <motion.div className="w-full max-w-4xl overflow-hidden rounded-xl border border-border/50" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <table className="w-full">
          <thead>
            <tr className="bg-secondary/50">
              <th className="p-4 text-left text-sm font-medium text-foreground">Solution</th>
              <th className="p-4 text-center text-sm font-medium text-foreground">Web Platform</th>
              <th className="p-4 text-center text-sm font-medium text-foreground">Customization</th>
              <th className="p-4 text-center text-sm font-medium text-foreground">Integrated</th>
              <th className="p-4 text-center text-sm font-medium text-foreground">Cost</th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((comp, i) => (
              <motion.tr key={i} className={`border-t border-border/30 ${comp.highlight ? "bg-primary/10" : ""}`} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.1 }}>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    {comp.highlight && <Award className="w-4 h-4 text-primary" />}
                    <span className={`font-medium ${comp.highlight ? "text-primary" : "text-foreground"}`}>{comp.name}</span>
                  </div>
                </td>
                <td className="p-4 text-center">{comp.web ? <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /> : <XCircle className="w-5 h-5 text-red-500/50 mx-auto" />}</td>
                <td className="p-4 text-center">{comp.customize ? <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /> : <XCircle className="w-5 h-5 text-red-500/50 mx-auto" />}</td>
                <td className="p-4 text-center">{comp.integrated ? <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /> : <XCircle className="w-5 h-5 text-red-500/50 mx-auto" />}</td>
                <td className="p-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      comp.cost === "Low"
                        ? "bg-green-500/20 text-green-400"
                        : comp.cost === "High"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {comp.cost}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  )
}

// Slide 8: Conclusion
export function ConclusionSlide() {
  const futureWork = [
    { icon: Smartphone, title: "Mobile App", desc: "iOS and Android application" },
    { icon: Brain, title: "AI Recommendations", desc: "Suggest toppings based on user preferences" },
    { icon: Languages, title: "Multi-language Support", desc: "Arabic and English interface enhancement" },
    { icon: Sparkles, title: "Advanced Automation", desc: "Improve ingredient control and machine accuracy" },
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <motion.h2 className="text-5xl md:text-6xl font-bold mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Conclusion & <span className="gradient-text">Future</span>
      </motion.h2>

      <motion.p className="text-lg text-muted-foreground text-center max-w-2xl mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        Pizza Go successfully connects web ordering, online payment, database management, MQTT communication, and ESP32-based machine control.
      </motion.p>

      <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
        {futureWork.map((item, i) => (
          <StaggerItem key={i}>
            <motion.div className="p-5 rounded-xl bg-card/60 backdrop-blur border border-border/50 flex flex-col items-center text-center gap-3" whileHover={{ scale: 1.05, borderColor: "rgba(243, 156, 18, 0.5)" }}>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <motion.div className="mt-10 flex gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
        <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm">Prototype Complete</span>
        <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm">IoT Integrated</span>
        <span className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm">Future Expandable</span>
      </motion.div>
    </div>
  )
}

// Slide 9: Thank You
export function ThankYouSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 relative">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 100, damping: 15 }} className="mb-8">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-accent to-pizza-red flex items-center justify-center glow-orange">
          <Sparkles className="w-12 h-12 text-background" />
        </div>
      </motion.div>

      <motion.h2 className="text-6xl md:text-8xl font-bold gradient-text text-glow mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        Thank You!
      </motion.h2>

      <motion.p className="text-2xl text-muted-foreground mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        Questions & Discussion
      </motion.p>

      <motion.div className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
        <div className="flex items-center gap-6 text-muted-foreground">
          <span>Shaimaa Dwedar</span>
        </div>
        <span className="text-sm text-muted-foreground/60">Graduation Project | 2025-2026</span>
      </motion.div>

      <motion.div className="absolute bottom-16 flex items-center gap-2 text-primary" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <Pizza className="w-5 h-5" />
        <span className="text-sm font-medium">Pizza Go - Smart Pizza Ordering & Automated Preparation</span>
        <Pizza className="w-5 h-5" />
      </motion.div>
    </div>
  )
}