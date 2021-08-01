const headerElement = document.querySelector('.header');

const callback = function (entries, observer) {
  if (entries[0].isIntersecting) {
    headerElement.classList.remove('_scroll');
  } else {
    headerElement.classList.add('_scroll');
  }
};

const headerObserver = new IntersectionObserver(callback);
headerObserver.observe(headerElement);


window.onload = function () {
  document.addEventListener("click", documentActions);
  function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.classList.contains('search-form__icon')) {
      document.querySelector('.search-form-header').classList.toggle('_active');
    }
  }
}