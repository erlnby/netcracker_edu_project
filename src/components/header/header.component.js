import Block from '../../modules/block';
import {template} from "./header.template";
import randomColor from "../../utils/randomColor";

export default class HeaderComponent extends Block {
    constructor() {
        super('header');
    }

    render() {
        let {header, headerHelp, headerTheme} = template();

        let root = document.documentElement;
        headerTheme.addEventListener('click', event => {
            let color = randomColor();
            root.style.setProperty('--main-color', '#' + color);
            // document.body.style.setProperty('background', 'var(--main-color)');
        })

        headerHelp.addEventListener('click', event => {
            event.stopPropagation();
            router.go('/helper');
        })

        return header;
    }
}

