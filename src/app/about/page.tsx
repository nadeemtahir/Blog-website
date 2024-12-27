// pages/about.js
import Image from "next/image";
export default function About() {
    return (
    <div className="min-h-screen bg-neutral-200 flex flex-col items-center justify-center py-16">
        {/* About Section */}
        <div className="max-w-6xl mx-auto px-6 bg-white shadow-xl rounded-xl overflow-hidden">
          <div className="text-center mb-12 mt-10">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">About Us</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are a passionate team committed to delivering innovative solutions that
              drive business success. Our focus on customer satisfaction and cutting-edge
              technology sets us apart in the industry.
            </p>
          </div>
  
          <div className="px-6 py-8 bg-gray-100 rounded-md mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our mission is to empower businesses with the tools they need to succeed in
              an ever-changing world. We aim to provide exceptional products and services
              that exceed expectations and foster long-term partnerships.
            </p>
          </div>
  
          {/* Team Section */}
          <div className="px-6 py-8">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Meet the Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Image
                  src="/images/j2.jpeg"
                  alt="Team Member"
                  height={128}
                  width={128}
                  className="mx-auto mb-4 rounded-full"
                />
                <h3 className="text-xl font-semibold text-gray-900">John Doe</h3>
                <p className="text-gray-600">CEO & Co-Founder</p>
                <p className="mt-4 text-gray-700">
                  John is the visionary behind our company, leading our team with a focus
                  on growth, innovation, and client relationships.
                </p>
              </div>
  
              {/* Team Member 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Image
                  src="/images/j1.jpeg"
                  alt="Team Member"
                  height={128}
                  width={128}
                  className="mx-auto mb-4 rounded-full"
                />
                <h3 className="text-xl font-semibold text-gray-900">Jane Smith</h3>
                <p className="text-gray-600">Lead Designer</p>
                <p className="mt-4 text-gray-700">
                  Jane brings creativity and attention to detail to every project. She
                  ensures our products are not only functional but beautifully designed.
                </p>
              </div>
  
              {/* Team Member 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Image
                  src="/images/a1.jpeg"
                  alt="Team Member"
                  height={128}
                  width={128}
                  className=" mx-auto mb-4 rounded-full"
                />
                <h3 className="text-xl font-semibold text-gray-900">Alice Johnson</h3>
                <p className="text-gray-600">Head of Marketing</p>
                <p className="mt-4 text-gray-700">
                  Alice is responsible for crafting our brands voice and ensuring our
                  message reaches the right audience with the perfect strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  