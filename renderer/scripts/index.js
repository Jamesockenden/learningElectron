// Notes: listeners setup in main, 'api' exposed in preload, windows loads preload.

function installTool(tool) {
  console.log(`Installing ${tool.name}`);
  window.api.sendLog(`Installing ${tool.name}`);
  // Your installation logic here
}

window.api.sendLog('Installing tester');

window.api.getConfig().then(config => {
  if (config && config.tools) {
      const slideshowContainer = document.createElement('div');
      slideshowContainer.className = 'slideshow-container';
      const toolsDiv = document.getElementById('tools');
      toolsDiv.appendChild(slideshowContainer);

      config.tools.forEach((tool, index) => {
          let slide = document.createElement('div');
          slide.className = 'mySlides fade';

          let numberText = document.createElement('div');
          numberText.className = 'numbertext';
          numberText.textContent = `${index + 1} / ${config.tools.length}`;

          let img = document.createElement('img');
          img.src = `${tool.image}`;
          img.style.width = '100%';
          img.style.height = '100px';

          let text = document.createElement('div');
          text.className = 'text';
          text.textContent = `${tool.name}`;

          let button = document.createElement('button'); 
          button.textContent = `Install ${tool.name}`; 
          button.onclick = () => installTool(tool);

          slide.appendChild(numberText);
          slide.appendChild(img);
          slide.appendChild(text);
          slide.appendChild(button);
          slideshowContainer.appendChild(slide);
      });

      const dotsContainer = document.createElement('div');
      dotsContainer.style.textAlign = 'center';
      config.tools.forEach(() => {
          let dot = document.createElement('span');
          dot.className = 'dot';
          dotsContainer.appendChild(dot);
      });

      toolsDiv.appendChild(dotsContainer);
  } else {
      console.error('Tools not defined in config');
  }
});
