$(function() {
    
	banners.init("StyleWatch");
	
	$( "#accordion" ).accordion({
      collapsible: true,
      active: false
    });
    
	$('li').click(function(){
    	banners.showBanners( this );
    });
    
    
    
});


var banners = {
	pageName : "",
	sizes	 : [],
	
	init : function( page ){
		
		this.pageName = page;
		this.sizes.push( "160x600", "300x250", "728x90" );
	
	},
	
	showBanners: function( el ){
		$('.right').html("");
		var prepend = this.pageName;
		var folder = $( el ).text();
		folder = folder.replace(" ", "");
		var month = $( el ).closest( 'ul' ).attr('data-month-year').split(" ")[ 0 ];
		var monthyear = $( el ).closest( 'ul' ).attr('data-month-year');
		
		for( i = 0, len = this.sizes.length; i < len; i++ ){
			filename = prepend + "_" + folder + "_" + this.sizes[ i ] + "_" + month + ".swf"
			embed = "<div class='embedWrap'><embed src='files/" + monthyear + "/" + $( el ).text() + "/" + filename + "' width='" + this.sizes[ i ].split( 'x' )[ 0 ] + "' height='" + this.sizes[ i ].split( 'x' )[ 1 ] + "' ></div>"
			
			$('.right').append( embed );
			
			
			console.log( embed );
			
			
		}
		
	}
}