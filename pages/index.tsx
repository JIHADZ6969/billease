import React, { useState, useEffect } from 'react';
import { FileText, Brain, CreditCard, TrendingUp } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FileText className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">BillEase</span>
          </div>
          <div className="flex space-x-6">
            <button className="text-gray-600 hover:text-blue-600 transition-colors">Features</button>
            <button className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</button>
            <button className="text-gray-600 hover:text-blue-600 transition-colors">About</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl font-bold text-gray-800 mb-6 text-center">
            Simplify Your Bills with
            <span className="text-blue-600"> AI-Powered </span>
            Management
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Let our advanced AI handle your bill management while you focus on what matters most.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: <Brain className="h-12 w-12 text-blue-600" />,
              title: "AI-Powered Analysis",
              description: "Smart categorization and insights powered by advanced AI"
            },
            {
              icon: <CreditCard className="h-12 w-12 text-blue-600" />,
              title: "Automated Payments",
              description: "Never miss a due date with intelligent payment scheduling"
            },
            {
              icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
              title: "Expense Tracking",
              description: "Real-time monitoring and predictive expense analytics"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-lg transform transition-all duration-1000 hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Start Managing Bills Smarter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
