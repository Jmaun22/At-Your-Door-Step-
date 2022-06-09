const db = require('./connection');
const { User, Dish, Category } = require('../models');
const { Types } = require('mongoose');

db.once('open', async () => {

  await User.deleteMany();

  await User.insertMany({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password1',
    address: '123 Fake St',
    state: 'FL',
    city: 'Orlando',
    phoneNumber: '3216540987',
  },{
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password2',
    address: '555 Nowhere Rd',
    state: 'GA',
    city: 'Savanah',
    phoneNumber: '5557775555',
  });

  console.log('users seeded');

  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Vegetarian' },
    { name: 'Mexican' },
    { name: 'Chinese' },
    { name: 'Italian' },
    { name: 'American' },
    { name: 'Beverages' },
    { name: 'Baked Goods' },

  ]);

  console.log('categories seeded');

  await Dish.deleteMany();

  const dishes = await Dish.insertMany([
    {
      name: 'Vegetarian Burrito Bowl with Avocado Crema',
      description:
        'A healthy burrito bowl so delicious you will mever miss the meat',
      image: 'vegetarian-bowl.jpg',
      price: 11.99,
      ingredients: ['1 head of cauliflower', '1 green pepper', '1 red bell pepper', '1/2 onion', ' 1/3 cup olive oil', '2 tbsp lime juice', '1/4 cup taco seasoning', '1 can black beans', '1/2 cup salsa', '2 cups romaine lettuce', '4 cups cilantro-lime rice' ],
      category: categories[0]._id,
    },
    {
      name: 'Sesame Garlic Ramen Noodles',
      description:
        'The fastest, most budget-friendly dinner ever. There is nothing more budget-friendly than a pack of ramen noodles, but they are not the healthiest thing in the world. Why? That super sodium-laded seasoning packet, primarily. So, just ditch the salty powder, and use the noodles to make something delicious',
      image: 'sesame-noodles.jpg',
      price: 9.99,
      ingredients: ['3 3 oz packages instant ramen noodles flavor packets discarded','¼ cup low sodium soy sauce', '¼ cup oyster sauce or hoisin sauce if vegetarian','1 tbsp rice vinegar', '1 tbsp brown sugar', '1 tbsp siracha', '3/4 cup water', '2 tbsp toasted sesame oil', '4 cloves garlic', '1 tsp freshly grated ginger', '4 green onions', '1 tsp sesame seeds'],
      category: categories[0]._id,
    },
    {
      name: 'Cauliflower Curry',
      description:
        'Easy, rich, creamy and warmly-spiced this vegan cauliflower-loaded coconut curry redefines comfort food.',
      image: 'cauliflower-curry.jpg',
      price: 11.99,
      ingredients: ['1 tbsp olive oil', '1 medium yellow onion', '3 cloves garlic', '1 tbsp fresh ginger', '3 tbsp yellow curry powder', '2 tsp cinnamon', '2tsp cumin', '2 tsp sea salt', '1 can diced tomatoes', '3 cans coconut milk'],
      category: categories[0]._id,
      
    },
    {
      name: 'Wild Mushroom Risotto',
      description:
        'Our easy-peasy wild mushroom risotto recipe is so richly flavorful you will want to find any excuse to make it again.',
      image: 'mushroom-risotto.jpg',
      price: 11.99,
      ingredients: ['wild mushroom', 'butter', 'salsmall shallots', 'garlic cloves', 'fresh thyme sprigs', 'salt', 'freshly ground pepper', 'dry white wine', 'lemon juice', 'chicken stock (or vegetable)', 'Rice', 'heavy cream', 'parmesan cheese'],
      category: categories[0]._id,
     
    },
    // {
    //   name: 'Set of Wooden Spoons',
    //   description:
    //     'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
    //   image: 'wooden-spoons.jpg',
    //   price: 14.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[1]._id,
    // },
    // {
    //   name: 'Camera',
    //   description:
    //     'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
    //   image: 'camera.jpg',
    //   price: 399.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[1]._id,
      
    // },
    // {
    //   name: 'Tablet',
    //   description:
    //     'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
    //   image: 'tablet.jpg',
    //   price: 199.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[1]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[1]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[3]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[3]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[3]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[3]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[3]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[3]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[3]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[3]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[3]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[3]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[3]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[3]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[3]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[3]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[3]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[3]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[3]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[3]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[3]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[3]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[3]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[3]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[3]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[3]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[3]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[3]._id,
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   price: 9.99,
    //   ingredients: ['wood', 'sugar', 'salt'],
    //   category: categories[3]._id,
    // },
   
  ]);

  console.log('Dish seeded');

  process.exit();
});
