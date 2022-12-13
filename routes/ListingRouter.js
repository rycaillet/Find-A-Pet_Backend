const router = require('express').Router()
const controller = require('../controller/ListingController')
const middleware = require('../middleware')

router.get('/', controller.GetAllListings)

// // Create a new listing
router.post(
  '/new_listing',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateListing
)

// // update a listing
router.put(
  '/:listing_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateListing
)

// delete a listing
router.delete(
  '/:listing_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteListing
)

router.get('/:id', controller.GetListingById)
module.exports = router
