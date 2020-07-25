import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  currentArticle: {
    id: 57,
    title: 'L’Atelier Pam Pam, c’est qui ? c’est quoi ?',
    content:
      "Moi, c’est Cécile. Mais vous pouvez m’appeler Pam Pam si vous préférez ;).\nQuand j’étais petite j’écoutais “Aléo 104.8” à la radio, ils passaient Piaf, les Beach Boys, Brel et puis “Lollipop” des Chordettes. A 10 ans je préférais déjà ce qui se faisait avant.\nJ’adorais les chasses aux trésors aussi, et créer des trucs avec mes mains, pour lesquelles je retirais beaucoup de plaisir et de satisfaction.\n\nÇa n’est pas allé en s’arrangeant, et à l’aube de mes 18 ans, mes envies créatives sous le bras, je me suis installée à Lyon pour passer un BTS Design d’objets à l’école des arts appliqués de Condé Lyon, puis un CAP tapisserie d’ameublement traditionnelle au Lycée des métiers d’arts et du bois George Lamarque à Rillieux-La-Pape.\n5 ans plus tard, à 23 ans, diplômes en poche et beaucoup d’envies en tête, l’Atelier Pam Pam est né dans un petit local aux Puces du Canal de Villeurbanne, mêlant chasses aux trésors quotidiennes, revalorisation des merveilles d’autrefois et créations libres et spontanées.\n\nA l’Atelier Pam Pam, je fais la quête du beau, de la poésie et de l’authenticité dans nos quotidiens.\nLorsque vous passez la porte de la boutique, une sélection personnelle vous attend, composée de mobilier populaire ancien et fonctionnel, de petits objets du quotidien et de meubles de métier variés, fabriqués avec le coeur et le savoir faire d’autrefois.\nIci je prône l’anti-lisse, la beauté de l’imperfection. Vous trouverez des patines, des mélanges de couleurs, de la singularité, des traces de rouille, des marques d’usage, des pièces uniques, des touchants raccommodages. C’est dans la préservation de l’imperfection et du vécu que je trouve l’âme, la poésie et l'élégance des vieilles choses, qu’il est pour moi bon de promouvoir et de protéger.\n\nChaque meuble est restauré avec soin de manière à pouvoir servir de nouveau pendant plusieurs années, en préservant sa beauté et sa singularité.\nJe répare, nettoie, brosse, patine, décape, revisite les meubles pour redonner une seconde vie à chacun. Ne sont utilisés que des matériaux nobles, qui évoluent bien dans le temps.\nJ'ajoute à cela mes créations, des pièces uniques ou petites séries, de luminaires et d’objets textiles faits main à partir d'éléments chinés ou récupérés. Je les mélanges au reste de mes trouvailles et prends beaucoup de plaisir à imaginer avec mes clients des réalisations sur mesure.\nAujourd’hui, l’atelier propose également des prestations adaptées aux professionnels, de la décoration d’intérieur à la location de mobilier, toutes détaillées dans “Cote pro”.\n \nA travers mon travail je tente de promouvoir un mode de vie et de consommation plus responsable et sensé, et j’ai à coeur de préserver et valoriser notre patrimoine populaire français.\nLa récup, le réemploi, la création ont toujours été des démarches pertinentes et épanouissantes à mes yeux, je suis plus qu’heureuse d’en avoir fait mon métier.\nAu delà des meubles, l’Atelier Pam Pam vous propose un art de vivre, où poésie, singularité et conscience sont les maîtres mots, n’hésitez pas à passer me voir pour papoter autour d’un thé ;).",
    published_at: '2020-07-09',
    author: {
      id: 1,
      full_name: 'Vincent REHM',
      title: 'Test',
      description: 'Test',
      created_at: '2020-04-29T15:33:21.841Z',
      updated_at: '2020-04-29T15:33:21.841Z',
      avatar: {
        id: 2,
        name: 'vrehm-picture',
        alternativeText: '',
        caption: '',
        width: 1200,
        height: 1200,
        formats: {
          large: { ext: '.jpeg', url: 'https://res.cloudinary.com/atelierpampam/image/upload/v1588174394/large_vrehm-picture_03149acc97.jpg', hash: 'large_vrehm-picture_03149acc97', mime: 'image/jpeg', size: 127.05, width: 1000, height: 1000, provider_metadata: { public_id: 'large_vrehm-picture_03149acc97', resource_type: 'image' } },
          small: { ext: '.jpeg', url: 'https://res.cloudinary.com/atelierpampam/image/upload/v1588174396/small_vrehm-picture_03149acc97.jpg', hash: 'small_vrehm-picture_03149acc97', mime: 'image/jpeg', size: 31.16, width: 500, height: 500, provider_metadata: { public_id: 'small_vrehm-picture_03149acc97', resource_type: 'image' } },
          medium: { ext: '.jpeg', url: 'https://res.cloudinary.com/atelierpampam/image/upload/v1588174395/medium_vrehm-picture_03149acc97.jpg', hash: 'medium_vrehm-picture_03149acc97', mime: 'image/jpeg', size: 68.93, width: 750, height: 750, provider_metadata: { public_id: 'medium_vrehm-picture_03149acc97', resource_type: 'image' } },
          thumbnail: { ext: '.jpeg', url: 'https://res.cloudinary.com/atelierpampam/image/upload/v1588174392/thumbnail_vrehm-picture_03149acc97.jpg', hash: 'thumbnail_vrehm-picture_03149acc97', mime: 'image/jpeg', size: 4.54, width: 156, height: 156, provider_metadata: { public_id: 'thumbnail_vrehm-picture_03149acc97', resource_type: 'image' } }
        },
        hash: 'vrehm-picture_03149acc97',
        ext: '.jpeg',
        mime: 'image/jpeg',
        size: 198.14,
        url: 'https://res.cloudinary.com/atelierpampam/image/upload/v1588174391/vrehm-picture_03149acc97.jpg',
        previewUrl: null,
        provider: 'cloudinary',
        provider_metadata: { public_id: 'vrehm-picture_03149acc97', resource_type: 'image' },
        created_at: '2020-04-29T15:33:16.964Z',
        updated_at: '2020-04-29T15:33:16.964Z'
      }
    },
    created_at: '2020-07-09T16:21:35.005Z',
    updated_at: '2020-07-09T16:25:51.595Z',
    slug: "l'atelier-pam-pam-c'est-qui-c'est-quoi",
    image: { id: 1, name: 'cecile', alternativeText: '', caption: '', width: 222, height: 227, formats: { thumbnail: { ext: '.jpeg', url: 'https://res.cloudinary.com/atelierpampam/image/upload/v1587996412/thumbnail_cecile_60ee45a8c2.jpg', hash: 'thumbnail_cecile_60ee45a8c2', mime: 'image/jpeg', size: 6.22, width: 153, height: 156, provider_metadata: { public_id: 'thumbnail_cecile_60ee45a8c2', resource_type: 'image' } } }, hash: 'cecile_60ee45a8c2', ext: '.jpeg', mime: 'image/jpeg', size: 9.9, url: 'https://res.cloudinary.com/atelierpampam/image/upload/v1587996411/cecile_60ee45a8c2.jpg', previewUrl: null, provider: 'cloudinary', provider_metadata: { public_id: 'cecile_60ee45a8c2', resource_type: 'image' }, created_at: '2020-04-27T14:06:52.846Z', updated_at: '2020-04-27T14:06:52.846Z' },
    categories: [{ id: 1, name: 'Test 1', created_at: '2020-04-29T15:33:33.359Z', updated_at: '2020-04-29T15:33:33.359Z', slug: 'test-1' }]
  }
})

export const mutations = {
  SET_CURRENT_ARTICLE(state, article) {
    state.currentArticle = article
  }
}
