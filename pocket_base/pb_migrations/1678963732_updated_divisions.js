migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bakpn5k6ntn68n3")

  collection.listRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bakpn5k6ntn68n3")

  collection.listRule = ""

  return dao.saveCollection(collection)
})
