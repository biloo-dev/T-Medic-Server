'use strict'

/*
|--------------------------------------------------------------------------
| SettingSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
  
const Database = use('Database') 
class SettingSeeder {
  async run () {
    await Database.from('settings').insert([
      {
        id : 1,
        name_fr: "nom du site",
        name_ar: 'اسم الموقع',
        slug: 'nom_du_site', 
        type : "text",
        values: JSON.stringify({
          name_fr:"T-Medic",
          name_ar:"ت-ميديك"
        })
      }, 
      {
        id:2,
        name_fr: 'la description',
        name_ar: 'وصف الموقع',
        slug: 'description', 
        type: "textarea",
        values: JSON.stringify({
          name_fr: `Ecoute, confiance, coopération, expertise et innovation sont nos maîtres mots.
                    Notre objectif est de vous accompagner au quotidien, dans toutes les dimensions de votre exercice, que ce soit au 
                    moment de l’installation de votre cabinet médical ou dans votre vie quotidienne .`,
          name_ar: `الاستماع والثقة والتعاون والخبرة والابتكار هي كلماتنا الرئيسية.
           هدفنا هو دعمك على أساس يومي ، في جميع جوانب ممارستك ، سواء كان ذلك عند إعداد ممارستك الطبية أو في حياتك اليومية.`
        })
      },
      {
        id:3,
        name_fr: 'E-Mail',
        name_ar: 'البريد الإلكتروني',
        slug: 'email',
        type: "email",
        values: "tiarettmedic2021@gmail.com" 
      },
      {
        id:4,
        name_fr: 'Numéro de téléphone',
        name_ar:  "رقم التليفون",
        slug: 'phone', 
        type: "number",
        values: JSON.stringify({
          phone_1: "014025514",
          phone_2: "0770235484"
        })
      },
      {
        id:5,
        name_fr: 'logo',
        name_ar: 'شعار',
        slug: 'logo', 
        type: "file",
        values: JSON.stringify({
          name_fr: "/images/logo_fr.png",
          name_ar: "/images/logo_ar.png"
        })
      },
      {
        id :6,
        name_fr: "Address",
        name_ar: 'اسم الموقع',
        slug: 'address', 
        type: "textrea", 
        values: JSON.stringify({
          name_fr: "Boutique numéro B5, la route du sougueur vers Sunatepa",
          name_ar: "رقم المحل ب 5، تيارت طريق السوقر نحو سوناتيبا"
        })
      }, 
      {
        id:7,
        name_fr: 'Emplacement sur les cartes',
        name_ar: 'موقعنا على الخريطة',
        slug: 'location',
        type: "text",
        values: JSON.stringify({
          labg: 35.360455176953984,
          lat: 1.3367835356560902
        })
      },
      {
        id:8,
        name_fr: 'Emplacement sur les cartes Iframe',
        name_ar: 'موقعنا على الخريطة بالفريم',
        slug: 'location_iframe',
        type: "textarea",
        values: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.6903456616546!2d1.3182262145952606!3d35.363330354949476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1286d1b63d12da83%3A0xbadc1ed2691abd24!2zaMO0cGl0YWwgaMOpbW9kaWFseXNl!5e0!3m2!1sfr!2sdz!4v1613077445060!5m2!1sfr!2sdz" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
      },
      {
        id:9,
        name_fr: 'Observation',
        name_ar:  "ملاحظة",
        slug: 'note',
        type: "textarea",
        values: JSON.stringify({
          name_fr: "N'hésitez pas à nous contacter pour tout commentaire ou information complémentaire, nous nous ferons un plaisir de vous informer.",
          name_ar:  "لا تتردد في الاتصال بنا للحصول على أي تعليقات أو معلومات إضافية ، يسعدنا إبلاغك."
        })
      },
      {
        id:10,
        name_fr: "Horaires d'ouvertures",
        name_ar: "ساعات العمل",
        slug: 'opening_hours',
        type: "text",
        values: JSON.stringify([
          {
            name_fr: "Du lundi au vendredi: 8h-20h",
            name_ar: "من الاثنين إلى الجمعة: 8 صباحًا - 8 مساءً", 
          },
          {
            name_fr: "Samedi: 8h-18h",
            name_ar: "السبت: 8 صباحًا - 6 مساءً", 
          },
          {
            name_fr:  "Dimanche: 10h-16h",
            name_ar:  "الأحد: 10 صباحًا - 4 مساءً", 
          },
        ])
      },
      {
        id:11,
        name_fr: "Questions fréquemment posées",
        name_ar: "أسئلة مكررة",
        slug: 'frequently_asked_questions',
        type: "textEditor",
        values: JSON.stringify([
          {
            title_fr:"Commandes et Retours",
            slug:"CommandesetRetours",
            title_ar: "الطلبات والمرتجعات للمنتجات",
            values : [
              {
                ask_fr:"Est-il possible de commander plus de bon de command ..?",
                ask_ar:"هل من الممكن طلب المزيد من أوامر الشراء..",
                answer_fr:  `Si vos désirs tournent autour de la possibilité d'une expédition et d'une arrivée rapides dans les plus brefs délais, alors votre meilleur choix sera le fret aérien, car nous avons des vols quotidiens et réguliers vers tous les aéroports et villes du monde.
                  Mais si vos envois sont des marchandises, des matériaux, des quantités et des volumes importants et que vous avez amplement de temps, alors votre meilleure option est le fret maritime, qui dépend du transport de conteneurs dans le transport de marchandises, qui se caractérise par sa capacité à accueillir des marchandises et des équipements lourds de grande taille. tailles, qui ne sont pas fournis par les avions, en plus des navires atteindraient des pays lointains.
                  Par conséquent, Al Fares est spécialisé dans l'expédition vers et depuis la plupart des ports utilisant des navires de lignes maritimes internationales, qu'il s'agisse de charges complètes FCL ou LCL, où nous fournissons des conteneurs de différentes tailles et types qui conviennent à la taille, au type et à la nature des marchandises, et la livraison à tous. villes et ports du monde, en plus de nos services distingués pour le transport de voitures.
                  Mais si le fret et le transport se font entre plusieurs pays voisins tels que le Conseil de coopération du Golfe et le Moyen-Orient, par exemple, votre meilleure option est le fret terrestre pour transporter des marchandises, des matériaux et des voitures, car nous fournissons une grande flotte de camions divers, qui facilite les opérations d'expédition, où que se trouve votre destination.
                  Al Fares propose également des services d'expédition frigorifiques pour transporter des denrées alimentaires au quotidien avec flexibilité, et nous disposons également d'une flotte de transporteurs de voitures de différentes tailles pour transporter vos propres voitures.`,
                answer_ar: `اذا كانت رغباتكم تتمحور حول امكانية الشحن السريع والوصول فى اقل مدة ممكنة فان اختياركم الامثل سيكون الشحن الجوي حيث يتوفر لدينا رحلات جوية يومية ومنتظمة الى جميع مطارات ومدن العالم.
                  اما اذا كانت شحناتكم بضائع , مواد وكميات و أحجام كبيرة و لديكم متسع من الوقت فان خياركم الامثل هو الشحن البحري الذي يعتمد على النقل بالحاويات في نقل البضائع والتى تتميز بقدرتها على استيعاب البضائع والمعدات الثقيلة ذات الأحجام الكبيرة وهو الأمر الذي لا توفره الطائرات وذلك بالإضافة إلى أن السفن تصل إلى البلدان البعيدة.
                  لذلك تعتبرالفارس متخصصة في الشحن البحري من و إلى معظم الموانئ باستخدام سفن الخطوط الملاحية العالمية سواء كانت الحمولات كاملة FCL أو مجزئة LCL حيث نقوم بتوفير حاويات بأحجام وأنواع مختلفة تناسب حجم ونوع وطبيعة البضائع والتوصيل الى جميع مدن وموانئ العالم بالاضافة الى خدماتنا المتميزة للشحن البحري للسيارات.
                  اما اذا كان الشحن و النقل بين عدة دول متجاورة مثل دول مجلس التعاون الخليجي والشرق الاوسط على سبيل المثال فان خياركم الامثل هو الشحن البري لنقل البضائع و المواد والسيارات حيث نوفر اسطولا كبيرا من الشاحنات المتنوعة مما يساعد على عمليات الشحن بكل سهولة أينما كانت وجهتكم.
                  كما توفر الفارس خدمات الشحن المبرد لنقل المواد الغذائية بشكل يومي بكل مرونة , كما يتوفر لدينا اسطول من ناقلات السيارات بمختلف الأحجام لنقل سياراتكم الخاصة`
              },
              {
                ask_fr:"Un produit peut-il être retourné après son utilisation ..??",
                ask_ar:"هل يمكن إرجاع منتج بعد إستعماله ..؟",
                answer_fr:  `La situation des gens les oblige parfois à déménager pour travailler, 
                  étudier ou vivre, car ils envisagent de quitter leur domicile ou de se rendre dans un autre lieu à 
                  l’intérieur ou à l’extérieur de leur pays.
                  Ici, il fait face au problème d'emballer les bagages (meubles) ou de les déplacer dans un autre endroit 
                  afin de les ranger, et il fait face à des obstacles qui sont de savoir comment déplacer les meubles sans se blesser,
                   ou tout morceau de celui-ci étant cassé, donc là Il n'y a pas lieu de s'inquiéter car Al Faris Shipping Company fournit 
                   un service de stockage à Dubaï pour les meubles et les marchandises commerciales et est intéressée à fournir les meilleurs 
                   moyens pour assurer le transport et le stockage des marchandises et des bagages ménagers ou même des produits commerciaux 
                   sans crainte ni inquiétude des dommages ou de la perte de toute pièce où nous fournissons des services de transport de 
                   meubles à la maison, à l'hôtel et au commerce de toutes les manières professionnelles avec l'utilisation de la technologie 
                   moderne à cet effet, en plus d'un personnel doté d'une expérience et d'une grande efficacité dans le démontage, l'emballage 
                   et l'emballage de meubles , puis le transport par camions désignés à cet effet vers des emplacements d'entrepôt équipés d'un 
                   niveau de sécurité et de protection pour le stockage.`,
                answer_ar: `تستدعي ظروف الأشخاص أحيانا على التنقل من أجل العمل أو الدراسة
                 أو السكن حيث يقوم بالتخطيط للإنتقال من مسكنه أو السفر إلى مكان آخر داخل دولته أو خارجها.
                  هنا يواجه مشكلة تغليف العفش ( الأثاث ) او نقله إلى مكان آخر من أجل تخزينه، و يواجه بعض العقبات 
                  التي تتمثل في كيفية نقل الأثاث دون تعرضه للأذى، أو تعرض أي قطعة منه للكسر لذلك لا داعى للقلق فشركة الفارس 
                  للشحن توفر خدمة التخزين في دبي للأثاث و البضائع التجارية و تهتم بتقديم أفضل الطرق والوسائل التي تضمن نقل
                   وتخزين البضائع والعفش المنزلي أو حتى البضائع التجارية دون خوف أو قلق من تلف أو فقدان أي قطعة حيث نقدم
                   خدمات نقل الأثاث المنزلي، والفندقي، والتجاري بكل حرفية مع استخدام التكنولوجيا الحديثة لذلك, بالاضافة
                   الى الكادر المجهز بالخبرة والكفاءة العالية في القيام بفك الأثاث وتعبئته وتغليفه، ثم نقله بواسطة
                   الشاحنات المخصصة لذلك إلى أماكن المستودعات المجهزة على على مستوى من الأمان والحماية للتخزين.`
              },
              {
                ask_fr:"Existe-t-il une garantie pour les petits et grands produits ..?",
                ask_ar:"هل يوجد ضمان للمنتجات الكبيرة والصغيرة ..؟",
                answer_fr:  `Si vos désirs tournent autour de la possibilité d'une expédition et d'une arrivée rapides dans les plus brefs délais, alors votre meilleur choix sera le fret aérien, car nous avons des vols quotidiens et réguliers vers tous les aéroports et villes du monde.
                  Mais si vos envois sont des marchandises, des matériaux, des quantités et des volumes importants et que vous avez amplement de temps, alors votre meilleure option est le fret maritime, qui dépend du transport de conteneurs dans le transport de marchandises, qui se caractérise par sa capacité à accueillir des marchandises et des équipements lourds de grande taille. tailles, qui ne sont pas fournis par les avions, en plus des navires atteindraient des pays lointains.
                  Par conséquent, Al Fares est spécialisé dans l'expédition vers et depuis la plupart des ports utilisant des navires de lignes maritimes internationales, qu'il s'agisse de charges complètes FCL ou LCL, où nous fournissons des conteneurs de différentes tailles et types qui conviennent à la taille, au type et à la nature des marchandises, et la livraison à tous. villes et ports du monde, en plus de nos services distingués pour le transport de voitures.
                  Mais si le fret et le transport se font entre plusieurs pays voisins tels que le Conseil de coopération du Golfe et le Moyen-Orient, par exemple, votre meilleure option est le fret terrestre pour transporter des marchandises, des matériaux et des voitures, car nous fournissons une grande flotte de camions divers, qui facilite les opérations d'expédition, où que se trouve votre destination.
                  Al Fares propose également des services d'expédition frigorifiques pour transporter des denrées alimentaires au quotidien avec flexibilité, et nous disposons également d'une flotte de transporteurs de voitures de différentes tailles pour transporter vos propres voitures.`,
                answer_ar: `اذا كانت رغباتكم تتمحور حول امكانية الشحن السريع والوصول فى اقل مدة ممكنة فان اختياركم الامثل سيكون الشحن الجوي حيث يتوفر لدينا رحلات جوية يومية ومنتظمة الى جميع مطارات ومدن العالم.
                  اما اذا كانت شحناتكم بضائع , مواد وكميات و أحجام كبيرة و لديكم متسع من الوقت فان خياركم الامثل هو الشحن البحري الذي يعتمد على النقل بالحاويات في نقل البضائع والتى تتميز بقدرتها على استيعاب البضائع والمعدات الثقيلة ذات الأحجام الكبيرة وهو الأمر الذي لا توفره الطائرات وذلك بالإضافة إلى أن السفن تصل إلى البلدان البعيدة.
                  لذلك تعتبرالفارس متخصصة في الشحن البحري من و إلى معظم الموانئ باستخدام سفن الخطوط الملاحية العالمية سواء كانت الحمولات كاملة FCL أو مجزئة LCL حيث نقوم بتوفير حاويات بأحجام وأنواع مختلفة تناسب حجم ونوع وطبيعة البضائع والتوصيل الى جميع مدن وموانئ العالم بالاضافة الى خدماتنا المتميزة للشحن البحري للسيارات.
                  اما اذا كان الشحن و النقل بين عدة دول متجاورة مثل دول مجلس التعاون الخليجي والشرق الاوسط على سبيل المثال فان خياركم الامثل هو الشحن البري لنقل البضائع و المواد والسيارات حيث نوفر اسطولا كبيرا من الشاحنات المتنوعة مما يساعد على عمليات الشحن بكل سهولة أينما كانت وجهتكم.
                  كما توفر الفارس خدمات الشحن المبرد لنقل المواد الغذائية بشكل يومي بكل مرونة , كما يتوفر لدينا اسطول من ناقلات السيارات بمختلف الأحجام لنقل سياراتكم الخاصة`
              }, 
            ] 
          },
          {
            title_fr:"Informations de paiement",
            slug:"Informationsdepaiement",
            title_ar: "معلومات الشمعلومات الدفع",
            values : [
              {
                ask_fr:"Quelle est la meilleure méthode de paiement ..?",
                ask_ar:"ما هي افضل طريقة للدفع..؟",
                answer_fr:  `Si vos désirs tournent autour de la possibilité d'une expédition et d'une arrivée rapides dans les plus brefs délais, alors votre meilleur choix sera le fret aérien, car nous avons des vols quotidiens et réguliers vers tous les aéroports et villes du monde.
                  Mais si vos envois sont des marchandises, des matériaux, des quantités et des volumes importants et que vous avez amplement de temps, alors votre meilleure option est le fret maritime, qui dépend du transport de conteneurs dans le transport de marchandises, qui se caractérise par sa capacité à accueillir des marchandises et des équipements lourds de grande taille. tailles, qui ne sont pas fournis par les avions, en plus des navires atteindraient des pays lointains.
                  Par conséquent, Al Fares est spécialisé dans l'expédition vers et depuis la plupart des ports utilisant des navires de lignes maritimes internationales, qu'il s'agisse de charges complètes FCL ou LCL, où nous fournissons des conteneurs de différentes tailles et types qui conviennent à la taille, au type et à la nature des marchandises, et la livraison à tous. villes et ports du monde, en plus de nos services distingués pour le transport de voitures.
                  Mais si le fret et le transport se font entre plusieurs pays voisins tels que le Conseil de coopération du Golfe et le Moyen-Orient, par exemple, votre meilleure option est le fret terrestre pour transporter des marchandises, des matériaux et des voitures, car nous fournissons une grande flotte de camions divers, qui facilite les opérations d'expédition, où que se trouve votre destination.
                  Al Fares propose également des services d'expédition frigorifiques pour transporter des denrées alimentaires au quotidien avec flexibilité, et nous disposons également d'une flotte de transporteurs de voitures de différentes tailles pour transporter vos propres voitures.`,
                answer_ar: `اذا كانت رغباتكم تتمحور حول امكانية الشحن السريع والوصول فى اقل مدة ممكنة فان اختياركم الامثل سيكون الشحن الجوي حيث يتوفر لدينا رحلات جوية يومية ومنتظمة الى جميع مطارات ومدن العالم.
                  اما اذا كانت شحناتكم بضائع , مواد وكميات و أحجام كبيرة و لديكم متسع من الوقت فان خياركم الامثل هو الشحن البحري الذي يعتمد على النقل بالحاويات في نقل البضائع والتى تتميز بقدرتها على استيعاب البضائع والمعدات الثقيلة ذات الأحجام الكبيرة وهو الأمر الذي لا توفره الطائرات وذلك بالإضافة إلى أن السفن تصل إلى البلدان البعيدة.
                  لذلك تعتبرالفارس متخصصة في الشحن البحري من و إلى معظم الموانئ باستخدام سفن الخطوط الملاحية العالمية سواء كانت الحمولات كاملة FCL أو مجزئة LCL حيث نقوم بتوفير حاويات بأحجام وأنواع مختلفة تناسب حجم ونوع وطبيعة البضائع والتوصيل الى جميع مدن وموانئ العالم بالاضافة الى خدماتنا المتميزة للشحن البحري للسيارات.
                  اما اذا كان الشحن و النقل بين عدة دول متجاورة مثل دول مجلس التعاون الخليجي والشرق الاوسط على سبيل المثال فان خياركم الامثل هو الشحن البري لنقل البضائع و المواد والسيارات حيث نوفر اسطولا كبيرا من الشاحنات المتنوعة مما يساعد على عمليات الشحن بكل سهولة أينما كانت وجهتكم.
                  كما توفر الفارس خدمات الشحن المبرد لنقل المواد الغذائية بشكل يومي بكل مرونة , كما يتوفر لدينا اسطول من ناقلات السيارات بمختلف الأحجام لنقل سياراتكم الخاصة`
              },
              {
                ask_fr:"Est-il possible de payer par compte bancaire?",
                ask_ar:"هل يمكن الدفع عبر الحساب البنكي ..؟",
                answer_fr:  `La situation des gens les oblige parfois à déménager pour travailler, 
                  étudier ou vivre, car ils envisagent de quitter leur domicile ou de se rendre dans un autre lieu à 
                  l’intérieur ou à l’extérieur de leur pays.
                  Ici, il fait face au problème d'emballer les bagages (meubles) ou de les déplacer dans un autre endroit 
                  afin de les ranger, et il fait face à des obstacles qui sont de savoir comment déplacer les meubles sans se blesser,
                   ou tout morceau de celui-ci étant cassé, donc là Il n'y a pas lieu de s'inquiéter car Al Faris Shipping Company fournit 
                   un service de stockage à Dubaï pour les meubles et les marchandises commerciales et est intéressée à fournir les meilleurs 
                   moyens pour assurer le transport et le stockage des marchandises et des bagages ménagers ou même des produits commerciaux 
                   sans crainte ni inquiétude des dommages ou de la perte de toute pièce où nous fournissons des services de transport de 
                   meubles à la maison, à l'hôtel et au commerce de toutes les manières professionnelles avec l'utilisation de la technologie 
                   moderne à cet effet, en plus d'un personnel doté d'une expérience et d'une grande efficacité dans le démontage, l'emballage 
                   et l'emballage de meubles , puis le transport par camions désignés à cet effet vers des emplacements d'entrepôt équipés d'un 
                   niveau de sécurité et de protection pour le stockage.`,
                answer_ar: `تستدعي ظروف الأشخاص أحيانا على التنقل من أجل العمل أو الدراسة
                 أو السكن حيث يقوم بالتخطيط للإنتقال من مسكنه أو السفر إلى مكان آخر داخل دولته أو خارجها.
                  هنا يواجه مشكلة تغليف العفش ( الأثاث ) او نقله إلى مكان آخر من أجل تخزينه، و يواجه بعض العقبات 
                  التي تتمثل في كيفية نقل الأثاث دون تعرضه للأذى، أو تعرض أي قطعة منه للكسر لذلك لا داعى للقلق فشركة الفارس 
                  للشحن توفر خدمة التخزين في دبي للأثاث و البضائع التجارية و تهتم بتقديم أفضل الطرق والوسائل التي تضمن نقل
                   وتخزين البضائع والعفش المنزلي أو حتى البضائع التجارية دون خوف أو قلق من تلف أو فقدان أي قطعة حيث نقدم
                   خدمات نقل الأثاث المنزلي، والفندقي، والتجاري بكل حرفية مع استخدام التكنولوجيا الحديثة لذلك, بالاضافة
                   الى الكادر المجهز بالخبرة والكفاءة العالية في القيام بفك الأثاث وتعبئته وتغليفه، ثم نقله بواسطة
                   الشاحنات المخصصة لذلك إلى أماكن المستودعات المجهزة على على مستوى من الأمان والحماية للتخزين.`
              },
              {
                ask_fr:"Est-il possible de payer par compte mail ..?",
                ask_ar:"ما هي بوليصة الشحن ..؟هل يمكن الدفع عبر حساب البريد ..؟",
                answer_fr:  `Si vos désirs tournent autour de la possibilité d'une expédition et d'une arrivée rapides dans les plus brefs délais, alors votre meilleur choix sera le fret aérien, car nous avons des vols quotidiens et réguliers vers tous les aéroports et villes du monde.
                  Mais si vos envois sont des marchandises, des matériaux, des quantités et des volumes importants et que vous avez amplement de temps, alors votre meilleure option est le fret maritime, qui dépend du transport de conteneurs dans le transport de marchandises, qui se caractérise par sa capacité à accueillir des marchandises et des équipements lourds de grande taille. tailles, qui ne sont pas fournis par les avions, en plus des navires atteindraient des pays lointains.
                  Par conséquent, Al Fares est spécialisé dans l'expédition vers et depuis la plupart des ports utilisant des navires de lignes maritimes internationales, qu'il s'agisse de charges complètes FCL ou LCL, où nous fournissons des conteneurs de différentes tailles et types qui conviennent à la taille, au type et à la nature des marchandises, et la livraison à tous. villes et ports du monde, en plus de nos services distingués pour le transport de voitures.
                  Mais si le fret et le transport se font entre plusieurs pays voisins tels que le Conseil de coopération du Golfe et le Moyen-Orient, par exemple, votre meilleure option est le fret terrestre pour transporter des marchandises, des matériaux et des voitures, car nous fournissons une grande flotte de camions divers, qui facilite les opérations d'expédition, où que se trouve votre destination.
                  Al Fares propose également des services d'expédition frigorifiques pour transporter des denrées alimentaires au quotidien avec flexibilité, et nous disposons également d'une flotte de transporteurs de voitures de différentes tailles pour transporter vos propres voitures.`,
                answer_ar: `اذا كانت رغباتكم تتمحور حول امكانية الشحن السريع والوصول فى اقل مدة ممكنة فان اختياركم الامثل سيكون الشحن الجوي حيث يتوفر لدينا رحلات جوية يومية ومنتظمة الى جميع مطارات ومدن العالم.
                  اما اذا كانت شحناتكم بضائع , مواد وكميات و أحجام كبيرة و لديكم متسع من الوقت فان خياركم الامثل هو الشحن البحري الذي يعتمد على النقل بالحاويات في نقل البضائع والتى تتميز بقدرتها على استيعاب البضائع والمعدات الثقيلة ذات الأحجام الكبيرة وهو الأمر الذي لا توفره الطائرات وذلك بالإضافة إلى أن السفن تصل إلى البلدان البعيدة.
                  لذلك تعتبرالفارس متخصصة في الشحن البحري من و إلى معظم الموانئ باستخدام سفن الخطوط الملاحية العالمية سواء كانت الحمولات كاملة FCL أو مجزئة LCL حيث نقوم بتوفير حاويات بأحجام وأنواع مختلفة تناسب حجم ونوع وطبيعة البضائع والتوصيل الى جميع مدن وموانئ العالم بالاضافة الى خدماتنا المتميزة للشحن البحري للسيارات.
                  اما اذا كان الشحن و النقل بين عدة دول متجاورة مثل دول مجلس التعاون الخليجي والشرق الاوسط على سبيل المثال فان خياركم الامثل هو الشحن البري لنقل البضائع و المواد والسيارات حيث نوفر اسطولا كبيرا من الشاحنات المتنوعة مما يساعد على عمليات الشحن بكل سهولة أينما كانت وجهتكم.
                  كما توفر الفارس خدمات الشحن المبرد لنقل المواد الغذائية بشكل يومي بكل مرونة , كما يتوفر لدينا اسطول من ناقلات السيارات بمختلف الأحجام لنقل سياراتكم الخاصة`
              }, 
            ] 
          },
          {
            title_fr:"Informations sur la livraison",
            slug:"Informationssurlalivraison",
            title_ar:"معلومات الشحن",
            values : [
              {
                ask_fr:"Quelle est la meilleure façon d'expédier ..?",
                ask_ar:"ما هي افضل طريقة للشحن..؟",
                answer_fr:  `Si vos désirs tournent autour de la possibilité d'une expédition et d'une arrivée rapides dans les plus brefs délais, alors votre meilleur choix sera le fret aérien, car nous avons des vols quotidiens et réguliers vers tous les aéroports et villes du monde.
                  Mais si vos envois sont des marchandises, des matériaux, des quantités et des volumes importants et que vous avez amplement de temps, alors votre meilleure option est le fret maritime, qui dépend du transport de conteneurs dans le transport de marchandises, qui se caractérise par sa capacité à accueillir des marchandises et des équipements lourds de grande taille. tailles, qui ne sont pas fournis par les avions, en plus des navires atteindraient des pays lointains.
                  Par conséquent, Al Fares est spécialisé dans l'expédition vers et depuis la plupart des ports utilisant des navires de lignes maritimes internationales, qu'il s'agisse de charges complètes FCL ou LCL, où nous fournissons des conteneurs de différentes tailles et types qui conviennent à la taille, au type et à la nature des marchandises, et la livraison à tous. villes et ports du monde, en plus de nos services distingués pour le transport de voitures.
                  Mais si le fret et le transport se font entre plusieurs pays voisins tels que le Conseil de coopération du Golfe et le Moyen-Orient, par exemple, votre meilleure option est le fret terrestre pour transporter des marchandises, des matériaux et des voitures, car nous fournissons une grande flotte de camions divers, qui facilite les opérations d'expédition, où que se trouve votre destination.
                  Al Fares propose également des services d'expédition frigorifiques pour transporter des denrées alimentaires au quotidien avec flexibilité, et nous disposons également d'une flotte de transporteurs de voitures de différentes tailles pour transporter vos propres voitures.`,
                answer_ar: `اذا كانت رغباتكم تتمحور حول امكانية الشحن السريع والوصول فى اقل مدة ممكنة فان اختياركم الامثل سيكون الشحن الجوي حيث يتوفر لدينا رحلات جوية يومية ومنتظمة الى جميع مطارات ومدن العالم.
                  اما اذا كانت شحناتكم بضائع , مواد وكميات و أحجام كبيرة و لديكم متسع من الوقت فان خياركم الامثل هو الشحن البحري الذي يعتمد على النقل بالحاويات في نقل البضائع والتى تتميز بقدرتها على استيعاب البضائع والمعدات الثقيلة ذات الأحجام الكبيرة وهو الأمر الذي لا توفره الطائرات وذلك بالإضافة إلى أن السفن تصل إلى البلدان البعيدة.
                  لذلك تعتبرالفارس متخصصة في الشحن البحري من و إلى معظم الموانئ باستخدام سفن الخطوط الملاحية العالمية سواء كانت الحمولات كاملة FCL أو مجزئة LCL حيث نقوم بتوفير حاويات بأحجام وأنواع مختلفة تناسب حجم ونوع وطبيعة البضائع والتوصيل الى جميع مدن وموانئ العالم بالاضافة الى خدماتنا المتميزة للشحن البحري للسيارات.
                  اما اذا كان الشحن و النقل بين عدة دول متجاورة مثل دول مجلس التعاون الخليجي والشرق الاوسط على سبيل المثال فان خياركم الامثل هو الشحن البري لنقل البضائع و المواد والسيارات حيث نوفر اسطولا كبيرا من الشاحنات المتنوعة مما يساعد على عمليات الشحن بكل سهولة أينما كانت وجهتكم.
                  كما توفر الفارس خدمات الشحن المبرد لنقل المواد الغذائية بشكل يومي بكل مرونة , كما يتوفر لدينا اسطول من ناقلات السيارات بمختلف الأحجام لنقل سياراتكم الخاصة`
              },
              {
                ask_fr:"Avez-vous un service de stockage ..?",
                ask_ar:"هل يتوفر لديكم خدمة التخزين ..؟",
                answer_fr:  `La situation des gens les oblige parfois à déménager pour travailler, 
                  étudier ou vivre, car ils envisagent de quitter leur domicile ou de se rendre dans un autre lieu à 
                  l’intérieur ou à l’extérieur de leur pays.
                  Ici, il fait face au problème d'emballer les bagages (meubles) ou de les déplacer dans un autre endroit 
                  afin de les ranger, et il fait face à des obstacles qui sont de savoir comment déplacer les meubles sans se blesser,
                   ou tout morceau de celui-ci étant cassé, donc là Il n'y a pas lieu de s'inquiéter car Al Faris Shipping Company fournit 
                   un service de stockage à Dubaï pour les meubles et les marchandises commerciales et est intéressée à fournir les meilleurs 
                   moyens pour assurer le transport et le stockage des marchandises et des bagages ménagers ou même des produits commerciaux 
                   sans crainte ni inquiétude des dommages ou de la perte de toute pièce où nous fournissons des services de transport de 
                   meubles à la maison, à l'hôtel et au commerce de toutes les manières professionnelles avec l'utilisation de la technologie 
                   moderne à cet effet, en plus d'un personnel doté d'une expérience et d'une grande efficacité dans le démontage, l'emballage 
                   et l'emballage de meubles , puis le transport par camions désignés à cet effet vers des emplacements d'entrepôt équipés d'un 
                   niveau de sécurité et de protection pour le stockage.`,
                answer_ar: `تستدعي ظروف الأشخاص أحيانا على التنقل من أجل العمل أو الدراسة
                 أو السكن حيث يقوم بالتخطيط للإنتقال من مسكنه أو السفر إلى مكان آخر داخل دولته أو خارجها.
                  هنا يواجه مشكلة تغليف العفش ( الأثاث ) او نقله إلى مكان آخر من أجل تخزينه، و يواجه بعض العقبات 
                  التي تتمثل في كيفية نقل الأثاث دون تعرضه للأذى، أو تعرض أي قطعة منه للكسر لذلك لا داعى للقلق فشركة الفارس 
                  للشحن توفر خدمة التخزين في دبي للأثاث و البضائع التجارية و تهتم بتقديم أفضل الطرق والوسائل التي تضمن نقل
                   وتخزين البضائع والعفش المنزلي أو حتى البضائع التجارية دون خوف أو قلق من تلف أو فقدان أي قطعة حيث نقدم
                   خدمات نقل الأثاث المنزلي، والفندقي، والتجاري بكل حرفية مع استخدام التكنولوجيا الحديثة لذلك, بالاضافة
                   الى الكادر المجهز بالخبرة والكفاءة العالية في القيام بفك الأثاث وتعبئته وتغليفه، ثم نقله بواسطة
                   الشاحنات المخصصة لذلك إلى أماكن المستودعات المجهزة على على مستوى من الأمان والحماية للتخزين.`
              },
              {
                ask_fr:"Qu'est-ce qu'un connaissement ..?",
                ask_ar:"ما هي بوليصة الشحن ..؟",
                answer_fr:  `Si vos désirs tournent autour de la possibilité d'une expédition et d'une arrivée rapides dans les plus brefs délais, alors votre meilleur choix sera le fret aérien, car nous avons des vols quotidiens et réguliers vers tous les aéroports et villes du monde.
                  Mais si vos envois sont des marchandises, des matériaux, des quantités et des volumes importants et que vous avez amplement de temps, alors votre meilleure option est le fret maritime, qui dépend du transport de conteneurs dans le transport de marchandises, qui se caractérise par sa capacité à accueillir des marchandises et des équipements lourds de grande taille. tailles, qui ne sont pas fournis par les avions, en plus des navires atteindraient des pays lointains.
                  Par conséquent, Al Fares est spécialisé dans l'expédition vers et depuis la plupart des ports utilisant des navires de lignes maritimes internationales, qu'il s'agisse de charges complètes FCL ou LCL, où nous fournissons des conteneurs de différentes tailles et types qui conviennent à la taille, au type et à la nature des marchandises, et la livraison à tous. villes et ports du monde, en plus de nos services distingués pour le transport de voitures.
                  Mais si le fret et le transport se font entre plusieurs pays voisins tels que le Conseil de coopération du Golfe et le Moyen-Orient, par exemple, votre meilleure option est le fret terrestre pour transporter des marchandises, des matériaux et des voitures, car nous fournissons une grande flotte de camions divers, qui facilite les opérations d'expédition, où que se trouve votre destination.
                  Al Fares propose également des services d'expédition frigorifiques pour transporter des denrées alimentaires au quotidien avec flexibilité, et nous disposons également d'une flotte de transporteurs de voitures de différentes tailles pour transporter vos propres voitures.`,
                answer_ar: `اذا كانت رغباتكم تتمحور حول امكانية الشحن السريع والوصول فى اقل مدة ممكنة فان اختياركم الامثل سيكون الشحن الجوي حيث يتوفر لدينا رحلات جوية يومية ومنتظمة الى جميع مطارات ومدن العالم.
                  اما اذا كانت شحناتكم بضائع , مواد وكميات و أحجام كبيرة و لديكم متسع من الوقت فان خياركم الامثل هو الشحن البحري الذي يعتمد على النقل بالحاويات في نقل البضائع والتى تتميز بقدرتها على استيعاب البضائع والمعدات الثقيلة ذات الأحجام الكبيرة وهو الأمر الذي لا توفره الطائرات وذلك بالإضافة إلى أن السفن تصل إلى البلدان البعيدة.
                  لذلك تعتبرالفارس متخصصة في الشحن البحري من و إلى معظم الموانئ باستخدام سفن الخطوط الملاحية العالمية سواء كانت الحمولات كاملة FCL أو مجزئة LCL حيث نقوم بتوفير حاويات بأحجام وأنواع مختلفة تناسب حجم ونوع وطبيعة البضائع والتوصيل الى جميع مدن وموانئ العالم بالاضافة الى خدماتنا المتميزة للشحن البحري للسيارات.
                  اما اذا كان الشحن و النقل بين عدة دول متجاورة مثل دول مجلس التعاون الخليجي والشرق الاوسط على سبيل المثال فان خياركم الامثل هو الشحن البري لنقل البضائع و المواد والسيارات حيث نوفر اسطولا كبيرا من الشاحنات المتنوعة مما يساعد على عمليات الشحن بكل سهولة أينما كانت وجهتكم.
                  كما توفر الفارس خدمات الشحن المبرد لنقل المواد الغذائية بشكل يومي بكل مرونة , كما يتوفر لدينا اسطول من ناقلات السيارات بمختلف الأحجام لنقل سياراتكم الخاصة`
              }, 
            ] 
          },
           
        ])
      },
    ]) 
  }
}

module.exports = SettingSeeder
