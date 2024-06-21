// Display an image with a border and other decoration suitable
// for this textbook
import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';
import './styles.css';

/**
 * Display an image with a border and other decoration sutiable for this textbook
 * @param {string} imageURL - URL to image to display. Can be relative (eg: /img/...)
 *                            or external
 * @param {string} size     - A size in CSS syntax eg: '50%' or '25px'.  Default is
 *                            '100%'
 * @param {string} align    - Alignment to pass to css.align.  Default is 'center' 
 * @param {string} caption  - Optional caption to display below the image
 * @param {string} inline   - optional string to indicate if image is to be displayed inline
 * 
 * align, caption and size are ignored if inline is set
 * 
 * @returns <img /> component
 */
export function DisplayImage(props) {
  const imageURL = useBaseUrl(props.imageURL);
  // console.log('props.imageURL:', props.imageURL);
  // console.log('imageURL:', imageURL);
  const size = props.size || "100%";
  const align = props.align || "center";
  const altText = props.altText || 'image';

  // Just return the image formatted for display inline
  if (props.inline) {
    return <img src={imageURL} alt={altText} className="inlineShadow" />
  }

  // Otherwise, we prepare for a block element
  // Set the size and alignment
  let divCSS = {};      // CSS styles for the <div>
  let imgCSS = {}       // CSS for the <img>

  divCSS.maxWidth = size;
  divCSS.float = align || 'center';

  // Set padding for the float if we're not centred
  if ( align === 'right' ) {
    divCSS.marginLeft = '20px';
  } else if ( align === 'left' ) {
    divCSS.marginRight = '20px';
  } else if ( align == 'center' ) {
    divCSS.margin = '20px auto';
  }

  // Create a div for the caption if we have one
  let captionDiv = '';
  if ( props.caption ) {
    captionDiv = <div className="caption">
      {props.caption}
    </div>
  }

 // Define returnValue so we can console.log() it for debugging
 // if necessary
  let returnValue = <div style={divCSS}>
      <img src={imageURL} alt={altText} style={imgCSS} />
  </div>
  returnValue = <div style={divCSS}>
      <img src={imageURL} alt={altText} className="shadowBlock" />
      {captionDiv}
    </div>
  return returnValue;
}