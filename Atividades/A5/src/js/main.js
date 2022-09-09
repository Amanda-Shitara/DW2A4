import { masks } from './modules/mask.js'
import { validations } from './modules/valid.js'
console.log(masks)
console.log(validations)

document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)

        if (!validations[field](e.target.value))
            $input.classList.add('errorInput');
        else
            $input.classList.remove('errorInput');

    }, false)
})