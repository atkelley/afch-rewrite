//<nowiki>
// Script should be located at [[MediaWiki:Gadget-afchelper.js]]
( function ( mw, window ) {
	var pageName = mw.config.get( 'wgPageName' ), type;

	if ( pageName.indexOf( ) ) {
		type = 'submissions';
	} else if ( pageName.indexOf( ) ) {
		type = 'redirects';
	} else if ( pageName.indexOf( ) ) {
		type = 'ffu';
	}

	if ( type ) {
		// Initialize the AFCH object
		window.AFCH = {};

		// Set up constants
		AFCH.consts = {
			scriptpath: mw.config.get('wgServer') + mw.config.get('wgScript'),
			baseurl: scriptpath + '?action=raw&ctype=text/javascript&title=MediaWiki:Gadget-afchelper.js'
		};

		mw.loader.using( AFCH.consts.baseurl + '/core.js', function () {
			if ( AFCH.beforeLoad() ) {
				AFCH.load( afctype );
			} else {
				mw.notify( 'AFCH could not be loaded:' + ( AFCH.error ? AFCH.error : 'unknown error' ),
					{ title: 'AFCH error' } );
			}
		} );
	}
} )( mediawiki, window );
//</nowiki>
