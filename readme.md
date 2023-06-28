# 5 Letter words

## Generate and validate random 5 letter words


Installation:

    npm install 5letterwords

Examples:


Generate

    import {random}  from '5letterwords';

    const newWord = random()
    <!-- "zebra" --->

isValid 

    import {isValid}  from '5letterwords';

    const example1 = "epoch"
    const example2 = "gafhg"

    console.log(isValid(example1))
    <!-- true --->

    console.log(isValid(example2))
    <!-- false --->
    




