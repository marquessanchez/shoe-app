const router = require('express').Router();
const { Store, Shoe } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbStoreData = await Store.findAll({
      include: [
        {
          model: Shoe,
          attributes: ['filename', 'description']
        }
      ]
    });

    const stores = dbStoreData.map(Store =>
      Store.get({ plain: true })
    );
    // TODO: Add a comment describing how we pass the session to the view
    res.render('homepage', {
      stores,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one Store
router.get('/Store/:id', async (req, res) => {
  try {
    const dbStoreData = await Store.findByPk(req.params.id, {
      include: [
        {
          model: Shoe,
          attributes: [
            'id',
            'name',
            'brand',
            'exhibition_date',
            'filename',
            'price'
          ]
        }
      ]
    });

    const Store = dbStoreData.get({ plain: true });
    // TODO: Add a comment describing how we pass the session to the Store view.
    res.render('Store', { Store, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one Shoe
router.get('/Shoe/:id', async (req, res) => {
  try {
    const dbShoeData = await Shoe.findByPk(req.params.id);

    const Shoe = dbShoeData.get({ plain: true });
    // TODO: Add a comment describing how we pass the session to the Shoe view.
    res.render('Shoe', { Shoe, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;
