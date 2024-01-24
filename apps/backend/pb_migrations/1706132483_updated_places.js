/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3g2ayadyeq5lnto")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wuvs3ize",
    "name": "images",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 99,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3g2ayadyeq5lnto")

  // remove
  collection.schema.removeField("wuvs3ize")

  return dao.saveCollection(collection)
})
