const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Insert import
code = code.replace("import SlotsPage from './pages/SlotsPage';", "import SlotsPage from './pages/SlotsPage';\nimport GamePage from './pages/GamePage';");

// Replace SlotsPage render to add logic
code = code.replace(
  "      ) : currentPage === 'slots' ? (\n        <SlotsPage />\n      ) : currentPage === 'promociones' ? (",
  "      ) : currentPage === 'slots' ? (\n        <SlotsPage />\n      ) : currentPage === 'game' ? (\n        <GamePage />\n      ) : currentPage === 'promociones' ? ("
);

fs.writeFileSync('src/App.tsx', code);
