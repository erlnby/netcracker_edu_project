import Block from '../../modules/block';
import {template} from "./helper.template";

export default class HelperComponent extends Block {
    render() {
        let helper = template();

        helper.addEventListener('click', function f() {
            helper.style.opacity = 0;

            setTimeout(() => {
                helper.style.removeProperty('opacity');
                router.go('/calculator');
            }, 1000)
        });

        return helper;
    }
}