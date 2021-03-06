/***
 *      @author Victor Chimenti, MSCS
 *      @file call-to-action-text-html.js
 *      @see Seattle University School of Law
 *          Call to Action Feature
 *          Content Type ID: 5084
 *          law/text/html
 *
 *      Document will write once when the page loads
 *
 *      @version 3.1
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
 *      @author Victor Chimenti, MSCS-SE '20
 *      @file call-to-action-text-html.js
 *      @see Seattle University School of Law Call to Action Feature Content Type
 *      law/text/html
 *
 *      Document will write once when the page loads
 *
 *      @version 2.19
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
    var itemName = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='normal' modifiers='striptags,htmlentities' />");
    var headline = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Headline' output='normal' modifiers='striptags,htmlentities' />");
    var headlineColor = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Headline color' output='normal' display_field='value' />");
    var backgroundImage = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Background Image' output='normal' formatter='path/*' />");
    var colorOverlay = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Color Overlay' output='normal' display_field='value' />");
    var btnOneText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #1 Text' output='normal' modifiers='striptags,htmlentities' />");
    var btnOneLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #1' output='linkurl' modifiers='nav_sections' />");
    var btnOneTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #1' output='linktext' modifiers='nav_sections' />");
    var btnTwoText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #2 Text' output='normal' modifiers='striptags,htmlentities' />");
    var btnTwoLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #2' output='linkurl' modifiers='nav_sections' />");
    var btnTwoTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #2' output='linktext' modifiers='nav_sections' />");
    var btnThreeText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #3 Text' output='normal' modifiers='striptags,htmlentities' />");
    var btnThreeLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #3' output='linkurl' modifiers='nav_sections' />");
    var btnThreeTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #3' output='linktext' modifiers='nav_sections' />");
    var btnFourText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #4 Text' output='normal' modifiers='striptags,htmlentities' />");
    var btnFourLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #4' output='linkurl' modifiers='nav_sections' />");
    var btnFourTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #4' output='linktext' modifiers='nav_sections' />");
    var btnFiveText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #5 Text' output='normal' modifiers='striptags,htmlentities' />");
    var btnFiveLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #5' output='linkurl' modifiers='nav_sections' />");
    var btnFiveTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link #5' output='linktext' modifiers='nav_sections' />");
    var anchorTag = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='html_anchor' />");
    var contentID = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='content_id' />");




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
    var headlineString = '<h2 class="callToActionHeaderColor' + headlineColor + ' my-2" id="label' + contentID + '">' + headline + '</h2>';
    var openLinksList = '<ul class="callToActionButtonWrapper standardContent d-flex flex-col flex-md-row flex-md-nowrap justify-md-content-between">';
    var closeLinksList = '</ul>';
    var btnOneString = '<li class="callToActionButton"><a href="' + btnOneLink + '" title="' + btnOneTitle + '">' + btnOneText + '</a></li>';
    var buttonListString = '' + btnOneString + '';
    var beginningHTML = '<div class="callToActionWrapper contentItem container-fluid g-0" title="' + headline + '" id="id' + contentID + '" data-position-default="Main" data-position-selected="Main" role="presentation" ><div class="col-12 card border-0">';
    var endingHTML = '</div></div>';


{/* <div class="btn-group">
  <a href="#" class="btn btn-primary active" aria-current="page">Active link</a>
  <a href="#" class="btn btn-primary">Link</a>
  <a href="#" class="btn btn-primary">Link</a>
</div> */}

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




} catch (err) {
    document.write(err.message);
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
     *  Declare/Assign local variables with default formatting and values
     * 
     * */




    // var openLinksList = '<ul class="callToActionButtonWrapper standardContent d-flex flex-col flex-md-row flex-md-nowrap justify-md-content-between">';
    // var closeLinksList = '</ul>';
    // var btnOneString = '<li class="callToActionButton"><a href="' + btnOneLink + '" title="' + btnOneTitle + '">' + btnOneText + '</a></li>';
    // var buttonListString = '' + btnOneString + '';

    // let openCardBody = '<div class="card border-0 rounded-0">';
    // let closeCardBody = '</div>';



    let imageString = '<img class="card-image visually-hidden">';
    let opneOverlayStyle = '<div class="callToActionOverlay callToActionOverlayColor' + ctafDict.colorOverlay.content + ' m-0">';
    let closeOverlayStyle = '</div>';
    let openOverlay = '<div class="card-img-overlay card-inverse p-0">';
    let closeOverlay = '</div>';
    let openBlock = '<div class="card-block">';
    let closeBlock = '</div>';
    let openCardTitle = '<div class="card-title p-lg-3">';
    let closeCardTitle = '</div>';
    let headlineString = '<h2 class="callToActionHeaderColor' + ctafDict.headlineColor.content + ' text-center">' + ctafDict.headline.content + '</h2>';
    let openCardGroup = '<div class="card-group flex-column flex-lg-row">';
    let closeCardGroup = '</div>';
    let beginningHTML = '<div class="callToActionWrapper contentItem container-fluid g-0" id="ctaf' + ctafDict.contentId.content + '" data-position-default="Main" data-position-selected="Main">';
    let endingHTML = '</div>';


    /***
     *  Parse for Cards
     *  each card requires a minimum of a link text and link path
     *  Card 1 requires these by default, cards 2 - 6 are enforced logically
     * */
    if (ctafDict.btnOneLink.content && ctafDict.btnOneText.content) {

        // set card defaults
        let openCardWrapperOne = '<div class="callToActionCard card border-0 rounded-0">';
        let openCardBodyOne = '<div class="callToActionButton card-body p-0 m-3">';
        let cardButtonOne = '<a class="btn" role="button" href="' + ctafDict.btnOneLink.content + '" title="Visit ' + ctafDict.btnOneTitle.content + '">' + ctafDict.btnOneText.content + '</a>';
        let closeCardBodyOne = '</div>';
        let closeCardWrapperOne = '</div>';

        let cardOne = openCardWrapperOne + openCardBodyOne + cardButtonOne + closeCardBodyOne + closeCardWrapperOne;

        cardDeck = cardOne;
    }



    /***
     *  Parse for image
     * 
     * */
    if (ctafDict.backgroundImage.content) {

        let imageID = content.get('Background Image').getID();
        let mediaInfo = getMediaInfo(imageID);
        let media = readMedia(imageID);
        let info = new ImageInfo;
        info.setInput(media);

        let imageDefaultAlt = ctafDict.headline.content || ctafDict.contentName.content;

        imageString = (info.check()) ?
            '<img src="' + ctafDict.backgroundImage.content + '" class="card-img-top" aria-label="' + mediaInfo.getName() + '" alt="' + mediaInfo.getDescription() + '" width="' + info.getWidth() + '" height="' + info.getHeight() + '" loading="auto" />' :
            '<img src="' + ctafDict.backgroundImage.content + '" class="card-img-top" alt="' + imageDefaultAlt + '" loading="auto" />';    
    }


    /***
     *  write document once
     * 
     * */
    writeDocument(
        [
            beginningHTML,
            ctafDict.anchorTag.content,
            imageString,
            openOverlay,
            opneOverlayStyle,
            openCardTitle,
            headlineString,
            closeCardTitle,
            openBlock,
            openCardGroup,
            cardDeck,
            closeCardGroup,
            closeBlock,
            closeOverlayStyle,
            closeOverlay,
            endingHTML
        ]
    );


    // document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, beginningHTML));
    // document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, anchorTag));
    // document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, imageString));
    // document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openOverlay));
    // document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, opneOverlayStyle));
    // document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openCardTitle));
    // document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, headlineString));
    // document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeCardTitle));
    // document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openBlock));
    // document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openLinksList));
    // document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, buttonListString));
    // document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeLinksList));
    // document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeBlock));
    // document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeOverlayStyle));
    // document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeOverlay));
    // document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, endingHTML));




} catch (err) {
    document.write(err.message);
}
