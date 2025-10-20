document.getElementById('btn').addEventListener('click', () => {
  const title = document.getElementById('title');
  title.textContent = 'Button clicked at ' + new Date().toLocaleTimeString();
  document.getElementById('log').innerText = 'Updated successfully';
  // Intentional error for debugging demo (uncomment to see console error)
  // nonexistentFunction();
});
