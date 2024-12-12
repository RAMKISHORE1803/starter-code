"use client"
import React, { useState, useEffect, JSX } from "react";
import {
  Code,
  Terminal,
  Database,
  Github,
  ChevronRight,
  Mail,
  Lock,
  KeyRound,
  Loader2,
  CheckCircle2,
  Users,
  Star,
  Menu,
  Sparkles,
  Cpu,
  Rocket,
  ArrowRight,
  MonitorSmartphone,
  Server,
  HardDrive,
  Navigation,
} from "lucide-react";
import MobileNavigationConfig from "./MobileNavigationConfig";

const StackBuilderSection = () => {
  const [selectedFrontend, setSelectedFrontend] = useState("");
  const [selectedBackend, setSelectedBackend] = useState("");
  const [selectedDatabase, setSelectedDatabase] = useState("");
  const [wantsAuth, setWantsAuth] = useState<boolean | null>(null);
  const [selectedAuth, setSelectedAuth] = useState<string[]>([]);
  const [layoutType, setLayoutType] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeSection, setActiveSection] = useState("project");
  const [tabs, setTabs] = useState([
    { id: 1, name: 'Home', icon: '🏠' },
    { id: 2, name: 'Profile', icon: '👤' },
  ]);
  const [newTabName, setNewTabName] = useState('');

  interface AuthOption {
    name: string;
    icon: JSX.Element | string;
    desc: string;
  }

  const addTab = () => {
    if (newTabName.trim() && tabs.length < 5) {
      setTabs([...tabs, { 
        id: Date.now(), 
        name: newTabName.trim(),
        icon: '📱' 
      }]);
      setNewTabName('');
    }
  };
  
  const removeTab = (id: number) => {
    setTabs(tabs.filter(tab => tab.id !== id));
  };

  const handleAuthToggle = (auth: string) => {
    setSelectedAuth((prevAuth) =>
      prevAuth.includes(auth)
        ? prevAuth.filter((a) => a !== auth)
        : [...prevAuth, auth]
    );
  };

  const sections = [
    {
      id: "project",
      title: "Project Details",
      icon: <Sparkles className="w-5 h-5" />,
    },
    {
      id: "frontend",
      title: "Frontend",
      icon: <MonitorSmartphone className="w-5 h-5" />,
    },
    { id: "backend", title: "Backend", icon: <Server className="w-5 h-5" /> },
    {
      id: "database",
      title: "Database",
      icon: <HardDrive className="w-5 h-5" />,
    },
    { id: "auth", title: "Authentication", icon: <Lock className="w-5 h-5" /> },
    { 
        id: "layout", 
        title: selectedFrontend === "React Native + Expo" ? "Navigation" : "Layout", 
        icon: selectedFrontend === "React Native + Expo" ? 
          <Navigation className="w-5 h-5" /> : 
          <Menu className="w-5 h-5" /> 
      },  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-black" />
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-400 mb-4">
            <Cpu className="w-8 h-8 animate-pulse" />
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Build your dream stack.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              Make it extraordinary.
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose your tech stack and we'll generate a production-ready project
            with all the best practices built in.
          </p>
        </div>

        {/* Progress Tabs */}
        <div className="mb-12">
          <div className="flex overflow-x-auto gap-2 p-2 bg-gray-900/50 rounded-xl backdrop-blur-sm">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300
                  ${
                    activeSection === section.id
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                      : "text-gray-400 hover:text-white hover:bg-gray-800"
                  }
                `}
              >
                {section.icon}
                <span>{section.title}</span>
                {index < sections.length - 1 && (
                  <ChevronRight
                    className={`w-4 h-4 ${
                      activeSection === section.id
                        ? "text-white"
                        : "text-gray-600"
                    }`}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Project Details */}
          <div className={activeSection === "project" ? "block" : "hidden"}>
            <div className="max-w-2xl mx-auto space-y-8">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-gray-900 ring-1 ring-gray-800 rounded-lg p-6">
                  <label className="block text-sm font-medium mb-2">
                    Project Name
                  </label>
                  <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="Enter your project name"
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
              </div>
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-gray-900 ring-1 ring-gray-800 rounded-lg p-6">
                  <label className="block text-sm font-medium mb-2">
                    Project Description
                  </label>
                  <textarea
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    placeholder="Briefly describe your project"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Frontend Selection */}
          <div className={activeSection === "frontend" ? "block" : "hidden"}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "React",
                  logo: "⚛️",
                  desc: "Popular UI library",
                  features: [
                    "Component-Based",
                    "Large Ecosystem",
                    "Active Community",
                  ],
                },
                {
                  name: "Next.js",
                  logo: "▲",
                  desc: "React framework with SSR",
                  features: [
                    "Server-Side Rendering",
                    "File-Based Routing",
                    "API Routes",
                  ],
                },
                {
                  name: "React Native + Expo",
                  logo: "📱",
                  desc: "Mobile development",
                  features: [
                    "Cross-Platform",
                    "Native Performance",
                    "Rapid Development",
                  ],
                },
              ].map((framework) => (
                <div
                  key={framework.name}
                  onClick={() => setSelectedFrontend(framework.name)}
                  className={`
                    group relative overflow-hidden rounded-xl cursor-pointer
                    transition-all duration-500 hover:shadow-2xl
                    ${
                      selectedFrontend === framework.name
                        ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50 shadow-lg shadow-blue-500/20"
                        : "bg-gray-900/50 border-2 border-gray-800/50 hover:border-gray-700/50"
                    }
                  `}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  <div className="relative p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl p-3 bg-black/30 rounded-lg">
                        {framework.logo}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">
                          {framework.name}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {framework.desc}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {framework.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-gray-400"
                        >
                          <CheckCircle2 className="w-4 h-4 text-blue-400" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    {selectedFrontend === framework.name && (
                      <div className="absolute top-4 right-4">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Selection */}
          <div className={activeSection === "backend" ? "block" : "hidden"}>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                {
                  name: "Express",
                  logo: "🚂",
                  desc: "Fast, unopinionated",
                  color: "from-green-600/20 to-emerald-600/20",
                },
                {
                  name: "Flask",
                  logo: "🌶️",
                  desc: "Python micro-framework",
                  color: "from-red-600/20 to-orange-600/20",
                },
                {
                  name: "FastAPI",
                  logo: "⚡",
                  desc: "Modern Python framework",
                  color: "from-teal-600/20 to-cyan-600/20",
                },
                {
                  name: "Firebase",
                  logo: "🔥",
                  desc: "Backend-as-a-Service",
                  color: "from-yellow-600/20 to-orange-600/20",
                },
                {
                  name: "Supabase",
                  logo: "⚡",
                  desc: "Open source Firebase alternative",
                  color: "from-purple-600/20 to-indigo-600/20",
                },
              ].map((framework) => (
                <div
                  key={framework.name}
                  onClick={() => setSelectedBackend(framework.name)}
                  className={`
                    group relative overflow-hidden p-6 rounded-xl cursor-pointer
                    transition-all duration-300 hover:shadow-xl
                    ${
                      selectedBackend === framework.name
                        ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50 shadow-lg shadow-blue-500/20"
                        : "bg-gray-900/50 border-2 border-gray-800/50 hover:border-gray-700/50"
                    }
                  `}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${framework.color} opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl`}
                  />
                  <div className="relative">
                    <div className="text-4xl mb-4 p-3 bg-black/30 rounded-lg inline-block">
                      {framework.logo}
                    </div>
                    <h4 className="text-lg font-semibold mb-2">
                      {framework.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{framework.desc}</p>
                    {selectedBackend === framework.name && (
                      <div className="absolute top-3 right-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Database Selection */}
          <div className={activeSection === "database" ? "block" : "hidden"}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "MongoDB",
                  logo: "🍃",
                  desc: "NoSQL database",
                  features: [
                    "Document-Based",
                    "Scalable",
                    "JSON-like Documents",
                  ],
                  color: "from-green-600/20 to-emerald-600/20",
                },
                {
                  name: "PostgreSQL",
                  logo: "🐘",
                  desc: "Advanced SQL database",
                  features: ["ACID Compliant", "Advanced Features", "Reliable"],
                  color: "from-blue-600/20 to-indigo-600/20",
                },
                {
                  name: "MySQL",
                  logo: "🐬",
                  desc: "Popular SQL database",
                  features: ["Easy to Use", "Well-Supported", "Fast"],
                  color: "from-orange-600/20 to-yellow-600/20",
                },
              ].map((db) => (
                <div
                  key={db.name}
                  onClick={() => setSelectedDatabase(db.name)}
                  className={`
                    group relative overflow-hidden rounded-xl cursor-pointer
                    transition-all duration-500 hover:shadow-2xl
                    ${
                      selectedDatabase === db.name
                        ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50 shadow-lg shadow-blue-500/20"
                        : "bg-gray-900/50 border-2 border-gray-800/50 hover:border-gray-700/50"
                    }
                  `}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${db.color} opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl`}
                  />
                  <div className="relative p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl p-3 bg-black/30 rounded-lg">
                        {db.logo}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">{db.name}</h4>
                        <p className="text-gray-400 text-sm">{db.desc}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {db.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-gray-400"
                        >
                          <CheckCircle2 className="w-4 h-4 text-blue-400" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    {selectedDatabase === db.name && (
                      <div className="absolute top-4 right-4">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Authentication Setup */}
          <div className={activeSection === "auth" ? "block" : "hidden"}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-gray-800/50 mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Do you want authentication setup?
                </h3>
                <p className="text-gray-400 mb-6">
                  We'll generate sign-in, sign-up, and password reset pages with
                  your selected providers.
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => setWantsAuth(true)}
                    className={`
                    flex-1 px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2
                    ${
                      wantsAuth === true
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                        : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                    }
                  `}
                  >
                    <Lock className="w-5 h-5" />
                    Yes, include auth
                  </button>
                  <button
                    onClick={() => setWantsAuth(false)}
                    className={`
                    flex-1 px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2
                    ${
                      wantsAuth === false
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                        : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                    }
                  `}
                  >
                    <ArrowRight className="w-5 h-5" />
                    No, skip auth
                  </button>
                </div>
              </div>

              {wantsAuth && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    {
                      name: "Email/Password",
                      icon: <Mail className="w-6 h-6" />,
                      desc: "Traditional login",
                    },
                    {
                      name: "Magic Link",
                      icon: <KeyRound className="w-6 h-6" />,
                      desc: "Passwordless auth",
                    },
                    {
                      name: "Google",
                      icon: "🔑",
                      desc: "OAuth provider",
                    },
                    {
                      name: "GitHub",
                      icon: <Github className="w-6 h-6" />,
                      desc: "Developer friendly",
                    },
                  ].map((auth) => (
                    <div
                      key={auth.name}
                      onClick={() => handleAuthToggle(auth.name)}
                      className={`
                      group relative p-6 rounded-xl cursor-pointer
                      transition-all duration-300 transform hover:scale-105
                      ${
                        selectedAuth.includes(auth.name)
                          ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50 shadow-lg shadow-blue-500/20"
                          : "bg-gray-900/50 border-2 border-gray-800/50 hover:border-gray-700/50"
                      }
                    `}
                    >
                      <div className="flex flex-col items-start gap-4">
                        <div className="p-3 bg-black/30 rounded-lg text-blue-400">
                          {auth.icon}
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">{auth.name}</h4>
                          <p className="text-sm text-gray-400">{auth.desc}</p>
                        </div>
                      </div>
                      {selectedAuth.includes(auth.name) && (
                        <div className="absolute top-3 right-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Layout Selection */}
          <div className={activeSection === "layout" ? "block" : "hidden"}>
          {selectedFrontend === "React Native + Expo" ? (
    <MobileNavigationConfig />
  ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div
                onClick={() => setLayoutType("navbar")}
                className={`
                group relative overflow-hidden rounded-xl cursor-pointer
                transition-all duration-500 hover:shadow-2xl
                ${
                  layoutType === "navbar"
                    ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50 shadow-lg shadow-blue-500/20"
                    : "bg-gray-900/50 border-2 border-gray-800/50 hover:border-gray-700/50"
                }
              `}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                <div className="relative p-8">
                  <div className="p-4 bg-black/30 rounded-xl mb-6 w-16 h-16 flex items-center justify-center">
                    <Menu className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    Professional Navbar & Footer
                  </h4>
                  <p className="text-gray-400">
                    Classic layout with top navigation and footer
                  </p>
                  <div className="mt-6 p-4 bg-black/30 rounded-lg">
                    <div className="w-full h-2 bg-blue-500/20 rounded mb-4" />
                    <div className="space-y-2">
                      <div className="w-3/4 h-2 bg-gray-700 rounded" />
                      <div className="w-1/2 h-2 bg-gray-700 rounded" />
                    </div>
                  </div>
                </div>
              </div>

              <div
                onClick={() => setLayoutType("sidebar")}
                className={`
                group relative overflow-hidden rounded-xl cursor-pointer
                transition-all duration-500 hover:shadow-2xl
                ${
                  layoutType === "sidebar"
                    ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50 shadow-lg shadow-blue-500/20"
                    : "bg-gray-900/50 border-2 border-gray-800/50 hover:border-gray-700/50"
                }
              `}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                <div className="relative p-8">
                  <div className="p-4 bg-black/30 rounded-xl mb-6 w-16 h-16 flex items-center justify-center">
                    <Menu className="w-8 h-8 text-blue-400 rotate-90" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    Sidebar Navigation
                  </h4>
                  <p className="text-gray-400">
                    Modern dashboard layout with side navigation
                  </p>
                  <div className="mt-6 p-4 bg-black/30 rounded-lg">
                    <div className="flex gap-4">
                      <div className="w-1/4">
                        <div className="w-full h-full bg-blue-500/20 rounded" />
                      </div>
                      <div className="w-3/4 space-y-2">
                        <div className="w-3/4 h-2 bg-gray-700 rounded" />
                        <div className="w-1/2 h-2 bg-gray-700 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>

                  {/* IIIT Kottayam Domain Hosting */}
                  <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Host with IIIT Kottayam Domain
            </h3>
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-8 border-2 border-blue-500/20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h4 className="text-2xl font-semibold mb-4">
                    Get Your Own
                    <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
                      {" "}
                      Professional Subdomain
                    </span>
                  </h4>
                  <p className="text-gray-300 text-lg mb-6">
                    Stand out with an official IIIT Kottayam subdomain for your
                    project:
                    <br />
                    <code className="text-blue-400 bg-gray-900 px-2 py-1 rounded mt-2 inline-block">
                      yourproject.iiitkottayam.in
                    </code>
                  </p>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-blue-400 w-5 h-5" />
                      <span>Instant SSL certification</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="text-blue-400 w-5 h-5" />
                      <span>Build your professional identity</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="text-blue-400 w-5 h-5" />
                      <span>Show you're part of IIIT Kottayam</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-900 rounded-lg p-6 space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Regular Domain</span>
                        <span className="line-through text-gray-500">
                          ₹800/year
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-lg">
                        <span className="text-blue-400">
                          IIIT Kottayam Domain
                        </span>
                        <span className="text-green-400 font-bold">Free</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-800">
                      <label className="block text-sm font-medium mb-2">
                        Choose your subdomain
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder="yourproject"
                          className="flex-1 px-3 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                        <span className="text-gray-400">.iiitkottayam.in</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* GitHub Integration */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-center">
            GitHub Integration
          </h3>
          <div className="bg-gray-900 rounded-xl p-6 border-2 border-gray-800">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h4 className="font-semibold mb-2">
                  One-Click Repository Setup
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  We'll create a new repository, set up GitHub Actions for
                  CI/CD, and push your initial commit with a detailed README.
                </p>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <Github className="w-5 h-5" />
                  Connect GitHub
                </button>
              </div>
              <div className="flex-1">
                <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm text-gray-300">
                  {`name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test`}
                </div>
              </div>
            </div>
          </div>
        </div>
        

        {/* Generate Button */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => {}}
            disabled={
                !selectedFrontend ||
                !selectedBackend ||
                !selectedDatabase ||
                (selectedFrontend === "React Native + Expo" ? false : !layoutType) ||
                !projectName ||
                !projectDescription ||
                isGenerating
              }
            className={`
            group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-lg 
            transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed
            transform hover:scale-105 active:scale-95
          `}
          >
            {isGenerating ? (
              <span className="flex items-center justify-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Building something amazing...
              </span>
            ) : (
              <span className="flex items-center">
                Generate Project
                <Rocket className="ml-2 transition-transform group-hover:translate-x-1" />
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default StackBuilderSection;
