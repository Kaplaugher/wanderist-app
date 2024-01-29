/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3g2ayadyeq5lnto")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ir4cuqd3",
    "name": "category",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "Food & Drink",
        "Fun",
        "Sights"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3g2ayadyeq5lnto")

  // remove
  collection.schema.removeField("ir4cuqd3")

  return dao.saveCollection(collection)
})
