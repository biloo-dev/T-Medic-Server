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
    await Database.from('attributes').insert([
      {
        id : 1,
        name: 'Color',
        slug: 'color', 
      }, 
      {
        id:2,
        name: 'Speed',
        slug: 'speed', 
      }, 
      {
        id:3,
        name: 'Power Source',
        slug: 'power-source',
      }, 
      {
        id:4,
        name: 'Battery Cell Type',
        slug: 'battery-cell-type',
      }, 
      {
        id:5,
        name: 'Voltage',
        slug: 'voltage',
      }, 
      {
        id:6,
        name: 'Battery Capacity',
        slug: 'battery-capacity',
      
    }]) 
    await Database.from('brands').insert([ 
      {
        id:1,
        name: 'Brandix',
        slug: 'brandix',
        image: 'assets/images/logos/logo-1.png'
      }, 
      {
        id:2,
        name: 'Wakita',
        slug: 'wakita',
        image: 'assets/images/logos/logo-2.png'
      }, 
      {
        id:3,
        name: 'Zosch',
        slug: 'zosch',
        image: 'assets/images/logos/logo-3.png'
      }, 
      {
        id:4,
        name: 'WeVALT',
        slug: 'wevalt',
        image: 'assets/images/logos/logo-4.png'
      }, 
      {
        id:5,
        name: 'Hammer',
        slug: 'hammer',
        image: 'assets/images/logos/logo-5.png'
      }, 
      {
        id:6,
        name: 'Mitasia',
        slug: 'mitasia',
        image: 'assets/images/logos/logo-6.png'
      }, 
      {
        id:7,
        name: 'Metaggo',
        slug: 'metaggo',
        image: 'assets/images/logos/logo-7.png'
      }
    ])
    await Database.from('products').insert([
       { 
         id:1,
         description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
         description_long : `<h3>Product Full Description</h3> <p>
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
         name: 'Electric Planer Brandix KL370090G 300 Watts',
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
         categorie_id: 5, 
       }, 
       {
        id:2, 
        description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_long : `<h3>Product Full Description</h3> <p>
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
         name: 'Undefined Tool IRadix DPS3000SY 2700 Watts',
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
         categorie_id: 1, 
       }, 
       {
        id:3, 
        description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_long : `<h3>Product Full Description</h3> <p>
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
         name: 'Drill Screwdriver Brandix ALX7054 200 Watts',
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
         categorie_id: 2, 
       }, 
       {
        id:4, 
        description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_long : `<h3>Product Full Description</h3> <p>
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
         name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
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
         categorie_id: '',
         
       }, 
       {
        id:5, 
        description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_long : `<h3>Product Full Description</h3> <p>
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
         name: 'Brandix Router Power Tool 2017ERXPK',
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
         categorie_id: '',
         badges: [],
       }, 
       {
        id:6, 
        description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_long : `<h3>Product Full Description</h3> <p>
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
         name: 'Brandix Drilling Machine DM2019KW4 4kW',
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
         categorie_id: '',
         
       }, 
       {
        id:7, 
        description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_long : `<h3>Product Full Description</h3> <p>
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
         name: 'Brandix Pliers',
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
         categorie_id: 5,
         
       }, 
       {
        id:8, 
        description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_long : `<h3>Product Full Description</h3> <p>
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
         name: 'Water Hose 40cm',
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
         categorie_id: 5,
         
       }, 
       {
        id:9, 
        description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_long : `<h3>Product Full Description</h3> <p>
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
         name: 'Spanner Wrench',
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
         categorie_id: 5,
         
       }, 
       {
        id:10, 
        description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_long : `<h3>Product Full Description</h3> <p>
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
         name: 'Water Tap',
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
        description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_long : `<h3>Product Full Description</h3> <p>
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
         name: 'Hand Tool Kit',
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
        description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_long : `<h3>Product Full Description</h3> <p>
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
         name: 'Ash\'s Chainsaw 3.5kW',
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
        description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_long : `<h3>Product Full Description</h3> <p>
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
         name: 'Brandix Angle Grinder KZX3890PQW',
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
        description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_long : `<h3>Product Full Description</h3> <p>
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
         name: 'Brandix Air Compressor DELTAKX500',
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
        description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_long : `<h3>Product Full Description</h3> <p>
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
         name: 'Brandix Electric Jigsaw JIG7000BQ',
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
        description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.`,
        description_long : `<h3>Product Full Description</h3> <p>
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
         name: 'Brandix Screwdriver SCREW1500ACC',
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
        values : [
           {
             name: 'White',
             slug: 'white'
           }, {
             name: 'Silver',
             slug: 'silver'
           }, {
             name: 'Light Gray',
             slug: 'light-gray'
           }, {
             name: 'Gray',
             slug: 'gray'
           },
        ],
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 1,
        values : [
           {
             name: '750 RPM',
             slug: '750-rpm'
           }, 
        ],
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 1,
        values : [
           {
             slug: 'power-source',
             values: 'cordless-electric',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 1,
        values : [
           {
             slug: 'battery-cell-type',
             values: 'lithium',
             featured: true
           }, 
        ],
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 1,
        values : [
           {
             slug: 'voltage',
             values: '20-volts',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 1,
        values : [
           {
             slug: 'battery-capacity',
             values: '2-Ah',
             featured: true
           }
        ],
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 2,
        values : [
           {
             name: 'White',
             slug: 'white'
           }, {
             name: 'Silver',
             slug: 'silver'
           }, {
             name: 'Light Gray',
             slug: 'light-gray'
           }, {
             name: 'Gray',
             slug: 'gray'
           },
        ],
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 2,
        values : [
           {
             name: '750 RPM',
             slug: '750-rpm'
           }, 
        ],
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 2,
        values : [
           {
             slug: 'power-source',
             values: 'cordless-electric',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 2,
        values : [
           {
             slug: 'battery-cell-type',
             values: 'lithium',
             featured: true
           }, 
        ],
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 2,
        values : [
           {
             slug: 'voltage',
             values: '20-volts',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 2,
        values : [
           {
             slug: 'battery-capacity',
             values: '2-Ah',
             featured: true
           }
        ],
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 3,
        values : [
           {
             name: 'White',
             slug: 'white'
           }, {
             name: 'Silver',
             slug: 'silver'
           }, {
             name: 'Light Gray',
             slug: 'light-gray'
           }, {
             name: 'Gray',
             slug: 'gray'
           },
        ],
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 3,
        values : [
           {
             name: '750 RPM',
             slug: '750-rpm'
           }, 
        ],
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 3,
        values : [
           {
             slug: 'power-source',
             values: 'cordless-electric',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 3,
        values : [
           {
             slug: 'battery-cell-type',
             values: 'lithium',
             featured: true
           }, 
        ],
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 3,
        values : [
           {
             slug: 'voltage',
             values: '20-volts',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 3,
        values : [
           {
             slug: 'battery-capacity',
             values: '2-Ah',
             featured: true
           }
        ],
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 4,
        values : [
           {
             name: 'White',
             slug: 'white'
           }, {
             name: 'Silver',
             slug: 'silver'
           }, {
             name: 'Light Gray',
             slug: 'light-gray'
           }, {
             name: 'Gray',
             slug: 'gray'
           },
        ],
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 4,
        values : [
           {
             name: '750 RPM',
             slug: '750-rpm'
           }, 
        ],
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 4,
        values : [
           {
             slug: 'power-source',
             values: 'cordless-electric',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 4,
        values : [
           {
             slug: 'battery-cell-type',
             values: 'lithium',
             featured: true
           }, 
        ],
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 4,
        values : [
           {
             slug: 'voltage',
             values: '20-volts',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 4,
        values : [
           {
             slug: 'battery-capacity',
             values: '2-Ah',
             featured: true
           }
        ],
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 5,
        values : [
           {
             name: 'White',
             slug: 'white'
           }, {
             name: 'Silver',
             slug: 'silver'
           }, {
             name: 'Light Gray',
             slug: 'light-gray'
           }, {
             name: 'Gray',
             slug: 'gray'
           },
        ],
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 5,
        values : [
           {
             name: '750 RPM',
             slug: '750-rpm'
           }, 
        ],
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 5,
        values : [
           {
             slug: 'power-source',
             values: 'cordless-electric',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 5,
        values : [
           {
             slug: 'battery-cell-type',
             values: 'lithium',
             featured: true
           }, 
        ],
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 5,
        values : [
           {
             slug: 'voltage',
             values: '20-volts',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 5,
        values : [
           {
             slug: 'battery-capacity',
             values: '2-Ah',
             featured: true
           }
        ],
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 6,
        values : [
           {
             name: 'White',
             slug: 'white'
           }, {
             name: 'Silver',
             slug: 'silver'
           }, {
             name: 'Light Gray',
             slug: 'light-gray'
           }, {
             name: 'Gray',
             slug: 'gray'
           },
        ],
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 6,
        values : [
           {
             name: '750 RPM',
             slug: '750-rpm'
           }, 
        ],
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 6,
        values : [
           {
             slug: 'power-source',
             values: 'cordless-electric',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 6,
        values : [
           {
             slug: 'battery-cell-type',
             values: 'lithium',
             featured: true
           }, 
        ],
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 6,
        values : [
           {
             slug: 'voltage',
             values: '20-volts',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 6,
        values : [
           {
             slug: 'battery-capacity',
             values: '2-Ah',
             featured: true
           }
        ],
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 7,
        values : [
           {
             name: 'White',
             slug: 'white'
           }, {
             name: 'Silver',
             slug: 'silver'
           }, {
             name: 'Light Gray',
             slug: 'light-gray'
           }, {
             name: 'Gray',
             slug: 'gray'
           },
        ],
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 7,
        values : [
           {
             name: '750 RPM',
             slug: '750-rpm'
           }, 
        ],
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 7,
        values : [
           {
             slug: 'power-source',
             values: 'cordless-electric',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 7,
        values : [
           {
             slug: 'battery-cell-type',
             values: 'lithium',
             featured: true
           }, 
        ],
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 7,
        values : [
           {
             slug: 'voltage',
             values: '20-volts',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 7,
        values : [
           {
             slug: 'battery-capacity',
             values: '2-Ah',
             featured: true
           }
        ],
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 8,
        values : [
           {
             name: 'White',
             slug: 'white'
           }, {
             name: 'Silver',
             slug: 'silver'
           }, {
             name: 'Light Gray',
             slug: 'light-gray'
           }, {
             name: 'Gray',
             slug: 'gray'
           },
        ],
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 8,
        values : [
           {
             name: '750 RPM',
             slug: '750-rpm'
           }, 
        ],
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 8,
        values : [
           {
             slug: 'power-source',
             values: 'cordless-electric',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 8,
        values : [
           {
             slug: 'battery-cell-type',
             values: 'lithium',
             featured: true
           }, 
        ],
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 8,
        values : [
           {
             slug: 'voltage',
             values: '20-volts',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 8,
        values : [
           {
             slug: 'battery-capacity',
             values: '2-Ah',
             featured: true
           }
        ],
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 9,
        values : [
           {
             name: 'White',
             slug: 'white'
           }, {
             name: 'Silver',
             slug: 'silver'
           }, {
             name: 'Light Gray',
             slug: 'light-gray'
           }, {
             name: 'Gray',
             slug: 'gray'
           },
        ],
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 9,
        values : [
           {
             name: '750 RPM',
             slug: '750-rpm'
           }, 
        ],
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 9,
        values : [
           {
             slug: 'power-source',
             values: 'cordless-electric',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 9,
        values : [
           {
             slug: 'battery-cell-type',
             values: 'lithium',
             featured: true
           }, 
        ],
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 9,
        values : [
           {
             slug: 'voltage',
             values: '20-volts',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 9,
        values : [
           {
             slug: 'battery-capacity',
             values: '2-Ah',
             featured: true
           }
        ],
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 10,
        values : [
           {
             name: 'White',
             slug: 'white'
           }, {
             name: 'Silver',
             slug: 'silver'
           }, {
             name: 'Light Gray',
             slug: 'light-gray'
           }, {
             name: 'Gray',
             slug: 'gray'
           },
        ],
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 10,
        values : [
           {
             name: '750 RPM',
             slug: '750-rpm'
           }, 
        ],
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 10,
        values : [
           {
             slug: 'power-source',
             values: 'cordless-electric',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 10,
        values : [
           {
             slug: 'battery-cell-type',
             values: 'lithium',
             featured: true
           }, 
        ],
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 10,
        values : [
           {
             slug: 'voltage',
             values: '20-volts',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 10,
        values : [
           {
             slug: 'battery-capacity',
             values: '2-Ah',
             featured: true
           }
        ],
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 11,
        values : [
           {
             name: 'White',
             slug: 'white'
           }, {
             name: 'Silver',
             slug: 'silver'
           }, {
             name: 'Light Gray',
             slug: 'light-gray'
           }, {
             name: 'Gray',
             slug: 'gray'
           },
        ],
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 11,
        values : [
           {
             name: '750 RPM',
             slug: '750-rpm'
           }, 
        ],
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 11,
        values : [
           {
             slug: 'power-source',
             values: 'cordless-electric',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 11,
        values : [
           {
             slug: 'battery-cell-type',
             values: 'lithium',
             featured: true
           }, 
        ],
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 11,
        values : [
           {
             slug: 'voltage',
             values: '20-volts',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 11,
        values : [
           {
             slug: 'battery-capacity',
             values: '2-Ah',
             featured: true
           }
        ],
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 12,
        values : [
           {
             name: 'White',
             slug: 'white'
           }, {
             name: 'Silver',
             slug: 'silver'
           }, {
             name: 'Light Gray',
             slug: 'light-gray'
           }, {
             name: 'Gray',
             slug: 'gray'
           },
        ],
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 12,
        values : [
           {
             name: '750 RPM',
             slug: '750-rpm'
           }, 
        ],
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 12,
        values : [
           {
             slug: 'power-source',
             values: 'cordless-electric',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 12,
        values : [
           {
             slug: 'battery-cell-type',
             values: 'lithium',
             featured: true
           }, 
        ],
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 12,
        values : [
           {
             slug: 'voltage',
             values: '20-volts',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 12,
        values : [
           {
             slug: 'battery-capacity',
             values: '2-Ah',
             featured: true
           }
        ],
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 13,
        values : [
           {
             name: 'White',
             slug: 'white'
           }, {
             name: 'Silver',
             slug: 'silver'
           }, {
             name: 'Light Gray',
             slug: 'light-gray'
           }, {
             name: 'Gray',
             slug: 'gray'
           },
        ],
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 13,
        values : [
           {
             name: '750 RPM',
             slug: '750-rpm'
           }, 
        ],
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 13,
        values : [
           {
             slug: 'power-source',
             values: 'cordless-electric',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 13,
        values : [
           {
             slug: 'battery-cell-type',
             values: 'lithium',
             featured: true
           }, 
        ],
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 13,
        values : [
           {
             slug: 'voltage',
             values: '20-volts',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 13,
        values : [
           {
             slug: 'battery-capacity',
             values: '2-Ah',
             featured: true
           }
        ],
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 14,
        values : [
           {
             name: 'White',
             slug: 'white'
           }, {
             name: 'Silver',
             slug: 'silver'
           }, {
             name: 'Light Gray',
             slug: 'light-gray'
           }, {
             name: 'Gray',
             slug: 'gray'
           },
        ],
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 14,
        values : [
           {
             name: '750 RPM',
             slug: '750-rpm'
           }, 
        ],
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 14,
        values : [
           {
             slug: 'power-source',
             values: 'cordless-electric',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 14,
        values : [
           {
             slug: 'battery-cell-type',
             values: 'lithium',
             featured: true
           }, 
        ],
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 14,
        values : [
           {
             slug: 'voltage',
             values: '20-volts',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 14,
        values : [
           {
             slug: 'battery-capacity',
             values: '2-Ah',
             featured: true
           }
        ],
        featured : true,
        attribute_id: 6
      }, 
      { 
        product_id : 15,
        values : [
           {
             name: 'White',
             slug: 'white'
           }, {
             name: 'Silver',
             slug: 'silver'
           }, {
             name: 'Light Gray',
             slug: 'light-gray'
           }, {
             name: 'Gray',
             slug: 'gray'
           },
        ],
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 15,
        values : [
           {
             name: '750 RPM',
             slug: '750-rpm'
           }, 
        ],
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 15,
        values : [
           {
             slug: 'power-source',
             values: 'cordless-electric',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 15,
        values : [
           {
             slug: 'battery-cell-type',
             values: 'lithium',
             featured: true
           }, 
        ],
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 15,
        values : [
           {
             slug: 'voltage',
             values: '20-volts',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 15,
        values : [
           {
             slug: 'battery-capacity',
             values: '2-Ah',
             featured: true
           }
        ],
        featured : true,
        attribute_id: 6
      }, 
   
      { 
        product_id : 16,
        values : [
           {
             name: 'White',
             slug: 'white'
           }, {
             name: 'Silver',
             slug: 'silver'
           }, {
             name: 'Light Gray',
             slug: 'light-gray'
           }, {
             name: 'Gray',
             slug: 'gray'
           },
        ],
        featured : false,
        attribute_id: 1
      }, 
      { 
        product_id : 16,
        values : [
           {
             name: '750 RPM',
             slug: '750-rpm'
           }, 
        ],
        featured : true,
        attribute_id: 2
      }, 
      { 
        product_id : 16,
        values : [
           {
             slug: 'power-source',
             values: 'cordless-electric',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 3
      }, 
      { 
        product_id : 16,
        values : [
           {
             slug: 'battery-cell-type',
             values: 'lithium',
             featured: true
           }, 
        ],
        featured : true,
        attribute_id: 4
      }, 
      { 
        product_id : 16,
        values : [
           {
             slug: 'voltage',
             values: '20-volts',
             featured: true
           }, 
        ],
        featured : false,
        attribute_id: 5
      }, 
      { 
        product_id : 16,
        values : [
           {
             slug: 'battery-capacity',
             values: '2-Ah',
             featured: true
           }
        ],
        featured : true,
        attribute_id: 6
      }, 
   
    ])
  }
}

module.exports = ProducatSeeder
