import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import generateTree from './utils/generateTree';

// Dynamically import the react-d3-tree component
const Tree = dynamic(() => import('react-d3-tree'), { ssr: false });

const Home = () => {
  const [treeData, setTreeData] = useState(null);

  useEffect(() => {
    // Generate random tree data
    const randomTree = generateTree(4, 3); // Adjust depth and breadth as needed
    setTreeData(randomTree);
  }, []);

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5' // Optional: Background color for better contrast
    }}>
      {treeData ? (
        <div style={{ height: '80vh', width: '80vw' }}>
          <Tree
            data={treeData}
            orientation="vertical"
            translate={{ x: 400, y: 50 }} // Adjust translation for centering
            pathFunc="elbow"
          />
        </div>
      ) : (
        <p>Generating a beautiful file tree...</p>
      )}
    </div>
  );
};

export default Home;
