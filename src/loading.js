import $ from 'jquery';

function loading() {
  const $loading = $('[data-js=loading]');

  const hideLoading = () => {
    const isHide = 'loading--isHide';

    $loading.addClass(isHide);
  }

  setTimeout(hideLoading, 3000);
}

export default loading;
