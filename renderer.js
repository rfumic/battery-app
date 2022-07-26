const batteryLevel = document.querySelector('#level');
const chargingIcon = document.querySelector('#charging');
const timeDisplay = document.getElementById('time');

navigator.getBattery().then((battery) => {
  if (battery.charging) {
    chargingIcon.style.display = 'block';
  } else {
    chargingIcon.style.display = 'none';
  }

  battery.addEventListener('levelchange', () => {
    batteryLevel.innerHTML = `${Math.floor(battery.level * 100)}%`;
  });
  batteryLevel.innerHTML = `${Math.floor(battery.level * 100)}%`;

  battery.onchargingchange = () => {
    if (battery.charging) {
      chargingIcon.style.display = 'block';
    } else {
      chargingIcon.style.display = 'none';
    }
  };
});

function refreshTime() {
  timeDisplay.innerHTML = new Date().toLocaleString('hr');
}

setInterval(refreshTime, 1000);
