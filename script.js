const currentPageBtn = document.getElementById('currentPageBtn');
const notifications = document.getElementById('notifications');
let notificationCount = 0;

currentPageBtn.addEventListener('click', function() {
  showNotification();
});

function showNotification() {
  if (notificationCount >= 5) return;
  
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.innerHTML = `
    <span>Вы уже на этой странице</span>
    <button class="close-btn">&times;</button>
  `;
  
  notification.querySelector('.close-btn').addEventListener('click', function() {
    notification.remove();
    notificationCount--;
  });

  notifications.appendChild(notification);
  notificationCount++;

  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
      notificationCount--;
    }
  }, 2500);
}

function openProject(url) {
  try {
    window.location.href = url;
  } catch {
    window.open(url, '_blank');
  }
}