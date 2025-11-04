import React from 'react';
import { Award, Star, Sparkles, University, Calendar } from 'lucide-react';

interface CertificateTemplateProps {
  studentName: string;
  eventName: string;
  issuedDate: string;
}

export const CertificateTemplate: React.FC<CertificateTemplateProps> = ({
  studentName,
  eventName,
  issuedDate,
}) => {
  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-12 rounded-2xl border-8 border-white shadow-2xl shadow-blue-200/50 backdrop-blur-sm overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-300 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-300 rounded-full blur-2xl"></div>
      </div>

      {/* Corner ornaments */}
      <div className="absolute top-6 left-6 w-20 h-20 border-t-4 border-l-4 border-blue-400/40 rounded-tl-2xl"></div>
      <div className="absolute top-6 right-6 w-20 h-20 border-t-4 border-r-4 border-blue-400/40 rounded-tr-2xl"></div>
      <div className="absolute bottom-6 left-6 w-20 h-20 border-b-4 border-l-4 border-blue-400/40 rounded-bl-2xl"></div>
      <div className="absolute bottom-6 right-6 w-20 h-20 border-b-4 border-r-4 border-blue-400/40 rounded-br-2xl"></div>

      <div className="relative text-center space-y-8 z-10">
        {/* Header with icon and title */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-md opacity-50"></div>
            <Award className="h-20 w-20 text-blue-600 relative z-10" />
            <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-500 z-20" />
          </div>
          
          <div className="relative">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 font-serif">
              Certificate of Participation
            </h1>
            <div className="w-48 h-1.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mx-auto shadow-lg"></div>
          </div>
        </div>

        {/* Certification text */}
        <div className="space-y-8">
          <p className="text-xl text-gray-600 font-light tracking-wide">
            This is to certify that
          </p>

          {/* Student Name with elegant styling */}
          <div className="py-6 relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <h2 className="text-4xl font-bold text-gray-800 px-12 py-4 bg-gradient-to-r from-transparent via-white to-transparent rounded-lg font-serif">
              {studentName}
            </h2>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <Star className="absolute -left-2 top-1/2 h-4 w-4 text-yellow-500 transform -translate-y-1/2" />
            <Star className="absolute -right-2 top-1/2 h-4 w-4 text-yellow-500 transform -translate-y-1/2" />
          </div>

          {/* Event Details */}
          <div className="space-y-4">
            <p className="text-lg text-gray-600 font-light">
              has successfully participated in
            </p>
            <div className="relative inline-block">
              <h3 className="text-2xl font-semibold text-blue-700 px-6 py-3 bg-white/80 rounded-lg shadow-sm border border-blue-100">
                {eventName}
              </h3>
              <div className="absolute -inset-1 bg-blue-200/30 rounded-lg blur-sm -z-10"></div>
            </div>
          </div>

          {/* University Section */}
          <div className="pt-6 space-y-3">
            <p className="text-lg text-gray-600 font-light">organized by</p>
            <div className="flex items-center justify-center gap-3">
              <University className="h-8 w-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800 font-serif">
                Graphic Era Hill University
              </h3>
            </div>
          </div>

          {/* Date Section */}
          <div className="pt-8 flex items-center justify-center gap-2 text-gray-600">
            <Calendar className="h-5 w-5" />
            <p className="text-sm font-medium">
              Issued on: {new Date(issuedDate).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>

        {/* Decorative Seal */}
        <div className="relative mt-8 flex justify-center">
          <div className="absolute w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
            <div className="text-white text-center">
              <div className="font-bold text-sm">GEHU</div>
              <div className="text-xs font-semibold">2024</div>
            </div>
          </div>
          <div className="w-24 h-24 border-2 border-dashed border-yellow-400/60 rounded-full animate-spin-slow"></div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-float"></div>
      <div className="absolute top-1/3 right-1/5 w-1 h-1 bg-purple-400 rounded-full opacity-60 animate-float-delayed"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-60 animate-float-slow"></div>
    </div>
  );
};