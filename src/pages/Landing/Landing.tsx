import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Leaf,
  Shield,
  DollarSign,
  Users,
  CheckCircle,
  ArrowRight,
  Github,
  Mail,
  MessageSquare,
  Layers,
  AlertTriangle,
  ThumbsUp,
  Code2,
  Zap,
  BarChartBig,
  ChevronDown,
  ChevronUp,
  Eye,
  Wrench
} from 'lucide-react';

// Helper component for FAQ items
const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-6">
      <dt>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-start justify-between text-left text-gray-900"
        >
          <span className="text-lg font-medium">{question}</span>
          <span className="ml-6 flex h-7 items-center">
            {isOpen ? (
              <ChevronUp className="h-6 w-6\" aria-hidden="true" />
            ) : (
              <ChevronDown className="h-6 w-6\" aria-hidden="true" />
            )}
          </span>
        </button>
      </dt>
      {isOpen && (
        <dd className="mt-2 pr-12">
          <p className="text-base text-gray-600">{answer}</p>
        </dd>
      )}
    </div>
  );
};


const GrowTrackLanding: React.FC = () => {
  const githubRepoUrl = "https://github.com/lalomorales22/Grow-Track";

  const problemSolutionFeatures = [
    {
      icon: AlertTriangle,
      problemTitle: 'High Costs & Vendor Lock-In?',
      problemDescription: 'Proprietary systems impose hefty fees for software and mandatory RFID tags, locking you into expensive contracts.',
      solutionTitle: 'GrowTrack: Free & Flexible',
      solutionDescription: 'Completely open-source with no licensing fees. Utilize cost-effective QR codes you can print yourself. True freedom and control.',
      bgColor: 'bg-rose-50',
      problemIconColor: 'text-rose-600',
      solutionIconColor: 'text-primary-600',
    },
    {
      icon: Eye,
      problemTitle: 'Lack of Transparency & Trust?',
      problemDescription: 'Closed-source "black box" systems can hide inefficiencies, vulnerabilities, or even misaligned priorities with regulatory integrity.',
      solutionTitle: 'GrowTrack: Open & Accountable',
      solutionDescription: 'Publicly auditable source code and transparent, community-driven governance. Understand how it works and contribute to its evolution.',
      bgColor: 'bg-amber-50',
      problemIconColor: 'text-amber-600',
      solutionIconColor: 'text-primary-600',
    },
    {
      icon: Wrench,
      problemTitle: 'Ineffective Compliance & Diversion Risks?',
      problemDescription: 'Allegations suggest some systems fail to flag critical irregularities, potentially enabling illicit market diversion they are meant to prevent.',
      solutionTitle: 'GrowTrack: Robust & Secure',
      solutionDescription: 'Designed for true compliance with built-in data validation and transparent logic to effectively prevent diversion and ensure market integrity.',
      bgColor: 'bg-sky-50',
      problemIconColor: 'text-sky-600',
      solutionIconColor: 'text-primary-600',
    },
    {
      icon: Zap,
      problemTitle: 'Clunky, Unreliable Systems?',
      problemDescription: 'Users report glitchy interfaces, slow performance, API failures, and error-prone manual data entry, leading to wasted time and frustration.',
      solutionTitle: 'GrowTrack: Modern & Efficient',
      solutionDescription: 'Intuitive, user-centric design for non-technical users. Reliable performance and a powerful API for seamless integrations.',
      bgColor: 'bg-indigo-50',
      problemIconColor: 'text-indigo-600',
      solutionIconColor: 'text-primary-600',
    },
  ];

  const coreFeatures = [
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Built from the ground up to meet California\'s rigorous regulatory requirements, ensuring your data is safe and operations are compliant.',
      color: 'text-white',
      bgColor: 'bg-primary-500',
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective & Open',
      description: 'Absolutely free, open-source software. Say goodbye to expensive licenses and proprietary tag costs. Maximize your ROI.',
      color: 'text-white',
      bgColor: 'bg-primary-600',
    },
    {
      icon: Users,
      title: 'Community-Driven',
      description: 'Developed, maintained, and governed by a community of cannabis industry professionals, technologists, and advocates – for the industry.',
      color: 'text-white',
      bgColor: 'bg-primary-700',
    },
    {
      icon: Code2,
      title: 'Powerful API & Integrations',
      description: 'A robust, well-documented API allows seamless integration with your existing POS, ERP, and other operational software.',
      color: 'text-primary-700',
      bgColor: 'bg-primary-100',
    },
    {
      icon: Layers,
      title: 'Uncompromising Data Integrity',
      description: 'Proactive data validation at the point of entry minimizes errors, ensuring accurate, reliable data for compliance and business insights.',
      color: 'text-primary-700',
      bgColor: 'bg-primary-100',
    },
    {
      icon: BarChartBig,
      title: 'User-Centric Design',
      description: 'Intuitive, accessible, and mobile-responsive interface designed for ease of use, even for non-technical team members. Clear reporting and analytics.',
      color: 'text-primary-700',
      bgColor: 'bg-primary-100',
    },
  ];

  const testimonials = [
    {
      quote: "GrowTrack is a breath of fresh air! Finally, a compliance system that's affordable, transparent, and actually easy to use. It's what the industry has needed.",
      author: 'Alex Chen',
      role: 'Owner',
      company: 'Golden State Cultivators',
    },
    {
      quote: "The open-source approach gives us confidence. We can see how it works, contribute, and trust it's built for our benefit, not just a vendor's profit.",
      author: 'Maria Rodriguez',
      role: 'Compliance Manager',
      company: 'Pacific Bay Distribution',
    },
  ];

  const faqs = [
    {
      question: 'Is GrowTrack really free?',
      answer: 'Yes! GrowTrack is completely free and open-source. You can download, use, modify, and contribute to its development without any licensing fees. The only costs would be for your own hosting, if applicable, and standard printable labels for QR codes.',
    },
    {
      question: 'How does GrowTrack address the issues with current systems like METRC?',
      answer: 'GrowTrack is designed to overcome the key pain points of systems like METRC by being cost-effective (no expensive tags or software fees), transparent (open-source code and governance), user-friendly (modern UX for non-technical users), and truly focused on robust compliance and preventing diversion through better data integrity and community oversight.',
    },
    {
      question: 'Is GrowTrack compliant with California state regulations?',
      answer: 'Absolutely. GrowTrack is being developed with California\'s specific cannabis tracking and reporting requirements (DCC/MAUCRSA) as its foundational blueprint. Its core mission is to provide a fully compliant seed-to-sale solution.',
    },
    {
      question: 'How secure is an open-source system?',
      answer: 'Open-source software can be extremely secure. With "many eyes" on the code, vulnerabilities are often identified and fixed more quickly by the community. GrowTrack will adhere to security best practices, including encryption, strict access controls, and regular audits.',
    },
    {
      question: 'Can I migrate my data from my current system?',
      answer: 'While data migration tools are part of the long-term roadmap, the specifics would depend on your current system\'s export capabilities. The GrowTrack community will aim to provide guidance and support for common migration paths.',
    },
    {
      question: 'How can I contribute to GrowTrack?',
      answer: 'There are many ways to contribute! Developers can contribute code on GitHub. Industry professionals can provide feedback, help with documentation, or participate in governance. Visit our GitHub repository to learn more.',
    },
    {
      question: 'What technology stack does GrowTrack use?',
      answer: 'GrowTrack is being built with a modern, scalable, and secure open-source technology stack. This includes leveraging robust backend frameworks, reliable databases, and user-friendly frontend technologies to ensure performance and maintainability. More details can be found in our technical documentation on GitHub.',
    }
  ];

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contribute', href: '#contribute' },
    { name: 'Contact', href: '#contact' },
  ];


  return (
    <div className="bg-white text-gray-800">
      {/* Header & Hero Section */}
      <header className="bg-primary-900 relative overflow-hidden" id="home">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 z-10 relative">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-10 w-10 text-white transition-transform duration-300 hover:rotate-12" />
              <span className="text-white text-2xl font-bold">GrowTrack</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  {link.name}
                </a>
              ))}
               <a
                href={githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                title="GitHub Repository"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Link to="/login" className="text-sm text-white hover:text-gray-200 transition-colors">
                Log In
              </Link>
              <Link
                to="/login"
                className="bg-white text-primary-700 px-4 py-2 rounded-md text-sm font-semibold hover:bg-primary-50 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center z-10">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block xl:inline">GrowTrack: The Future of</span>
            <span className="block text-primary-300 xl:inline"> Cannabis Compliance</span>
          </h1>
          <p className="mt-6 max-w-md mx-auto text-lg text-gray-300 sm:text-xl md:mt-8 md:max-w-3xl">
            Finally, a free, open-source, and community-driven seed-to-sale tracking system designed for California.
            Say goodbye to high costs and opaque systems. Embrace transparency, efficiency, and control.
          </p>
          <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="rounded-md shadow">
              <Link
                to="/login"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 md:py-4 md:text-lg md:px-10 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="rounded-md shadow">
              <a
                href={githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-700 hover:bg-primary-600 md:py-4 md:text-lg md:px-10 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <Github className="mr-2 h-5 w-5" /> View on GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden opacity-20">
            <Leaf className="absolute text-primary-500 opacity-30 h-64 w-64 -top-10 -left-20 transform rotate-12" />
            <Leaf className="absolute text-primary-500 opacity-20 h-96 w-96 bottom-0 -right-20 transform -rotate-12" />
        </div>
      </header>

      {/* Problem/Solution Section - Addressing METRC's Shortcomings */}
      <section id="about" className="py-20 md:py-28 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Tired of the Old Way? There's a Better Path.
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Current cannabis compliance systems can be costly, complex, and lack transparency. GrowTrack offers a modern solution built for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problemSolutionFeatures.map((item) => (
              <div key={item.problemTitle} className={`p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ${item.bgColor}`}>
                <div className="flex items-center mb-4">
                  <item.icon className={`h-10 w-10 ${item.problemIconColor} mr-4`} />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{item.problemTitle}</h3>
                    <p className="text-sm text-gray-600">{item.problemDescription}</p>
                  </div>
                </div>
                <div className="border-t border-gray-300 my-6"></div>
                <div className="flex items-center">
                   <ThumbsUp className={`h-10 w-10 ${item.solutionIconColor} mr-4`} />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{item.solutionTitle}</h3>
                    <p className="text-sm text-gray-600">{item.solutionDescription}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="features" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              GrowTrack: Packed with Features for Modern Compliance
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Everything you need, transparently and affordably.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((feature) => (
              <div
                key={feature.title}
                className={`rounded-xl shadow-lg hover:shadow-2xl p-8 flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-2 ${feature.bgColor}`}
              >
                <div className={`p-4 rounded-full inline-flex items-center justify-center mb-6 ${feature.bgColor === 'bg-primary-100' ? 'bg-primary-500 text-white' : 'bg-white text-primary-600'}`}>
                  <feature.icon className="h-10 w-10" />
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${feature.color}`}>{feature.title}</h3>
                <p className={`text-base ${feature.bgColor === 'bg-primary-100' ? 'text-gray-700' : 'text-gray-100'}`}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Trusted by Innovators in Cannabis
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <blockquote className="relative">
                  <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 h-16 w-16 text-primary-200 opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.333 7h13.333c1.833 0 3.333 1.5 3.333 3.333v13.333c0 1.833-1.5 3.333-3.333 3.333h-13.333c-1.833 0-3.333-1.5-3.333-3.333v-13.333c0-1.833 1.5-3.333 3.333-3.333zM8 10.333c0-.917.75-1.667 1.667-1.667h13.333c.917 0 1.667.75 1.667 1.667v13.333c0 .917-.75 1.667-1.667 1.667h-13.333c-.917 0-1.667-.75-1.667-1.667v-13.333z" />
                  </svg>
                  <p className="text-lg text-gray-700 italic">"{testimonial.quote}"</p>
                </blockquote>
                <div className="mt-6">
                  <p className="text-base font-semibold text-primary-700">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Got questions? We've got answers.
            </p>
          </div>
          <dl className="space-y-2">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </dl>
        </div>
      </section>

      {/* Contribute Section */}
      <section id="contribute" className="py-20 md:py-28 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Github className="h-16 w-16 text-primary-600 mx-auto mb-6"/>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Join the Movement: Contribute to GrowTrack
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
            GrowTrack is built by the community, for the community. Whether you're a developer, compliance expert, or passionate about a better cannabis industry, your contributions are valuable.
          </p>
          <div className="mt-10">
            <a
              href={githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Visit GitHub Repository <ArrowRight className="ml-3 h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Have questions, suggestions, or want to partner with us? We'd love to hear from you.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="mailto:info@growtrack.org"
              className="inline-flex items-center px-6 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 hover:text-primary-800 transition-colors shadow-sm hover:shadow-md"
            >
              <Mail className="mr-2 h-5 w-5" /> Email Us
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 hover:text-primary-800 transition-colors shadow-sm hover:shadow-md"
            >
              <MessageSquare className="mr-2 h-5 w-5" /> Join Community Forum
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <div className="bg-primary-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to revolutionize cannabis compliance?</span>
            <span className="block text-primary-300">Join the GrowTrack open-source community today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/login"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-800 bg-white hover:bg-primary-50 transition-colors"
              >
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center space-x-6 md:order-2">
               <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="mailto:info@growtrack.org" className="hover:text-gray-300">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
                <Link to="/" className="flex items-center justify-center md:justify-start space-x-2">
                    <Leaf className="h-7 w-7 text-primary-400" />
                    <span className="text-white text-xl font-bold">GrowTrack</span>
                </Link>
            </div>
          </div>
          <p className="mt-8 text-center text-base">
            &copy; {new Date().getFullYear()} GrowTrack Open Source Project. All rights reserved.
          </p>
           <p className="mt-2 text-center text-xs text-gray-500">
            GrowTrack is a community-driven, open-source initiative and is not affiliated with METRC or any state regulatory body.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GrowTrackLanding;