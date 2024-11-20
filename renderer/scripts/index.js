
// Notes: listeners setup in main, 'api' exposed in preload, windows loads preload. 

function installTool(tool) {
    console.log(`Installing ${tool.name}`);
    window.api.sendLog(`Installing ${tool.name}`); 
    // Your installation logic here
  }

  window.api.sendLog('Installing tester');

  window.api.getConfig().then(config => {
    if (config && config.tools) {
      const toolsDiv = document.getElementById('tools');
      config.tools.forEach(tool => {

        let container = document.createElement('div');
        container.className = 'tool-container';

        let button = document.createElement('button');
        button.textContent = `Install ${tool.name}`;
        button.onclick = () => installTool(tool);

        container.appendChild(button);
        container.appendChild(document.createElement('br'));
        toolsDiv.appendChild(container);

      });
    } else {
      console.error('Tools not defined in config');
    }
  });
