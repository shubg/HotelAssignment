$(function(){
	$.get("hotelsData.json", function(hotelsData) {
		$.get( "accordion.html", function( data ) {
			var templ = _.template(data);
	    $('#TopDestinations').html(templ(hotelsData));
			$('.accordion--box').click(function (event) {
				var el = '#' + event.currentTarget.id;
				var parentElem = $(el).parent();
			  var isActive = parentElem.hasClass('is-active');
			   if (isActive ) {
					parentElem.removeClass('is-active');
					 $(el + ' .accordion--title img')[0].src = "../images/icon_arrow.png";
				 } else {
					parentElem.addClass('is-active');
					 $(el + ' .accordion--title img')[0].src = "../images/icon_arrow_open.png";
				 }
			});
		});
	});
});
