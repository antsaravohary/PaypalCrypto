import React, { useState } from "react";

export const LIST_CARD = [
  {
    image: "/img/bitcoin.png",
    title: "Bitcoin : BTC",
    description:
      "Bitcoin : BTC (mot anglais qui se décompose en 2 syllabes, bit : unité d'information binaire (composée uniquement de 0 et de 1) et coin : pièce de monnaie) est une crypto-monnaie servant de système de paiement pair-à-pair",
  },

  {
    image: "/img/ETH.png",
    title: "L'ethereum : ETH",
    description:
      "L'ethereum : ETH est une crypto-monnaie qui peut être utilisée comme moyen de paiement sur cette plateforme. Comme le bitcoin, l'ether existe dans le cadre d'un système financier pair-à-pair autonome, sans aucune supervision ou intervention de l'État",
  },

  {
    image: "/img/POLYGON.png",
    title: "Matic Network : POLYGON",
    description:
      "Matic Network : POLYGON est une solution de mise à l’échelle de seconde couche (layer 2) sur le réseau Ethereum. Plus rapide et surtout moins coûteux, Matic arrive au secours d’Ethereum en rendant la finance décentralisée enfin abordable",
  },

  {
    image: "/img/FET.png",
    title: "Fetch.ai : FET",
    description:
      "Fetch.ai : FET est une plateforme mêlant avec subtilité l’univers de l'intelligence artificielle et l’écosystème blockchain. Elle vise à faciliter la création et l'exécution de smart-contracts pour résoudre des problèmes complexes observés dans le monde réel",
  },

  {
    image: "/img/HBAR.png",
    title: "Hedera : HBAR",
    description:
      "Hedera : HBAR est un réseau distribué décentralisé qui est structurellement très différent des blockchains Bitcoin et Ethereum, mais qui remplit des fonctions équivalentes. Il repose sur des algorithmes de sécurité et de validation plus efficaces que ceux utilisés sur les réseaux blockchain",
  },

  {
    image: "/img/SOL.png",
    title: "Solana : SOL",
    description:
      "Solana : SOL est une crypto et une blockchain mise en service en mars 2020, permettant le développement d'applications décentralisées, avec pour ambition d'en devenir l'option par défaut grâce à sa rapidité et à ses commissions réduites",
  },

  {
    image: "/img/FTM.png",
    title: "Fantom : FTM",
    description:
      "Fantom : FTM est un DLT construit sur un DAG (Directed Acyclic Graph) qui est conçu pour offrir des potentialités avancées de contrats intelligents compatibles avec Ethereum sur un réseau décentralisé très bon marché et sécurisé, pour y déployer des dApps DeFi.",
  },

  {
    image: "/img/AVAX.png",
    title: "Avalanche : AVAX",
    description:
      "Avalanche : AVAX est une plateforme de smart contracts permettant une exécution des plus rapides et sécurisées à ce jour. Sa plateforme facilite la création de sous-réseaux, d’applications décentralisées et le développement de tokens. Couplé à sa crypto-monnaie AVAX, son protocole de consensus innovant fait d’Avalanche un acteur majeur de l’écosystème crypto et de la DeFi",
  },

  {
    image: "/img/XLM.png",
    title: "Stellar : XLM",
    description:
      "Stellar : XLM Lumens est un réseau de paiement qui permet aux institutions financières, entreprises ou particuliers de s'envoyer des fonds sous la forme de l'actif natif XLM ou bien sous la forme d'IOUs, des représentations numériques de n'importe quel actif sur",
  },

  {
    image: "/img/LTC.png",
    title: "Litecoin : LTC ",
    description:
      "Litecoin : LTC est une forme de devise électronique dans le marché des crypto-monnaies. En utilisant la technologie de la blockchain, le litecoin peut être utilisé pour transférer directement des fonds entre plusieurs individus ou entreprises",
  },

  {
    image: "/img/AUDIO.png",
    title: "Audius : AUDIO",
    description:
      "Audius : AUDIO est une plateforme de streaming qui permet aux artistes d'être rémunérés comme il se doit. En souhaitant mieux rémunérer que toute autre plateforme de streaming qui existe sur le marché, elle se démarque des autres et a rendu cela possible grâce… à la crypto-monnaie",
  },

  {
    image: "/img/OGN.png",
    title: "Origin Protocol : OGN",
    description:
      "Origin Protocol : OGN c'est le réseau permettant aux acteurs la distribution des biens et services sur le marché. Cela est effectué par les réseaux peer-to-peer ou P2P. Cette plateforme exploite la blockchain Ethereum (ETH) et également dans le système de fichiers interplanétaire (IPFS)",
  },
];

export const CardList = (props) => {

    const [readMore, setReadMore] = useState(false);

  return (
    <div class="m-3 max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="mt-3 w-24 h-24  m-auto" src={props.image} alt={props.title} />

      <div class="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          { readMore ? props.description :`${props.description.substring(0,150)}...`}
          &ensp; 
          <button onClick={() => setReadMore(!readMore)}>{readMore ? '  moins' : '  en savoir plus'}</button>
        </p>
      </div>
    </div>
  );
};
