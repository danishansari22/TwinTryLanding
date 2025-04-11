import { SiNvidia } from "react-icons/si";

export default function BackedBySection() {
  return (
    <section id="partners" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10 bg-white rounded-2xl shadow-md">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="font-display text-2xl font-bold text-dark mb-2">
              Backed by Industry Leaders
            </h3>
            <p className="text-gray-600 max-w-md">
              We're proud to be supported by NVIDIA Inception, an exclusive program designed to nurture cutting-edge AI startups revolutionizing industries.
            </p>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 bg-black px-6 py-3 rounded-xl">
              <SiNvidia className="text-4xl text-green-500" />
              <div>
                <div className="text-white font-medium">NVIDIA</div>
                <div className="text-gray-400 text-sm">Inception Program</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}