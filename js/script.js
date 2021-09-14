window.onload = function () {
  document
    .querySelector('.departments_content_buttons')
    .addEventListener('click', function () {
      if (
        document
          .querySelector('.departments_content_buttons')
          .classList.contains('active')
      ) {
        document.write('ok')
      } else {
        document.write('okn')
      }
    })
}
