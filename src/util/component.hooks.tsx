export function useSwipe(componentRef,
                         {
                           up,
                           down,
                           left,
                           right,
                         }:
                           {
                             up?: Function,
                             down?: Function,
                             left?: Function,
                             right?: Function,
                           },
) {


  if (!componentRef.current) {
    return;
  } else {
    componentRef = componentRef.current;
  }

  componentRef.addEventListener('touchstart', handleTouchStart, false);
  componentRef.addEventListener('touchmove', handleTouchMove, false);

  let xDown: null | number = null ;
  let yDown: null | number = null;

  function getTouches(evt) {
    return evt.touches;
  }

  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        /* left swipe */
        left && left();
      } else {
        right && right();
      }
    } else {
      if (yDiff > 0) {
        up && up();
      } else {
        down && down();
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };

}
