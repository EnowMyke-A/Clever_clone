function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    var isFullyInViewport = rect.top >= 0 && rect.left >= 0 && rect.bottom <= viewportHeight && rect.right <= viewportWidth;
    var isPartiallyInViewport = rect.top < viewportHeight && rect.bottom >= 0 && rect.left < viewportWidth && rect.right >= 0;
  
    return isFullyInViewport || isPartiallyInViewport;
  }
  
  
  window.addEventListener('load', function(){
    
    const Object = this.document.querySelectorAll('.animate-object');
    Object.forEach((Object) => {
      if(isElementInViewport(Object))
      Object.classList.add('animate');
    });
    this.window.addEventListener('scroll', function(){
      Object.forEach((Object) => {
        if(isElementInViewport(Object))
        Object.classList.add('animate');
      });
    })
  })