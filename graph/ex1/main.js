const { Graph } = require("graph");

let g = new Graph();
g.set('a', 'b', 3); 
g.get('a', 'b'); 

g.set('a', 'b', 4); 
g.get('a', 'b');

g.del('a', 'b'); 
g.get('a', 'b');

console.log(g.get('a','b'));

