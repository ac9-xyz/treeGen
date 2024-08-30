// utils/generateTree.js
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function generateRandomName(length = 5) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  function generateTree(depth = 3, breadth = 2) {
    function createNode(currentDepth) {
      if (currentDepth > depth) return null;
  
      const node = {
        name: generateRandomName(),
        children: []
      };
  
      const numChildren = getRandomInt(1, breadth);
      for (let i = 0; i < numChildren; i++) {
        const childNode = createNode(currentDepth + 1);
        if (childNode) {
          node.children.push(childNode);
        }
      }
  
      return node;
    }
  
    return {
      name: 'root',
      children: [createNode(1)]
    };
  }
  
  export default generateTree;
  