import Block from '../../modules/block';
import {template} from "./helper.template";

export default class HelperComponent extends Block {
    render() {
        let {helper, helperButton} = template();

        helperButton.addEventListener('click', function() {
            helper.style.opacity = 0;
        });

        helper.addEventListener('transitionend', (event) => {
            if (event.target === helper) {
                helper.style.removeProperty('opacity');
                router.go('/calculator');
            }
        });

        return helper;
    }
}