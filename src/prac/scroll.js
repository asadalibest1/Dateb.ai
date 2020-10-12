import React from 'react'

import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll;

export default function scroll() {
    var Link      = Scroll.Link;
var Element   = Scroll.Element;
var Events    = Scroll.Events;
var scroll    = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

var Section = React.createClass({
componentDidMount: function() {
Events.scrollEvent.register('begin', function(to, element) {
console.log('begin', arguments);
});

Events.scrollEvent.register('end', function(to, element) {
console.log('end', arguments);
});

scrollSpy.update();
},
componentWillUnmount: function() {
Events.scrollEvent.remove('begin');
Events.scrollEvent.remove('end');
},
scrollToTop: function() {
scroll.scrollToTop();
},
scrollToBottom: function() {
scroll.scrollToBottom();
},
scrollTo: function() {
scroll.scrollTo(100);
},
scrollMore: function() {
scroll.scrollMore(100);
},
handleSetActive: function(to) {
console.log(to);
},
    return (
    )
}