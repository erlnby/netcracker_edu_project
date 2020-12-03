import Block from '../../modules/block';
import {template} from "./start.template";

export default class StartComponent extends Block {
    render() {
        let {start, startButton} = template();

        startButton.addEventListener('click', function f() {
            start.style.opacity = 0;
            let helpShown = localStorage.getItem('helpShown');

            setTimeout(() => {
                startButton.removeEventListener('click', f);
                if (helpShown) {
                    router.go('/calculator');
                } else {
                    localStorage.setItem('helpShown', true);
                    router.go('/helper');
                }
                startButton.removeEventListener('click', f);

            }, 1000)
        });

        return start;
    }
}