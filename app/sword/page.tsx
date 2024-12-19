import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function SwordPage() {
  return (
    <div className="min-h-screen bg-black">
      <nav className="p-4 bg-black border-b border-[#c69d2f]/20">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-[#c69d2f] hover:text-[#e7bd4c] flex items-center space-x-2 w-fit">
            <ArrowLeft size={20} />
            <span className="font-cinzel">Back to Home</span>
          </Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-br from-[#1a1a1a] to-black rounded-lg border border-[#785b10] overflow-hidden">
          <div className="flex flex-col md:flex-row items-start p-8 gap-8">
            {/* Content Section */}
            <div className="md:w-2/3 space-y-6">
              <h1 className="text-3xl font-cinzel font-bold text-[#c69d2f]">
                The Work of God is to Believe
              </h1>
              
              <div className="space-y-6 text-gray-300">
                <p>
                  Doug Coe discusses how people, especially religious individuals, often focus on comparing their work 
                  and achievements. He describes how this leads to a competitive mindset where people measure 
                  themselves against others based on their accomplishments - whether it&apos;s winning converts, helping 
                  the poor, or discipling others.
                </p>

                <blockquote className="border-l-4 border-[#c69d2f] pl-4 italic">
                  &ldquo;The work of God is to believe in the one he has sent.&rdquo; - Jesus
                </blockquote>

                <p>
                  Doug shares this crucial turning point from Jesus&apos;s teaching, suggesting that true spiritual 
                  work isn&apos;t about quantifiable achievements, but about faith itself.
                </p>

                <div className="pl-6 space-y-4">
                  <p>Key examples:</p>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>A hotel washerwoman can do God&apos;s work simply through believing while doing her everyday tasks</li>
                    <li>A man who prayed 8 hours daily for 60 years, when asked what he learned, simply responded 
                    with excitement &ldquo;He&apos;s alive!&rdquo;</li>
                  </ul>
                </div>

                <p>
                  Doug expresses hope that nobody continues his work after he dies, acknowledging that much of 
                  what he did was &ldquo;in the flesh&rdquo; rather than &ldquo;in the spirit.&rdquo; He emphasizes that Jesus only 
                  needs one person who believes, not multiple leaders or famous figures.
                </p>

                <p className="font-cinzel text-[#c69d2f] text-xl">
                  &ldquo;If I could live my life over again, I would simply believe him more.&rdquo;
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="md:w-1/3">
              <div className="relative h-[400px] w-full">
                <Image 
                  src="/images/doug-pic2.jpg"
                  alt="Doug Coe"
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}