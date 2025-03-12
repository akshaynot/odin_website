import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function News() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">News & Updates</h1>

          {/* Featured News */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Featured News"
                className="w-full h-96 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>March 15, 2024</span>
                  <User size={16