migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("57faccb7837p3uh")

  collection.listRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("57faccb7837p3uh")

  collection.listRule = ""

  return dao.saveCollection(collection)
})
