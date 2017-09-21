module.exports = function(devOptions){
  console.log(' ');
  console.log(' ');
  console.warn('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
  console.warn('Hey Onbrander, Just letting you know that we\'re in dev mode!');
  console.warn('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
  console.log(' ');
  console.log(' ');
  
  
  /** 
   *  Utility Functions
   */
  const _internalLink = function(e) {
    e.preventDefault();
    Hubs.changePage(e.target.href);
  };

  const _relativeLinks = function(url) {
    //We need relative links for local dev, so we regex for the url as the href
    var matchThis = new RegExp('^((http[s]?|ftp):\/)?\/?([^:\/\s]+)?(' + url + ')', 'gi');
    $('a').not('.onBrand--LocalDevLink').each(function(index, el) {
      var testThis = $(this).attr('href');
      if (matchThis.test(testThis)) {
        var newHref = testThis.replace(matchThis, '');
        if (!(newHref[0] === '/')) {
          newHref = '/' + newHref;
        }
        $(this).attr('href', newHref);
        $(this).attr('target', '');
        //add event listener to do internal page change instead of full reload
        $(this).on('click', _internalLink);
        $(this).addClass('onBrand--LocalDevLink');
      }
    });
  };

  /** 
   *  Local Development Events
   */

  if (!production) {
    Hubs.Events.on('load', function() {
      _relativeLinks(devOptions.shortHubUrl)
      Hubs.Config.hubBaseUrl = 'http://localhost:3000/'
    })
    Hubs.Events.on('pageChange', function() {
      _relativeLinks(devOptions.shortHubUrl)
      Hubs.Config.hubBaseUrl = 'http://localhost:3000/'
    })
    Hubs.Events.on('itemsLoaded', function() {
      _relativeLinks(devOptions.shortHubUrl)
    })
  }

}