import React from 'react';

const News = () => {
    return (
        <div className='mt-28 md:mt-36 lg:mt-52 px-10 lg:px-52 space-y-10'>
            <h3 className="text-gray-700 underline text-sm -mb-5">{/* Mettre le titre ici -> */} Retrouvez ici chaque dimanche une nouvelle actualité</h3>
            <h3 className="text-red-700 text-3xl">{/* Mettre le titre ici -> */} Qu’est-ce qu’un stablecoin ?</h3>
            <p className='font-semibold'>
                {/* Mettre le premier bloc de texte ici v */}
                Si vous êtes nouveau dans l’univers de la cryptomonnaie, il est fort probable que vous ayez entendu
                parler de leur extrême volatilité
                <br /> {/* <br /> sert à passer à la ligne donc ici nous avons deux saut de ligne pour mettre un espace entre les paragraphes */}
                <br />
                En effet la volatilité des cryptomonnaies est ce qui fait leur popularité, la réussite des uns mais
                aussi les échecs des autres
                <br />
                <br />
                Pourtant, nous allons voir qu’il existe des crypto-actifs très stables appelés les stablecoins
            </p>
            <h3 className="text-red-700 text-2xl lg:pt-10">{/* Mettre le titre ici -> */} Le principe d’un stablecoin</h3>
            <p className='font-semibold pb-28 lg:pb-72'>
                {/* Mettre le premier bloc de texte ici v */}
                Un stablecoin est une cryptomonnaie adossé sur un actif réputé ou une valeur refuge comme l’or
                ou une monnaie fiduciaire (euro, dollar, pound...)
                <br /> {/* <br /> sert à passer à la ligne donc ici nous avons deux saut de ligne pour mettre un espace entre les paragraphes */}
                <br />
                Le stablecoin permet ainsi aux investisseurs de limiter leur risque en allouant une partie de leur
                portefeuille à ces actifs stables, sans pour pour autant échanger leur cryptomonnaies contre de l’or
                ou des dollars à chaque fois qu’ils veulent trader
                <br />
                <br />
                Ces actifs ont une réserve de liquidité équivalente au nombre de crypto-actifs qu’ils émettent sur la
                blockchain. Ces derniers sont soumis à des contrôles financiers très stricts    
            </p>


        </div>
    );
};

export default News;