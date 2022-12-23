(() => {
  const refs = {
    openBtn: document.querySelector('[data-menu-open]'),
    btn: document.querySelector('[data-btn]'),
  };

  refs.openBtn.addEventListener('click', toggleBtn);
  refs.menuList.addEventListener('click', removeBtn);

  function toggleBtn() {
    refs.btn.classList.toggle('open');
  }

  function removeBtn() {
    refs.btn.classList.add('open');
  }
})();