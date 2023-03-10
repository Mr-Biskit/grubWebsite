import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ImageGallery from "../components/ImageGallery";
import InfoCards from "../components/InfoCards";

export default function page() {
  return (
    <div className="w-screen">
      <Header />
      <Hero />
      <ImageGallery />
      <InfoCards />

      <div className="px-4">
        <div className="max-w-3xl bg-black text-white rounded-lg mx-auto my-16 p-16">
          <h1 className="text-4xl text-white">Hello World</h1>
          <h2 className="text-2xl text-white">This is a test</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          accusantium, unde quibusdam rem distinctio pariatur similique, quaerat
          sunt beatae quisquam iure officiis labore sequi. Dolores
          exercitationem assumenda natus temporibus placeat?
        </div>
      </div>
    </div>
  );
}
