migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgv7cbhlqq9svxa")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgv7cbhlqq9svxa")

  collection.listRule = null

  return dao.saveCollection(collection)
})
