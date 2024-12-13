import React from 'react';
import { Bot, Brain, Cpu, Database, LineChart, Shield } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Strategy Consulting',
    description: 'Develop comprehensive AI strategies aligned with your business objectives and industry requirements.'
  },
  {
    icon: Bot,
    title: 'Custom AI Solutions',
    description: 'Build and implement tailored AI solutions that address your specific business challenges.'
  },
  {
    icon: LineChart,
    title: 'AI Analytics',
    description: 'Transform your data into actionable insights with advanced AI-powered analytics.'
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Design and implement robust data pipelines and infrastructure for AI systems.'
  },
  {
    icon: Shield,
    title: 'AI Governance',
    description: 'Establish ethical AI practices and governance frameworks for responsible AI deployment.'
  },
  {
    icon: Cpu,
    title: 'AI Integration',
    description: 'Seamlessly integrate AI solutions with your existing systems and workflows.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive AI solutions to drive your business forward
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
              <div className="relative bg-white p-6 rounded-xl">
                <service.icon className="h-8 w-8 text-indigo-600" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}