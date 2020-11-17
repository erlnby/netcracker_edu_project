import Block from '../../modules/block';
import {template} from "./start.template";

export default class StartComponent extends Block {
    render() {
        let {start, start__button} = template();

        start__button.addEventListener('click', function f() {
            start.style.opacity = 0;

            setTimeout(() => {
                start__button.removeEventListener('click', f);
                router.go('/calculator');
            }, 1000)
        });

        return start;
    }
}