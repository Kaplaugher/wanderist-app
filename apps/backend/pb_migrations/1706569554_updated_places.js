/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3g2ayadyeq5lnto")

  // remove
  collection.schema.removeField("syubnowv")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3g2ayadyeq5lnto")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "syubnowv",
    "name": "category",
    "type": "json",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
})
