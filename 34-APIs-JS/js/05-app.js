document.addEventListener('visibilitychange',()=> {
  if (document.visibilityState === 'visible') {
    console.log('Ejecutando código cuando el documento está visible');
  } else {
    console.log('No ejecutando código cuando el documento está visible');
  }
});