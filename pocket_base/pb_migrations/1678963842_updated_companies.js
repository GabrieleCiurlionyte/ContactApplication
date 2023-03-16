migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6pm3nos89zp7y7o")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6pm3nos89zp7y7o")

  collection.listRule = null

  return dao.saveCollection(collection)
})
