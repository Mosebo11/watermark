// small interactive bits for the one-pager

// show current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// tiny theme accent toggle (keeps things simple)
const btn = document.getElementById('themeToggle');
let toggled = false;
btn.addEventListener('click', () => {
  toggled = !toggled;
  if (toggled) {
    document.documentElement.style.setProperty('--accent', '#16a34a'); // green accent
    btn.textContent = 'Toggle Accent';
  } else {
    document.documentElement.style.setProperty('--accent', '#2563eb'); // original blue
    btn.textContent = 'Toggle Accent';
  }
});

// fake contact form handler
function handleSubmit(e){
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const msg = form.message.value.trim();
  if(!name || !msg) return false;
  const out = document.getElementById('msg');
  out.textContent = `Thanks ${name}! Message received (demo).`;
  form.reset();
  // keep a tiny animation
  out.animate([{opacity:0},{opacity:1}], {duration:400, fill:'forwards'});
  return false;
}
