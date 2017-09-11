import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
class StickyHeader {

  constructor() {
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".large-hero__title");
    this.createHeaderWaypoint();
  }

  createHeaderWaypoint() {
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: (direction) => {
        if(direction == "down") {
          this.siteHeader.addClass("site-header--dark");
        } else {
          this.siteHeader.removeClass("site-header--dark");
        }
      }
    });
  }

}

export default StickyHeader;
