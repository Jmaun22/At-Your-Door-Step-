const db = require('./connection');
const { User, Dish, Category } = require('../models');

db.once('open', async () => {

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        dishes: [dishes[0]._id, dishes[0]._id, dishes[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Vegetarian' },
    { name: 'Mexican' },
    { name: 'Chinese' },
    { name: 'Italian' },
    { name: 'Desserts' },
    { name: 'Beverages' },
    { name: 'Baked Goods' },

  ]);

  console.log('categories seeded');

  await Dish.deleteMany();

  const dishes = await Dish.insertMany([
    {
      name: 'Tin of Cookies',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 2.99,
      ingredients: ['flour', 'sugar', 'butter', 'salt'],
      category: categories[4]._id,
    },
    {
      name: 'Canned Coffee',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'canned-coffee.jpg',
      price: 1.99,
      ingredients: ['coffee', 'sugar', 'salt'],
      category: categories[5]._id,
    },
    {
      name: 'Fajitas',
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'fajita.jpg',
      price: 7.99,
      ingredients: ['tortilla', 'beef', 'onion', 'bell pepper', 'salt', 'pepper'],
      category: categories[1]._id,
      
    },
    {
      name: 'Spaghetti',
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'spaghetti.jpg',
      price: 3.99,
      ingredients: ['pasta', 'sugar', 'salt'],
      category: categories[1]._id,
     
    },
    {
      name: 'Set of Wooden Spoons',
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      ingredients: ['wood', 'sugar', 'salt'],
      category: categories[1]._id,
    },
    {
      name: 'Camera',
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'camera.jpg',
      price: 399.99,
      ingredients: ['wood', 'sugar', 'salt'],
      category: categories[2]._id,
      
    },
    {
      name: 'Tablet',
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'tablet.jpg',
      price: 199.99,
      ingredients: ['wood', 'sugar', 'salt'],
      category: categories[2]._id,
    },
    {
      name: 'Tales at Bedtime',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      ingredients: ['wood', 'sugar', 'salt'],
      category: categories[3]._id,
    },
   
  ]);

  console.log('Dish seeded');

  process.exit();
});
