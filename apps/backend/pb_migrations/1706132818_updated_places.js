/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3g2ayadyeq5lnto")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wuvs3ize",
    "name": "images",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/webp",
        "image/jpeg",
        "image/png",
        "image/gif"
      ],
      "thumbs": [
        "80x80"
      ],
      "maxSelect": 99,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3g2ayadyeq5lnto")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wuvs3ize",
    "name": "images",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/webp",
        "image/jpeg",
        "image/png",
        "image/gif"
      ],
      "thumbs": [],
      "maxSelect": 99,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
