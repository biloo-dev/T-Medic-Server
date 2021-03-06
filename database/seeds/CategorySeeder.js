'use strict'

/*
|--------------------------------------------------------------------------
| CategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
class CategorySeeder {
  async run() {
    await Database.from('categories').insert([
      // {
      //   id: 1,
      //   name_ar: "كل المنتجات",
      //   name_fr: "Tout les produits",
      //   slug: null,
      //   type: "shop"
      // },
      {/******      *******/
        id: 2,
        type:'shop',
        name_fr: 'Soins De Santé',
        name_ar: "الرعاية الصحية",
        slug: 'soins_de_sante',  
        image: '/images/categories/category-1.jpg', 
      }, 
      {
        id: 3,
        type:'shop',
        name_fr: "Contrôle De La Santé",
        name_ar : "فحص طبي",
        slug: 'controle_de_la_sante', 
        parent_id: 2 
      }, 
      {
        id: 4,
        type:'shop',
        name_fr: "Diagnostic",
        name_ar : "التشخيص",
        slug: 'diagnostic',
        parent_id: 2
  
      }, 
      {
        id: 5,
        type:'shop',
        name_fr: "Massage & Bien-être",
        name_ar : "التدليك والرفاهية",
        slug: 'massage_Bien_etre',
        parent_id: 2
      
      }, 
      {
        id: 6,
        type:'shop',
        name_fr: "Mesure",
        name_ar : "القياسات",
        slug: 'mesure',
        parent_id: 2

      }, 
      {/******      *******/
        id: 7,
        type:'shop',
        name_fr: 'Orthopédie',
        name_ar: "طب العظام",
        slug: 'orthopedie',
        image: "/images/megamenu/megamenu-2-ltr.png"

      }, 
      {
        id: 8,
        type:'shop',
        name_fr: "Béquilles Et Cannes",
        name_ar : " العكازات والعكازات",
        slug: 'bequilles_et_cannes',
        parent_id: 7

      }, 
      {
        id: 9,
        type:'shop',
        name_fr: "Déambulateurs Et Rollators",
        name_ar : " مشايات وبكرات",
        slug: 'deambulateurs_et_rollators',
        parent_id: 7

      }, 
      {
        id: 10,
        type:'shop',
        name_fr: "Fauteuils Et Chaises Garde-robe",
        name_ar : " الكراسي والكراسي خزانة الملابس",
        slug: 'fauteuils_et_chaises_garde_robe',
        parent_id: 7

      }, 
      {
        type:'shop',
        id: 11,
        name_fr: "Fauteuils Roulants",
        name_ar : " الكراسي المتحركة",
        slug: 'fauteuils_roulants',
        parent_id: 7
        
        
      }, 
      { /******      *******/
        id: 12,
        type:'shop',
        name_fr: 'Oxygénothérapie & Aspiration',
        name_ar : "العلاج بالأكسجين والشفط",
        slug: 'oxygénotherapie_aspiration', 
        image: '/images/categories/category-2.jpg',

      }, 
      {
        id: 13,
        type:'shop',
        name_fr: "Aspiration",
        name_ar : "تنفس",
        slug: 'aspiration',
        parent_id: 12

      }, 
      {
        id: 14,
        type:'shop',
        name_fr: "Oxygénothérapie",
        name_ar : "العلاج بالأوكسجين",
        slug: 'oxygenotherapie',
        parent_id: 12

      }, 
      {
        id: 15,
        type:'shop',
        name_fr: "Consommable",
        name_ar : "مستهلك",
        slug: 'consommable', 
        image: '/images/categories/category-3.jpg', 
      }, 
      {
        id:16,
        type:'shop',
        name_fr: "Consommable Médico-chirurgical",
        name_ar : "مستهلكات طبية جراحية",
        slug: 'consommable_medico_chirurgical',
        parent_id: 15 
      }, 
      {
        id:17,
        type:'shop', 
        name_fr: "Divers Consommables",
        name_ar : "المواد الاستهلاكية المختلفة",
        slug: 'divers_consommables',
        parent_id: 15 
      },
      {
        id:18,
        type:'shop', 
        name_fr: 'Urgence_Divers',
        name_ar: "طوارئ ومتنوعة",
        slug: 'urgence_divers',
        image: '/images/categories/category-3.jpg', 
      },
      {
        id:19,
        type:'shop',
        parent_id:18,
        name_fr: "Urgence",
        name_ar : "طارئ",
        slug: 'urgence',
      },
      {
        id:20,
        type:'shop',
        parent_id:18,
        name_fr: "Divers",
        name_ar : "متنوع",
        slug: 'divers',
      },
      {
        id:21,
        type:'shop', 
        name_fr: 'Instrumentation',
        name_ar : "الأجهزة",
        slug: 'instrumentation',
      },
      { 
        id: 22,
        type:'shop', 
        name_fr: "Mobilier Médical",
        name_ar : "أثاث طبي",
        slug: 'mobilier_medical',
      },
      {
        id: 23,
        type:'shop', 
        name_fr: "Orl & Ophtalmologie",
        name_ar : "أورل وطب العيون",
        slug: 'orl_ophtalmologie',
        image: '/images/categories/category-4.jpg',
      }, 
      {
        id: 24,
        type:'shop', 
        name_fr: "Bloc Opératoire Et Réanimation",
        name_ar : "غرفة العمليات والإنعاش",
        slug: 'bloc_opératoire_et_reanimation',
      },
      {
        id: 25,
        type:'shop', 
        name_fr: "Inox & Plastique",
        name_ar : "الفولاذ المقاوم للصدأ والبلاستيك",
        slug: 'inox_plastique',
      } ]
    )
  }
}

module.exports = CategorySeeder
