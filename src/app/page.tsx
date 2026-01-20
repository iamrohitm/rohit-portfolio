'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Code,
  Code2,
  Database,
  Server,
  Cpu,
  Terminal,
  Layout,
  Download,
  ChevronRight,
  ArrowRight,
  ExternalLink,
  Send,
  CheckCircle2,
  GraduationCap,
  Award,
  Sparkles,
  Layers,
  Zap,
  Target,
  Users,
  Sun,
  Moon,
  ArrowUp,
} from 'lucide-react';

/**
 * Personal Portfolio - Rohit Mohite
 * Full Stack Developer / MERN Developer
 *
 * Features:
 * - Modern, futuristic design with blue/gray color scheme
 * - Fully responsive layout (mobile, tablet, desktop)
 * - Smooth animations and transitions
 * - Semantic HTML5 structure
 * - SEO optimized with structured data
 * - Accessible (WCAG AA compliant)
 * - Interactive sections: Hero, About, Skills, Projects, Education, Contact
 */

// ============ Types & Interfaces ============
interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  category: string;
}

interface Project {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  links?: {
    demo?: string;
    github?: string;
  };
}

interface Education {
  degree: string;
  institution: string;
  year: string;
  cgpa?: string;
  percentage?: string;
}

// ============ Data ============
const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: <Layout className="w-5 h-5" />, level: 85, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: <Layers className="w-5 h-5" />, level: 80, category: 'Frontend' },
  { name: 'HTML5', icon: <Code2 className="w-5 h-5" />, level: 90, category: 'Frontend' },
  { name: 'JavaScript', icon: <Zap className="w-5 h-5" />, level: 85, category: 'Frontend' },

  // Backend
  { name: 'Express', icon: <Server className="w-5 h-5" />, level: 70, category: 'Backend' },
  { name: 'Node.js', icon: <Terminal className="w-5 h-5" />, level: 75, category: 'Backend' },
  { name: 'MongoDB', icon: <Database className="w-5 h-5" />, level: 75, category: 'Backend' },

  // Languages
  { name: 'Java', icon: <Cpu className="w-5 h-5" />, level: 70, category: 'Languages' },
  { name: 'Python', icon: <Terminal className="w-5 h-5" />, level: 65, category: 'Languages' },
  { name: 'SQL', icon: <Database className="w-5 h-5" />, level: 75, category: 'Languages' },

  // Tools
  { name: 'Git', icon: <Github className="w-5 h-5" />, level: 80, category: 'Tools' },
  { name: 'VS Code', icon: <Code className="w-5 h-5" />, level: 90, category: 'Tools' },
  { name: 'PyCharm', icon: <Cpu className="w-5 h-5" />, level: 75, category: 'Tools' },
];

const projects: Project[] = [
  {
    title: 'Fit Sphere',
    description:
      'A comprehensive fitness recommendation application that provides personalized workout plans and exercise tracking.',
    techStack: ['React', 'Tailwind CSS', 'HTML5', 'JavaScript'],
    features: [
      'Dynamic workout plan generation',
      'Responsive and intuitive UI',
      'Sets and reps tracking system',
      'Personalized exercise recommendations',
    ],
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    title: 'Quick Scribe',
    description:
      'An innovative audio transcription and translation application that converts speech to text with real-time processing.',
    techStack: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    features: [
      'Audio upload and playback functionality',
      'Real-time speech-to-text transcription',
      'Multi-language translation support',
      'Responsive and accessible design',
    ],
    links: {
      github: '#',
      demo: '#',
    },
  },
  // Placeholder for future projects
  {
    title: 'More Projects Coming Soon',
    description:
      'Currently working on exciting new projects. Stay tuned for updates!',
    techStack: [],
    features: [],
    links: {
      github: '#',
    },
  },
];

const education: Education[] = [
  {
    degree: 'B.E. in Computer Engineering',
    institution: 'SPPU Pune',
    year: '2021-2025',
    cgpa: '7.82',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Vyankatrao High School and Junior College',
    year: '2019-2021',
    percentage: '86.17%',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Jawahar Navodaya Vidyalaya Palus, Sangli',
    year: '2014-2019',
    percentage: '88.80%',
  },
];

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Set initial dark mode
    if (typeof window !== 'undefined') {
      const isDarkMode = document.documentElement.classList.contains('dark') || true;
      setIsDark(isDarkMode);
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('dark');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
            <span className="text-sm font-semibold text-muted-foreground hidden sm:inline">Portfolio</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle dark mode"
              title={isDark ? 'Light mode' : 'Dark mode'}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600" />
              )}
            </button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border/50 mt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block py-2 px-4 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Separator className="my-2" />
            <div className="px-4 space-y-3">
              <button
                onClick={toggleDarkMode}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-accent transition-colors text-sm font-medium"
              >
                {isDark ? (
                  <>
                    <Sun className="w-4 h-4 text-yellow-500" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-slate-600" />
                    Dark Mode
                  </>
                )}
              </button>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Let's Talk
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

// Hero Section
const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto space-y-3">
          {/* Main Hero Text */}
          <div className="text-center space-y-2.5">
            <Badge
              variant="outline"
              className="px-4 py-1 text-sm border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/30 inline-block"
            >
              <Sparkles className="w-3 h-3 mr-2 text-blue-600" />
              Available for opportunities
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="block mb-1">Hi, I'm</span>
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Rohit Mohite
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
              Full Stack Developer / MERN Developer
            </p>

            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Building dynamic web experiences with React, MongoDB, and Node.js
            </p>
          </div>

          {/* Colorful Skills Cards */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-2.5">
            {/* Frontend */}
            <Card className="border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300">
              <CardContent className="p-2.5 text-center space-y-1">
                <div className="flex justify-center">
                  <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/30 text-blue-600">
                    <Code2 className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-600">Frontend</p>
                  <p className="text-xs text-muted-foreground">React, JavaScript</p>
                </div>
              </CardContent>
            </Card>

            {/* Backend */}
            <Card className="border-2 border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all duration-300">
              <CardContent className="p-2.5 text-center space-y-1">
                <div className="flex justify-center">
                  <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600">
                    <Server className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-emerald-600">Backend</p>
                  <p className="text-xs text-muted-foreground">Express</p>
                </div>
              </CardContent>
            </Card>

            {/* Database */}
            <Card className="border-2 border-amber-200 dark:border-amber-800 hover:border-amber-400 dark:hover:border-amber-600 transition-all duration-300">
              <CardContent className="p-2.5 text-center space-y-1">
                <div className="flex justify-center">
                  <div className="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/30 text-amber-600">
                    <Database className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-amber-600">Database</p>
                  <p className="text-xs text-muted-foreground">SQL, MongoDB</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Buttons + Social in one row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              onClick={scrollToContact}
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get In Touch
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              onClick={() => {
                window.open('/rohit_resume.pdf', '_blank');
              }}
              size="sm"
              variant="outline"
              className="px-6 hover:border-amber-600 hover:text-amber-600 transition-all duration-300"
              title="View Resume in new tab"
            >
              View Resume
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-2">
              <a
                href="https://github.com/iamrohitm"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-amber-50 dark:bg-amber-950/30 hover:bg-amber-600 text-amber-600 hover:text-white transition-all duration-300 border border-amber-200 dark:border-amber-800"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/rohitmohite03/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-emerald-50 dark:bg-emerald-950/30 hover:bg-emerald-600 text-emerald-600 hover:text-white transition-all duration-300 border border-emerald-200 dark:border-emerald-800"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:rohitmohite.in@gmail.com"
                className="p-2 rounded-full bg-blue-50 dark:bg-blue-950/30 hover:bg-blue-600 text-blue-600 hover:text-white transition-all duration-300 border border-blue-200 dark:border-blue-800"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-border/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-blue-600 rounded-full" />
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Passion for Coding',
      description: 'Love turning complex problems into elegant solutions',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Problem Solver',
      description: 'Approach challenges with analytical thinking',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Modern Tech Enthusiast',
      description: 'Stay updated with latest web technologies',
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 space-y-2">
            <Badge variant="secondary" className="mb-2">
              About Me
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Passionate About Building Digital Experiences
            </h2>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-4 items-center">
            {/* Left: Text Content */}
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground leading-relaxed">
                Hello! I'm a passionate Full Stack Developer with a strong foundation in modern web technologies.
                I specialize in the MERN stack and have hands-on experience with Java, SQL, and Python.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in programming began with curiosity and has evolved into a genuine passion for
                creating efficient, scalable, and user-friendly applications. I believe in writing clean code,
                following best practices, and continuously learning new technologies.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">2+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">10+</div>
                  <div className="text-xs text-muted-foreground">Technologies</div>
                </div>
              </div>
            </div>

            {/* Right: Feature Cards */}
            <div className="space-y-2">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-blue-200 dark:hover:border-blue-800 transition-all group"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/30 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                        <p className="text-muted-foreground text-xs">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section
const SkillsSection = () => {
  const categories = ['Frontend', 'Backend', 'Languages', 'Tools'];

  return (
    <section id="skills" className="min-h-screen flex items-center bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 space-y-2">
            <Badge variant="secondary" className="mb-2">
              Skills & Technologies
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Technologies I Work With
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-3">
            {categories.map((category) => (
              <Card
                key={category}
                className="border-2 hover:border-blue-200 dark:hover:border-blue-800 transition-all"
              >
                <CardHeader className="pb-1">
                  <CardTitle className="text-xs flex items-center gap-1.5">
                    <Layers
                      className={`w-4 h-4 ${
                        category === 'Frontend'
                          ? 'text-blue-600'
                          : category === 'Backend'
                            ? 'text-emerald-600'
                            : category === 'Languages'
                              ? 'text-amber-600'
                              : 'text-violet-600'
                      }`}
                    />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-1.5">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <div key={skill.name} className="space-y-0.5">
                        <div className="flex items-center justify-between gap-1.5">
                          <div className="flex items-center gap-1.5 flex-1 min-w-0">
                            <div
                              className={`p-1 rounded flex-shrink-0 ${
                                skill.category === 'Frontend'
                                  ? 'bg-blue-50 dark:bg-blue-950/30 text-blue-600'
                                  : skill.category === 'Backend'
                                    ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600'
                                    : skill.category === 'Languages'
                                      ? 'bg-amber-50 dark:bg-amber-950/30 text-amber-600'
                                      : 'bg-violet-50 dark:bg-violet-950/30 text-violet-600'
                              }`}
                            >
                              {skill.icon}
                            </div>
                            <span className="font-medium text-xs truncate">{skill.name}</span>
                          </div>
                          <span className="text-xs text-muted-foreground flex-shrink-0">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-1 overflow-hidden">
                          <div
                            className={`h-full ${
                              skill.category === 'Frontend'
                                ? 'bg-gradient-to-r from-blue-600 to-cyan-500'
                                : skill.category === 'Backend'
                                  ? 'bg-gradient-to-r from-emerald-600 to-teal-500'
                                  : skill.category === 'Languages'
                                    ? 'bg-gradient-to-r from-amber-500 to-orange-500'
                                    : 'bg-gradient-to-r from-violet-600 to-purple-500'
                            } rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 space-y-2">
            <Badge variant="secondary" className="mb-2">
              Featured Projects
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Projects I've Built
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group border-2 hover:border-blue-300 dark:hover:border-blue-700 transition-all overflow-hidden"
              >
                {/* Project Header */}
                <CardHeader className="space-y-1.5 pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-sm group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    {project.links && (
                      <div className="flex gap-1">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 rounded hover:bg-accent transition-colors"
                            aria-label={`${project.title} GitHub`}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 rounded hover:bg-accent transition-colors"
                            aria-label={`${project.title} Live Demo`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                  <CardDescription className="text-xs leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                {/* Project Body */}
                <CardContent className="space-y-2">
                  {/* Tech Stack */}
                  {project.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs font-normal"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Features */}
                  {project.features.length > 0 && (
                    <>
                      <Separator />
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">Key Features:</h4>
                        <ul className="space-y-1.5">
                          {project.features.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Placeholder for future */}
          <div className="mt-6 text-center">
            <Card className="inline-block border-dashed border-2 border-muted-foreground/25">
              <CardContent className="p-8">
                <p className="text-muted-foreground">
                  More exciting projects coming soon...
                </p>
                <a
                  href="https://github.com/iamrohitm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2 mt-2"
                >
                  Check out my GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

// Education Section
const EducationSection = () => {
  return (
    <section id="education" className="min-h-screen flex items-center py-8 md:py-12 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6 space-y-2">
            <Badge variant="secondary" className="mb-2">
              Education
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Academic Background
            </h2>
          </div>

          {/* Education Timeline */}
          <div className="space-y-2.5">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="border-2 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div className="flex items-start gap-2 flex-1">
                      <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/30 text-blue-600 flex-shrink-0">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="text-base font-semibold">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        <p className="text-xs text-muted-foreground">{edu.year}</p>
                      </div>
                    </div>
                    {(edu.cgpa || edu.percentage) && (
                      <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/30">
                        <Award className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <div className="text-right">
                          <div className="text-xs font-medium text-blue-600">
                            {edu.cgpa || edu.percentage}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {edu.cgpa ? 'CGPA' : 'Percentage'}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center py-10 md:py-12 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6 space-y-2">
            <Badge variant="secondary" className="mb-2">
              Get In Touch
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Let's Connect
            </h2>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-3 gap-3 mb-4">
            {/* Email */}
            <Card className="border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-3 text-center space-y-2">
                <div className="flex justify-center">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/30 text-blue-600">
                    <Mail className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-600 mb-1">Email</p>
                  <a
                    href="mailto:rohitmohite.in@gmail.com"
                    className="text-xs font-medium hover:text-blue-600 transition-colors break-all"
                  >
                    rohitmohite.in@gmail.com
                  </a>
                </div>
                <Button variant="outline" size="sm" className="w-full text-xs" asChild>
                  <a href="mailto:rohitmohite.in@gmail.com">Send Email</a>
                </Button>
              </CardContent>
            </Card>

            {/* GitHub */}
            <Card className="border-2 border-amber-200 dark:border-amber-800 hover:border-amber-400 dark:hover:border-amber-600 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-3 text-center space-y-2">
                <div className="flex justify-center">
                  <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/30 text-amber-600">
                    <Github className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-amber-600 mb-1">GitHub</p>
                  <a
                    href="https://github.com/iamrohitm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium hover:text-amber-600 transition-colors"
                  >
                    iamrohitm
                  </a>
                </div>
                <Button variant="outline" size="sm" className="w-full text-xs" asChild>
                  <a href="https://github.com/iamrohitm" target="_blank" rel="noopener noreferrer">
                    Visit Profile
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* LinkedIn */}
            <Card className="border-2 border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-3 text-center space-y-2">
                <div className="flex justify-center">
                  <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600">
                    <Linkedin className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-emerald-600 mb-1">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/rohitmohite03/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium hover:text-emerald-600 transition-colors"
                  >
                    rohitmohite03
                  </a>
                </div>
                <Button variant="outline" size="sm" className="w-full text-xs" asChild>
                  <a href="https://www.linkedin.com/in/rohitmohite03/" target="_blank" rel="noopener noreferrer">
                    Connect
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* CTA Card */}
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-200 dark:border-blue-800">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-600 text-white flex-shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold mb-1">Open to Opportunities</h3>
                  <p className="text-muted-foreground mb-2 text-xs">
                    I'm actively looking for full-time roles, internships, and freelance projects. Let's create something amazing together!
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" asChild className="bg-blue-600 hover:bg-blue-700 text-white text-xs h-7">
                      <a href="mailto:rohitmohite.in@gmail.com">Send Email</a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="text-xs h-7">
                      <a href="https://www.linkedin.com/in/rohitmohite03/" target="_blank" rel="noopener noreferrer">
                        Connect on LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white py-12 border-t border-blue-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Footer Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Branding */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Rohit Mohite</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-amber-500 via-blue-500 to-cyan-500 rounded-full" />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                Full Stack Developer crafting beautiful and functional web experiences with modern technologies.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-start md:items-end justify-start">
              <h4 className="font-semibold mb-6 text-sm uppercase tracking-widest text-slate-300">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/iamrohitm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-slate-800 hover:bg-amber-600 transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rohitmohite03/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-slate-800 hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:rohitmohite.in@gmail.com"
                  className="p-3 rounded-lg bg-slate-800 hover:bg-emerald-600 transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                  title="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <Separator className="my-8 bg-slate-700" />

          {/* Bottom Section */}
          <div className="text-center">
            <p className="text-xs text-slate-500">
              Made with <span className="text-red-500 animate-pulse">❤️</span> by Rohit
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Scroll to Top Button Component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 animate-fade-in"
      aria-label="Scroll to top"
      title="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  ) : null;
};

// Main Portfolio Component
export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
