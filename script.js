/* Tính năng 1: Đôi mắt mèo nhìn theo con trỏ chuột */
(function () {
  var pupils = document.querySelectorAll('.pupil');
  var svg = document.querySelector('.cat');
  if (!svg) return;
  document.addEventListener('mousemove', function (e) {
    var r = svg.getBoundingClientRect();
    pupils.forEach(function (p, i) {
      var cx = r.left + r.width * (i ? 0.65 : 0.35);
      var cy = r.top + r.height * 0.53;
      var dx = e.clientX - cx, dy = e.clientY - cy;
      var d = Math.hypot(dx, dy) || 1;
      var k = Math.min(6, d / 20);
      p.style.transform = 'translate(' + (dx / d * k) + 'px,' + (dy / d * k) + 'px)';
    });
  });
})();

/* Tính năng 2: Nút chuyển chế độ sáng / tối */
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  var dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;

  function apply() {
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    btn.textContent = dark ? 'Chế độ sáng' : 'Chế độ tối';
  }
  btn.addEventListener('click', function () {
    dark = !dark;
    apply();
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
  });
  apply();
})();

/* Tính năng 3: Nút "sự thật ngẫu nhiên về mèo" */
(function () {
  var facts = [
    'Mèo ngủ khoảng 12 đến 16 tiếng mỗi ngày.',
    'Một nhóm mèo được gọi là "clowder".',
    'Mèo có thể xoay tai gần 180 độ để nghe âm thanh.',
    'Tiếng rừ rừ của mèo có tần số khoảng 25 đến 150 Hz.',
    'Ria mép giúp mèo cảm nhận các vật ở gần chúng.'
  ];
  var last = -1;
  var out = document.getElementById('fact');
  document.getElementById('fact-btn').addEventListener('click', function () {
    var i;
    do { i = Math.floor(Math.random() * facts.length); } while (i === last);
    last = i;
    out.textContent = facts[i];
  });
})();

/* Tính năng 4: Thẻ mèo có hiệu ứng hover được viết bằng CSS (.card:hover trong style.css) */
