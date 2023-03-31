migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g9kmvwezi8atsa9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8dvevnun",
    "name": "phone_number",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g9kmvwezi8atsa9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8dvevnun",
    "name": "phone_number",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "^(?:\\370|8)(?:\\(\\d{1,3}\\)|\\d{1,3})\\d{5,7}$"
    }
  }))

  return dao.saveCollection(collection)
})
