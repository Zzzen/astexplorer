import defaultParserInterface from '../utils/defaultParserInterface';
import pkg from 'pb-parser/package.json';


const ID = 'pb-parser';

export default {
  ...defaultParserInterface,

  id: ID,
  displayName: ID,
  version: pkg.version,
  homepage: pkg.homepage,
  locationProps: new Set(['loc', 'start', 'end']),
  _ignoredProperties: new Set(['startToken', 'endToken', 'tokens']),


  loadParser(callback) {
    require(['pb-parser'], callback);
  },

  parse(parser, code) {
    return parser.parse(code);
  },

  getNodeName(node) {
    return node.type;
  },

  nodeToRange(node) {
    if (typeof node.start === 'number' && typeof node.end === 'number') {
      return [node.start, node.end];
    }
  },

  opensByDefault(node, key) {
    return key === 'body';
  },
};
