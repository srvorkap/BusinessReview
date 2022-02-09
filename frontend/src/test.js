import smallZero from '../src/images/stars/regular/regular_0.png' // small
import smallOne from '../src/images/stars/regular/regular_1.png' // small
import smallOneAndHalf from '../src/images/stars/regular/regular_1_half.png' // small
import smallTwo from '../src/images/stars/regular/regular_2.png' // small
import smallTwoAndHalf from '../src/images/stars/regular/regular_2_half.png' // small
import smallThree from '../src/images/stars/regular/regular_3.png' // small
import smallThreeAndHalf from '../src/images/stars/regular/regular_3_half.png' // small
import smallFour from '../src/images/stars/regular/regular_4.png' // small
import smallFourAndHalf from '../src/images/stars/regular/regular_4_half.png' // small
import smallFive from '../src/images/stars/regular/regular_5.png' // small

import mediumZero from '../src/images/stars/large/large_0.png' // medium
import mediumOne from '../src/images/stars/large/large_1.png' // medium
import mediumOneAndHalf from '../src/images/stars/large/large_1_half.png' // medium
import mediumTwo from '../src/images/stars/large/large_2.png' // medium
import mediumTwoAndHalf from '../src/images/stars/large/large_2_half.png' // medium
import mediumThree from '../src/images/stars/large/large_3.png' // medium
import mediumThreeAndHalf from '../src/images/stars/large/large_3_half.png' // medium
import mediumFour from '../src/images/stars/large/large_4.png' // medium
import mediumFourAndHalf from '../src/images/stars/large/large_4_half.png' // medium
import mediumFive from '../src/images/stars/large/large_5.png' // medium

import largeZero from '../src/images/stars/regular/regular_0@2x.png' // large
import largeOne from '../src/images/stars/regular/regular_1@2x.png' // large
import largeOneAndHalf from '../src/images/stars/regular/regular_1_half@2x.png' // large
import largeTwo from '../src/images/stars/regular/regular_2@2x.png' // large
import largeTwoAndHalf from '../src/images/stars/regular/regular_2_half@2x.png' // large
import largeThree from '../src/images/stars/regular/regular_3@2x.png' // large
import largeThreeAndHalf from '../src/images/stars/regular/regular_3_half@2x.png' // large
import largeFour from '../src/images/stars/regular/regular_4@2x.png' // large
import largeFourAndHalf from '../src/images/stars/regular/regular_4_half@2x.png' // large
import largeFive from '../src/images/stars/regular/regular_5@2x.png' // large

export const smallStars = (rating) => {
    let image;
    if (rating === 0) image = smallZero
    else if (rating > 0 && rating <= 1) image = smallOne
    else if (rating > 1 && rating <= 1.5) image = smallOneAndHalf
    else if (rating > 1.5 && rating <= 2) image = smallTwo
    else if (rating > 2 && rating <= 2.5) image = smallTwoAndHalf
    else if (rating > 2.5 && rating <= 3) image = smallThree
    else if (rating > 3 && rating <= 3.5) image = smallThreeAndHalf
    else if (rating > 3.5 && rating <= 4) image = smallFour
    else if (rating > 4 && rating <= 4.5) image = smallFourAndHalf
    else if (rating > 4.5 && rating <= 5) image = smallFive
    return image
}

export const mediumStars = (rating) => {
    let image;
    if (rating === 0) image = mediumZero
    else if (rating > 0 && rating <= 1) image = mediumOne
    else if (rating > 1 && rating <= 1.5) image = mediumOneAndHalf
    else if (rating > 1.5 && rating <= 2) image = mediumTwo
    else if (rating > 2 && rating <= 2.5) image = mediumTwoAndHalf
    else if (rating > 2.5 && rating <= 3) image = mediumThree
    else if (rating > 3 && rating <= 3.5) image = mediumThreeAndHalf
    else if (rating > 3.5 && rating <= 4) image = mediumFour
    else if (rating > 4 && rating <= 4.5) image = mediumFourAndHalf
    else if (rating > 4.5 && rating <= 5) image = mediumFive
    return image
}

export const largeStars = (rating) => {
    let image;
    if (rating === 0) image = largeZero
    else if (rating > 0 && rating <= 1) image = largeOne
    else if (rating > 1 && rating <= 1.5) image = largeOneAndHalf
    else if (rating > 1.5 && rating <= 2) image = largeTwo
    else if (rating > 2 && rating <= 2.5) image = largeTwoAndHalf
    else if (rating > 2.5 && rating <= 3) image = largeThree
    else if (rating > 3 && rating <= 3.5) image = largeThreeAndHalf
    else if (rating > 3.5 && rating <= 4) image = largeFour
    else if (rating > 4 && rating <= 4.5) image = largeFourAndHalf
    else if (rating > 4.5 && rating <= 5) image = largeFive
    return image
}
