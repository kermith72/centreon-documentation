// Turn off ESLint for this file because it's sent down to users as-is.
/* eslint-disable */

window.addEventListener('load', function() {
  const versions = ['20.04', '19.10', '19.04', '18.10', '3.4'];

  const elements = document.getElementsByClassName('nav-site nav-site-internal');
  const versionsLi = document.createElement('li');

  elements[0].insertBefore(versionsLi, document.getElementsByClassName('siteNavItemActive')[2]);
  
  const currentUrl = window.location.href;
  const matches = currentUrl.match(/.+\/(\d+\.\d+)\/.+/);

  let selectHtml = '<select id="select-version" class="selec-vers" onchange="window.location.href=this.value;">';
  versions.forEach((version) => {
    let versionHref = currentUrl;
    if (matches && matches[1]) {
      versionHref = currentUrl.replace('/' + matches[1] + '/', '/' + version + '/');
    }
    const regexp = new RegExp('/' + version + '/', 'g');
    const selected = currentUrl.match(regexp) ? 'selected' : '';
    selectHtml += '<option value="' + versionHref + '" ' + selected + '>v.' + version + '</option>';
  })
  selectHtml += '</select>';
  versionsLi.innerHTML = selectHtml;
});