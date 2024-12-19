import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function SwordPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Navigation */}
        <Link href="/" className="inline-flex items-center text-[#c69d2f] hover:text-[#e7bd4c] mb-8 font-cinzel">
          <ArrowLeft className="mr-2" />
          Back to Home
        </Link>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Content Section */}
          <div className="md:w-2/3 space-y-6">
            <h1 className="text-4xl font-cinzel font-bold text-[#c69d2f] mb-8">The Work of God is to Believe</h1>
            
            <div className="space-y-6 text-gray-300">
              <p>
                People, especially religious individuals, often focus on comparing their work and achievements. 
                This leads to a competitive mindset where people measure themselves against others based on their 
                accomplishments - whether it's winning converts, helping the poor, or discipling others.
              </p>

              <blockquote className="border-l-4 border-[#c69d2f] pl-4 my-6 font-cinzel">
                "The work of God is to believe in the one he has sent." - Jesus
              </blockquote>

              <h2 className="text-2xl font-cinzel font-bold text-[#c69d2f] mt-8 mb-4">Key Examples</h2>
              <ul className="space-y-4 list-disc pl-6">
                <li>A hotel washerwoman can do God's work simply through believing while doing her everyday tasks</li>
                <li>A man who prayed 8 hours daily for 60 years, when asked what he learned, excitedly responded "He's alive!"</li>
              </ul>

              <p className="mt-6">
                The speaker hopes that nobody continues his work after he dies, acknowledging that much of what he did 
                was "in the flesh" rather than "in the spirit." He emphasizes that Jesus only needs one person who 
                believes, not multiple leaders or famous figures.
              </p>

              <p className="font-cinzel text-[#c69d2f] text-xl mt-8">
                "The only limitation in following Jesus is the extent of one's belief."
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/3">
            <img 
              src="/Images/doug-pic2.jpg"
              alt="Doug Coe"
              className="w-full rounded-1g shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}