  // Total countdown time in seconds (5 hours = 5*60*60)
  let totalSeconds = 5 * 60 * 60;

  function updateClock() {
    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Update HTML
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    // Stop timer when it reaches 0
    if(totalSeconds <= 0){
      clearInterval(timer);
      alert("Deal expired!");
    }

    totalSeconds--;
  }

  // Start countdown
  const timer = setInterval(updateClock, 1000);
  updateClock(); // initial call to show immediately
