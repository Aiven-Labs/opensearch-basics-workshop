Hands-on material for session on how to start working with OpenSearch® and NodeJS
==================================================================================

This repository is a part of `an in-person hands-on workshop <https://aiven.io/workshop/opensearch-with-javascript>`. 

Additional written guidance can be also found in articles `how to write search queries with OpenSearch and NodeJS <https://aiven.io/developer/start-using-opensearch-with-nodejs>`_ and `how to use aggregations with OpenSearch and NodeJS <https://developer.aiven.io/docs/products/opensearch/howto/opensearch-aggregations-and-nodejs.html>`_.
You can also find interesting `Exploring Mastodon data with Apache Kafka® and OpenSearch® <https://aiven.io/developer/mastodon-kafka-opensearch>`


Prerequisites
-------------

To run examples from this repository you'll need:

1. An OpenSearch cluster. Use this `link to get extra credits <https://go.aiven.io/signup-opensearch-js>`.
2. NodeJS, npm and git. If you don’t have NodeJS or npm installed, follow `these instructions <https://docs.npmjs.com/downloading-and-installing-node-js-and-npm>`_.
3. Curiosity and patience 😉

Running locally
---------------

1. Clone the repository and install the dependencies::

    npm install

2. Copy .env.example, rename to .env and there the service_uri of your OpenSearch cluster.

You're all set! Retrieve the list of available indices by running in your terminal

::

    node index getIndices


How to use
----------

1. Run this command to inject data::

    node index injectData

Wait till the data is indexed. Can take 15-20 seconds.

2. Check `search.js` and `aggregate.js` for examples you can run. Every method contains a terminal command sample that you can try.

::

    node search match title "soups with beer and garlic"

::

    node aggregate metric avg rating

Structure of this repository
----------------------------

`index.js` - working with index, injecting data

`search.js` - examples of different types of search queries

`aggregate.js` - examples of different types of aggregation queries

`config.js` and `helpers.js` contain operations required to connect to the cluster and log responses.


License
-------

This work is licensed under the Apache License, Version 2.0. Full license text is available in the LICENSE file and at http://www.apache.org/licenses/LICENSE-2.0.txt





