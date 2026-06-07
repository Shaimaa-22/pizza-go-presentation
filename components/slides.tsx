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
  Sparkles,
  Pizza,
  Code2,
  Cpu,
  Workflow,
  Table2,
  Rocket,
  HardDrive,
  BookOpen,
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
        <span className="text-lg">Shaimaa Dwedar</span>
        <span className="text-sm opacity-60">Supervisor: Dr. Emad Hamadeh</span>
        <span className="text-sm opacity-60">Graduation Project | 2025-2026</span>
      </motion.div>
    </div>
  )
}

// Slide 1: Problem
export function ProblemSlide() {
  const problems = [
    { icon: Zap, title: "Inconsistent Quality", desc: "Manual preparation can vary from one order to another" },
    { icon: Clock, title: "Slow Service", desc: "Traditional preparation may cause long waiting times" },
    { icon: Users, title: "Labor Dependency", desc: "Food preparation depends heavily on manual work" },
    { icon: Link2, title: "Limited Integration", desc: "Ordering systems are often separated from machine execution" },
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <h2 className="text-5xl md:text-7xl font-bold text-center mb-12">
        <span className="text-accent">The</span> Problem
      </h2>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {problems.map((problem, i) => (
          <StaggerItem key={i}>
            <GlowingBorder>
              <div className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{problem.title}</h3>
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

// Slide 2: Functional Requirements
export function FunctionalRequirementsSlide() {
  const groups = [
    {
      title: "User Features",
      icon: Users,
      items: ["Registration", "Login", "Pizza Customization", "Order Tracking"],
    },
    {
      title: "System Features",
      icon: Server,
      items: ["Order Placement", "Online Payment", "Database Management"],
    },
    {
      title: "Machine Features",
      icon: Cpu,
      items: ["MQTT Communication", "ESP32 Control", "Automated Preparation"],
    },
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <h2 className="text-5xl md:text-6xl font-bold mb-10">
        Functional <span className="gradient-text">Requirements</span>
      </h2>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {groups.map((group, i) => (
          <StaggerItem key={i}>
            <motion.div
              className="h-full p-6 rounded-2xl bg-card/70 border border-border/50 backdrop-blur"
              whileHover={{
                scale: 1.04,
                y: -8,
                borderColor: "rgba(34, 197, 94, 0.5)",
              }}
            >
              <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center mb-5">
                <group.icon className="w-7 h-7 text-green-500" />
              </div>

              <h3 className="text-xl font-bold mb-5">{group.title}</h3>

              <div className="space-y-3">
                {group.items.map((item, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-3 p-3 rounded-lg bg-background/40 border border-border/30"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  )
}

// Slide 3: Non-Functional Requirements
export function NonFunctionalRequirementsSlide() {
  const requirements = [
    { title: "Performance", icon: Zap },
    { title: "Reliability", icon: CheckCircle2 },
    { title: "Security", icon: Lock },
    { title: "Availability", icon: Globe },
    { title: "Usability", icon: Monitor },
    { title: "Scalability", icon: Rocket },
    { title: "Maintainability", icon: Cog },
    { title: "Compatibility", icon: Wifi },
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <h2 className="text-5xl md:text-6xl font-bold mb-10">
        Non-Functional <span className="gradient-text">Requirements</span>
      </h2>

      <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl w-full">
        {requirements.map((req, i) => (
          <StaggerItem key={i}>
            <motion.div
              className="p-6 min-h-36 rounded-2xl bg-card/70 border border-border/50 flex flex-col items-center justify-center text-center gap-4"
              whileHover={{
                scale: 1.08,
                rotateY: 8,
                borderColor: "rgba(59, 130, 246, 0.6)",
              }}
            >
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center">
                <req.icon className="w-7 h-7 text-blue-500" />
              </div>

              <h3 className="font-semibold text-base">{req.title}</h3>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <p className="mt-8 text-muted-foreground text-sm text-center max-w-3xl">
        These requirements improve system quality, security, reliability, and user experience.
      </p>
    </div>
  )
}

// Slide 4: Literature Review
export function LiteratureReviewSlide() {
  const studies = [
    {
      title: "Let's Pizza",
      contribution: "Automated pizza vending",
      limitation: "Limited customization",
    },
    {
      title: "Picnic Robot",
      contribution: "Robotic pizza assembly",
      limitation: "Needs supervision",
    },
    {
      title: "IoT Food Systems",
      contribution: "Real-time monitoring",
      limitation: "Monitoring only",
    },
    {
      title: "Smart Ordering",
      contribution: "Online ordering & payment",
      limitation: "No machine integration",
    },
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <h2 className="text-5xl md:text-6xl font-bold mb-10">
        Literature <span className="gradient-text">Review</span>
      </h2>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl w-full">
        {studies.map((study, i) => (
          <StaggerItem key={i}>
            <div className="p-5 rounded-xl bg-card/70 border border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>

                <h3 className="text-lg font-bold">{study.title}</h3>
              </div>

              <p className="text-green-400 text-sm mb-2">
                {study.contribution}
              </p>

              <p className="text-muted-foreground text-sm">
                {study.limitation}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  )
}
// Slide 5: Solution
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
      <h2 className="text-5xl md:text-7xl font-bold mb-4">
        <span className="gradient-text">The Solution</span>
      </h2>

      <p className="text-xl text-muted-foreground text-center max-w-2xl mb-12">
        <TextReveal text="An integrated website and automated pizza preparation machine" delay={0.3} />
      </p>

      <StaggerContainer className="flex flex-wrap justify-center gap-4">
        {components.map((comp, i) => (
          <StaggerItem key={i}>
            <FloatingCard delay={i * 0.1}>
              <div className="p-6 rounded-2xl bg-card border border-border/50 flex flex-col items-center gap-3 w-36">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${comp.color} flex items-center justify-center`}>
                  <comp.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-sm font-medium text-center">{comp.title}</span>
              </div>
            </FloatingCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  )
}

// Slide 6: Technologies Used
export function TechnologiesSlide() {
  const techGroups = [
    { icon: Code2, title: "Frontend", items: ["HTML", "CSS", "JavaScript"] },
    { icon: Server, title: "Backend", items: ["Node.js", "Express.js"] },
    { icon: Database, title: "Database", items: ["PostgreSQL"] },
    { icon: Wifi, title: "Communication", items: ["MQTT Protocol"] },
    { icon: Cpu, title: "Embedded System", items: ["ESP32"] },
    { icon: CreditCard, title: "Payment", items: ["Stripe"] },
    { icon: Rocket, title: "Deployment", items: ["Vercel", "Render", "Neon PostgreSQL"] },
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <h2 className="text-5xl md:text-6xl font-bold mb-10">
        Technologies <span className="gradient-text">Used</span>
      </h2>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl">
        {techGroups.map((group, i) => (
          <StaggerItem key={i}>
            <motion.div
              className="p-5 rounded-xl bg-card/70 backdrop-blur border border-border/50 h-full"
              whileHover={{ scale: 1.04, borderColor: "rgba(243, 156, 18, 0.5)" }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <group.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <span key={j} className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  )
}

// Slide 7: Architecture
export function ArchitectureSlide() {
  const layers = [
    { name: "Frontend", items: ["HTML", "CSS", "JavaScript", "Responsive Interface"], color: "border-blue-500" },
    { name: "Backend", items: ["Node.js + Express", "REST API", "Stripe Payment"], color: "border-primary" },
    { name: "Database", items: ["PostgreSQL", "Users & Orders", "Machine Logs"], color: "border-green-500" },
    { name: "IoT Layer", items: ["MQTT Protocol", "ESP32 Controller", "Machine Commands"], color: "border-purple-500" },
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <h2 className="text-5xl md:text-6xl font-bold mb-12">
        System <span className="gradient-text">Architecture</span>
      </h2>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl w-full">
        {layers.map((layer, i) => (
          <StaggerItem key={i}>
            <div className={`p-5 rounded-xl bg-card/80 backdrop-blur border-l-4 ${layer.color} h-full`}>
              <h3 className="text-lg font-bold mb-3">{layer.name}</h3>
              <ul className="space-y-2">
                {layer.items.map((item, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
        {["Order", "Payment", "Database", "MQTT", "ESP32", "Machine"].map((step, i) => (
          <div key={i} className="flex items-center">
            <span className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium">{step}</span>
            {i < 5 && <span className="mx-2 text-primary">→</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

// Slide 8: Workflow
export function WorkflowSlide() {
  const steps = [
    "Customer Places Order",
    "Payment Processing",
    "Order Stored in PostgreSQL",
    "Backend Generates Commands",
    "MQTT Sends Commands",
    "ESP32 Receives Commands",
    "Pizza Preparation",
    "Order Ready",
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <h2 className="text-5xl md:text-6xl font-bold mb-10">
        System <span className="gradient-text">Workflow</span>
      </h2>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl">
        {steps.map((step, i) => (
          <StaggerItem key={i}>
            <motion.div
              className="relative p-5 rounded-xl bg-card/70 border border-border/50 text-center min-h-28 flex flex-col items-center justify-center"
              whileHover={{ scale: 1.04 }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold mb-3">
                {i + 1}
              </div>
              <p className="text-sm font-medium">{step}</p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <div className="mt-8 flex items-center gap-2 text-muted-foreground">
        <Workflow className="w-5 h-5 text-primary" />
        <span className="text-sm">End-to-end workflow from customer order to automated pizza preparation</span>
      </div>
    </div>
  )
}

// Slide 9: Database / ERD
export function DatabaseSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 pb-20">
      <h2 className="text-5xl md:text-6xl font-bold mb-6">
        Database <span className="gradient-text">Design</span>
      </h2>

      <GlowingBorder className="w-full max-w-7xl">
        <div className="p-3 bg-white rounded-xl">
          <img
            src="/image.png"
            alt="Pizza Go ERD"
            className="w-full h-[550px] object-contain rounded-lg"
          />
        </div>
      </GlowingBorder>
    </div>
  )
}

// Slide 10: Hardware
export function HardwareSlide() {
  const components = [
    { name: "ESP32 Microcontroller", qty: "1x" },
    { name: "Stepper Motors", qty: "3x" },
    { name: "Linear Actuators", qty: "6x" },
    { name: "Vibration Motors", qty: "3x" },
    { name: "Relay Modules", qty: "20x" },
    { name: "Power Supplies", qty: "12V / 5V" },
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <h2 className="text-5xl md:text-6xl font-bold mb-8">
        Hardware <span className="gradient-text">Implementation</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full items-center">
        {/* Components List */}
        <StaggerContainer className="space-y-3">
          {components.map((comp, i) => (
            <StaggerItem key={i}>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-card/60 backdrop-blur border border-border/50">
                <span className="text-xs text-primary bg-primary/20 px-3 py-1 rounded">
                  {comp.qty}
                </span>

                <span className="font-medium text-lg">
                  {comp.name}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Hardware Image */}
        <GlowingBorder>
          <div className="p-3 bg-card rounded-xl">
            <img
              src="/image2.png"
              alt="Pizza Go Hardware"
              className="w-full h-[400px] object-cover rounded-lg"
            />

            <p className="text-center text-sm text-muted-foreground mt-3">
              Pizza Go Prototype – Automated Pizza Preparation Machine
            </p>
          </div>
        </GlowingBorder>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm">
          Prototype Completed
        </span>

        <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm">
          ESP32 Controlled
        </span>

        <span className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm">
          MQTT Integrated
        </span>

        <span className="px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm">
          Automated Preparation
        </span>
      </div>
    </div>
  )
}

// Slide 11: Web Platform
export function WebPlatformSlide() {
  const features = [
    { icon: Lock, title: "User Authentication", desc: "Secure login and registration" },
    { icon: Pizza, title: "Pizza Customization", desc: "Choose size and toppings" },
    { icon: CreditCard, title: "Payment Processing", desc: "Secure Stripe payment" },
    { icon: Bell, title: "Real-time Tracking", desc: "Live order status updates" },
    { icon: Monitor, title: "Admin Dashboard", desc: "Order and system management" },
    { icon: Database, title: "Database Storage", desc: "Users, orders, payments, and logs" },
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <h2 className="text-5xl md:text-6xl font-bold mb-4">
        Web <span className="gradient-text">Platform</span>
      </h2>

      <p className="text-muted-foreground mb-10">
        A responsive website connected to backend, database, payment, and machine control
      </p>

      <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
        {features.map((feature, i) => (
          <StaggerItem key={i}>
            <div className="p-5 rounded-xl bg-card/60 backdrop-blur border border-border/50 flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm">{feature.title}</h3>
              <p className="text-xs text-muted-foreground">{feature.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  )
}

// Slide 12: Testing
export function TestingSlide() {
  const tests = [
    "User Registration",
    "Login Authentication",
    "Pizza Customization",
    "Payment Processing",
    "PostgreSQL Transactions",
    "MQTT Communication",
    "ESP32 Command Reception",
    "Machine Execution",
    "Order Status Updates",
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <h2 className="text-5xl md:text-6xl font-bold mb-8">
        Testing <span className="gradient-text">Validation</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <StaggerContainer className="space-y-2">
          {tests.map((test, i) => (
            <StaggerItem key={i}>
              <div className="flex items-center justify-between p-3 rounded-lg bg-card/40 backdrop-blur">
                <span className="text-sm">{test}</span>
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            <div className="w-48 h-48 rounded-full border-8 border-green-500/30 flex items-center justify-center" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-6xl font-bold text-green-500">9/9</span>
              <span className="text-sm text-muted-foreground mt-2">Tests Passed</span>
            </div>
          </div>
          <div className="mt-6 px-6 py-3 rounded-full bg-green-500/20 text-green-400 font-medium">
            All Tests Passed Successfully
          </div>
        </div>
      </div>
    </div>
  )
}

// Slide 13: Results
export function ResultsSlide() {
  const results = [
    "User Registration Successful",
    "Login Authentication Successful",
    "Payment Processing Successful",
    "PostgreSQL Integration Successful",
    "MQTT Communication Stable",
    "ESP32 Command Reception Successful",
    "Order Tracking Successful",
    "Complete System Integration Successful",
    "Order Success Rate = 100%",
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <h2 className="text-5xl md:text-6xl font-bold mb-8">
        Results & <span className="gradient-text">Achievements</span>
      </h2>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl">
        {results.map((result, i) => (
          <StaggerItem key={i}>
            <motion.div
              className="p-5 rounded-xl bg-card/70 border border-border/50 flex items-start gap-3 min-h-24"
              whileHover={{ scale: 1.04, borderColor: "rgba(34, 197, 94, 0.5)" }}
            >
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <span className="text-sm font-medium">{result}</span>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  )
}

// Slide 14: Competition
export function CompetitionSlide() {
  const competitors = [
    { name: "Pizza Go", web: true, payment: true, database: true, mqtt: true, monitoring: true, highlight: true },
    { name: "Let's Pizza", web: false, payment: false, database: false, mqtt: false, monitoring: false, highlight: false },
    { name: "Picnic Pizza Robot", web: false, payment: false, database: false, mqtt: false, monitoring: false, highlight: false },
    { name: "Robotic Beverage Systems", web: true, payment: true, database: true, mqtt: false, monitoring: true, highlight: false },
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <h2 className="text-5xl md:text-6xl font-bold mb-10">
        Competitive <span className="gradient-text">Analysis</span>
      </h2>

      <div className="w-full max-w-5xl overflow-hidden rounded-xl border border-border/50">
        <table className="w-full">
          <thead>
            <tr className="bg-secondary/50">
              <th className="p-4 text-left text-sm">Solution</th>
              <th className="p-4 text-center text-sm">Online Ordering</th>
              <th className="p-4 text-center text-sm">Payment</th>
              <th className="p-4 text-center text-sm">Database</th>
              <th className="p-4 text-center text-sm">MQTT</th>
              <th className="p-4 text-center text-sm">Monitoring</th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((comp, i) => (
              <tr key={i} className={`border-t border-border/30 ${comp.highlight ? "bg-primary/10" : ""}`}>
                <td className="p-4 font-medium">
                  <div className="flex items-center gap-2">
                    {comp.highlight && <Award className="w-4 h-4 text-primary" />}
                    <span className={comp.highlight ? "text-primary" : ""}>{comp.name}</span>
                  </div>
                </td>
                {[comp.web, comp.payment, comp.database, comp.mqtt, comp.monitoring].map((value, j) => (
                  <td key={j} className="p-4 text-center">
                    {value ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500/50 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// Slide 15: Conclusion
export function ConclusionSlide() {
  const futureWork = [
    { icon: Smartphone, title: "Mobile App", desc: "iOS and Android application" },
    { icon: Brain, title: "Computer Vision", desc: "Detect ingredient placement and quality" },
    { icon: Languages, title: "Multi-language Support", desc: "Improve Arabic and English interface" },
    { icon: Sparkles, title: "Advanced Automation", desc: "Improve ingredient control and machine accuracy" },
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <h2 className="text-5xl md:text-6xl font-bold mb-6">
        Conclusion & <span className="gradient-text">Future Work</span>
      </h2>

      <p className="text-lg text-muted-foreground text-center max-w-3xl mb-10">
        Pizza Go successfully integrates web technologies, database management, IoT communication,
        embedded systems, and mechanical automation into a complete automated pizza preparation platform.
      </p>

      <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
        {futureWork.map((item, i) => (
          <StaggerItem key={i}>
            <div className="p-5 rounded-xl bg-card/60 backdrop-blur border border-border/50 flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <div className="mt-10 flex gap-4 flex-wrap justify-center">
        <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm">Prototype Complete</span>
        <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm">IoT Integrated</span>
        <span className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm">Future Expandable</span>
      </div>
    </div>
  )
}

// Slide 16: Thank You
export function ThankYouSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 relative">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="mb-8"
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-accent to-pizza-red flex items-center justify-center glow-orange">
          <Sparkles className="w-12 h-12 text-background" />
        </div>
      </motion.div>

      <h2 className="text-6xl md:text-8xl font-bold gradient-text text-glow mb-6">
        Thank You!
      </h2>

      <p className="text-2xl text-muted-foreground mb-8">Questions & Discussion</p>

      <div className="flex flex-col items-center gap-4">
        <span className="text-muted-foreground">Shaimaa Dwedar</span>
        <span className="text-sm text-muted-foreground/60">Graduation Project | 2025-2026</span>
      </div>

      <div className="absolute bottom-16 flex items-center gap-2 text-primary">
        <Pizza className="w-5 h-5" />
        <span className="text-sm font-medium">Pizza Go - Smart Pizza Ordering & Automated Preparation</span>
        <Pizza className="w-5 h-5" />
      </div>
    </div>
  )
}