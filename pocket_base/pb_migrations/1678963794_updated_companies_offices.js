migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("69msfhns5ee63rg")

  collection.listRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("69msfhns5ee63rg")

  collection.listRule = ""

  return dao.saveCollection(collection)
})
