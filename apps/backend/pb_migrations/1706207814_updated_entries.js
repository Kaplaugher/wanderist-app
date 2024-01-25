/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("br5tdth4dj4ymhs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vjqxduym",
    "name": "main_image",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("br5tdth4dj4ymhs")

  // remove
  collection.schema.removeField("vjqxduym")

  return dao.saveCollection(collection)
})
