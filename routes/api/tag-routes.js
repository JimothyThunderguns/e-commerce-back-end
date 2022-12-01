const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const allTags = await Tag.findAll({
      include: [{model: Product}]
  
    })
    res.json(allTags)
  } catch (err) {
    res.status(500).json(err)
  }
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const singleTag = await Tag.findByPk(req.params.id, 
      { include: [{model: Product}]
    })
    res.json(singleTag)
  } catch (err) {
    res.status(500).json(err)
  }
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body)
    res.json(newTag)
  } catch (err) {
    res.status(500).json(err)
  }

});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
    try {
      const singleTag = await Tag.findByPk(req.params.id,{
        include: [{model: Product}]
        
      })
      res.json(singleCategory)
    } catch (err) {
      res.status(500).json(err)
    }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(deleteTag)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
