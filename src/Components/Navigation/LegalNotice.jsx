import React from 'react'

export default function LegalNotice() {
  return (
    <section className='pt-16 pb-[10%] xl:pt-24 bg-primary-50'>
      <div className='mx-[5%] md:mx-[10%] lg:mx-[20%] mb-10'>
        <h1 className="text-secondary-100 text-3xl  font-bold mb-5">
          MENTIONS LEGALES
        </h1>

        <h4 className="text-primary-800 text-xl !font-bold my-8">01/12/22 </h4>
        <p className="text-base text-gray-800">
          lmk-meta.web.app est un site détenu par la société LMK META
          (ci-après désignée «LMK META»),
          <br />
          SASU au capital de 1000 euros immatriculée au Registre du Commerce et des Sociétés de
          LYON en cours d’immatriculation dont le siège social est situé à LYON 0768243413  <br />

          Toute représentation totale ou partielle de ce site, par quelque personne que ce soit, sans l'autorisation expresse de 
          l'éditeur du site est interdite et constituerait une contrefaçon sanctionnée par les articles du Code de la propriété intellectuelle. <br />
          Pour toute demande de contact : <a className='text-cyan-500' href="mailto:lmkmeta3@gmail.com">lmkmeta3@gmail.com</a>

          <br />
        </p>
      </div>
    </section>
  )
}
