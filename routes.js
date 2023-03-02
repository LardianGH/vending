const express = require('express');
const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

 router.get('/', (req, res) => {
  res.render('index', { name: 'World', title: 'Vending', 
  soda1: 'Coca-Cola',
  soda2: 'Pepsi',
  soda3: 'Sprite',
  soda4: 'Fanta',
  soda5: 'Dr. Pepper',
  soda6: 'Mountain Dew',
  soda7: '7UP',
  soda8: 'A&W Root Beer'
});
}); 

  module.exports = router;