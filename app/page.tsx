"use client";

import React, { useState, useEffect } from "react";
import {
  Code,
  Terminal,
  Database,
  Rocket,
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
  Shield,
  Award,
  Globe,
  ArrowRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import demo from "./assets/Screenshot 2024-12-12 at 2.38.44 PM.png";
import Image from "next/image";

interface AuthToggleProps {
  auth: string;
}

interface Framework {
  name: string;
  logo: string | React.ReactNode;
  desc: string;
}

const LandingPage = () => {
  const [selectedFrontend, setSelectedFrontend] = useState<string>("");
  const [selectedBackend, setSelectedBackend] = useState<string>("");
  const [selectedDatabase, setSelectedDatabase] = useState<string>("");
  const [wantsAuth, setWantsAuth] = useState<boolean | null>(null);
  const [selectedAuth, setSelectedAuth] = useState<string[]>([]);
  const [layoutType, setLayoutType] = useState<string>("");
  const [projectName, setProjectName] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [showWaitlistModal, setShowWaitlistModal] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAuthToggle = (auth: string) => {
    setSelectedAuth((prevAuth) =>
      prevAuth.includes(auth)
        ? prevAuth.filter((a) => a !== auth)
        : [...prevAuth, auth]
    );
  };

  const handleGenerate = () => {
    if (
      !selectedFrontend ||
      !selectedBackend ||
      !selectedDatabase ||
      !layoutType ||
      !projectName ||
      !projectDescription
    ) {
      return;
    }
    setShowWaitlistModal(true);
  };

  const handleWaitlistSubmit = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowWaitlistModal(false);
      // Reset selections
      setSelectedFrontend("");
      setSelectedBackend("");
      setSelectedDatabase("");
      setSelectedAuth([]);
      setEmail("");
      setWantsAuth(null);
      setLayoutType("");
      setProjectName("");
      setProjectDescription("");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden pt-[20vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black pointer-events-none" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url("/api/placeholder/1920/1080")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            changing the way
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              you start projects.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Create production-ready starter code in minutes. Not hours.
          </p>
          <button className="group px-8 py-4 bg-white text-black rounded-full font-medium text-lg transition-all duration-300 hover:bg-gray-100">
            Join the Revolution
            <ChevronRight className="inline-block ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* Product Demo Section */}
      <section className="pt-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl" />
            <div className="relative bg-gray-900 rounded-3xl p-12 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Extraordinary
                    <br />
                    Development
                    <br />
                    Experience
                  </h2>
                  <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                    Every detail is crafted for maximum productivity. From
                    instant project setup to production deployment.
                  </p>
                  <button className="group px-8 py-4 bg-white text-black rounded-full font-medium text-lg transition-all duration-300 hover:bg-gray-100">
                    Watch the Demo
                    <ChevronRight className="inline-block ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
                <div className="relative">
                  <Image
                    src={demo}
                    alt="Product Demo"
                    className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid Section */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
        
        <div className="max-w-6xl mx-auto relative">
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-3xl" />
            <div className="relative bg-gray-900/50 rounded-2xl p-12">
            <div className="space-y-6 font-mono text-lg">
              <div className="bg-black/30 p-6 rounded-lg">
              <p className="text-purple-400">
                // You focus on building features
              </p>
              <p className="text-blue-400">
                const <span className="text-white">auth</span> =
                useAuth();
              </p>
              </div>
              <div className="bg-black/30 p-6 rounded-lg">
              <p className="text-purple-400">
                // We handle the complexity
              </p>
              <p className="text-gray-400">auth.signIn(</p>
              <p className="text-gray-400 pl-4">provider: 'google',</p>
              <p className="text-gray-400 pl-4">redirect: '/dashboard'</p>
              <p className="text-gray-400">);</p>
              </div>
            </div>
            </div>
          </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                No more wasting time on
                <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
                  repetitive setup tasks
                </span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-1">
                    <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    <span className="text-white font-medium">
                      Hours spent connecting frontend and backend.
                    </span>{" "}
                    Setting up APIs, handling CORS, managing state...
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1">
                    <KeyRound className="w-5 h-5 text-blue-400" />
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    <span className="text-white font-medium">
                      Authentication is a headache.
                    </span>{" "}
                    JWT tokens, refresh flows, password reset, social logins...
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1">
                    <Lock className="w-5 h-5 text-blue-400" />
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    <span className="text-white font-medium">
                      Security concerns keep you up at night.
                    </span>{" "}
                    XSS, CSRF, SQL injection, environment variables...
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <button className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300">
                  Let us handle it for you
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Features Bento Grid Section */}
      <section className="py-10 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Features that
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              define the future
            </span>
          </h2>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 grid-rows-[auto_1fr]">
            {/* Left Column */}
            <div className="group relative overflow-hidden bg-gray-900 h-full rounded-2xl transition-all duration-500 hover:bg-gray-800/80">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              <div className="relative p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-xl">
                    <Code className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Development Tools
                  </h3>
                </div>
                <div className="flex-grow space-y-6">
                  <div className="bg-black/30 rounded-xl p-4 py-8">
                    <div className="flex items-center gap-3 mb-2">
                      <Code className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-medium">
                        AI Code Generation
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Smart algorithms create production-ready code instantly
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-xl p-4 py-8">
                    <div className="flex items-center gap-3 mb-2">
                      <Database className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-medium">
                        Database Setup
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Zero-config database integration and management
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Column - Auth Feature */}
            <div className="group relative overflow-hidden bg-gray-900 h-full rounded-2xl transition-all duration-500 hover:bg-gray-800/80">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              <div className="relative p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-xl">
                    <KeyRound className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Authentication Suite
                  </h3>
                </div>
                <div className="flex-grow space-y-6">
                  <div className="bg-black/30 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-medium">
                        Multiple Providers
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      OAuth, Magic Links, Email/Password
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Lock className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-medium">
                        Security First
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      JWT, refresh tokens, rate limiting
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Code className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-medium">
                        Ready to Use
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Pre-built components & API routes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="group relative overflow-hidden bg-gray-900 h-full rounded-2xl transition-all duration-500 hover:bg-gray-800/80">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              <div className="relative p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-xl">
                    <Github className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Deployment & CI/CD
                  </h3>
                </div>
                <div className="flex-grow space-y-6">
                  <div className="bg-black/30 rounded-xl p-4 py-8">
                    <div className="flex items-center gap-3 mb-2">
                      <Github className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-medium">
                        GitHub Integration
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      One-click repository setup with CI/CD workflows
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-xl p-4 py-8">
                    <div className="flex items-center gap-3 mb-2">
                      <Globe className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-medium">
                        Custom Domain
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Free IIIT-K subdomain with automatic SSL
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IIIT-K Domain Feature - Prominent Display */}
          <div className="relative mt-20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-3xl" />
            <div className="relative bg-gray-900/80 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-xl">
                      <Globe size={32} className="text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      IIIT Kottayam Domain
                    </h3>
                  </div>
                  <p className="text-gray-300 text-lg mb-6">
                    Get your own professional subdomain under IIIT Kottayam's
                    domain:
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 mb-6">
                    <code className="text-blue-400 text-lg">
                      yourproject.iiitkottayam.in
                    </code>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-blue-400 w-5 h-5" />
                      <span className="text-gray-300">
                        Free forever for IIIT-K students
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="text-blue-400 w-5 h-5" />
                      <span className="text-gray-300">
                        Automatic SSL certification
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="text-blue-400 w-5 h-5" />
                      <span className="text-gray-300">
                        Build your college portfolio
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl" />
                  <div className="relative bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-blue-500/20">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Regular Domain</span>
                          <span className="line-through text-gray-500">
                            ₹800/year
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-lg">
                          <span className="text-blue-400">IIIT-K Domain</span>
                          <span className="text-green-400 font-bold">Free</span>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-gray-700">
                        <label className="block text-sm font-medium mb-2 text-white">
                          Reserve your subdomain
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            placeholder="yourproject"
                            className="flex-1 px-3 py-2 bg-black/30 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
                          />
                          <span className="text-gray-400">
                            .iiitkottayam.in
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Builder Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Build your dream stack.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              Make it extraordinary.
            </span>
          </h2>

          {/* Project Details */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Project Details
            </h3>
            <div className="max-w-md mx-auto space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Name
                </label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="Enter your project name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Description
                </label>
                <textarea
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  placeholder="Briefly describe your project"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Frontend Selection */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Frontend Framework
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "React", logo: "⚛️", desc: "Popular UI library" },
                {
                  name: "Next.js",
                  logo: "▲",
                  desc: "React framework with SSR",
                },
                {
                  name: "React Native + Expo",
                  logo: "📱",
                  desc: "Mobile development",
                },
              ].map((framework) => (
                <div
                  key={framework.name}
                  onClick={() => setSelectedFrontend(framework.name)}
                  className={`
                    relative overflow-hidden p-6 rounded-xl cursor-pointer
                    transition-all duration-300 transform hover:scale-105
                    ${
                      selectedFrontend === framework.name
                        ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50 shadow-lg shadow-blue-500/20"
                        : "bg-gray-900 border-2 border-gray-800 hover:border-gray-700"
                    }
                  `}
                >
                  <div className="text-4xl mb-4">{framework.logo}</div>
                  <h4 className="text-lg font-semibold mb-2">
                    {framework.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{framework.desc}</p>
                  {selectedFrontend === framework.name && (
                    <div className="absolute top-3 right-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Backend Selection */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Backend Framework
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: "Express", logo: "🚂", desc: "Fast, unopinionated" },
                { name: "Flask", logo: "🌶️", desc: "Python micro-framework" },
                {
                  name: "FastAPI",
                  logo: "⚡",
                  desc: "Modern Python framework",
                },
                { name: "Firebase", logo: "🔥", desc: "Backend-as-a-Service" },
                {
                  name: "Supabase",
                  logo: "⚡",
                  desc: "Open source Firebase alternative",
                },
              ].map((framework) => (
                <div
                  key={framework.name}
                  onClick={() => setSelectedBackend(framework.name)}
                  className={`
                    relative overflow-hidden p-6 rounded-xl cursor-pointer
                    transition-all duration-300 transform hover:scale-105
                    ${
                      selectedBackend === framework.name
                        ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50 shadow-lg shadow-blue-500/20"
                        : "bg-gray-900 border-2 border-gray-800 hover:border-gray-700"
                    }
                  `}
                >
                  <div className="text-4xl mb-4">{framework.logo}</div>
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
              ))}
            </div>
          </div>

          {/* Database Selection */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-center">Database</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "MongoDB", logo: "🍃", desc: "NoSQL database" },
                {
                  name: "PostgreSQL",
                  logo: "🐘",
                  desc: "Advanced SQL database",
                },
                { name: "MySQL", logo: "🐬", desc: "Popular SQL database" },
              ].map((db) => (
                <div
                  key={db.name}
                  onClick={() => setSelectedDatabase(db.name)}
                  className={`
                    relative overflow-hidden p-6 rounded-xl cursor-pointer
                    transition-all duration-300 transform hover:scale-105
                    ${
                      selectedDatabase === db.name
                        ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50 shadow-lg shadow-blue-500/20"
                        : "bg-gray-900 border-2 border-gray-800 hover:border-gray-700"
                    }
                  `}
                >
                  <div className="text-4xl mb-4">{db.logo}</div>
                  <h4 className="text-lg font-semibold mb-2">{db.name}</h4>
                  <p className="text-gray-400 text-sm">{db.desc}</p>
                  {selectedDatabase === db.name && (
                    <div className="absolute top-3 right-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Authentication Setup Question */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-1 text-center">
              Do you want authentication setup?
            </h3>
            <p className="text-md font-semibold mb-6 text-center">
              (with sign-in, sign-up and reset passowod pages)
            </p>
            <div className="flex justify-center gap-6">
              <button
                onClick={() => setWantsAuth(true)}
                className={`
                  px-6 py-4 rounded-xl transition-all duration-300
                  ${
                    wantsAuth === true
                      ? "bg-blue-500 text-white"
                      : "bg-gray-900 text-gray-400"
                  }
                `}
              >
                Yes, include auth
              </button>
              <button
                onClick={() => setWantsAuth(false)}
                className={`
                  px-6 py-4 rounded-xl transition-all duration-300
                  ${
                    wantsAuth === false
                      ? "bg-blue-500 text-white"
                      : "bg-gray-900 text-gray-400"
                  }
                `}
              >
                No, skip auth
              </button>
            </div>
          </div>

          {/* Authentication Methods */}
          {wantsAuth && (
            <div className="mb-16">
              <h3 className="text-xl font-semibold mb-6 text-center">
                Authentication Methods
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    name: "Email/Password",
                    icon: <Mail className="w-6 h-6" />,
                  },
                  {
                    name: "Magic Link",
                    icon: <KeyRound className="w-6 h-6" />,
                  },
                  { name: "Google", icon: "🔑" },
                  { name: "GitHub", icon: <Github className="w-6 h-6" /> },
                ].map((auth) => (
                  <div
                    key={auth.name}
                    onClick={() => handleAuthToggle(auth.name)}
                    className={`
                      relative p-4 rounded-xl cursor-pointer
                      transition-all duration-300 transform hover:scale-105
                      ${
                        selectedAuth.includes(auth.name)
                          ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50"
                          : "bg-gray-900 border-2 border-gray-800 hover:border-gray-700"
                      }
                      flex items-center gap-3
                    `}
                  >
                    <div className="text-blue-400">{auth.icon}</div>
                    <span className="font-medium">{auth.name}</span>
                    {selectedAuth.includes(auth.name) && (
                      <div className="absolute top-3 right-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Layout Type Selection */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Choose Layout Type
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                onClick={() => setLayoutType("navbar")}
                className={`
                  relative p-6 rounded-xl cursor-pointer
                  transition-all duration-300 transform hover:scale-105
                  ${
                    layoutType === "navbar"
                      ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50"
                      : "bg-gray-900 border-2 border-gray-800 hover:border-gray-700"
                  }
                `}
              >
                <Menu className="w-8 h-8 mb-4" />
                <h4 className="text-lg font-semibold mb-2">
                  Professional Navbar & Footer
                </h4>
                <p className="text-gray-400 text-sm">
                  Classic layout with top navigation and footer
                </p>
              </div>
              <div
                onClick={() => setLayoutType("sidebar")}
                className={`
                  relative p-6 rounded-xl cursor-pointer
                  transition-all duration-300 transform hover:scale-105
                  ${
                    layoutType === "sidebar"
                      ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50"
                      : "bg-gray-900 border-2 border-gray-800 hover:border-gray-700"
                  }
                `}
              >
                <Menu className="w-8 h-8 mb-4 rotate-90" />
                <h4 className="text-lg font-semibold mb-2">
                  Sidebar Navigation
                </h4>
                <p className="text-gray-400 text-sm">
                  Modern dashboard layout with side navigation
                </p>
              </div>
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
          <div className="flex justify-center">
            <button
              onClick={handleGenerate}
              disabled={
                !selectedFrontend ||
                !selectedBackend ||
                !selectedDatabase ||
                !layoutType ||
                !projectName ||
                !projectDescription ||
                isGenerating
              }
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-lg 
                transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed
                transform hover:scale-105 active:scale-95"
            >
              {isGenerating ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Building something amazing...
                </span>
              ) : (
                <span className="flex items-center">
                  Generate Project
                  <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </span>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            The future of development
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              is here.
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join thousands of developers who are already building the next
            generation of applications.
          </p>
          <button className="group px-8 py-4 bg-white text-black rounded-full font-medium text-lg transition-all duration-300 hover:bg-gray-100">
            Get Started Today
            <ChevronRight
              className="inline-block ml-2 transition-transform group-hover:translate-x-1"
              size={20}
            />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            © 2024 Project Generator. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      <Dialog open={showWaitlistModal} onOpenChange={setShowWaitlistModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Join Our Waitlist</DialogTitle>
            <DialogDescription>
              We're building something amazing! Be the first to try our project
              generator when it launches.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex h-10 w-full rounded-md border border-gray-800 bg-gray-950 px-3 py-2 text-sm ring-offset-gray-950 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <button
                onClick={handleWaitlistSubmit}
                disabled={!email || isGenerating}
                className="inline-flex items-center justify-center h-10 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "Join Waitlist"
                )}
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LandingPage;
