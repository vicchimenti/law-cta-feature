/***
 *      @author Victor Chimenti, MSCS
 *      @file call-to-action-text-html.js
 *      @see Seattle University School of Law Call to Action Feature Content Type
 *      law/text/html
 *
 *      Document will write once when the page loads
 *
 *      @version 3.0
 */








/***
 *      Import T4 Utilities
 */
 importClass(com.terminalfour.media.IMediaManager);
 importClass(com.terminalfour.spring.ApplicationContextProvider);
 importClass(com.terminalfour.publish.utils.BrokerUtils);
 importClass(com.terminalfour.media.utils.ImageInfo);
 
 
 
 
 /***
  *      Extract values from T4 element tags
  *      and confirm valid existing content item field and trim strings
  */
 function getContentValues(tag) {
 
     try {
 
         let _tag = BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, tag).trim()
 
         return {
             isError: false,
             content: _tag == '' ? null : _tag
         }
 
     } catch (error) {
 
         return {
             isError: true,
             message: error.message
         }
     }
 }
 
 
 
 
 /***
  *      Returns a media object
  */
 function getMediaInfo(mediaID) {
 
     let mediaManager = ApplicationContextProvider.getBean(IMediaManager);
     let media = mediaManager.get(mediaID, language);
 
     return media;
 }
 
 
 
 
 /***
  *      Returns a media stream object
  */
 function readMedia(mediaID) {
 
     let mediaObj = getMediaInfo(mediaID);
     let oMediaStream = mediaObj.getMedia();
 
     return oMediaStream;
 }
 
 
 
 
 /***
  *      Write the document
  */
 function writeDocument(array) {
 
     for (let i = 0; i < array.length; i++) {
 
         document.write(array[i]);
     }
 }
 
 
 
 
 
 /***
  *      Main
  */
 try {


    /***
     *      Dictionary of content
     * */
    let ctafDict = {

        contentName: getContentValues('<t4 type="content" name="Name" output="normal" modifiers="striptags,htmlentities" />'),
        headline: getContentValues('<t4 type="content" name="Headline" output="normal" modifiers="striptags,htmlentities" />'),
        headlineColor: getContentValues('<t4 type="content" name="Headline color" output="normal" display_field="value" />'),
        backgroundImage: getContentValues('<t4 type="content" name="Background Image" output="normal" formatter="path/*" />'),
        colorOverlay: getContentValues('<t4 type="content" name="Color Overlay" output="normal" display_field="value" />'),
        btnOneText: getContentValues('<t4 type="content" name="Link #1 Text" output="normal" modifiers="striptags,htmlentities" />'),
        btnOneTitle: getContentValues('<t4 type="content" name="Link #1" output="linktext" modifiers="nav_sections" />'),
        btnOneLink: getContentValues('<t4 type="content" name="Link #1" output="linkurl" modifiers="nav_sections" />'),

        anchorTag: getContentValues('<t4 type="meta" meta="html_anchor" />'),
        contentId: getContentValues('<t4 type="meta" meta="content_id" />')

    }

    /***
     *  Assign local variables from the content type's fields
     * 
     * */
    // var itemName = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='normal' modifiers='striptags,htmlentities' />");
    // var headline = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Headline' output='normal' modifiers='striptags,htmlentities' />");
    // var headlineColor = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Headline color' output='normal' display_field='value' />");
    // var backgroundImage = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Background Image' output='normal' formatter='path/*' />");
    // var colorOverlay = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Color Overlay' output='normal' display_field='value' />");
    // var btnOneText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #1 Text' output='normal' modifiers='striptags,htmlentities' />");
    // var btnOneLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #1' output='linkurl' modifiers='nav_sections' />");
    // var btnOneTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #1' output='linktext' modifiers='nav_sections' />");
    // var btnTwoText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #2 Text' output='normal' modifiers='striptags,htmlentities' />");
    // var btnTwoLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #2' output='linkurl' modifiers='nav_sections' />");
    // var btnTwoTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #2' output='linktext' modifiers='nav_sections' />");
    // var btnThreeText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #3 Text' output='normal' modifiers='striptags,htmlentities' />");
    // var btnThreeLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #3' output='linkurl' modifiers='nav_sections' />");
    // var btnThreeTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #3' output='linktext' modifiers='nav_sections' />");
    // var btnFourText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #4 Text' output='normal' modifiers='striptags,htmlentities' />");
    // var btnFourLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #4' output='linkurl' modifiers='nav_sections' />");
    // var btnFourTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #4' output='linktext' modifiers='nav_sections' />");
    // var btnFiveText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #5 Text' output='normal' modifiers='striptags,htmlentities' />");
    // var btnFiveLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #5' output='linkurl' modifiers='nav_sections' />");
    // var btnFiveTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #5' output='linktext' modifiers='nav_sections' />");
    // var anchorTag = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='html_anchor' />");
    // var contentId = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='content_id' />");




    /***
     *  Declare/Assign local variables with default formatting and values
     * 
     * */
    var imageString = '<img class="card-image-top" src="' + backgroundImage +'" alt="decorative background image for ' + headline + '">';
    var openOverlay = '<div class="card-img-overlay card-inverse p-0">';
    var closeOverlay = '</div>';
    var opneOverlayStyle = '<div class="callToActionOverlay callToActionOverlayColor' + colorOverlay + ' m-0">';
    var closeOverlayStyle = '</div>';
    var openBlock = '<div class="card-block px-3 py-1 mb-1">';
    var closeBlock = '</div>';
    var openCardTitle = '<div class="card-title p-3">';
    var closeCardTitle = '</div>';
    var headlineString = '<h2 class="callToActionHeaderColor' + headlineColor + ' my-2" id="label' + contentId + '">' + headline + '</h2>';
    var openLinksList = '<ul class="callToActionButtonWrapper standardContent d-flex flex-col flex-md-row flex-md-nowrap justify-md-content-between">';
    var closeLinksList = '</ul>';
    var btnOneString = '<li class="callToActionButton"><a href="' + btnOneLink + '" title="' + btnOneTitle + '">' + btnOneText + '</a></li>';
    var buttonListString = '' + btnOneString + '';
    var beginningHTML = '<div class="callToActionWrapper contentItem container-fluid g-0" title="' + headline + '" id="id' + contentId + '" data-position-default="Main" data-position-selected="Main" role="presentation" ><div class="col-12 card border-0">';
    var endingHTML = '</div></div>';




    /***
     *  Handle Selective Output Logic
     *      Button Links
     * 
     * */
    if (btnTwoLink != "" && btnTwoText != "") {

        var btnTwoString = '<li class="callToActionButton"><a href="' + btnTwoLink + '" title="' + btnTwoTitle + '">' + btnTwoText + '</a></li>';
        buttonListString += '' + btnTwoString + '';

        if (btnThreeLink != "" && btnThreeText != "") {

            var btnThreeString = '<li class="callToActionButton"><a href="' + btnThreeLink + '" title="' + btnThreeTitle + '">' + btnThreeText + '</a></li>';
            buttonListString += '' + btnThreeString + '';

            if (btnFourLink != "" && btnFourText != "") {

                var btnFourString = '<li class="callToActionButton"><a href="' + btnFourLink + '" title="' + btnFourTitle + '">' + btnFourText + '</a></li>';
                buttonListString += '' + btnFourString + '';

                if (btnFiveLink != "" && btnFiveText != "") {

                    var btnFiveString = '<li class="callToActionButton"><a href="' + btnFiveLink + '" title="' + btnFiveTitle + '">' + btnFiveText + '</a></li>';
                    buttonListString += ''  + btnFiveString + '';
        
                }
            }
        }
    }




    /***
     *  Write the document once
     * 
     * */
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, beginningHTML));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, anchorTag));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, imageString));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openOverlay));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, opneOverlayStyle));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openCardTitle));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, headlineString));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeCardTitle));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openBlock));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openLinksList));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, buttonListString));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeLinksList));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeBlock));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeOverlayStyle));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeOverlay));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, endingHTML));




    /***
     *  write document once
     * 
     * */
         writeDocument(
            [
                beginningHTML,
                openImageWrapper,
                imageString,
                closeImageWrapper,
                openCardBody,
                titleLink,
                publishedLink,
                summaryString,
                dateline,
                openHidden,
                listOfCats,
                pinnedItem,
                closeHidden,
                closeCardBody,
                endingHTML
            ]
        );




} catch (err) {
    document.write(err.message);
}
