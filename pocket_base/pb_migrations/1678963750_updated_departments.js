migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bthy7mqw35rkvvb")

  collection.listRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bthy7mqw35rkvvb")

  collection.listRule = ""

  return dao.saveCollection(collection)
})
