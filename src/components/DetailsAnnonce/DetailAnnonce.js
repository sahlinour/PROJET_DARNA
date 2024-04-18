import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DetailAnnonce = ({ id }) => {
  const annonceId = useParams(id);

  // Placeholder pour les détails de l'annonce
  const annonceDetails = {
    id: annonceId,
    titre: "Appartement à louer",
    description: "Bel appartement lumineux avec vue sur la ville...",
    surface: 80,
    etage: 3,
    statut: "Disponible",
    categorie: "Appartements",
    typeAnnonce: "Location",
    datepublication: "2022-03-15",
    datemodification: null,
    adresse: "10 Rue de la Liberté, Paris",
    prix: 1200,
    image: "/images/b60fe085-00d1-49c4-a0a6-0c4bed540880.jpeg"
  };

  // Liste des images à afficher dans le slider
  const images = [
    "/images/villa26vue1-raison_internet.jpg",
    "/images/télécharger (10).jpeg",
    "/images/Penthouse Interior Design in Dubai_ Elegance and Opulence.jpeg",
    "/images/image4.jpeg",
    "/images/villa26vue1-raison_internet.jpg"
  ];

  // État pour stocker l'index de l'image sélectionnée
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Configuration du carrousel react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setSelectedImageIndex(next)
  };

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Slider */}
        <div className="lg:col-span-1">
          <Slider {...settings}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full mb-4"
              />
            ))}
          </Slider>
        </div>
        {/* Colonne de la carte détaillée */}
        <div className="lg:col-span-1">
          <div className="max-w-lg bg-white rounded-lg shadow-md overflow-hidden">
            <img src={images[selectedImageIndex]} alt={annonceDetails.titre} className="w-full h-64 object-cover object-center" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{annonceDetails.titre}</h2>
              <p className="text-gray-700 mb-4">{annonceDetails.description}</p>
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-600">Surface: {annonceDetails.surface} m²</p>
                <p className="text-gray-600">Catégorie: {annonceDetails.categorie}</p>
              </div>
              <p className="text-gray-600 mb-4">Adresse: {annonceDetails.adresse}</p>
              <div className="flex justify-between items-center">
                <p className="text-2xl font-semibold text-orange-500">{annonceDetails.prix} DH</p>
                <p className="text-gray-600">Statut: {annonceDetails.statut}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailAnnonce;
