import React from 'react';
import { Award } from 'lucide-react';

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
    <div className="relative bg-gradient-to-br from-black via-gray-900 to-black p-12 rounded-xl border-[6px] border-yellow-500 shadow-[0_0_25px_rgba(255,215,0,0.4)] text-center">
      
      {/* Golden curved accents (top and bottom) */}
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600"></div>
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600"></div>

      {/* Header */}
      <div className="flex justify-center mb-6">
        <Award className="h-16 w-16 text-yellow-400 drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]" />
      </div>

      {/* Title */}
      <h1 className="text-5xl font-extrabold text-yellow-400 tracking-wide mb-2 uppercase">
        Certificate of Appreciation
      </h1>
      <p className="text-yellow-200 text-lg mb-8">This certificate proudly presents to</p>

      {/* Name */}
      <h2 className="text-4xl font-bold text-white border-b-2 border-yellow-400 inline-block px-8 pb-2 mb-6">
        {studentName}
      </h2>

      {/* Description */}
      <p className="text-yellow-100 text-lg mb-3">
        For outstanding participation in
      </p>
      <h3 className="text-2xl font-semibold text-yellow-400 italic mb-6">
        {eventName}
      </h3>

      {/* University Name */}
      <p className="text-yellow-100 text-lg mb-8">
        Organized by
      </p>
      <h3 className="text-2xl font-bold text-white mb-6">
        Graphic Era Hill University
      </h3>

      {/* Date and Signature Area */}
      <div className="flex justify-between mt-12 text-yellow-200 px-12">
        <div>
          <div className="border-t-2 border-yellow-400 w-32 mx-auto mb-2"></div>
          <p>Date: {new Date(issuedDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</p>
        </div>

        <div>
          <div className="border-t-2 border-yellow-400 w-32 mx-auto mb-2"></div>
          <p>Signature</p>
        </div>
      </div>
    </div>
  );
};