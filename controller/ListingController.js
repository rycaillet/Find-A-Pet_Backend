const { Listing } = require('../models')

const GetAllListings = async (req, res) => {
  try {
    const listings = await Listing.findAll({})
    res.send(listings)
  } catch (error) {
    throw error
  }
}

const GetListingById = async (req, res) => {
  try {
    const listing = await Listing.findByPk(req.params.id)
    res.send(listing)
  } catch (error) {
    throw error
  }
}

const CreateListing = async (req, res) => {
  try {
    let listingId = parseInt(req.params.listing_id)
    let listingBody = {
      listingId,
      ...req.body
    }
    const createdListing = await Listing.create(listingBody)
    res.send(createdListing)
  } catch (error) {
    throw error
  }
}

const UpdateListing = async (req, res) => {
  try {
    let listingId = parseInt(req.params.listing_id)

    let updatedListing = await Listing.update(req.body, {
      where: { id: listingId },
      returning: true
    })
    res.send(updatedListing)
  } catch (error) {
    throw error
  }
}

const DeleteListing = async (req, res) => {
  try {
    let listingId = parseInt(req.params.listing_id)
    await Listing.destroy({ where: { id: listingId } })
    res.send({ message: `Deleted listing with an id of ${listingId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllListings,
  GetListingById,
  CreateListing,
  UpdateListing,
  DeleteListing
}
