import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="About pb-[5%]">
      <div className="about px-3">
        <div className="md:flex w-full">
          <div className="p-4 md:w-1/2">
            <h1 className="page-title pt-2 font-bold">A propos</h1>

            <h5 className="text-lg font-semibold lg:pt-6">
              Alertes crypto : comment récupérer votre investissement en
              cryptomonnaie
            </h5>
            <p className="text-justify mb-1">
              Vous avez envie d’investir dans les cryptomonnaies, mais vous ne
              vous y connaissez pas vraiment. Vous voulez être sûr d’avoir
              choisi les bonnes cryptomonnaies pour récupérer vos gains. LMK
              META vous propose des alertes crypto pour découvrir exactement
              quelle cryptomonnaie acheter, quand les acheter et quand les
              revendre pour réaliser des bénéfices.
            </p>
            <h5 className="text-lg font-semibold lg:pt-16">
              Pourquoi acheter des alertes crypto pour réussir votre
              investissement crypto ?{" "}
            </h5>
            <p className="text-justify mb-1">
              Il est vraiment surprenant de savoir que parmi les investisseurs
              crypto, alors que beaucoup enregistrent des pertes de capital,
              d’autres réussissent à faire fortune en investissant de manière
              stratégique. <br />
              Si vous voulez vous lancer dans les cryptomonnaies, sachez qu’il
              faut une stratégie pour investir en cryptomonnaie et récupérer ses
              gains. Si vous n’avez aucune stratégie, alors vous devez commencer
              avec les alertes crypto. Ce sont des outils très pratiques pour
              les débutants qui ne sont pas encore suffisamment aguerris pour
              savoir quand et comment investir pour réaliser des gains en
              cryptomonnaies. <br />
              En effet, les alertes crypto sont des notifications qui vous
              permettent de contourner l’effet de surprise que génèrent les
              variations des prix des cryptomonnaies. En effet, le marché des
              cryptomonnaies est un marché très volatile par nature. Or,
              certaines cryptomonnaies sont généralement plus volatiles que
              d’autres. <br />
              Ainsi, pour investir et augmenter vos chances de faire des gains,
              vous devez éviter de vous faire surprendre par les augmentations
              et les baisses de prix. Vous devez pouvoir commencer à anticiper.
              Et pour cela, il faut suivre de très près les variations de prix
              et suivre les actualités liées aux cryptomonnaies en général et
              aux cryptomonnaies dans lesquelles vous avez investi en
              particulier. <br />
              Ce sont ces informations qui vous permettent de savoir quel est le
              meilleur moment pour acheter et quel est le meilleur moment pour
              vendre. Sans ces informations, vous risquez de devenir victime de
              la fluctuation des prix des cryptomonnaies et de perdre votre
              investissement.
            </p>
          </div>

          <div className="p-4 md:w-1/2">
            {/* <video autoPlay loop muted={true}>
                                <source src={content} type='video/mp4' />
                            </video> */}
            <img
              alt="bitcoin"
              className="h-60 w-full object-cover rounded my-4"
              src="./crypto.webp"
            />

            <h5 className="text-lg font-semibold">
              Comment fonctionnent nos alertes crypto ?{" "}
            </h5>
            <p className="text-justify mb-1">
              Nous vous enverrons 4 alertes crypto, pour la modique somme de
              4,99 €. Il s’agit d’alerte crypto d’achat et de vente. Dès que
              vous achetez nos alertes, nous vous dirigeons vers les 4
              cryptomonnaies les plus prometteuses du moment.
            </p>
            <p className="text-justify mb-1">
              La diversification vous permettra de bénéficier du potentiel
              rémunérateur de plusieurs cryptomonnaies, ce qui vous permettra de
              maximiser vos gains
            </p>

            <p className="text-justify mb-1">
              Nous vous précisons également pourquoi vous devez acheter à cette
              date pour vous permettre de savoir pourquoi il faut que vous
              achetiez et pour vous permettre d’investir le montant adéquat.
            </p>
            <p className="text-justify mb-1">
              En dehors de cette alerte d’achat, vous recevrez également une
              alerte de vente. Nous vous révélons une date d'événement pour
              chacune des 4 cryptomonnaies. Il s’agit d’un événement qui aura
              pour conséquence de favoriser, de contribuer ou de provoquer
              l'augmentation du prix de cryptomonnaie.
            </p>
            <p className="text-justify mb-1">
              Dans nos alertes crypto, nous vous révèlerons l'événement en
              question, la date à laquelle il doit se produire, et la manière
              dont il pourra impacter le prix de la cryptomonnaie. En fonction
              de l’envergure de l’impact attendu, vous allez donc définir le
              montant que vous allez investir en cryptomonnaie. Nous
              recommandons d’investir plus d’argent dans les évènements à fort
              impact. Évidemment, il est préférable de définir un capital global
              à investir que vous n’allez pas dépasser, quels que soient les
              évènements. Cela vous permet d’investir de manière responsable.
            </p>
            <p className="text-justify mb-1">
              Alors, si vous êtes prêt à réaliser vos premiers gains en
              investissant dans les cryptomonnaies, passez commande maintenant
              et lancez-vous avec nos alertes crypto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
