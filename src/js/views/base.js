export const elements = {
  searchNav: document.getElementById('navSearch'),
  navInput: document.querySelector('.navSearch__input'),
  searchForm: document.getElementById('searchForm'),
  searchInput: document.querySelector('.search__content--input'),
  main: document.querySelector('.main'),
  body: document.querySelector('body')
};

export const renderLoader = parent => {
  const loader = `<div class="loader loader--style1" title="0">
    <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
    <path opacity="0.2" fill="#8a48a5" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
      s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
      c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
    <path fill="#8a48a5" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
      C22.32,8.481,24.301,9.057,26.013,10.047z">
      <animateTransform attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 20 20"
        to="360 20 20"
        dur="0.5s"
        repeatCount="indefinite"/>
      </path>
    </svg>
    </div>`;
  parent.insertAdjacentHTML('afterBegin', loader);
};

export const clearLoader = () => {
  const loader = document.querySelector(`.loader`);
  if (loader) loader.parentNode.removeChild(loader);
};

export const deleteIcon = () => `
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"
    width="100%" height="100%" xml:space="preserve">
        <path
            d="
                M278.6,256l68.2-68.2c6.2-6.2,6.2-16.4,0-22.6c-6.2-6.2-16.4-6.2-22.6,0L256,233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6,0
                c-3.1,3.1-4.7,7.2-4.7,11.3c0,4.1,1.6,8.2,4.7,11.3l68.2,68.2l-68.2,68.2c-3.1,3.1-4.7,7.2-4.7,11.3c0,4.1,1.6,8.2,4.7,11.3
                c6.2,6.2,16.4,6.2,22.6,0l68.2-68.2l68.2,68.2c6.2,6.2,16.4,6.2,22.6,0c6.2-6.2,6.2-16.4,0-22.6L278.6,256z" />
    </svg>
`;

export const starIcon = () => `
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" height="100%"
    width="80%" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"
    xml:space="preserve">
        <path
            d="M463,192l-147.1,0L271.2,58.6C269,52.1,262.9,48,256,48s-13,4.1-15.2,10.6L196.1,192H48h0c-8.8,0-16,7.2-16,16
        c0,0.9,0.1,1.9,0.3,2.7c0.2,3.5,1.8,7.4,6.7,11.3l120.9,85.2l-46.4,134.9c-2.3,6.5,0,13.8,5.5,18c2.9,2.1,5.6,3.9,9,3.9
        c3.3,0,7.2-1.7,10-3.6l118-84.1l118,84.1c2.8,2,6.7,3.6,10,3.6c3.4,0,6.1-1.7,8.9-3.9c5.6-4.2,7.8-11.4,5.5-18l-46.4-134.9l119.9-86
        l2.9-2.5c2.6-2.8,5.2-6.6,5.2-10.7C480,199.2,471.8,192,463,192z M335.8,284.5c-10,7.2-14.2,20.2-10.2,31.8l30.1,87.7
        c1.3,3.7-2.9,6.8-6.1,4.6l-77.4-55.2c-4.9-3.5-10.6-5.2-16.3-5.2c-5.7,0-11.4,1.7-16.2,5.2l-77.4,55.1c-3.2,2.3-7.4-0.9-6.1-4.6
        l30.1-87.7c4-11.8-0.2-24.8-10.3-32l-81-57.1c-3.2-2.2-1.6-7.3,2.3-7.3h98.7c12,0,22.7-7.7,26.5-19.1l29.6-88.2
        c1.2-3.6,6.4-3.6,7.6,0l29.6,88.2c3.8,11.4,14.5,19.1,26.5,19.1h0l97.3,0c3.9,0,5.5,5,2.3,7.2L335.8,284.5z" />
    </svg>
`;

export const starIcon2 = () => `
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 512 512" height="100%" width="80%" fill="#8a48a5" xml:space="preserve">
  heg
    <path d="M463,192l-147.1,0L271.2,58.6C269,52.1,262.9,48,256,48s-13,4.1-15.2,10.6L196.1,192H48h0c-8.8,0-16,7.2-16,16
    c0,0.9,0.1,1.9,0.3,2.7c0.2,3.5,1.8,7.4,6.7,11.3l120.9,85.2l-46.4,134.9c-2.3,6.5,0,13.8,5.5,18c2.9,2.1,5.6,3.9,9,3.9
    c3.3,0,7.2-1.7,10-3.6l118-84.1l118,84.1c2.8,2,6.7,3.6,10,3.6c3.4,0,6.1-1.7,8.9-3.9c5.6-4.2,7.8-11.4,5.5-18l-46.4-134.9l119.9-86
    l2.9-2.5c2.6-2.8,5.2-6.6,5.2-10.7C480,199.2,471.8,192,463,192z"/>
  </svg>
`;
