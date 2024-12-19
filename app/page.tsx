import React from 'react';
import { Sword, Book, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="p-4 z-20 bg-black border-b border-[#c69d2f]/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image 
              src="/images/aog98.jpg"
              alt="Armor of God Logo"
              width={48}
              height={48}
              className="object-cover"
            />
            <span className="text-[#c69d2f] text-2xl font-cinzel font-bold tracking-wide">
              The Armor of God
            </span>
          </div>
          <a 
            href="https://www.youtube.com/@TheArmorofGod-777/videos" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <span>YouTube Channel</span>
          </a>
        </div>
      </nav>

      {/* Banner Image */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="relative w-full h-[400px]">
          <Image 
            src="/images/aogb.jpg"
            alt="The Armor of God Banner"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Feature Cards */}
      <main className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 py-12">
          {/* Shield Card */}
          <div className="group hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-8 rounded-lg border border-[#785b10] hover:border-[#c69d2f] transition-colors h-full">
              <Shield className="h-12 w-12 text-[#c69d2f] mb-6 group-hover:text-[#e7bd4c] transition-colors" />
              <h2 className="text-2xl font-bold text-white mb-3">Shield of Faith</h2>
              <p className="text-gray-400 leading-relaxed">
                Take up the shield of faith, with which you can extinguish all the 
                flaming arrows of the evil one.
              </p>
            </div>
          </div>

          {/* Sword Card */}
          <div className="group hover:transform hover:-translate-y-2 transition-all duration-300">
            <Link href="/sword">
              <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-8 rounded-lg border border-[#785b10] hover:border-[#c69d2f] transition-colors h-full">
                <div className="flex flex-col items-center">
                  <Image 
                    src="/images/doug-pic.jpg"
                    alt="Doug Coe"
                    width={96}
                    height={96}
                    className="rounded-full object-cover mb-6"
                  />
                  <Sword className="h-12 w-12 text-[#c69d2f] mb-6 group-hover:text-[#e7bd4c] transition-colors" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">The Work of God is to Believe</h2>
                <p className="text-gray-400 leading-relaxed">
                  Take the sword of the Spirit, which is the word of God.
                </p>
              </div>
            </Link>
          </div>

          {/* Word Card */}
          <div className="group hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-8 rounded-lg border border-[#785b10] hover:border-[#c69d2f] transition-colors h-full">
              <Book className="h-12 w-12 text-[#c69d2f] mb-6 group-hover:text-[#e7bd4c] transition-colors" />
              <h2 className="text-2xl font-bold text-white mb-3">Word of God</h2>
              <p className="text-gray-400 leading-relaxed">
                Study and meditate on God&apos;s word to strengthen your spiritual armor.
              </p>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-black rounded-lg border border-[#785b10] overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
              {/* Scripture Text */}
              <div className="p-8 md:w-1/2 space-y-6">
                <h3 className="text-2xl font-cinzel font-bold tracking-wide bg-gradient-to-r from-[#c69d2f] to-[#e7bd4c] text-transparent bg-clip-text">
                  The Armor of God
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    &ldquo;Therefore put on the full armor of God, so that when the day of evil comes, 
                    you may be able to stand your ground, and after you have done everything, to stand.&rdquo;
                  </p>
                  <p className="text-[#c69d2f] italic font-cinzel">- Ephesians 6:13</p>
                  
                  <p className="text-gray-300">
                    &ldquo;Stand firm then, with the belt of truth buckled around your waist, 
                    with the breastplate of righteousness in place, and with your feet fitted 
                    with the readiness that comes from the gospel of peace.&rdquo;
                  </p>
                  <p className="text-[#c69d2f] italic font-cinzel">- Ephesians 6:14-15</p>
                </div>
              </div>
              
              {/* Description Image */}
              <div className="md:w-1/2 p-8">
                <div className="relative h-[300px] w-full">
                  <Image 
                    src="/images/aog-decription.jpg"
                    alt="Armor of God Description"
                    fill
                    className="object-contain rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
