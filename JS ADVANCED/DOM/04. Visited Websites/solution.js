function solve() {
  const sites = {
    'Google': 2,
    'YouTube': 4,
    'Gmail': 7,
    'Wikipedia': 4,
    'SoftUni': 1,
    'stackoverflow': 6
  }
  const template = x => `visited ${x} times`;

  document.addEventListener('click', (e) => {
    if (e.target.nodeName === 'A') {
      e.target.nextElementSibling.textContent = template(sites[e.target.textContent.trim()]++)
    }
  })
}
