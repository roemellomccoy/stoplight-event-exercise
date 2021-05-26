(function() {
  'use strict';
  var stopButton = document.querySelector('#stopButton')
  var slowButton = document.querySelector('#slowButton')
  var goButton = document.querySelector('#goButton')

  var stopLight = document.querySelector('#stopLight')
  var slowLight = document.querySelector('#slowLight')
  var goLight = document.querySelector('#goLight')

  stopButton.addEventListener('click', function() {
    if (stopLight.classList.contains('stop')){
      stopLight.classList.remove('stop')
      console.log(`${stopButton.textContent} bulb off`)
    }else{
      stopLight.classList.add('stop')
      console.log(`${stopButton.textContent} bulb on`)
    }
  })

  slowButton.addEventListener('click', function() {
    if (slowLight.classList.contains('slow')){
      slowLight.classList.remove('slow')
      console.log(`${slowButton.textContent} bulb off`)
    }else{
      slowLight.classList.add('slow')
      console.log(`${slowButton.textContent} bulb on`)
    }
  })

  goButton.addEventListener('click', function() {
    if (goLight.classList.contains('go')){
      goLight.classList.remove('go')
      console.log(`${goButton.textContent} bulb off`)
    }else{
      goLight.classList.add('go')
      console.log(`${goButton.textContent} bulb on`)
    }
  })

  stopButton.addEventListener('mouseenter', function() {
    console.log(`Entered ${stopButton.textContent} button`)
  })

  stopButton.addEventListener('mouseleave', function() {
    console.log(`Left ${stopButton.textContent} button`)
  })

  slowButton.addEventListener('mouseenter', function() {
    console.log(`Entered ${slowButton.textContent} button`)
  })

  slowButton.addEventListener('mouseleave', function() {
    console.log(`Left ${slowButton.textContent} button`)
  })

  goButton.addEventListener('mouseenter', function() {
    console.log(`Entered ${goButton.textContent} button`)
  })

  goButton.addEventListener('mouseleave', function() {
    console.log(`Left ${goButton.textContent} button`)
  })
})();
