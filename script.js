const inp = document.getElementById('inp');
const btn = document.getElementById('clear');

btn.addEventListener('click', () => {
    setTimeout(() => {
        inp.value = '';
    }, 1200);
});

function showNotification() {
    const notification = document.getElementById('notification');
    notification.classList.remove('hidden');
    setTimeout(() => notification.classList.add('hidden'), 3000);
}

function closeNotification() {
    document.getElementById('notification').classList.add('hidden');
}
setTimeout(showNotification, 1250)


function getIPAddress() {
    fetch('https://ipinfo.io/json?token=f43fb19efe661d')
      .then(response => {
        if (!response.ok) {
          throw new Error('Ip adres olinmadi');
        }
        return response.json();
      })
      .then(data => {
        alert(`Sizning IP-adresingiz: ${data.ip}`);
        console.log(data);
      })
      .catch(error => {
        console.error('Ошибка:', error);
        alert('IP-adres olinmadi');
      });
  }
  