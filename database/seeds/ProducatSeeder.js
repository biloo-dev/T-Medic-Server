'use strict'

/*
|--------------------------------------------------------------------------
| ProducatSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
 
const Database = use('Database') 
class ProducatSeeder {
  async run() {
     
    await Database.from('specifications').insert([
      {
        id : 1,
        name_fr: "Générale",
        name_ar: 'عام',
        slug: 'general', 
      }, 
      {
        id:2,
        name_fr: 'Dimensions',
        name_ar: 'أبعاد',
        slug: 'dimensions', 
      }
    ]) 
    await Database.from('attributes').insert([
      {
        id : 1,
        name_fr: "Couleur",
        name_ar: 'اللون',
        slug: 'color', 
        specification_id: 1, 
      }, 
      {
        id:2,
        name_fr: 'La vitesse',
        name_ar: 'سرعة',
        slug: 'speed', 
        specification_id: 1, 
      }, 
      {
        id:3,
        name_fr: "Source d'énergie",
        name_ar: 'مصدر الطاقة',
        slug: 'power-source',
        specification_id: 1,
      }, 
      {
        id:4,
        name_fr: 'Type de cellule de batterie',
        name_ar: 'نوع خلية البطارية',
        slug: 'battery-cell-type',
        specification_id: 2,
      }, 
      {
        id:5,
        name_fr: 'Tension',
        name_ar: 'الجهد االكهربى',
        slug: 'voltage',
        specification_id: 2,
      }, 
      {
        id:6,
        name_fr: 'Capacité de la batterie',
        name_ar: 'قدرة البطارية',
        slug: 'battery-capacity',
        specification_id: 2, 
    }]) 
    await Database.from('brands').insert([ 
      {
        id:1,
        name_fr: 'Brandix',
        name_ar: 'برانديكس',
        slug: 'brandix',
        image: 'assets/images/logos/logo-1.png'
      }, 
      {
        id:2,
        name_fr: 'Wakita',
        name_ar: 'واكيتا',
        slug: 'wakita',
        image: 'assets/images/logos/logo-2.png'
      }, 
      {
        id:3,
        name_fr: 'Zosch',
        name_ar: 'زوش',
        slug: 'zosch',
        image: 'assets/images/logos/logo-3.png'
      }, 
      {
        id:4,
        name_fr: 'WeVALT',
        name_ar: 'ويفالت',
        slug: 'wevalt',
        image: 'assets/images/logos/logo-4.png'
      }, 
      {
        id:5,
        name_fr: 'Hammer',
        name_ar: 'شاكوش',
        slug: 'hammer',
        image: 'assets/images/logos/logo-5.png'
      }, 
      {
        id:6,
        name_fr: 'Mitasia',
        name_ar: 'ميتاسيا',
        slug: 'mitasia',
        image: 'assets/images/logos/logo-6.png'
      }, 
      {
        id:7,
        name_fr: 'Metaggo',
        name_ar: 'ميتاجو',
        slug: 'metaggo',
        image: 'assets/images/logos/logo-7.png'
      }
    ])
    await Database.from('products').insert([
       { 
         id:1,
         description_fr : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
         description_ar : "غالبًا ما يكون الوصف نقطة توقف في القصة. يتم استخدامه لجعل القارئ يدرك إطار أو عناصر الإطار الذي يحدث فيه الإجراء.",
         description_long_ar : `<ul><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">اختر&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وجهة نظر خارجية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;وزاوية عرض مناسبة. </font></font><br>
<span style="font-size: large; color: #993300;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">→</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> اقرأ: </font></font><a title="الرومان" href="https://www.espacefrancais.com/analyser-un-roman/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تحليل الرواية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بإثراء وصفك&nbsp; </font></font><strong><a title="المجال المعجمي" href="https://www.espacefrancais.com/le-champ-lexical/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">بالحقول المعجمية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;المناسبة</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> . </font><font style="vertical-align: inherit;">استخدم </font></font><a href="https://www.espacefrancais.com/les-noms-propres/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الأسماء المناسبة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> والقياسات والمسافات.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بتمييز الكائن الموصوف من خلال&nbsp; </font></font><a title="وصفة" href="https://www.espacefrancais.com/ladjectif-qualificatif/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الصفات المؤهلة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="تكملة الاسم" href="https://www.espacefrancais.com/le-complement-du-nom/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">والاسم مكمل</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="الجملة الثانوية النسبية" href="https://www.espacefrancais.com/la-proposition-subordonnee-relative/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ومرؤوس نسبي</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تنظيم الفضاء في خطط مختلفة.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">استخدم الإشارات المكانية المناسبة </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وكلمات الربط</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;( </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الموصلات</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;العاطفية غير المحملة).</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تجنب "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يوجد&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">هو&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">نرى&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، وما إلى ذلك ، واستخدم&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">أفعال تعبيرية حية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(فعل ، حركة ، موقف) تحتوي على العناصر الموصوفة كموضوعات نحوية.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يفضل استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الحاضر الخالد</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(للحقيقة العامة) ، وقت الوصف كونه "ثابتًا" ، نوعًا من&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">التوقف ،</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;على عكس وقت السرد "الديناميكي". </font><font style="vertical-align: inherit;">لا تنس أيضًا استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">النقص في الدلالة</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;في وقت الوصف.</font></font></li></ul>`,
         description_long_fr : `<h3>Product Full Description</h3> <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam
              non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed
              purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis
              dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget
              gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna
              luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend
              pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est,
              sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit
              pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.
          </p> <h3>Etiam lacus lacus mollis in mattis</h3> <p>
              Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis accumsan.
              Vestibulum vel eros at mi suscipit feugiat. Sed tortor purus, vulputate et eros a,
              rhoncus laoreet orci. Proin sapien neque, commodo at porta in, vehicula eu elit.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              Curae; Curabitur porta vulputate augue, at sollicitudin nisl molestie eget.
          </p> <p>
              Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec pretium
              ipsum risus ac neque. Morbi eu facilisis purus. Quisque mi tortor, cursus in nulla
              ut, laoreet commodo quam. Pellentesque et ornare sapien. In ac est tempus urna
              tincidunt finibus. Integer erat ipsum, tristique ac lobortis sit amet, dapibus sit
              amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt turpis, sit amet
              fringilla odio scelerisque non.
          </p>`,
         slug: 'electric-planer-brandix-kl370090g-300-watts',
         name_fr: 'Electric Planer Brandix KL370090G 300 Watts',
         name_ar : 'مقشطة كهربائية Brandix KL370090G 300 وات',
         featured : true,
         price: 749,
         images:JSON.stringify([
           '/images/products/product-1.jpg',
           '/images/products/product-1-1.jpg'
         ]),
         badges: ['new'],
         rating: 4,
         reviews: 12,
         availability: 'in-stock',
         brand_id: 1,
         note_fr:` Information on technical characteristics, the delivery set, the country of
            manufacture and the appearance of the goods is for reference only and is based on
            the latest information available at the time of publication.`,
         note_ar:`معلومات عن الخصائص التقنية ، مجموعة التسليم ، البلد
             تصنيع ومظهر البضائع للإشارة فقط ويستند إلى
             أحدث المعلومات المتاحة في وقت النشر.`,
         categorie_id: 5, 
       }, 
       {
        id:2, 
        description_fr : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_ar : "غالبًا ما يكون الوصف نقطة توقف في القصة. يتم استخدامه لجعل القارئ يدرك إطار أو عناصر الإطار الذي يحدث فيه الإجراء.",
        description_long_ar : `<ul><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">اختر&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وجهة نظر خارجية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;وزاوية عرض مناسبة. </font></font><br>
<span style="font-size: large; color: #993300;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">→</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> اقرأ: </font></font><a title="الرومان" href="https://www.espacefrancais.com/analyser-un-roman/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تحليل الرواية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بإثراء وصفك&nbsp; </font></font><strong><a title="المجال المعجمي" href="https://www.espacefrancais.com/le-champ-lexical/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">بالحقول المعجمية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;المناسبة</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> . </font><font style="vertical-align: inherit;">استخدم </font></font><a href="https://www.espacefrancais.com/les-noms-propres/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الأسماء المناسبة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> والقياسات والمسافات.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بتمييز الكائن الموصوف من خلال&nbsp; </font></font><a title="وصفة" href="https://www.espacefrancais.com/ladjectif-qualificatif/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الصفات المؤهلة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="تكملة الاسم" href="https://www.espacefrancais.com/le-complement-du-nom/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">والاسم مكمل</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="الجملة الثانوية النسبية" href="https://www.espacefrancais.com/la-proposition-subordonnee-relative/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ومرؤوس نسبي</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تنظيم الفضاء في خطط مختلفة.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">استخدم الإشارات المكانية المناسبة </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وكلمات الربط</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;( </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الموصلات</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;العاطفية غير المحملة).</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تجنب "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يوجد&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">هو&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">نرى&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، وما إلى ذلك ، واستخدم&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">أفعال تعبيرية حية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(فعل ، حركة ، موقف) تحتوي على العناصر الموصوفة كموضوعات نحوية.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يفضل استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الحاضر الخالد</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(للحقيقة العامة) ، وقت الوصف كونه "ثابتًا" ، نوعًا من&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">التوقف ،</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;على عكس وقت السرد "الديناميكي". </font><font style="vertical-align: inherit;">لا تنس أيضًا استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">النقص في الدلالة</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;في وقت الوصف.</font></font></li></ul>`,
        description_long_fr : `<h3>Product Full Description</h3> <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam
          non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed
          purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis
          dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget
          gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna
          luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend
          pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est,
          sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit
          pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.
      </p> <h3>Etiam lacus lacus mollis in mattis</h3> <p>
          Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis accumsan.
          Vestibulum vel eros at mi suscipit feugiat. Sed tortor purus, vulputate et eros a,
          rhoncus laoreet orci. Proin sapien neque, commodo at porta in, vehicula eu elit.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; Curabitur porta vulputate augue, at sollicitudin nisl molestie eget.
      </p> <p>
          Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec pretium
          ipsum risus ac neque. Morbi eu facilisis purus. Quisque mi tortor, cursus in nulla
          ut, laoreet commodo quam. Pellentesque et ornare sapien. In ac est tempus urna
          tincidunt finibus. Integer erat ipsum, tristique ac lobortis sit amet, dapibus sit
          amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt turpis, sit amet
          fringilla odio scelerisque non.
      </p>`,
        slug: 'undefined-tool-iradix-dps3000sy-2700-watts',
         name_fr: 'Undefined Tool IRadix DPS3000SY 2700 Watts',
         name_ar : 'أداة غير محددة IRadix DPS3000SY 2700 Watts',
         featured : false,
         price: 1019,
         images:JSON.stringify([
           '/images/products/product-2.jpg',
           '/images/products/product-2-1.jpg'
         ]),
         badges: ['hot'],
         rating: 5,
         reviews: 3,
         availability: 'in-stock',
         brand_id: 3,
         note_fr:` Information on technical characteristics, the delivery set, the country of
            manufacture and the appearance of the goods is for reference only and is based on
            the latest information available at the time of publication.`,
         note_ar:`معلومات عن الخصائص التقنية ، مجموعة التسليم ، البلد
             تصنيع ومظهر البضائع للإشارة فقط ويستند إلى
             أحدث المعلومات المتاحة في وقت النشر.`,
         categorie_id: 1, 
       }, 
       {
        id:3, 
        description_fr : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_ar : "غالبًا ما يكون الوصف نقطة توقف في القصة. يتم استخدامه لجعل القارئ يدرك إطار أو عناصر الإطار الذي يحدث فيه الإجراء.",
        description_long_ar : `<ul><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">اختر&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وجهة نظر خارجية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;وزاوية عرض مناسبة. </font></font><br>
<span style="font-size: large; color: #993300;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">→</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> اقرأ: </font></font><a title="الرومان" href="https://www.espacefrancais.com/analyser-un-roman/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تحليل الرواية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بإثراء وصفك&nbsp; </font></font><strong><a title="المجال المعجمي" href="https://www.espacefrancais.com/le-champ-lexical/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">بالحقول المعجمية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;المناسبة</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> . </font><font style="vertical-align: inherit;">استخدم </font></font><a href="https://www.espacefrancais.com/les-noms-propres/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الأسماء المناسبة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> والقياسات والمسافات.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بتمييز الكائن الموصوف من خلال&nbsp; </font></font><a title="وصفة" href="https://www.espacefrancais.com/ladjectif-qualificatif/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الصفات المؤهلة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="تكملة الاسم" href="https://www.espacefrancais.com/le-complement-du-nom/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">والاسم مكمل</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="الجملة الثانوية النسبية" href="https://www.espacefrancais.com/la-proposition-subordonnee-relative/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ومرؤوس نسبي</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تنظيم الفضاء في خطط مختلفة.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">استخدم الإشارات المكانية المناسبة </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وكلمات الربط</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;( </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الموصلات</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;العاطفية غير المحملة).</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تجنب "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يوجد&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">هو&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">نرى&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، وما إلى ذلك ، واستخدم&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">أفعال تعبيرية حية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(فعل ، حركة ، موقف) تحتوي على العناصر الموصوفة كموضوعات نحوية.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يفضل استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الحاضر الخالد</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(للحقيقة العامة) ، وقت الوصف كونه "ثابتًا" ، نوعًا من&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">التوقف ،</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;على عكس وقت السرد "الديناميكي". </font><font style="vertical-align: inherit;">لا تنس أيضًا استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">النقص في الدلالة</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;في وقت الوصف.</font></font></li></ul>`,
        description_long_fr : `<h3>Product Full Description</h3> <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam
            non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed
            purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis
            dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget
            gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna
            luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend
            pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est,
            sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit
            pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.
        </p> <h3>Etiam lacus lacus mollis in mattis</h3> <p>
            Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis accumsan.
            Vestibulum vel eros at mi suscipit feugiat. Sed tortor purus, vulputate et eros a,
            rhoncus laoreet orci. Proin sapien neque, commodo at porta in, vehicula eu elit.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae; Curabitur porta vulputate augue, at sollicitudin nisl molestie eget.
        </p> <p>
            Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec pretium
            ipsum risus ac neque. Morbi eu facilisis purus. Quisque mi tortor, cursus in nulla
            ut, laoreet commodo quam. Pellentesque et ornare sapien. In ac est tempus urna
            tincidunt finibus. Integer erat ipsum, tristique ac lobortis sit amet, dapibus sit
            amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt turpis, sit amet
            fringilla odio scelerisque non.
        </p>`,
        slug: 'drill-screwdriver-brandix-alx7054-200-watts',
         name_fr: 'Drill Screwdriver Brandix ALX7054 200 Watts',
         name_ar : 'مفك دريل برانديكس ALX7054 200 وات',
         featured : true,
         price: 850,
         images:JSON.stringify([
           '/images/products/product-3.jpg',
           '/images/products/product-3-1.jpg'
         ]),
         rating: 4,
         badges: [],
           reviews: 8,
         availability: 'in-stock',
         brand_id: 1,
         note_fr:` Information on technical characteristics, the delivery set, the country of
            manufacture and the appearance of the goods is for reference only and is based on
            the latest information available at the time of publication.`,
         note_ar:`معلومات عن الخصائص التقنية ، مجموعة التسليم ، البلد
             تصنيع ومظهر البضائع للإشارة فقط ويستند إلى
             أحدث المعلومات المتاحة في وقت النشر.`,
         categorie_id: 2, 
       }, 
       {
        id:4, 
        description_fr : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_ar : "غالبًا ما يكون الوصف نقطة توقف في القصة. يتم استخدامه لجعل القارئ يدرك إطار أو عناصر الإطار الذي يحدث فيه الإجراء.",
        description_long_ar : `<ul><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">اختر&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وجهة نظر خارجية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;وزاوية عرض مناسبة. </font></font><br>
<span style="font-size: large; color: #993300;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">→</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> اقرأ: </font></font><a title="الرومان" href="https://www.espacefrancais.com/analyser-un-roman/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تحليل الرواية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بإثراء وصفك&nbsp; </font></font><strong><a title="المجال المعجمي" href="https://www.espacefrancais.com/le-champ-lexical/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">بالحقول المعجمية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;المناسبة</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> . </font><font style="vertical-align: inherit;">استخدم </font></font><a href="https://www.espacefrancais.com/les-noms-propres/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الأسماء المناسبة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> والقياسات والمسافات.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بتمييز الكائن الموصوف من خلال&nbsp; </font></font><a title="وصفة" href="https://www.espacefrancais.com/ladjectif-qualificatif/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الصفات المؤهلة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="تكملة الاسم" href="https://www.espacefrancais.com/le-complement-du-nom/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">والاسم مكمل</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="الجملة الثانوية النسبية" href="https://www.espacefrancais.com/la-proposition-subordonnee-relative/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ومرؤوس نسبي</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تنظيم الفضاء في خطط مختلفة.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">استخدم الإشارات المكانية المناسبة </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وكلمات الربط</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;( </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الموصلات</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;العاطفية غير المحملة).</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تجنب "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يوجد&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">هو&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">نرى&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، وما إلى ذلك ، واستخدم&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">أفعال تعبيرية حية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(فعل ، حركة ، موقف) تحتوي على العناصر الموصوفة كموضوعات نحوية.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يفضل استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الحاضر الخالد</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(للحقيقة العامة) ، وقت الوصف كونه "ثابتًا" ، نوعًا من&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">التوقف ،</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;على عكس وقت السرد "الديناميكي". </font><font style="vertical-align: inherit;">لا تنس أيضًا استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">النقص في الدلالة</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;في وقت الوصف.</font></font></li></ul>`,
        description_long_fr : `<h3>Product Full Description</h3> <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam
            non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed
            purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis
            dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget
            gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna
            luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend
            pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est,
            sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit
            pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.
        </p> <h3>Etiam lacus lacus mollis in mattis</h3> <p>
            Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis accumsan.
            Vestibulum vel eros at mi suscipit feugiat. Sed tortor purus, vulputate et eros a,
            rhoncus laoreet orci. Proin sapien neque, commodo at porta in, vehicula eu elit.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae; Curabitur porta vulputate augue, at sollicitudin nisl molestie eget.
        </p> <p>
            Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec pretium
            ipsum risus ac neque. Morbi eu facilisis purus. Quisque mi tortor, cursus in nulla
            ut, laoreet commodo quam. Pellentesque et ornare sapien. In ac est tempus urna
            tincidunt finibus. Integer erat ipsum, tristique ac lobortis sit amet, dapibus sit
            amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt turpis, sit amet
            fringilla odio scelerisque non.
        </p>`,
        slug: 'drill-series-3-brandix-ksr4590pqs-1500-watts',
         name_fr: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
         name_ar : 'دريل سيريز 3 برانديكس KSR4590PQS 1500 وات',
         featured : false,
         price: 949,
         compareAtPrice: 1189,
         images:JSON.stringify([
           '/images/products/product-4.jpg',
           '/images/products/product-4-1.jpg'
         ]),
         badges: ['sale'],
         rating: 3,
         reviews: 15,
         availability: 'in-stock',
         brand_id: 1,
         note_fr:` Information on technical characteristics, the delivery set, the country of
            manufacture and the appearance of the goods is for reference only and is based on
            the latest information available at the time of publication.`,
         note_ar:`معلومات عن الخصائص التقنية ، مجموعة التسليم ، البلد
             تصنيع ومظهر البضائع للإشارة فقط ويستند إلى
             أحدث المعلومات المتاحة في وقت النشر.`,
         categorie_id: '',
         
       }, 
       {
        id:5, 
        description_fr : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_ar : "غالبًا ما يكون الوصف نقطة توقف في القصة. يتم استخدامه لجعل القارئ يدرك إطار أو عناصر الإطار الذي يحدث فيه الإجراء.",
        description_long_ar : `<ul><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">اختر&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وجهة نظر خارجية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;وزاوية عرض مناسبة. </font></font><br>
<span style="font-size: large; color: #993300;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">→</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> اقرأ: </font></font><a title="الرومان" href="https://www.espacefrancais.com/analyser-un-roman/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تحليل الرواية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بإثراء وصفك&nbsp; </font></font><strong><a title="المجال المعجمي" href="https://www.espacefrancais.com/le-champ-lexical/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">بالحقول المعجمية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;المناسبة</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> . </font><font style="vertical-align: inherit;">استخدم </font></font><a href="https://www.espacefrancais.com/les-noms-propres/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الأسماء المناسبة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> والقياسات والمسافات.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بتمييز الكائن الموصوف من خلال&nbsp; </font></font><a title="وصفة" href="https://www.espacefrancais.com/ladjectif-qualificatif/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الصفات المؤهلة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="تكملة الاسم" href="https://www.espacefrancais.com/le-complement-du-nom/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">والاسم مكمل</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="الجملة الثانوية النسبية" href="https://www.espacefrancais.com/la-proposition-subordonnee-relative/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ومرؤوس نسبي</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تنظيم الفضاء في خطط مختلفة.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">استخدم الإشارات المكانية المناسبة </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وكلمات الربط</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;( </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الموصلات</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;العاطفية غير المحملة).</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تجنب "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يوجد&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">هو&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">نرى&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، وما إلى ذلك ، واستخدم&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">أفعال تعبيرية حية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(فعل ، حركة ، موقف) تحتوي على العناصر الموصوفة كموضوعات نحوية.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يفضل استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الحاضر الخالد</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(للحقيقة العامة) ، وقت الوصف كونه "ثابتًا" ، نوعًا من&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">التوقف ،</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;على عكس وقت السرد "الديناميكي". </font><font style="vertical-align: inherit;">لا تنس أيضًا استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">النقص في الدلالة</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;في وقت الوصف.</font></font></li></ul>`,
        description_long_fr : `<h3>Product Full Description</h3> <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam
        non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed
        purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis
        dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget
        gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna
        luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend
        pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est,
        sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit
        pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.
    </p> <h3>Etiam lacus lacus mollis in mattis</h3> <p>
        Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis accumsan.
        Vestibulum vel eros at mi suscipit feugiat. Sed tortor purus, vulputate et eros a,
        rhoncus laoreet orci. Proin sapien neque, commodo at porta in, vehicula eu elit.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; Curabitur porta vulputate augue, at sollicitudin nisl molestie eget.
    </p> <p>
        Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec pretium
        ipsum risus ac neque. Morbi eu facilisis purus. Quisque mi tortor, cursus in nulla
        ut, laoreet commodo quam. Pellentesque et ornare sapien. In ac est tempus urna
        tincidunt finibus. Integer erat ipsum, tristique ac lobortis sit amet, dapibus sit
        amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt turpis, sit amet
        fringilla odio scelerisque non.
    </p>`,
        slug: 'brandix-router-power-tool-2017erxpk',
         name_fr: 'Brandix Router Power Tool 2017ERXPK',
         name_ar : 'برانديكس راوتر باور توول 2017ERXPK',
         featured : true,
         price: 1700,
         images:JSON.stringify([
           '/images/products/product-5.jpg',
           '/images/products/product-5-1.jpg'
         ]),
         rating: 4,
         reviews: 2,
         availability: 'in-stock',
         brand_id: 2,
         note_fr:` Information on technical characteristics, the delivery set, the country of
            manufacture and the appearance of the goods is for reference only and is based on
            the latest information available at the time of publication.`,
         note_ar:`معلومات عن الخصائص التقنية ، مجموعة التسليم ، البلد
             تصنيع ومظهر البضائع للإشارة فقط ويستند إلى
             أحدث المعلومات المتاحة في وقت النشر.`,
         categorie_id: '',
         badges: [],
       }, 
       {
        id:6, 
        description_fr : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_ar : "غالبًا ما يكون الوصف نقطة توقف في القصة. يتم استخدامه لجعل القارئ يدرك إطار أو عناصر الإطار الذي يحدث فيه الإجراء.",
        description_long_ar : `<ul><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">اختر&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وجهة نظر خارجية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;وزاوية عرض مناسبة. </font></font><br>
<span style="font-size: large; color: #993300;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">→</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> اقرأ: </font></font><a title="الرومان" href="https://www.espacefrancais.com/analyser-un-roman/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تحليل الرواية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بإثراء وصفك&nbsp; </font></font><strong><a title="المجال المعجمي" href="https://www.espacefrancais.com/le-champ-lexical/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">بالحقول المعجمية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;المناسبة</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> . </font><font style="vertical-align: inherit;">استخدم </font></font><a href="https://www.espacefrancais.com/les-noms-propres/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الأسماء المناسبة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> والقياسات والمسافات.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بتمييز الكائن الموصوف من خلال&nbsp; </font></font><a title="وصفة" href="https://www.espacefrancais.com/ladjectif-qualificatif/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الصفات المؤهلة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="تكملة الاسم" href="https://www.espacefrancais.com/le-complement-du-nom/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">والاسم مكمل</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="الجملة الثانوية النسبية" href="https://www.espacefrancais.com/la-proposition-subordonnee-relative/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ومرؤوس نسبي</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تنظيم الفضاء في خطط مختلفة.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">استخدم الإشارات المكانية المناسبة </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وكلمات الربط</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;( </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الموصلات</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;العاطفية غير المحملة).</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تجنب "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يوجد&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">هو&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">نرى&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، وما إلى ذلك ، واستخدم&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">أفعال تعبيرية حية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(فعل ، حركة ، موقف) تحتوي على العناصر الموصوفة كموضوعات نحوية.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يفضل استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الحاضر الخالد</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(للحقيقة العامة) ، وقت الوصف كونه "ثابتًا" ، نوعًا من&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">التوقف ،</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;على عكس وقت السرد "الديناميكي". </font><font style="vertical-align: inherit;">لا تنس أيضًا استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">النقص في الدلالة</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;في وقت الوصف.</font></font></li></ul>`,
        description_long_fr : `<h3>Product Full Description</h3> <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam
        non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed
        purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis
        dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget
        gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna
        luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend
        pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est,
        sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit
        pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.
    </p> <h3>Etiam lacus lacus mollis in mattis</h3> <p>
        Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis accumsan.
        Vestibulum vel eros at mi suscipit feugiat. Sed tortor purus, vulputate et eros a,
        rhoncus laoreet orci. Proin sapien neque, commodo at porta in, vehicula eu elit.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; Curabitur porta vulputate augue, at sollicitudin nisl molestie eget.
    </p> <p>
        Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec pretium
        ipsum risus ac neque. Morbi eu facilisis purus. Quisque mi tortor, cursus in nulla
        ut, laoreet commodo quam. Pellentesque et ornare sapien. In ac est tempus urna
        tincidunt finibus. Integer erat ipsum, tristique ac lobortis sit amet, dapibus sit
        amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt turpis, sit amet
        fringilla odio scelerisque non.
    </p>`,
        slug: 'brandix-drilling-machine-dm2019kw4-4kw',
         name_fr: 'Brandix Drilling Machine DM2019KW4 4kW',
         name_ar : 'ماكينة حفر برانديكس DM2019KW4 4kW',
         featured : false,
         price: 3199,
         images:JSON.stringify([
           '/images/products/product-6.jpg',
           '/images/products/product-6-1.jpg'
         ]),
         badges: [],
         rating: 3,
         reviews: 21,
         availability: 'in-stock',
         brand_id: 2,
         note_fr:` Information on technical characteristics, the delivery set, the country of
            manufacture and the appearance of the goods is for reference only and is based on
            the latest information available at the time of publication.`,
         note_ar:`معلومات عن الخصائص التقنية ، مجموعة التسليم ، البلد
             تصنيع ومظهر البضائع للإشارة فقط ويستند إلى
             أحدث المعلومات المتاحة في وقت النشر.`,
         categorie_id: '',
         
       }, 
       {
        id:7, 
        description_fr : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_ar : "غالبًا ما يكون الوصف نقطة توقف في القصة. يتم استخدامه لجعل القارئ يدرك إطار أو عناصر الإطار الذي يحدث فيه الإجراء.",
        description_long_ar : `<ul><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">اختر&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وجهة نظر خارجية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;وزاوية عرض مناسبة. </font></font><br>
<span style="font-size: large; color: #993300;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">→</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> اقرأ: </font></font><a title="الرومان" href="https://www.espacefrancais.com/analyser-un-roman/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تحليل الرواية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بإثراء وصفك&nbsp; </font></font><strong><a title="المجال المعجمي" href="https://www.espacefrancais.com/le-champ-lexical/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">بالحقول المعجمية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;المناسبة</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> . </font><font style="vertical-align: inherit;">استخدم </font></font><a href="https://www.espacefrancais.com/les-noms-propres/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الأسماء المناسبة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> والقياسات والمسافات.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بتمييز الكائن الموصوف من خلال&nbsp; </font></font><a title="وصفة" href="https://www.espacefrancais.com/ladjectif-qualificatif/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الصفات المؤهلة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="تكملة الاسم" href="https://www.espacefrancais.com/le-complement-du-nom/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">والاسم مكمل</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="الجملة الثانوية النسبية" href="https://www.espacefrancais.com/la-proposition-subordonnee-relative/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ومرؤوس نسبي</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تنظيم الفضاء في خطط مختلفة.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">استخدم الإشارات المكانية المناسبة </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وكلمات الربط</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;( </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الموصلات</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;العاطفية غير المحملة).</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تجنب "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يوجد&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">هو&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">نرى&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، وما إلى ذلك ، واستخدم&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">أفعال تعبيرية حية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(فعل ، حركة ، موقف) تحتوي على العناصر الموصوفة كموضوعات نحوية.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يفضل استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الحاضر الخالد</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(للحقيقة العامة) ، وقت الوصف كونه "ثابتًا" ، نوعًا من&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">التوقف ،</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;على عكس وقت السرد "الديناميكي". </font><font style="vertical-align: inherit;">لا تنس أيضًا استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">النقص في الدلالة</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;في وقت الوصف.</font></font></li></ul>`,
        description_long_fr : `<h3>Product Full Description</h3> <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam
            non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed
            purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis
            dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget
            gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna
            luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend
            pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est,
            sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit
            pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.
        </p> <h3>Etiam lacus lacus mollis in mattis</h3> <p>
            Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis accumsan.
            Vestibulum vel eros at mi suscipit feugiat. Sed tortor purus, vulputate et eros a,
            rhoncus laoreet orci. Proin sapien neque, commodo at porta in, vehicula eu elit.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae; Curabitur porta vulputate augue, at sollicitudin nisl molestie eget.
        </p> <p>
            Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec pretium
            ipsum risus ac neque. Morbi eu facilisis purus. Quisque mi tortor, cursus in nulla
            ut, laoreet commodo quam. Pellentesque et ornare sapien. In ac est tempus urna
            tincidunt finibus. Integer erat ipsum, tristique ac lobortis sit amet, dapibus sit
            amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt turpis, sit amet
            fringilla odio scelerisque non.
        </p>`,
        slug: 'brandix-pliers',
         name_fr: 'Brandix Pliers',
         name_ar : 'كماشة برانديكس',
         featured : true,
         price: 24,
         images:JSON.stringify([
           '/images/products/product-7.jpg',
           '/images/products/product-7-1.jpg'
         ]),
         badges: [],
         rating: 2,
         reviews: 1,
         availability: 'in-stock',
         brand_id: 4,
         note_fr:` Information on technical characteristics, the delivery set, the country of
            manufacture and the appearance of the goods is for reference only and is based on
            the latest information available at the time of publication.`,
         note_ar:`معلومات عن الخصائص التقنية ، مجموعة التسليم ، البلد
             تصنيع ومظهر البضائع للإشارة فقط ويستند إلى
             أحدث المعلومات المتاحة في وقت النشر.`,
         categorie_id: 5,
         
       }, 
       {
        id:8, 
        description_fr : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_ar : "غالبًا ما يكون الوصف نقطة توقف في القصة. يتم استخدامه لجعل القارئ يدرك إطار أو عناصر الإطار الذي يحدث فيه الإجراء.",
        description_long_ar : `<ul><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">اختر&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وجهة نظر خارجية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;وزاوية عرض مناسبة. </font></font><br>
<span style="font-size: large; color: #993300;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">→</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> اقرأ: </font></font><a title="الرومان" href="https://www.espacefrancais.com/analyser-un-roman/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تحليل الرواية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بإثراء وصفك&nbsp; </font></font><strong><a title="المجال المعجمي" href="https://www.espacefrancais.com/le-champ-lexical/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">بالحقول المعجمية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;المناسبة</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> . </font><font style="vertical-align: inherit;">استخدم </font></font><a href="https://www.espacefrancais.com/les-noms-propres/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الأسماء المناسبة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> والقياسات والمسافات.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بتمييز الكائن الموصوف من خلال&nbsp; </font></font><a title="وصفة" href="https://www.espacefrancais.com/ladjectif-qualificatif/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الصفات المؤهلة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="تكملة الاسم" href="https://www.espacefrancais.com/le-complement-du-nom/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">والاسم مكمل</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="الجملة الثانوية النسبية" href="https://www.espacefrancais.com/la-proposition-subordonnee-relative/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ومرؤوس نسبي</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تنظيم الفضاء في خطط مختلفة.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">استخدم الإشارات المكانية المناسبة </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وكلمات الربط</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;( </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الموصلات</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;العاطفية غير المحملة).</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تجنب "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يوجد&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">هو&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">نرى&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، وما إلى ذلك ، واستخدم&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">أفعال تعبيرية حية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(فعل ، حركة ، موقف) تحتوي على العناصر الموصوفة كموضوعات نحوية.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يفضل استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الحاضر الخالد</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(للحقيقة العامة) ، وقت الوصف كونه "ثابتًا" ، نوعًا من&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">التوقف ،</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;على عكس وقت السرد "الديناميكي". </font><font style="vertical-align: inherit;">لا تنس أيضًا استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">النقص في الدلالة</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;في وقت الوصف.</font></font></li></ul>`,
        description_long_fr : `<h3>Product Full Description</h3> <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam
        non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed
        purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis
        dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget
        gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna
        luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend
        pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est,
        sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit
        pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.
    </p> <h3>Etiam lacus lacus mollis in mattis</h3> <p>
        Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis accumsan.
        Vestibulum vel eros at mi suscipit feugiat. Sed tortor purus, vulputate et eros a,
        rhoncus laoreet orci. Proin sapien neque, commodo at porta in, vehicula eu elit.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; Curabitur porta vulputate augue, at sollicitudin nisl molestie eget.
    </p> <p>
        Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec pretium
        ipsum risus ac neque. Morbi eu facilisis purus. Quisque mi tortor, cursus in nulla
        ut, laoreet commodo quam. Pellentesque et ornare sapien. In ac est tempus urna
        tincidunt finibus. Integer erat ipsum, tristique ac lobortis sit amet, dapibus sit
        amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt turpis, sit amet
        fringilla odio scelerisque non.
    </p>`,
        slug: 'water-hose-40cm',
         name_fr: 'Water Hose 40cm',
         name_ar : 'خرطوم مياه 40 سم',
         featured : true,
         price: 15,
         images:JSON.stringify([
           '/images/products/product-8.jpg',
           '/images/products/product-8-1.jpg'
         ]),
         rating: 2,
         reviews: 5,
        badges: [],
         availability: 'in-stock',
         brand_id: 5,
         note_fr:` Information on technical characteristics, the delivery set, the country of
            manufacture and the appearance of the goods is for reference only and is based on
            the latest information available at the time of publication.`,
         note_ar:`معلومات عن الخصائص التقنية ، مجموعة التسليم ، البلد
             تصنيع ومظهر البضائع للإشارة فقط ويستند إلى
             أحدث المعلومات المتاحة في وقت النشر.`,
         categorie_id: 5,
         
       }, 
       {
        id:9, 
        description_fr : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_ar : "غالبًا ما يكون الوصف نقطة توقف في القصة. يتم استخدامه لجعل القارئ يدرك إطار أو عناصر الإطار الذي يحدث فيه الإجراء.",
        description_long_ar : `<ul><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">اختر&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وجهة نظر خارجية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;وزاوية عرض مناسبة. </font></font><br>
<span style="font-size: large; color: #993300;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">→</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> اقرأ: </font></font><a title="الرومان" href="https://www.espacefrancais.com/analyser-un-roman/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تحليل الرواية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بإثراء وصفك&nbsp; </font></font><strong><a title="المجال المعجمي" href="https://www.espacefrancais.com/le-champ-lexical/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">بالحقول المعجمية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;المناسبة</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> . </font><font style="vertical-align: inherit;">استخدم </font></font><a href="https://www.espacefrancais.com/les-noms-propres/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الأسماء المناسبة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> والقياسات والمسافات.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بتمييز الكائن الموصوف من خلال&nbsp; </font></font><a title="وصفة" href="https://www.espacefrancais.com/ladjectif-qualificatif/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الصفات المؤهلة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="تكملة الاسم" href="https://www.espacefrancais.com/le-complement-du-nom/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">والاسم مكمل</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="الجملة الثانوية النسبية" href="https://www.espacefrancais.com/la-proposition-subordonnee-relative/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ومرؤوس نسبي</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تنظيم الفضاء في خطط مختلفة.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">استخدم الإشارات المكانية المناسبة </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وكلمات الربط</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;( </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الموصلات</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;العاطفية غير المحملة).</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تجنب "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يوجد&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">هو&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">نرى&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، وما إلى ذلك ، واستخدم&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">أفعال تعبيرية حية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(فعل ، حركة ، موقف) تحتوي على العناصر الموصوفة كموضوعات نحوية.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يفضل استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الحاضر الخالد</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(للحقيقة العامة) ، وقت الوصف كونه "ثابتًا" ، نوعًا من&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">التوقف ،</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;على عكس وقت السرد "الديناميكي". </font><font style="vertical-align: inherit;">لا تنس أيضًا استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">النقص في الدلالة</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;في وقت الوصف.</font></font></li></ul>`,
        description_long_fr : `<h3>Product Full Description</h3> <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam
        non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed
        purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis
        dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget
        gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna
        luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend
        pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est,
        sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit
        pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.
    </p> <h3>Etiam lacus lacus mollis in mattis</h3> <p>
        Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis accumsan.
        Vestibulum vel eros at mi suscipit feugiat. Sed tortor purus, vulputate et eros a,
        rhoncus laoreet orci. Proin sapien neque, commodo at porta in, vehicula eu elit.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; Curabitur porta vulputate augue, at sollicitudin nisl molestie eget.
    </p> <p>
        Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec pretium
        ipsum risus ac neque. Morbi eu facilisis purus. Quisque mi tortor, cursus in nulla
        ut, laoreet commodo quam. Pellentesque et ornare sapien. In ac est tempus urna
        tincidunt finibus. Integer erat ipsum, tristique ac lobortis sit amet, dapibus sit
        amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt turpis, sit amet
        fringilla odio scelerisque non.
    </p>`,
        slug: 'spanner-wrench',
         name_fr: 'Spanner Wrench',
         name_ar : 'مفتاح البراغي',
         featured : false,
         price: 19,
         images:JSON.stringify([
           '/images/products/product-9.jpg',
           '/images/products/product-9-1.jpg'
         ]),
         rating: 4,
        badges: [],
         reviews: 34,
         availability: 'in-stock',
         brand_id: 5,
         note_fr:` Information on technical characteristics, the delivery set, the country of
            manufacture and the appearance of the goods is for reference only and is based on
            the latest information available at the time of publication.`,
         note_ar:`معلومات عن الخصائص التقنية ، مجموعة التسليم ، البلد
             تصنيع ومظهر البضائع للإشارة فقط ويستند إلى
             أحدث المعلومات المتاحة في وقت النشر.`,
         categorie_id: 5,
         
       }, 
       {
        id:10, 
        description_fr : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_ar : "غالبًا ما يكون الوصف نقطة توقف في القصة. يتم استخدامه لجعل القارئ يدرك إطار أو عناصر الإطار الذي يحدث فيه الإجراء.",
        description_long_ar : `<ul><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">اختر&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وجهة نظر خارجية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;وزاوية عرض مناسبة. </font></font><br>
<span style="font-size: large; color: #993300;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">→</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> اقرأ: </font></font><a title="الرومان" href="https://www.espacefrancais.com/analyser-un-roman/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تحليل الرواية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بإثراء وصفك&nbsp; </font></font><strong><a title="المجال المعجمي" href="https://www.espacefrancais.com/le-champ-lexical/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">بالحقول المعجمية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;المناسبة</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> . </font><font style="vertical-align: inherit;">استخدم </font></font><a href="https://www.espacefrancais.com/les-noms-propres/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الأسماء المناسبة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> والقياسات والمسافات.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بتمييز الكائن الموصوف من خلال&nbsp; </font></font><a title="وصفة" href="https://www.espacefrancais.com/ladjectif-qualificatif/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الصفات المؤهلة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="تكملة الاسم" href="https://www.espacefrancais.com/le-complement-du-nom/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">والاسم مكمل</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="الجملة الثانوية النسبية" href="https://www.espacefrancais.com/la-proposition-subordonnee-relative/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ومرؤوس نسبي</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تنظيم الفضاء في خطط مختلفة.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">استخدم الإشارات المكانية المناسبة </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وكلمات الربط</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;( </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الموصلات</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;العاطفية غير المحملة).</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تجنب "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يوجد&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">هو&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">نرى&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، وما إلى ذلك ، واستخدم&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">أفعال تعبيرية حية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(فعل ، حركة ، موقف) تحتوي على العناصر الموصوفة كموضوعات نحوية.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يفضل استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الحاضر الخالد</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(للحقيقة العامة) ، وقت الوصف كونه "ثابتًا" ، نوعًا من&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">التوقف ،</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;على عكس وقت السرد "الديناميكي". </font><font style="vertical-align: inherit;">لا تنس أيضًا استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">النقص في الدلالة</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;في وقت الوصف.</font></font></li></ul>`,
        description_long_fr : `<h3>Product Full Description</h3> <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam
        non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed
        purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis
        dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget
        gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna
        luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend
        pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est,
        sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit
        pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.
    </p> <h3>Etiam lacus lacus mollis in mattis</h3> <p>
        Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis accumsan.
        Vestibulum vel eros at mi suscipit feugiat. Sed tortor purus, vulputate et eros a,
        rhoncus laoreet orci. Proin sapien neque, commodo at porta in, vehicula eu elit.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; Curabitur porta vulputate augue, at sollicitudin nisl molestie eget.
    </p> <p>
        Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec pretium
        ipsum risus ac neque. Morbi eu facilisis purus. Quisque mi tortor, cursus in nulla
        ut, laoreet commodo quam. Pellentesque et ornare sapien. In ac est tempus urna
        tincidunt finibus. Integer erat ipsum, tristique ac lobortis sit amet, dapibus sit
        amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt turpis, sit amet
        fringilla odio scelerisque non.
    </p>`,
        slug: 'water-tap',
         name_fr: 'Water Tap',
         name_ar : 'صنبور الماء',
         featured : true,
         price: 15,
         images:JSON.stringify([
           '/images/products/product-10.jpg',
           '/images/products/product-10-1.jpg'
         ]),
         rating: 5,
         badges: [],
         reviews: 3,
         availability: 'in-stock',
         brand_id: 5,
         categorie_id: 4,
         
       }, 
       {
        id:11, 
        description_fr : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_ar : "غالبًا ما يكون الوصف نقطة توقف في القصة. يتم استخدامه لجعل القارئ يدرك إطار أو عناصر الإطار الذي يحدث فيه الإجراء.",
        description_long_ar : `<ul><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">اختر&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وجهة نظر خارجية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;وزاوية عرض مناسبة. </font></font><br>
<span style="font-size: large; color: #993300;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">→</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> اقرأ: </font></font><a title="الرومان" href="https://www.espacefrancais.com/analyser-un-roman/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تحليل الرواية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بإثراء وصفك&nbsp; </font></font><strong><a title="المجال المعجمي" href="https://www.espacefrancais.com/le-champ-lexical/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">بالحقول المعجمية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;المناسبة</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> . </font><font style="vertical-align: inherit;">استخدم </font></font><a href="https://www.espacefrancais.com/les-noms-propres/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الأسماء المناسبة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> والقياسات والمسافات.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بتمييز الكائن الموصوف من خلال&nbsp; </font></font><a title="وصفة" href="https://www.espacefrancais.com/ladjectif-qualificatif/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الصفات المؤهلة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="تكملة الاسم" href="https://www.espacefrancais.com/le-complement-du-nom/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">والاسم مكمل</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="الجملة الثانوية النسبية" href="https://www.espacefrancais.com/la-proposition-subordonnee-relative/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ومرؤوس نسبي</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تنظيم الفضاء في خطط مختلفة.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">استخدم الإشارات المكانية المناسبة </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وكلمات الربط</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;( </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الموصلات</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;العاطفية غير المحملة).</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تجنب "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يوجد&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">هو&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">نرى&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، وما إلى ذلك ، واستخدم&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">أفعال تعبيرية حية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(فعل ، حركة ، موقف) تحتوي على العناصر الموصوفة كموضوعات نحوية.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يفضل استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الحاضر الخالد</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(للحقيقة العامة) ، وقت الوصف كونه "ثابتًا" ، نوعًا من&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">التوقف ،</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;على عكس وقت السرد "الديناميكي". </font><font style="vertical-align: inherit;">لا تنس أيضًا استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">النقص في الدلالة</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;في وقت الوصف.</font></font></li></ul>`,
        description_long_fr : `<h3>Product Full Description</h3> <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam
        non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed
        purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis
        dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget
        gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna
        luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend
        pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est,
        sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit
        pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.
    </p> <h3>Etiam lacus lacus mollis in mattis</h3> <p>
        Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis accumsan.
        Vestibulum vel eros at mi suscipit feugiat. Sed tortor purus, vulputate et eros a,
        rhoncus laoreet orci. Proin sapien neque, commodo at porta in, vehicula eu elit.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; Curabitur porta vulputate augue, at sollicitudin nisl molestie eget.
    </p> <p>
        Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec pretium
        ipsum risus ac neque. Morbi eu facilisis purus. Quisque mi tortor, cursus in nulla
        ut, laoreet commodo quam. Pellentesque et ornare sapien. In ac est tempus urna
        tincidunt finibus. Integer erat ipsum, tristique ac lobortis sit amet, dapibus sit
        amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt turpis, sit amet
        fringilla odio scelerisque non.
    </p>`,
        slug: 'hand-tool-kit',
         name_fr: 'Hand Tool Kit',
         name_ar : 'مجموعة أدوات يدوية',
         featured : false,
         price: 149,
         images:JSON.stringify([
           '/images/products/product-11.jpg',
           '/images/products/product-11-1.jpg'
         ]),
         badges: [],
          rating: 4,
         reviews: 7,
         availability: 'in-stock',
         brand_id: 5,
         categorie_id: 2,
         
       }, 
       {
        id:12, 
        description_fr : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_ar : "غالبًا ما يكون الوصف نقطة توقف في القصة. يتم استخدامه لجعل القارئ يدرك إطار أو عناصر الإطار الذي يحدث فيه الإجراء.",
        description_long_ar : `<ul><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">اختر&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وجهة نظر خارجية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;وزاوية عرض مناسبة. </font></font><br>
<span style="font-size: large; color: #993300;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">→</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> اقرأ: </font></font><a title="الرومان" href="https://www.espacefrancais.com/analyser-un-roman/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تحليل الرواية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بإثراء وصفك&nbsp; </font></font><strong><a title="المجال المعجمي" href="https://www.espacefrancais.com/le-champ-lexical/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">بالحقول المعجمية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;المناسبة</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> . </font><font style="vertical-align: inherit;">استخدم </font></font><a href="https://www.espacefrancais.com/les-noms-propres/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الأسماء المناسبة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> والقياسات والمسافات.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بتمييز الكائن الموصوف من خلال&nbsp; </font></font><a title="وصفة" href="https://www.espacefrancais.com/ladjectif-qualificatif/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الصفات المؤهلة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="تكملة الاسم" href="https://www.espacefrancais.com/le-complement-du-nom/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">والاسم مكمل</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="الجملة الثانوية النسبية" href="https://www.espacefrancais.com/la-proposition-subordonnee-relative/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ومرؤوس نسبي</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تنظيم الفضاء في خطط مختلفة.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">استخدم الإشارات المكانية المناسبة </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وكلمات الربط</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;( </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الموصلات</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;العاطفية غير المحملة).</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تجنب "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يوجد&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">هو&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">نرى&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، وما إلى ذلك ، واستخدم&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">أفعال تعبيرية حية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(فعل ، حركة ، موقف) تحتوي على العناصر الموصوفة كموضوعات نحوية.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يفضل استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الحاضر الخالد</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(للحقيقة العامة) ، وقت الوصف كونه "ثابتًا" ، نوعًا من&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">التوقف ،</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;على عكس وقت السرد "الديناميكي". </font><font style="vertical-align: inherit;">لا تنس أيضًا استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">النقص في الدلالة</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;في وقت الوصف.</font></font></li></ul>`,
        description_long_fr : `<h3>Product Full Description</h3> <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam
        non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed
        purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis
        dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget
        gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna
        luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend
        pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est,
        sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit
        pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.
    </p> <h3>Etiam lacus lacus mollis in mattis</h3> <p>
        Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis accumsan.
        Vestibulum vel eros at mi suscipit feugiat. Sed tortor purus, vulputate et eros a,
        rhoncus laoreet orci. Proin sapien neque, commodo at porta in, vehicula eu elit.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; Curabitur porta vulputate augue, at sollicitudin nisl molestie eget.
    </p> <p>
        Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec pretium
        ipsum risus ac neque. Morbi eu facilisis purus. Quisque mi tortor, cursus in nulla
        ut, laoreet commodo quam. Pellentesque et ornare sapien. In ac est tempus urna
        tincidunt finibus. Integer erat ipsum, tristique ac lobortis sit amet, dapibus sit
        amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt turpis, sit amet
        fringilla odio scelerisque non.
    </p>`,
        slug: 'ash-s-chainsaw-3.5kw',
         name_fr: 'Ash\'s Chainsaw 3.5kW',
         name_ar : 'منشار كهربائي 3.5 كيلو واط',
         featured : false,
         price: 666.99,
         images:JSON.stringify([
           '/images/products/product-12.jpg',
           '/images/products/product-12-1.jpg'
         ]),
         rating: 5,
         badges: [],
           reviews: 17,
         availability: 'in-stock',
         brand_id: 6,
         categorie_id: 3,
         
       }, 
       {
        id:13, 
        description_fr : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_ar : "غالبًا ما يكون الوصف نقطة توقف في القصة. يتم استخدامه لجعل القارئ يدرك إطار أو عناصر الإطار الذي يحدث فيه الإجراء.",
        description_long_ar : `<ul><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">اختر&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وجهة نظر خارجية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;وزاوية عرض مناسبة. </font></font><br>
<span style="font-size: large; color: #993300;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">→</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> اقرأ: </font></font><a title="الرومان" href="https://www.espacefrancais.com/analyser-un-roman/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تحليل الرواية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بإثراء وصفك&nbsp; </font></font><strong><a title="المجال المعجمي" href="https://www.espacefrancais.com/le-champ-lexical/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">بالحقول المعجمية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;المناسبة</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> . </font><font style="vertical-align: inherit;">استخدم </font></font><a href="https://www.espacefrancais.com/les-noms-propres/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الأسماء المناسبة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> والقياسات والمسافات.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بتمييز الكائن الموصوف من خلال&nbsp; </font></font><a title="وصفة" href="https://www.espacefrancais.com/ladjectif-qualificatif/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الصفات المؤهلة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="تكملة الاسم" href="https://www.espacefrancais.com/le-complement-du-nom/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">والاسم مكمل</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="الجملة الثانوية النسبية" href="https://www.espacefrancais.com/la-proposition-subordonnee-relative/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ومرؤوس نسبي</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تنظيم الفضاء في خطط مختلفة.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">استخدم الإشارات المكانية المناسبة </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وكلمات الربط</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;( </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الموصلات</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;العاطفية غير المحملة).</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تجنب "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يوجد&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">هو&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">نرى&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، وما إلى ذلك ، واستخدم&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">أفعال تعبيرية حية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(فعل ، حركة ، موقف) تحتوي على العناصر الموصوفة كموضوعات نحوية.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يفضل استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الحاضر الخالد</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(للحقيقة العامة) ، وقت الوصف كونه "ثابتًا" ، نوعًا من&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">التوقف ،</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;على عكس وقت السرد "الديناميكي". </font><font style="vertical-align: inherit;">لا تنس أيضًا استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">النقص في الدلالة</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;في وقت الوصف.</font></font></li></ul>`,
        description_long_fr : `<h3>Product Full Description</h3> <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam
        non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed
        purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis
        dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget
        gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna
        luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend
        pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est,
        sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit
        pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.
    </p> <h3>Etiam lacus lacus mollis in mattis</h3> <p>
        Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis accumsan.
        Vestibulum vel eros at mi suscipit feugiat. Sed tortor purus, vulputate et eros a,
        rhoncus laoreet orci. Proin sapien neque, commodo at porta in, vehicula eu elit.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; Curabitur porta vulputate augue, at sollicitudin nisl molestie eget.
    </p> <p>
        Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec pretium
        ipsum risus ac neque. Morbi eu facilisis purus. Quisque mi tortor, cursus in nulla
        ut, laoreet commodo quam. Pellentesque et ornare sapien. In ac est tempus urna
        tincidunt finibus. Integer erat ipsum, tristique ac lobortis sit amet, dapibus sit
        amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt turpis, sit amet
        fringilla odio scelerisque non.
    </p>`,
        slug: 'brandix-angle-grinder-kzx3890pqw',
         name_fr: 'Brandix Angle Grinder KZX3890PQW',
         name_ar : 'جلاخة زاوية برانديكس KZX3890PQW',
         featured : false,
         price: 649,
         images:JSON.stringify([
           '/images/products/product-13.jpg',
           '/images/products/product-13-1.jpg'
         ]),
         badges: [],
           rating: 2,
         reviews: 8,
         availability: 'in-stock',
         brand_id: 6,
         categorie_id: 1,
         
       }, 
       {
        id:14, 
        description_fr : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_ar : "غالبًا ما يكون الوصف نقطة توقف في القصة. يتم استخدامه لجعل القارئ يدرك إطار أو عناصر الإطار الذي يحدث فيه الإجراء.",
        description_long_ar : `<ul><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">اختر&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وجهة نظر خارجية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;وزاوية عرض مناسبة. </font></font><br>
<span style="font-size: large; color: #993300;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">→</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> اقرأ: </font></font><a title="الرومان" href="https://www.espacefrancais.com/analyser-un-roman/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تحليل الرواية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بإثراء وصفك&nbsp; </font></font><strong><a title="المجال المعجمي" href="https://www.espacefrancais.com/le-champ-lexical/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">بالحقول المعجمية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;المناسبة</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> . </font><font style="vertical-align: inherit;">استخدم </font></font><a href="https://www.espacefrancais.com/les-noms-propres/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الأسماء المناسبة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> والقياسات والمسافات.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بتمييز الكائن الموصوف من خلال&nbsp; </font></font><a title="وصفة" href="https://www.espacefrancais.com/ladjectif-qualificatif/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الصفات المؤهلة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="تكملة الاسم" href="https://www.espacefrancais.com/le-complement-du-nom/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">والاسم مكمل</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="الجملة الثانوية النسبية" href="https://www.espacefrancais.com/la-proposition-subordonnee-relative/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ومرؤوس نسبي</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تنظيم الفضاء في خطط مختلفة.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">استخدم الإشارات المكانية المناسبة </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وكلمات الربط</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;( </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الموصلات</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;العاطفية غير المحملة).</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تجنب "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يوجد&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">هو&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">نرى&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، وما إلى ذلك ، واستخدم&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">أفعال تعبيرية حية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(فعل ، حركة ، موقف) تحتوي على العناصر الموصوفة كموضوعات نحوية.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يفضل استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الحاضر الخالد</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(للحقيقة العامة) ، وقت الوصف كونه "ثابتًا" ، نوعًا من&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">التوقف ،</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;على عكس وقت السرد "الديناميكي". </font><font style="vertical-align: inherit;">لا ت��س أيضًا استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">النقص في الدلالة</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;في وقت الوصف.</font></font></li></ul>`,
        description_long_fr : `<h3>Product Full Description</h3> <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam
        non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed
        purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis
        dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget
        gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna
        luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend
        pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est,
        sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit
        pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.
    </p> <h3>Etiam lacus lacus mollis in mattis</h3> <p>
        Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis accumsan.
        Vestibulum vel eros at mi suscipit feugiat. Sed tortor purus, vulputate et eros a,
        rhoncus laoreet orci. Proin sapien neque, commodo at porta in, vehicula eu elit.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; Curabitur porta vulputate augue, at sollicitudin nisl molestie eget.
    </p> <p>
        Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec pretium
        ipsum risus ac neque. Morbi eu facilisis purus. Quisque mi tortor, cursus in nulla
        ut, laoreet commodo quam. Pellentesque et ornare sapien. In ac est tempus urna
        tincidunt finibus. Integer erat ipsum, tristique ac lobortis sit amet, dapibus sit
        amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt turpis, sit amet
        fringilla odio scelerisque non.
    </p>`,
        slug: 'brandix-air-compressor-deltakx500',
         name_fr: 'Brandix Air Compressor DELTAKX500',
         name_ar : 'ضاغط هواء برانديكس DELTAKX500',
         featured : false,
         price: 1800,
         images:JSON.stringify([
           '/images/products/product-14.jpg',
           '/images/products/product-14-1.jpg'
         ]),
         rating: 3,
         badges: [],
           reviews: 14,
         availability: 'in-stock',
         brand_id: 1,
         categorie_id: 2,
         
       }, 
       {
        id:15, 
        description_fr : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_ar : "غالبًا ما يكون الوصف نقطة توقف في القصة. يتم استخدامه لجعل القارئ يدرك إطار أو عناصر الإطار الذي يحدث فيه الإجراء.",
        description_long_ar : `<ul><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">اختر&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وجهة نظر خارجية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;وزاوية عرض مناسبة. </font></font><br>
<span style="font-size: large; color: #993300;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">→</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> اقرأ: </font></font><a title="الرومان" href="https://www.espacefrancais.com/analyser-un-roman/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تحليل الرواية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بإثراء وصفك&nbsp; </font></font><strong><a title="المجال المعجمي" href="https://www.espacefrancais.com/le-champ-lexical/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">بالحقول المعجمية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;المناسبة</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> . </font><font style="vertical-align: inherit;">استخدم </font></font><a href="https://www.espacefrancais.com/les-noms-propres/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الأسماء المناسبة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> والقياسات والمسافات.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بتمييز الكائن الموصوف من خلال&nbsp; </font></font><a title="وصفة" href="https://www.espacefrancais.com/ladjectif-qualificatif/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الصفات المؤهلة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="تكملة الاسم" href="https://www.espacefrancais.com/le-complement-du-nom/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">والاسم مكمل</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="الجملة الثانوية النسبية" href="https://www.espacefrancais.com/la-proposition-subordonnee-relative/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ومرؤوس نسبي</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تنظيم الفضاء في خطط مختلفة.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">استخدم الإشارات المكانية المناسبة </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وكلمات الربط</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;( </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الموصلات</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;العاطفية غير المحملة).</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تجنب "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يوجد&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">هو&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">نرى&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، وما إلى ذلك ، واستخدم&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">أفعال تعبيرية حية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(فعل ، حركة ، موقف) تحتوي على العناصر الموصوفة كموضوعات نحوية.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يفضل استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الحاضر الخالد</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(للحقيقة العامة) ، وقت الوصف كونه "ثابتًا" ، نوعًا من&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">التوقف ،</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;على عكس وقت السرد "الديناميكي". </font><font style="vertical-align: inherit;">لا تنس أيضًا استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">النقص في الدلالة</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;في وقت الوصف.</font></font></li></ul>`,
        description_long_fr : `<h3>Product Full Description</h3> <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam
        non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed
        purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis
        dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget
        gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna
        luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend
        pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est,
        sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit
        pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.
    </p> <h3>Etiam lacus lacus mollis in mattis</h3> <p>
        Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis accumsan.
        Vestibulum vel eros at mi suscipit feugiat. Sed tortor purus, vulputate et eros a,
        rhoncus laoreet orci. Proin sapien neque, commodo at porta in, vehicula eu elit.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; Curabitur porta vulputate augue, at sollicitudin nisl molestie eget.
    </p> <p>
        Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec pretium
        ipsum risus ac neque. Morbi eu facilisis purus. Quisque mi tortor, cursus in nulla
        ut, laoreet commodo quam. Pellentesque et ornare sapien. In ac est tempus urna
        tincidunt finibus. Integer erat ipsum, tristique ac lobortis sit amet, dapibus sit
        amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt turpis, sit amet
        fringilla odio scelerisque non.
    </p>`,
        slug: 'brandix-electric-jigsaw-jig7000bq',
         name_fr: 'Brandix Electric Jigsaw JIG7000BQ',
         name_ar : 'منشار كهربائي برانديكس JIG7000BQ',
         featured : false,
         price: 290,
         images:JSON.stringify([
           '/images/products/product-15.jpg',
           '/images/products/product-15-1.jpg'
         ]),
         rating: 2,
         badges: [],
           reviews: 1,
         availability: 'in-stock',
         brand_id: 1,
         categorie_id: 1,
         
       }, 
       {
        id:16, 
        description_fr : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_ar : "غالبًا ما يكون الوصف نقطة توقف في القصة. يتم استخدامه لجعل القارئ يدرك إطار أو عناصر الإطار الذي يحدث فيه الإجراء.",
        description_long_ar : `<ul><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">اختر&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وجهة نظر خارجية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;وزاوية عرض مناسبة. </font></font><br>
<span style="font-size: large; color: #993300;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">→</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> اقرأ: </font></font><a title="الرومان" href="https://www.espacefrancais.com/analyser-un-roman/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تحليل الرواية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بإثراء وصفك&nbsp; </font></font><strong><a title="المجال المعجمي" href="https://www.espacefrancais.com/le-champ-lexical/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">بالحقول المعجمية</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;المناسبة</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> . </font><font style="vertical-align: inherit;">استخدم </font></font><a href="https://www.espacefrancais.com/les-noms-propres/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الأسماء المناسبة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> والقياسات والمسافات.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">قم بتمييز الكائن الموصوف من خلال&nbsp; </font></font><a title="وصفة" href="https://www.espacefrancais.com/ladjectif-qualificatif/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الصفات المؤهلة</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="تكملة الاسم" href="https://www.espacefrancais.com/le-complement-du-nom/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">والاسم مكمل</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ،&nbsp; </font></font><a title="الجملة الثانوية النسبية" href="https://www.espacefrancais.com/la-proposition-subordonnee-relative/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ومرؤوس نسبي</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تنظيم الفضاء في خطط مختلفة.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">استخدم الإشارات المكانية المناسبة </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">وكلمات الربط</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;( </font></font><a href="https://www.espacefrancais.com/les-connecteurs-logiques/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الموصلات</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;العاطفية غير المحملة).</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">تجنب "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يوجد&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">هو&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، "&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">نرى&nbsp;</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> " ، وما إلى ذلك ، واستخدم&nbsp; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">أفعال تعبيرية حية</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(فعل ، حركة ، موقف) تحتوي على العناصر الموصوفة كموضوعات نحوية.</font></font></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">يفضل استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">الحاضر الخالد</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;(للحقيقة العامة) ، وقت الوصف كونه "ثابتًا" ، نوعًا من&nbsp; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">التوقف ،</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;على عكس وقت السرد "الديناميكي". </font><font style="vertical-align: inherit;">لا تنس أيضًا استخدام&nbsp; </font></font><a title="مرات وقيم الأوقات" href="https://www.espacefrancais.com/les-temps-et-les-valeurs-des-temps/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">النقص في الدلالة</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &nbsp;في وقت الوصف.</font></font></li></ul>`,
        description_long_fr : `<h3>Product Full Description</h3> <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam
        non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed
        purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis
        dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget
        gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna
        luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend
        pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est,
        sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit
        pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.
    </p> <h3>Etiam lacus lacus mollis in mattis</h3> <p>
        Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis accumsan.
        Vestibulum vel eros at mi suscipit feugiat. Sed tortor purus, vulputate et eros a,
        rhoncus laoreet orci. Proin sapien neque, commodo at porta in, vehicula eu elit.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; Curabitur porta vulputate augue, at sollicitudin nisl molestie eget.
    </p> <p>
        Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec pretium
        ipsum risus ac neque. Morbi eu facilisis purus. Quisque mi tortor, cursus in nulla
        ut, laoreet commodo quam. Pellentesque et ornare sapien. In ac est tempus urna
        tincidunt finibus. Integer erat ipsum, tristique ac lobortis sit amet, dapibus sit
        amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt turpis, sit amet
        fringilla odio scelerisque non.
    </p>`,
        slug: 'brandix-screwdriver-screw1500acc',
         name_fr: 'Brandix Screwdriver SCREW1500ACC',
         name_ar : 'مفك برانديكس SCREW1500ACC',
         featured : true,
         price: 1499,
         images:JSON.stringify([
           '/images/products/product-16.jpg',
           '/images/products/product-16-1.jpg',
           '/images/products/product-16-2.jpg',
           '/images/products/product-16-3.jpg',
           '/images/products/product-16-4.jpg'
         ]),
         badges: [],
          rating: 5,
         reviews: 3,
         availability: 'in-stock',
         brand_id: 7,
         categorie_id: 3
         
       }
    ])
    await Database.from('attribute_product').insert([
      { 
        product_id : 1,
        values : JSON.stringify([
           {
             name_fr: 'White',
             name_ar: 'أبيض',
             slug: 'white'
           }, {
             name_fr: 'Silver',
             name_ar: 'فضة',
             slug: 'silver'
           }, {
             name_fr: 'Light Gray',
             name_ar: 'رمادي فاتح',
             slug: 'light-gray'
           }, {
             name_fr: 'Gray',
             name_ar: 'رمادي',
             slug: 'gray'
           },
        ]),
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 1,
        values : JSON.stringify([
           {
             name_fr: '750 tr / min',
             name_ar: '750 دورة في الدقيقة',
              slug: '750-rpm'
           }, 
        ]),
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 1,
        values : JSON.stringify([
           {
             name_fr: 'Sans fil-électrique',
           name_ar: 'لاسلكي كهربائي',
            slug: 'power-source', 
            featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 1,
        values : JSON.stringify([
           {
             slug: 'battery-cell-type',
             name_fr: 'Lithium',
             name_ar: 'لالليثيوم',
             featured: true
           }, 
        ]),
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 1,
        values : JSON.stringify([
           {
             name_fr: '20 Volts',
            name_ar: '20 فولت',
             slug: 'voltage', 
             featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 1,
        values : JSON.stringify([
           {
             slug: 'battery-capacity',
             name_fr: '2-Ah',
            name_ar: '2-Ah',
             featured: true
           }
        ]),
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 2,
        values : JSON.stringify([
           {
             name_fr: 'White',
             name_ar: 'أبيض',
             slug: 'white'
           }, {
             name_fr: 'Silver',
             name_ar: 'فضة',
             slug: 'silver'
           }, {
             name_fr: 'Light Gray',
             name_ar: 'رمادي فاتح',
             slug: 'light-gray'
           }, {
             name_fr: 'Gray',
             name_ar: 'رمادي',
             slug: 'gray'
           },
        ]),
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 2,
        values : JSON.stringify([
           {
             name_fr: '750 tr / min',
             name_ar: '750 دورة في الدقيقة',
              slug: '750-rpm'
           }, 
        ]),
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 2,
        values : JSON.stringify([
           {
             name_fr: 'Sans fil-électrique',
           name_ar: 'لاسلكي كهربائي',
            slug: 'power-source', 
            featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 2,
        values : JSON.stringify([
           {
             slug: 'battery-cell-type',
             name_fr: 'Lithium',
             name_ar: 'لالليثيوم',
             featured: true
           }, 
        ]),
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 2,
        values : JSON.stringify([
           {
             name_fr: '20 Volts',
            name_ar: '20 فولت',
             slug: 'voltage', 
             featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 2,
        values : JSON.stringify([
           {
             slug: 'battery-capacity',
             name_fr: '2-Ah',
            name_ar: '2-Ah',
             featured: true
           }
        ]),
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 3,
        values : JSON.stringify([
           {
             name_fr: 'White',
             name_ar: 'أبيض',
             slug: 'white'
           }, {
             name_fr: 'Silver',
             name_ar: 'فضة',
             slug: 'silver'
           }, {
             name_fr: 'Light Gray',
             name_ar: 'رمادي فاتح',
             slug: 'light-gray'
           }, {
             name_fr: 'Gray',
             name_ar: 'رمادي',
             slug: 'gray'
           },
        ]),
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 3,
        values : JSON.stringify([
           {
             name_fr: '750 tr / min',
             name_ar: '750 دورة في الدقيقة',
              slug: '750-rpm'
           }, 
        ]),
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 3,
        values : JSON.stringify([
           {
             name_fr: 'Sans fil-électrique',
           name_ar: 'لاسلكي كهربائي',
            slug: 'power-source', 
            featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 3,
        values : JSON.stringify([
           {
             slug: 'battery-cell-type',
             name_fr: 'Lithium',
             name_ar: 'لالليثيوم',
             featured: true
           }, 
        ]),
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 3,
        values : JSON.stringify([
           {
             name_fr: '20 Volts',
            name_ar: '20 فولت',
             slug: 'voltage', 
             featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 3,
        values : JSON.stringify([
           {
             slug: 'battery-capacity',
             name_fr: '2-Ah',
            name_ar: '2-Ah',
             featured: true
           }
        ]),
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 4,
        values : JSON.stringify([
           {
             name_fr: 'White',
             name_ar: 'أبيض',
             slug: 'white'
           }, {
             name_fr: 'Silver',
             name_ar: 'فضة',
             slug: 'silver'
           }, {
             name_fr: 'Light Gray',
             name_ar: 'رمادي فاتح',
             slug: 'light-gray'
           }, {
             name_fr: 'Gray',
             name_ar: 'رمادي',
             slug: 'gray'
           },
        ]),
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 4,
        values : JSON.stringify([
           {
             name_fr: '750 tr / min',
             name_ar: '750 دورة في الدقيقة',
              slug: '750-rpm'
           }, 
        ]),
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 4,
        values : JSON.stringify([
           {
             name_fr: 'Sans fil-électrique',
           name_ar: 'لاسلكي كهربائي',
            slug: 'power-source', 
            featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 4,
        values : JSON.stringify([
           {
             slug: 'battery-cell-type',
             name_fr: 'Lithium',
             name_ar: 'لالليثيوم',
             featured: true
           }, 
        ]),
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 4,
        values : JSON.stringify([
           {
             name_fr: '20 Volts',
            name_ar: '20 فولت',
             slug: 'voltage', 
             featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 4,
        values : JSON.stringify([
           {
             slug: 'battery-capacity',
             name_fr: '2-Ah',
            name_ar: '2-Ah',
             featured: true
           }
        ]),
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 5,
        values : JSON.stringify([
           {
             name_fr: 'White',
             name_ar: 'أبيض',
             slug: 'white'
           }, {
             name_fr: 'Silver',
             name_ar: 'فضة',
             slug: 'silver'
           }, {
             name_fr: 'Light Gray',
             name_ar: 'رمادي فاتح',
             slug: 'light-gray'
           }, {
             name_fr: 'Gray',
             name_ar: 'رمادي',
             slug: 'gray'
           },
        ]),
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 5,
        values : JSON.stringify([
           {
             name_fr: '750 tr / min',
             name_ar: '750 دورة في الدقيقة',
              slug: '750-rpm'
           }, 
        ]),
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 5,
        values : JSON.stringify([
           {
             name_fr: 'Sans fil-électrique',
           name_ar: 'لاسلكي كهربائي',
            slug: 'power-source', 
            featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 5,
        values : JSON.stringify([
           {
             slug: 'battery-cell-type',
             name_fr: 'Lithium',
             name_ar: 'لالليثيوم',
             featured: true
           }, 
        ]),
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 5,
        values : JSON.stringify([
           {
             name_fr: '20 Volts',
            name_ar: '20 فولت',
             slug: 'voltage', 
             featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 5,
        values : JSON.stringify([
           {
             slug: 'battery-capacity',
             name_fr: '2-Ah',
            name_ar: '2-Ah',
             featured: true
           }
        ]),
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 6,
        values : JSON.stringify([
           {
             name_fr: 'White',
             name_ar: 'أبيض',
             slug: 'white'
           }, {
             name_fr: 'Silver',
             name_ar: 'فضة',
             slug: 'silver'
           }, {
             name_fr: 'Light Gray',
             name_ar: 'رمادي فاتح',
             slug: 'light-gray'
           }, {
             name_fr: 'Gray',
             name_ar: 'رمادي',
             slug: 'gray'
           },
        ]),
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 6,
        values : JSON.stringify([
           {
             name_fr: '750 tr / min',
             name_ar: '750 دورة في الدقيقة',
              slug: '750-rpm'
           }, 
        ]),
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 6,
        values : JSON.stringify([
           {
             name_fr: 'Sans fil-électrique',
           name_ar: 'لاسلكي كهربائي',
            slug: 'power-source', 
            featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 6,
        values : JSON.stringify([
           {
             slug: 'battery-cell-type',
             name_fr: 'Lithium',
             name_ar: 'لالليثيوم',
             featured: true
           }, 
        ]),
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 6,
        values : JSON.stringify([
           {
             name_fr: '20 Volts',
            name_ar: '20 فولت',
             slug: 'voltage', 
             featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 6,
        values : JSON.stringify([
           {
             slug: 'battery-capacity',
             name_fr: '2-Ah',
            name_ar: '2-Ah',
             featured: true
           }
        ]),
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 7,
        values : JSON.stringify([
           {
             name_fr: 'White',
             name_ar: 'أبيض',
             slug: 'white'
           }, {
             name_fr: 'Silver',
             name_ar: 'فضة',
             slug: 'silver'
           }, {
             name_fr: 'Light Gray',
             name_ar: 'رمادي فاتح',
             slug: 'light-gray'
           }, {
             name_fr: 'Gray',
             name_ar: 'رمادي',
             slug: 'gray'
           },
        ]),
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 7,
        values : JSON.stringify([
           {
             name_fr: '750 tr / min',
             name_ar: '750 دورة في الدقيقة',
              slug: '750-rpm'
           }, 
        ]),
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 7,
        values : JSON.stringify([
           {
             name_fr: 'Sans fil-électrique',
           name_ar: 'لاسلكي كهربائي',
            slug: 'power-source', 
            featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 7,
        values : JSON.stringify([
           {
             slug: 'battery-cell-type',
             name_fr: 'Lithium',
             name_ar: 'لالليثيوم',
             featured: true
           }, 
        ]),
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 7,
        values : JSON.stringify([
           {
             name_fr: '20 Volts',
            name_ar: '20 فولت',
             slug: 'voltage', 
             featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 7,
        values : JSON.stringify([
           {
             slug: 'battery-capacity',
             name_fr: '2-Ah',
            name_ar: '2-Ah',
             featured: true
           }
        ]),
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 8,
        values : JSON.stringify([
           {
             name_fr: 'White',
             name_ar: 'أبيض',
             slug: 'white'
           }, {
             name_fr: 'Silver',
             name_ar: 'فضة',
             slug: 'silver'
           }, {
             name_fr: 'Light Gray',
             name_ar: 'رمادي فاتح',
             slug: 'light-gray'
           }, {
             name_fr: 'Gray',
             name_ar: 'رمادي',
             slug: 'gray'
           },
        ]),
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 8,
        values : JSON.stringify([
           {
             name_fr: '750 tr / min',
             name_ar: '750 دورة في الدقيقة',
              slug: '750-rpm'
           }, 
        ]),
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 8,
        values : JSON.stringify([
           {
             name_fr: 'Sans fil-électrique',
           name_ar: 'لاسلكي كهربائي',
            slug: 'power-source', 
            featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 8,
        values : JSON.stringify([
           {
             slug: 'battery-cell-type',
             name_fr: 'Lithium',
             name_ar: 'لالليثيوم',
             featured: true
           }, 
        ]),
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 8,
        values : JSON.stringify([
           {
             name_fr: '20 Volts',
            name_ar: '20 فولت',
             slug: 'voltage', 
             featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 8,
        values : JSON.stringify([
           {
             slug: 'battery-capacity',
             name_fr: '2-Ah',
            name_ar: '2-Ah',
             featured: true
           }
        ]),
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 9,
        values : JSON.stringify([
           {
             name_fr: 'White',
             name_ar: 'أبيض',
             slug: 'white'
           }, {
             name_fr: 'Silver',
             name_ar: 'فضة',
             slug: 'silver'
           }, {
             name_fr: 'Light Gray',
             name_ar: 'رمادي فاتح',
             slug: 'light-gray'
           }, {
             name_fr: 'Gray',
             name_ar: 'رمادي',
             slug: 'gray'
           },
        ]),
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 9,
        values : JSON.stringify([
           {
             name_fr: '750 tr / min',
             name_ar: '750 دورة في الدقيقة',
              slug: '750-rpm'
           }, 
        ]),
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 9,
        values : JSON.stringify([
           {
             name_fr: 'Sans fil-électrique',
           name_ar: 'لاسلكي كهربائي',
            slug: 'power-source', 
            featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 9,
        values : JSON.stringify([
           {
             slug: 'battery-cell-type',
             name_fr: 'Lithium',
             name_ar: 'لالليثيوم',
             featured: true
           }, 
        ]),
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 9,
        values : JSON.stringify([
           {
             name_fr: '20 Volts',
            name_ar: '20 فولت',
             slug: 'voltage', 
             featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 9,
        values : JSON.stringify([
           {
             slug: 'battery-capacity',
             name_fr: '2-Ah',
            name_ar: '2-Ah',
             featured: true
           }
        ]),
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 10,
        values : JSON.stringify([
           {
             name_fr: 'White',
             name_ar: 'أبيض',
             slug: 'white'
           }, {
             name_fr: 'Silver',
             name_ar: 'فضة',
             slug: 'silver'
           }, {
             name_fr: 'Light Gray',
             name_ar: 'رمادي فاتح',
             slug: 'light-gray'
           }, {
             name_fr: 'Gray',
             name_ar: 'رمادي',
             slug: 'gray'
           },
        ]),
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 10,
        values : JSON.stringify([
           {
             name_fr: '750 tr / min',
             name_ar: '750 دورة في الدقيقة',
              slug: '750-rpm'
           }, 
        ]),
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 10,
        values : JSON.stringify([
           {
             name_fr: 'Sans fil-électrique',
           name_ar: 'لاسلكي كهربائي',
            slug: 'power-source', 
            featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 10,
        values : JSON.stringify([
           {
             slug: 'battery-cell-type',
             name_fr: 'Lithium',
             name_ar: 'لالليثيوم',
             featured: true
           }, 
        ]),
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 10,
        values : JSON.stringify([
           {
             name_fr: '20 Volts',
            name_ar: '20 فولت',
             slug: 'voltage', 
             featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 10,
        values : JSON.stringify([
           {
             slug: 'battery-capacity',
             name_fr: '2-Ah',
            name_ar: '2-Ah',
             featured: true
           }
        ]),
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 11,
        values : JSON.stringify([
           {
             name_fr: 'White',
             name_ar: 'أبيض',
             slug: 'white'
           }, {
             name_fr: 'Silver',
             name_ar: 'فضة',
             slug: 'silver'
           }, {
             name_fr: 'Light Gray',
             name_ar: 'رمادي فاتح',
             slug: 'light-gray'
           }, {
             name_fr: 'Gray',
             name_ar: 'رمادي',
             slug: 'gray'
           },
        ]),
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 11,
        values : JSON.stringify([
           {
             name_fr: '750 tr / min',
             name_ar: '750 دورة في الدقيقة',
              slug: '750-rpm'
           }, 
        ]),
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 11,
        values : JSON.stringify([
           {
             name_fr: 'Sans fil-électrique',
           name_ar: 'لاسلكي كهربائي',
            slug: 'power-source', 
            featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 11,
        values : JSON.stringify([
           {
             slug: 'battery-cell-type',
             name_fr: 'Lithium',
             name_ar: 'لالليثيوم',
             featured: true
           }, 
        ]),
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 11,
        values : JSON.stringify([
           {
             name_fr: '20 Volts',
            name_ar: '20 فولت',
             slug: 'voltage', 
             featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 11,
        values : JSON.stringify([
           {
             slug: 'battery-capacity',
             name_fr: '2-Ah',
            name_ar: '2-Ah',
             featured: true
           }
        ]),
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 12,
        values : JSON.stringify([
           {
             name_fr: 'White',
             name_ar: 'أبيض',
             slug: 'white'
           }, {
             name_fr: 'Silver',
             name_ar: 'فضة',
             slug: 'silver'
           }, {
             name_fr: 'Light Gray',
             name_ar: 'رمادي فاتح',
             slug: 'light-gray'
           }, {
             name_fr: 'Gray',
             name_ar: 'رمادي',
             slug: 'gray'
           },
        ]),
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 12,
        values : JSON.stringify([
           {
             name_fr: '750 tr / min',
             name_ar: '750 دورة في الدقيقة',
              slug: '750-rpm'
           }, 
        ]),
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 12,
        values : JSON.stringify([
           {
             name_fr: 'Sans fil-électrique',
           name_ar: 'لاسلكي كهربائي',
            slug: 'power-source', 
            featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 12,
        values : JSON.stringify([
           {
             slug: 'battery-cell-type',
             name_fr: 'Lithium',
             name_ar: 'لالليثيوم',
             featured: true
           }, 
        ]),
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 12,
        values : JSON.stringify([
           {
             name_fr: '20 Volts',
            name_ar: '20 فولت',
             slug: 'voltage', 
             featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 12,
        values : JSON.stringify([
           {
             slug: 'battery-capacity',
             name_fr: '2-Ah',
            name_ar: '2-Ah',
             featured: true
           }
        ]),
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 13,
        values : JSON.stringify([
           {
             name_fr: 'White',
             name_ar: 'أبيض',
             slug: 'white'
           }, {
             name_fr: 'Silver',
             name_ar: 'فضة',
             slug: 'silver'
           }, {
             name_fr: 'Light Gray',
             name_ar: 'رمادي فاتح',
             slug: 'light-gray'
           }, {
             name_fr: 'Gray',
             name_ar: 'رمادي',
             slug: 'gray'
           },
        ]),
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 13,
        values : JSON.stringify([
           {
             name_fr: '750 tr / min',
             name_ar: '750 دورة في الدقيقة',
              slug: '750-rpm'
           }, 
        ]),
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 13,
        values : JSON.stringify([
           {
             name_fr: 'Sans fil-électrique',
           name_ar: 'لاسلكي كهربائي',
            slug: 'power-source', 
            featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 13,
        values : JSON.stringify([
           {
             slug: 'battery-cell-type',
             name_fr: 'Lithium',
             name_ar: 'لالليثيوم',
             featured: true
           }, 
        ]),
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 13,
        values : JSON.stringify([
           {
             name_fr: '20 Volts',
            name_ar: '20 فولت',
             slug: 'voltage', 
             featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 13,
        values : JSON.stringify([
           {
             slug: 'battery-capacity',
             name_fr: '2-Ah',
            name_ar: '2-Ah',
             featured: true
           }
        ]),
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 14,
        values : JSON.stringify([
           {
             name_fr: 'White',
             name_ar: 'أبيض',
             slug: 'white'
           }, {
             name_fr: 'Silver',
             name_ar: 'فضة',
             slug: 'silver'
           }, {
             name_fr: 'Light Gray',
             name_ar: 'رمادي فاتح',
             slug: 'light-gray'
           }, {
             name_fr: 'Gray',
             name_ar: 'رمادي',
             slug: 'gray'
           },
        ]),
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 14,
        values : JSON.stringify([
           {
             name_fr: '750 tr / min',
             name_ar: '750 دورة في الدقيقة',
              slug: '750-rpm'
           }, 
        ]),
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 14,
        values : JSON.stringify([
           {
             name_fr: 'Sans fil-électrique',
           name_ar: 'لاسلكي كهربائي',
            slug: 'power-source', 
            featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 14,
        values : JSON.stringify([
           {
             slug: 'battery-cell-type',
             name_fr: 'Lithium',
             name_ar: 'لالليثيوم',
             featured: true
           }, 
        ]),
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 14,
        values : JSON.stringify([
           {
             name_fr: '20 Volts',
            name_ar: '20 فولت',
             slug: 'voltage', 
             featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 14,
        values : JSON.stringify([
           {
             slug: 'battery-capacity',
             name_fr: '2-Ah',
            name_ar: '2-Ah',
             featured: true
           }
        ]),
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 15,
        values : JSON.stringify([
           {
             name_fr: 'White',
             name_ar: 'أبيض',
             slug: 'white'
           }, {
             name_fr: 'Silver',
             name_ar: 'فضة',
             slug: 'silver'
           }, {
             name_fr: 'Light Gray',
             name_ar: 'رمادي فاتح',
             slug: 'light-gray'
           }, {
             name_fr: 'Gray',
             name_ar: 'رمادي',
             slug: 'gray'
           },
        ]),
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 15,
        values : JSON.stringify([
           {
              name_fr: '750 tr / min',
             name_ar: '750 دورة في الدقيقة',
              slug: '750-rpm'
           }, 
        ]),
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 15,
        values : JSON.stringify([
           {
             name_fr: 'Sans fil-électrique',
           name_ar: 'لاسلكي كهربائي',
            slug: 'power-source', 
            featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 15,
        values : JSON.stringify([
           {
              slug: 'battery-cell-type',
              name_fr: 'Lithium',
             name_ar: 'لالليثيوم',
             featured: true
           }, 
        ]),
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 15,
        values : JSON.stringify([
           {
             name_fr: '20 Volts',
            name_ar: '20 فولت',
             slug: 'voltage', 
             featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 15,
        values : JSON.stringify([
           { 
             slug: 'battery-capacity',
             name_fr: '2-Ah',
            name_ar: '2-Ah',
             featured: true
           }
        ]),
        featured : true,
        attribute_id: 6
      }, 
   
      { 
        product_id : 16,
        values : JSON.stringify([
           {
             name_fr: 'White',
             name_ar: 'أبيض',
             slug: 'white'
           }, {
             name_fr: 'Silver',
             name_ar: 'فضة',
             slug: 'silver'
           }, {
             name_fr: 'Light Gray',
             name_ar: 'رمادي فاتح',
             slug: 'light-gray'
           }, {
             name_fr: 'Gray',
             name_ar: 'رمادي',
             slug: 'gray'
           },
        ]),
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 16,
        values : JSON.stringify([
           {
              name_fr: '750 tr / min',
             name_ar: '750 دورة في الدقيقة',
              slug: '750-rpm'
           }, 
        ]),
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 16,
        values : JSON.stringify([
           {
            name_fr: 'Sans fil-électrique',
           name_ar: 'لاسلكي كهربائي',
            slug: 'power-source', 
            featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 16,
        values : JSON.stringify([
           {
              name_fr: 'Lithium',
             name_ar: 'لالليثيوم',
              slug: 'battery-cell-type', 
              featured: true
           }, 
        ]),
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 16,
        values : JSON.stringify([
           {
             name_fr: '20 Volts',
            name_ar: '20 فولت',
             slug: 'voltage', 
             featured: true
           }, 
        ]),
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 16,
        values : JSON.stringify([
           {
             name_fr: '2-Ah',
            name_ar: '2-Ah',
             slug: 'battery-capacity', 
             featured: true
           }
        ]),
        featured : true,
        attribute_id: 6
      }, 
   
    ])

    await Database.from('tags').insert([
      {
        id: 1,
        name_fr : "Montures",
        name_ar : "يتصاعد",
        slug : "mounts",
      },
      {
        id: 2,
        name_fr : "Électrodes",
        name_ar : "أقطاب كهربائية",
        slug : "electrodes",
      },
      {
        id: 3,
        name_fr : "Tronçonneuses",
        name_ar : "مناشير",
        slug : "saws",
      },
    ])
    await Database.from('product_tag').insert([
      {
        product_id : 1,
        tag_id : 1,
      },
      {
        product_id : 1,
        tag_id : 2,
      },
      {
        product_id : 1,
        tag_id : 3,
      },
      {
        product_id : 2,
        tag_id : 1,
      },
      {
        product_id : 2,
        tag_id : 2,
      },
      {
        product_id : 2,
        tag_id : 3,
      },
      {
        product_id : 3,
        tag_id : 1,
      },
      {
        product_id : 3,
        tag_id : 2,
      },
      {
        product_id : 3,
        tag_id : 3,
      },
      {
        product_id : 4,
        tag_id : 1,
      },
      {
        product_id : 4,
        tag_id : 2,
      },
      {
        product_id : 4,
        tag_id : 3,
      },
      {
        product_id : 5,
        tag_id : 1,
      },
      {
        product_id : 5,
        tag_id : 2,
      },
      {
        product_id : 5,
        tag_id : 3,
      },
      {
        product_id : 6,
        tag_id : 1,
      },
      {
        product_id : 6,
        tag_id : 2,
      },
      {
        product_id : 6,
        tag_id : 3,
      },
      {
        product_id : 7,
        tag_id : 1,
      },
      {
        product_id : 7,
        tag_id : 2,
      },
      {
        product_id : 7,
        tag_id : 3,
      },
      {
        product_id : 8,
        tag_id : 1,
      },
      {
        product_id : 8,
        tag_id : 2,
      },
      {
        product_id : 8,
        tag_id : 3,
      },
      {
        product_id : 9,
        tag_id : 1,
      },
      {
        product_id : 9,
        tag_id : 2,
      },
      {
        product_id : 9,
        tag_id : 3,
      },
      {
        product_id : 10,
        tag_id : 1,
      },
      {
        product_id : 10,
        tag_id : 2,
      },
      {
        product_id : 10,
        tag_id : 3,
      },
      {
        product_id : 11,
        tag_id : 1,
      },
      {
        product_id : 11,
        tag_id : 2,
      },
      {
        product_id : 11,
        tag_id : 3,
      },
      {
        product_id : 12,
        tag_id : 1,
      },
      {
        product_id : 12,
        tag_id : 2,
      },
      {
        product_id : 12,
        tag_id : 3,
      },
      {
        product_id : 13,
        tag_id : 1,
      },
      {
        product_id : 13,
        tag_id : 2,
      },
      {
        product_id : 13,
        tag_id : 3,
      },
      {
        product_id : 14,
        tag_id : 1,
      },
      {
        product_id : 14,
        tag_id : 2,
      },
      {
        product_id : 14,
        tag_id : 3,
      },
      {
        product_id : 15,
        tag_id : 1,
      },
      {
        product_id : 15,
        tag_id : 2,
      },
      {
        product_id : 15,
        tag_id : 3,
      },
      {
        product_id : 16,
        tag_id : 1,
      },
      {
        product_id : 16,
        tag_id : 2,
      },
      {
        product_id : 16,
        tag_id : 3,
      },
    ])
  }
}

module.exports = ProducatSeeder
