"use client";

import React, { useState, useEffect } from 'react';
import { Code, Terminal, Database, Rocket, Github, ChevronRight, Mail, Lock, KeyRound, Loader2, CheckCircle2, Users, Star } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import demo from "./assets/Screenshot 2024-12-12 at 12.44.58 PM.png";
import Image from 'next/image';

interface AuthToggleProps {
  auth: string;
}

const LandingPage = () => {
  const [selectedFrontend, setSelectedFrontend] = useState<string>('');
  const [selectedBackend, setSelectedBackend] = useState<string>('');
  const [selectedDatabase, setSelectedDatabase] = useState<string>('');
  const [selectedAuth, setSelectedAuth] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [showWaitlistModal, setShowWaitlistModal] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAuthToggle = ({ auth }: AuthToggleProps) => {
    if (selectedAuth.includes(auth)) {
      setSelectedAuth(selectedAuth.filter(a => a !== auth));
    } else {
      setSelectedAuth([...selectedAuth, auth]);
    }
  };

  const handleGenerate = () => {
    if (!selectedFrontend || !selectedBackend || !selectedDatabase) {
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
      setSelectedFrontend('');
      setSelectedBackend('');
      setSelectedDatabase('');
      setSelectedAuth([]);
      setEmail('');
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
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Limitless.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              Lightning Fast.
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
      <section className="py-32 px-6">
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
                    Every detail is crafted for maximum productivity. From instant project setup to production deployment.
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

      {/* Features Grid */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Features that
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              define the future
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code size={32} />,
                title: "Intelligent Code Generation",
                description: "Advanced AI algorithms create pristine, production-ready code instantly."
              },
              {
                icon: <Database size={32} />,
                title: "Seamless Database Integration",
                description: "Connect to your preferred database with zero configuration required."
              },
              {
                icon: <Terminal size={32} />,
                title: "CLI Superpowers",
                description: "Command-line tools that feel like magic, automating complex tasks effortlessly."
              },
              {
                icon: <Github size={32} />,
                title: "GitHub Integration",
                description: "One-click repository setup with CI/CD workflows pre-configured."
              },
              {
                icon: <Lock size={32} />,
                title: "Enterprise Security",
                description: "Bank-grade security with advanced authentication options built-in."
              },
              {
                icon: <Rocket size={32} />,
                title: "Instant Deployment",
                description: "Deploy to your favorite cloud provider with automatic scaling."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-gray-900 p-8 rounded-2xl transition-all duration-500 hover:bg-gray-800"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 rounded-2xl transition-all duration-500" />
                <div className="relative">
                  <div className="text-blue-400 mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
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

          {/* Frontend Selection */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-center">Frontend Framework</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'React', logo: '⚛️', desc: 'Popular UI library' },
                { name: 'Next.js', logo: '▲', desc: 'React framework with SSR' },
                { name: 'React Native + Expo', logo: '📱', desc: 'Mobile development' }
              ].map((framework) => (
                <div
                  key={framework.name}
                  onClick={() => setSelectedFrontend(framework.name)}
                  className={`
                    relative overflow-hidden p-6 rounded-xl cursor-pointer
                    transition-all duration-300 transform hover:scale-105
                    ${selectedFrontend === framework.name 
                      ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50 shadow-lg shadow-blue-500/20' 
                      : 'bg-gray-900 border-2 border-gray-800 hover:border-gray-700'}
                  `}
                >
                  <div className="text-4xl mb-4">{framework.logo}</div>
                  <h4 className="text-lg font-semibold mb-2">{framework.name}</h4>
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
            <h3 className="text-xl font-semibold mb-6 text-center">Backend Framework</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: 'Express', logo: '🚂', desc: 'Fast, unopinionated' },
                { name: 'Flask', logo: '🌶️', desc: 'Python micro-framework' },
                { name: 'FastAPI', logo: '⚡', desc: 'Modern Python framework' },
                { name: 'Firebase', logo: '🔥', desc: 'Backend-as-a-Service' },
                { name: 'Supabase', logo: '⚡', desc: 'Open source Firebase alternative' }
              ].map((framework) => (
                <div
                  key={framework.name}
                  onClick={() => setSelectedBackend(framework.name)}
                  className={`
                    relative overflow-hidden p-6 rounded-xl cursor-pointer
                    transition-all duration-300 transform hover:scale-105
                    ${selectedBackend === framework.name 
                      ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50 shadow-lg shadow-blue-500/20' 
                      : 'bg-gray-900 border-2 border-gray-800 hover:border-gray-700'}
                  `}
                >
                  <div className="text-4xl mb-4">{framework.logo}</div>
                  <h4 className="text-lg font-semibold mb-2">{framework.name}</h4>
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
                { name: 'MongoDB', logo: '🍃', desc: 'NoSQL database' },
                { name: 'PostgreSQL', logo: '🐘', desc: 'Advanced SQL database' },
                { name: 'MySQL', logo: '🐬', desc: 'Popular SQL database' }
              ].map((db) => (
                <div
                  key={db.name}
                  onClick={() => setSelectedDatabase(db.name)}
                  className={`
                    relative overflow-hidden p-6 rounded-xl cursor-pointer
                    transition-all duration-300 transform hover:scale-105
                    ${selectedDatabase === db.name 
                      ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50 shadow-lg shadow-blue-500/20' 
                      : 'bg-gray-900 border-2 border-gray-800 hover:border-gray-700'}
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

          {/* Authentication Selection */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-center">Authentication Methods</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Email/Password', icon: <Mail className="w-6 h-6" /> },
                { name: 'Magic Link', icon: <KeyRound className="w-6 h-6" /> },
                { name: 'Google', icon: '🔑' },
                { name: 'GitHub', icon: <Github className="w-6 h-6" /> }
              ].map((auth) => (
                <div
                  key={auth.name}
                  onClick={() => handleAuthToggle({ auth: auth.name })}
                  className={`
                    relative p-4 rounded-xl cursor-pointer
                    transition-all duration-300 transform hover:scale-105
                    ${selectedAuth.includes(auth.name)
                      ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50'
                      : 'bg-gray-900 border-2 border-gray-800 hover:border-gray-700'}
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

          {/* GitHub Integration */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-center">GitHub Integration</h3>
            <div className="bg-gray-900 rounded-xl p-6 border-2 border-gray-800">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">One-Click Repository Setup</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    We'll create a new repository, set up GitHub Actions for CI/CD, and push your initial commit with a detailed README.
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
              disabled={!selectedFrontend || !selectedBackend || !selectedDatabase || isGenerating}
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

      {/* Stats Section with Parallax */}
      {/* <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url("/api/placeholder/1920/1080")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${(scrollY - 2000) * 0.5}px)`,
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "100K+", label: "Projects Generated" },
              { value: "50K+", label: "Active Developers" },
              { value: "99.9%", label: "Success Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
                  {stat.value}
                </div>
                <div className="text-xl text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            The future of development
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              is here.
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join thousands of developers who are already building the next generation of applications.
          </p>
          <button className="group px-8 py-4 bg-white text-black rounded-full font-medium text-lg transition-all duration-300 hover:bg-gray-100">
            Get Started Today
            <ChevronRight className="inline-block ml-2 transition-transform group-hover:translate-x-1" size={20} />
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
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
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
              We're building something amazing! Be the first to try our project generator when it launches.
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
                  'Join Waitlist'
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