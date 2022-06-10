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
    {
      name: 'Sticky Pork Neck Soft Tacos',
      description:
        'Call that a taco! One of our favorite recipes, made with pork neck bones, marinated in a flavorful blend of spices and herbs, and then wrapped in a soft, flaky tortilla.',
      image: 'sticky-pork.jpg',
      price: 14.99,
      ingredients: ['pork neck', 'light soy sauce', 'sunny honey', 'sunflower oil', 'tomatoes', 'red onion', 'Finely grated zest', 'small white tortillas', 'avocado'],
      category: categories[1]._id,
    },
    {
      name: 'Mexican Meatball Subs',
      description:
        'Tasty Mexican meatballs for dinner become subs for lunch with this versatile mid-week meal.',
      image: 'mexican-meatball.jpg',
      price: 12.99,
      ingredients: ['taco seasoning mixture', 'pork and veal mince', 'egg', 'breadcrumbs', 'bunch parsley', 'extra virgin olive oil', 'red onions', 'red capsicums', 'garlic cloves', 'black beans', 'tomatoes', 'dinner rolls', 'Avocado', 'Coriander', 'Lime', 'Sour Cream'],
      category: categories[1]._id,
      
    },
    {
      name: 'Mexican Roast Beef with Hot Sauce and Spicy Sweet Potato Wedges',
      description:
        'Spicy Mexican roast beef with hot sauce and sweet potato wedges is a dinner party winner.',
      image: 'mexican-roast-beef.jpg',
      price: 16.99,
      ingredients: ['garlic', 'smoked paprika', 'ground chipotle chilli', 'limes', 'tequila', 'ground cumin', 'olive oil', 'beef eye fillet', 'red capsicum', 'jalapeno', 'tomato', 'orange juice', 'Worcestershire sauce', 'balsamic vinegar', 'spicy sweet potato'],
      category: categories[1]._id,
    },
    {
      name: 'Black Bean and Corn Nachos',
      description:
        'This nacho tray bake might be the greatest of all time! Just go heavy on the corn, sour cream and greenery to make you feel better about its 3am postprandial decadence.',
      image: 'updateblackbean.jpg',
      price: 12.99,
      ingredients: ['extra virgin olive oil', 'corn cobs', 'red onion', 'red capsicum', 'garlic cloves', 'ground cumin', 'coriander', 'chipotle chillies', 'bay leaf', 'tomatoes', 'black beans', 'vegetable stock', 'corn chips', 'cheddar', 'avocados', 'lime'],
      category: categories[1]._id,
    },
    {
      name: 'Chow Mein',
      description:
        'The exact origins of chow mein are not entirely clear, but historians suspect this dish was born in northern China millennia ago. Thousands of years later, it has been popularized by a beloved chain with a cute panda mascot.',
      image: 'chow-mein.jpg',
      price: 12.99,
      ingredients: ['oyster sauce', 'soy sauce', 'garlic', 'ginger', 'Sriracha', 'Hong Kong-style pan-fried noodles', 'canola oil', 'shiitake mushrooms', 'baby bok choy', 'bean sprouts', 'salt'],
      category: categories[2]._id,
    },
    {
      name: 'Cashew Chicken',
      description:
        'This cashew chicken with tender stir-fried chicken and roasted cashews in garlic sauce tastes just like take-out.',
      image: 'cashew-chicken.jpg',
      price: 12.99,
      ingredients: ['chicken breast', 'garlic cloves', 'scallions', 'hoisin sauce', 'soy sauce', 'black pepper', 'corn starch', 'cashews', 'water', 'rice vinegar', 'sesame oil', 'vegetable oil', 'salt'],
      category: categories[2]._id,
    },
    {
      name: 'Beef and Broccoli',
      description:
        'Beef and broccoli is one of the most popular Chinese dishes here in the US, and for good reason. Juicy steak plus crunchy broccoli is a match made in heaven. ',
      image: 'beef-broccoli.jpg',
      price: 13.99,
      ingredients: ['Oyster Sauce', 'Sesame Oil', 'Soy Sauce', 'Sugar', 'Cornstarch', 'Flank Steak', 'Ginger', 'Broccoli'],
      category: categories[2]._id,
    },
    {
      name: 'Chicken Fried Rice',
      description:
        'Garlic powder and soy sauce give bold flavors to this dish. It is a great way to start your day. Jump into this Chinese dish and you will be hooked.',
      image: 'chicken-fried-rice.jpg',
      price: 11.99,
      ingredients: ['butter', 'white rice', 'sweet peas', 'carrots', 'eggs', 'onion', 'green onion', 'garlic powder', 'soy sauce', 'chicken breast', 'salt and pepper'],
      category: categories[2]._id,
    },
    {
      name: 'Chicken Parmesan',
      description:
        'Chicken parmesan (parmigiana) is the ultimate chicken dinner comfort food. Soft and tender chicken with a crispy, breaded coating covered in a rich tomato sauce, and topped with golden melted mozzarella and parmesan cheese. This crowd favourite is much easier to make than you might think. Serve it on its own or over a bed of spaghetti pasta.',
      image: 'chicken-parm.jpg',
      price: 14.99,
      ingredients: ['chicken breasts', 'breaded coating', 'eggs', 'vegetable oil', 'tomato sauce', 'mozzarella cheese', 'Parmesan cheese', 'fresh parsley', 'noodles'],
      category: categories[3]._id,
    },
    {
      name: 'Meat Lasagna',
      description:
        'Classic easy meat lasagna is the ultimate Italian comfort food that we all know and love. Layers of tender lasagna, meaty tomato sauce, a creamy cheese filling, with extra melted cheese on top, and a perfect, crispy crackly crust.',
      image: 'lasagna.jpg',
      price: 14.99,
      ingredients: ['lasagna noodles', 'olive oil', 'ground beef', 'onion', 'garlic', 'tomato sauce', 'tomato paste', 'parsley', 'ricotta cheese', 'mozzarella cheese', 'parmesan cheese'],
      category: categories[3]._id,
    },
    {
      name: 'Fettuccine Alfredo',
      description:
        'Fettuccine alfredo is a classic Italian pasta dish that is rich, creamy, and delicious. Tender fettuccine noodles are tossed in a homemade alfredo sauce made creamy with heavy cream, butter, and Parmesan cheese, and seasoned with garlic, salt, and pepper. When you’re craving comfort food, nothing is better than creamy pasta, and when you really need some comfort, you want it asap.',
      image: 'fettucine-alfredo.jpg',
      price: 13.99,
      ingredients: ['fettuccine noodles', 'salt', 'butter', 'garlic', 'heavy cream', 'Parmesan cheese', 'ground black pepper'],
      category: categories[3]._id,
    },
    {
      name: 'Homemade Calzones',
      description:
        'Homemade calzones are delicious little pizza pockets that are filled with cheese and toppings and baked until golden. They are an Italian favourite that are quick and easy to make at home. Plus, they reheat very well and are great for meal prep.',
      image: 'calzone.jpg',
      price: 12.99,
      ingredients: ['pizza dough', 'pizza sauce', 'pepperoni', 'mushrooms', 'green peppers', 'mozzarella cheese', 'ricotta', 'egg'],
      category: categories[3]._id,
    },
    {
      name: 'Fried Catfish',
      description:
        'While Arkansas freshwater bodies are brimming with the state staple, authorities set a daily creel limit on many catfish species to ensure the streams and lakes maintain their abundance. In restaurants, you will often find the fried fish breaded with a mixture of flour, cornbread, and spices, and served alongside hushpuppies.',
      image: 'fried-catfish.jpg',
      price: 13.99,
      ingredients: ['flour', 'cornbread', 'spices', 'hushpuppies', 'salt and pepper', 'french fries', 'coleslaw', 'catfish'],
      category: categories[4]._id,
    },
    {
      name: 'Lobster Mac n Cheese',
      description:
        'Nothing screams "New England" more than sweet lobster chunks, especially when they are baked into a delicious plate of mac and cheese.',
      image: 'lobster.jpg',
      price: 16.99,
      ingredients: ['lobster', 'milk', 'cheese', 'butter'],
      category: categories[4]._id,
    },
    {
      name: 'Burnt Ends',
      description:
        'If burnt ends are not your favorite part of the brisket, you do not know what you are missing. The crispy, flavor-packed barbecue portions make for the perfect sandwich.',
      image: 'burntends.jpg',
      price: 13.99,
      ingredients: ['brisket', 'bbq sauce', 'salt'],
      category: categories[4]._id,
    },
    {
      name: 'Delicous Prime-Rib',
      description:
        'Try our mouth savoring prime-rib. It will leave you speechless! One bite into this juicy peice of meat and you will fall in love.',
      image: 'primerib.jpg',
      price: 22.99,
      ingredients: ['prime rib', 'mashed potatos', 'asparagus', 'butter'],
      category: categories[4]._id,
    },
    {
      name: 'Coca-Cola',
      description:
        'Crack open an ice cold bottle of Coca-Cola and you will be hit with a blast of refreshing goodness. This is a great way to start your day.',
      image: 'coca-cola.jpg',
      price: 2.99,
      ingredients: ['coke', 'sugar'],
      category: categories[5]._id,
    },
    {
      name: 'Sprite',
      description:
        'Crack open an ice cold bottle of Sprite and you will be hit with a blast of refreshing goodness. This is an amazing way to start your day.',
      image: 'sprite.jpg',
      price: 2.99,
      ingredients: ['sprite', 'sugar'],
      category: categories[5]._id,
    },
    {
      name: 'Mountain Dew',
      description:
        'Get all jacked up on Mountain Dew!! Do the Dew!!',
      image: 'mountaindew.jpg',
      price: 2.99,
      ingredients: ['mountain dew', 'sugar'],
      category: categories[5]._id,
    },
    {
      name: 'Dr Pepper',
      description:
        'Did somebody call Dr Pepper? You are in luck. Crack open a bottle of Dr Pepper and you will be hit with a blast of refreshing goodness. If you are sick, this is bound to help you feel better.',
      image: 'drpepper.jpg',
      price: 2.99,
      ingredients: ['dr pepper', 'sugar'],
      category: categories[5]._id,
    },
    {
      name: 'Hungarian Nut Rolls',
      description:
        'It isnt officially the holidays until Ive made this treasured nut roll recipe from my husbands grandmother.',
      image: 'nutrolls.jpg',
      price: 6.99,
      ingredients: ['dry yeast', '2% milk ', 'sugar', 'salt', 'butter', 'sour cream', 'eggs', 'all-purpose flour', 'ground cinnamon', 'walnuts', 'apple' ],
      category: categories[6]._id,
    },
    {
      name: 'Grandmas Yeast Rolls',
      description:
        'Grandmas yeast rolls are so delicous they will put you in a coma!',
      image: 'grandmasrolls.jpg',
      price: 6.99,
      ingredients: ['active dry yeast', '2% milk', 'sugar', 'unsweetened applesauce', 'egg whites', 'salt', 'all-purpose flour'],
      category: categories[6]._id,
    },
    {
      name: 'Grannys Spice Cookies',
      description:
        'Granny always had a batch of these delicious, crispy cookies waiting for us at her house.',
      image: 'grannycookies.jpg',
      price: 6.99,
      ingredients: ['butter', 'sugar', 'egg', 'light corn syrup', 'grated orange zest', 'cold water', 'all-purpose flour', 'baking soda', 'ground cinnamon', 'ginger', 'ground cloves'],
      category: categories[6]._id,
    },
    {
      name: 'Apple Pie',
      description:
        'Grandma, in her wisdom, suggested, "Maybe a slice of my homemade apple pie will make you feel better." One bite, and Grandma was right. ',
      image: 'applepie.jpg',
      price: 6.99,
      ingredients: ['Dough', 'sugar', 'brown sugar', 'all-purpose flour', 'ground cinnamon', 'ground ginger', 'ground nutmeg', 'tart apples', 'lemon juice', 'butter', 'egg white'],
      category: categories[6]._id,
    },
  ]);

  console.log('Dish seeded');

  process.exit();
});
