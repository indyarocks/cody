/**
 * @flow
 * @relayHash 5d0da1bf2fc40a44dc44db8d48234de2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Profile_user$ref = any;
export type App_Profile_QueryVariables = {| |};
export type App_Profile_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Profile_user$ref,
  |},
|};
*/


/*
query App_Profile_Query {
  viewer {
    ...Profile_user
    id
  }
}

fragment Profile_user on User {
  login
  email
  name
  sendNewReviewsSummary
  paused
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "App_Profile_Query",
  "id": null,
  "text": "query App_Profile_Query {\n  viewer {\n    ...Profile_user\n    id\n  }\n}\n\nfragment Profile_user on User {\n  login\n  email\n  name\n  sendNewReviewsSummary\n  paused\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "App_Profile_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Profile_user",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "App_Profile_Query",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "login",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "email",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "sendNewReviewsSummary",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "paused",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
(node/*: any*/).hash = '6bb0063d677e4a6efde8e1b8e58a9f76';
module.exports = node;
