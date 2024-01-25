/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("br5tdth4dj4ymhs")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u6mjwcmp",
    "name": "location_id",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("br5tdth4dj4ymhs")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u6mjwcmp",
    "name": "entry_id",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
})
