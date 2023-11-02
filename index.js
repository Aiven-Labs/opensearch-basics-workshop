const { client, indexName, recipes } = require("./config");
const { logBody } = require("./helpers");

/**
 * Indexing data from json file with recipes.
 * Format: action \n document \n action \n document ...
 * node index injectData
 */
module.exports.injectData = () => {
  console.log(`Ingesting data: ${recipes.length} recipes`);
  const body = recipes.flatMap(doc => [
    { index: { _index: indexName } },
    doc,
  ]);

  client.bulk({ refresh: true, body }, logBody);
};

/**
 * Getting list of indices
 * node index getIndices
 */
module.exports.getIndices = () => {
  console.log(`Getting existing indices:`);
  client.cat.indices({ format: "json" }, logBody);
};

/**
 * Retrieving mapping for the index.
 * node index getMapping
 */
module.exports.getMapping = () => {
  console.log(`Retrieving mapping for the index with name ${indexName}`);

  client.indices.getMapping({ index: indexName }, (error, result) => {
    if (error) {
      console.error(error);
    } else {
      console.log(result.body.recipes.mappings.properties);
    }
  });
};

/**
 * Deleting the index
 * node index delete
 */
module.exports.delete = (index) => {
  client.indices.delete(
      {
        index: index || indexName,
      },
      logBody
  );
};

require('make-runnable');
