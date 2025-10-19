import Image from "next/image";
import { galleryData } from "../data/coupleData";

const sizeClasses = {
  small: "col-span-1 md:col-span-1",
  large: "col-span-2 md:col-span-3 md:row-span-2",
  wide: "col-span-2 md:col-span-3",
  tall: "col-span-1 md:col-span-2 md:row-span-2",
};

export default function GallerySection() {
  return (
    <section className="py-10  bg-gradient-to-b from-white via-rose-50/30 to-white">
      <div className="max-w-7xl mx-auto px-2">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl heading text-gray-900 mb-3">
            Our Gallery
          </h2>
          <p className="text-gray-600 text-xl font-semibold">A glimpse into our world ✨</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
          {galleryData.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-3xl group ${
                sizeClasses[item.size] || "col-span-1"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={item.src}
                alt={`gallery-${index}`}
                width={600}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
