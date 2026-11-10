const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('show');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('show');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

// Frontend-only report demo. Connect this form to a secure backend before launch.
document.getElementById('reportForm').addEventListener('submit', event => {
  event.preventDefault();
  const type = document.getElementById('reportType').value;
  const details = document.getElementById('reportDetails').value.trim();
  const message = document.getElementById('formMessage');
  if (!type || !details) {
    message.textContent = 'Please complete the required fields.';
    return;
  }
  message.textContent = 'Demo only: your report has not been sent. Connect a secure backend to receive reports.';
  event.target.reset();
});

// Frontend-only chat demo. Messages stay in this browser page and are not delivered to an agent.
const chatPanel = document.getElementById('chatPanel');
const chatLauncher = document.getElementById('chatLauncher');
const chatBody = document.getElementById('chatBody');
const chatInput = document.getElementById('chatInput');

function openChat() {
  chatPanel.classList.add('open');
  chatPanel.setAttribute('aria-hidden', 'false');
  chatInput.focus();
}
function closeChat() {
  chatPanel.classList.remove('open');
  chatPanel.setAttribute('aria-hidden', 'true');
}
chatLauncher.addEventListener('click', openChat);
document.getElementById('closeChat').addEventListener('click', closeChat);
document.getElementById('openChatFromCard').addEventListener('click', openChat);

document.getElementById('chatForm').addEventListener('submit', event => {
  event.preventDefault();
  const value = chatInput.value.trim();
  if (!value) return;
  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble user-message';
  bubble.textContent = value;
  chatBody.appendChild(bubble);
  chatInput.value = '';
  chatBody.scrollTop = chatBody.scrollHeight;

  const reply = document.createElement('div');
  reply.className = 'chat-bubble agent-message';
  reply.textContent = 'Thanks for reaching out! This is a preview chat. Connect a realtime backend and support inbox to receive a real agent reply.';
  window.setTimeout(() => {
    chatBody.appendChild(reply);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 650);
});
