  const devOptions = require('./dev-options.js');


  /** 
   *  Header & Footer Ajax
   */
  const version = 1;

  let urlPath;
  if (!devOptions.production) {
    urlPath = '/includes/';
  } else {
    urlPath = '//cihost.uberflip.com/' + devOptions.subdir + '/includes/';
  }


  /* Insert Header */
  $.ajax({
    url: urlPath + 'header.html?' + version
  }).done(function(data) {
    $('body').prepend(data);
  });

  /* Insert Footer */
  $.ajax({
    url: urlPath + 'footer.html?' + version
  }).done(function(data) {
    $('body > footer').remove();
    $('body').append(data);
  });



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
   *  Custom Functions
   */




  /** 
   *  Local Development Events
   */

  if (!devOptions.production) {
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



  /** 
   *  Events
   */

  Hubs.Events.on('load', function() {
      fixShareWidget();
    })
    .on('pageChange', function() {

    }).on('itemsLoaded', function(itemIds, selectors) {


    }).on('resize', function() {
      sideCtaFix();
      addThisFix();
    }).on('scroll', function() {
      sideCtaFix();
      addThisFix();
    }).on('ctaActivate', function(ctaId) {


    }).on('ctaFormSubmitSuccess', function(ctaId, mappedData, ctaName) {


    }).on('search', function() {

    });