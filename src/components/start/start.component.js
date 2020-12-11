import Block from '../../modules/block';
import {template} from "./start.template";

export default class StartComponent extends Block {
    render() {
        let {start, startButton} = template();

        startButton.addEventListener('click', function f() {
            start.style.opacity = 0;
        });

        start.addEventListener('transitionend', (event) => {
            if (event.target === start) {
                let helpShown = localStorage.getItem('helpShown');
                if (helpShown) {
                    router.go('/calculator');
                } else {
                    localStorage.setItem('helpShown', true);
                    router.go('/helper');
                }
                start.style.removeProperty('opacity');
            }
        })

        return start;
    }
}