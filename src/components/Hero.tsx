import React from 'react';
import { ArrowRight, Bot, Brain, Cpu } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-100 via-white to-purple-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Business with AI Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Expert AI consulting and implementation services to help your business leverage the power of artificial intelligence. From strategy to deployment, we're your trusted partner in AI transformation.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#services" className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Learn More
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform">
                <Brain className="h-8 w-8 text-indigo-600 mb-3" />
                <h3 className="font-semibold">AI Strategy</h3>
                <p className="text-sm text-gray-600">Custom AI solutions tailored to your needs</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform mt-6">
                <Bot className="h-8 w-8 text-indigo-600 mb-3" />
                <h3 className="font-semibold">ML Development</h3>
                <p className="text-sm text-gray-600">Advanced machine learning implementation</p>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform">
                <Cpu className="h-8 w-8 text-indigo-600 mb-3" />
                <h3 className="font-semibold">AI Integration</h3>
                <p className="text-sm text-gray-600">Seamless integration with existing systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}