import Block from '../../modules/block';
import {template} from "./start.template";

export default class StartComponent extends Block {
    render() {
        let {start, startButton} = template();

        startButton.addEventListener('click', function f() {
            start.style.opacity = 0;

            setTimeout(() => {
                startButton.removeEventListener('click', f);
                router.go('/calculator');
            }, 1000)
        });

        return start;
    }
}