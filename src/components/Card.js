import { useState, useEffect } from "react";
import cards from "api/cards";
export default function Card() {
  const [card, setCard] = useState([]);
  useEffect(() => {
    setCard(cards);
  }, []);

  return (
    <div className="container mx-auto grid md:grid-cols-3 md:gap-x-4 gap-y-4 p-4 md:p-0">
      {card.map((card) => (
        <div className="flex flex-col items-center p-10 bg-white shadow md:shadow-md rounded-lg gap-y-3 text-center">
          <img className="mb-2" src={card.image} />
          <h3 className="font-semibold text-xl text-primary-brand-color">{card.title}</h3>
          <p className="text-gray-500 tracking-wide	">{card.description}</p>
        </div>
      ))}
    </div>
  );
}
