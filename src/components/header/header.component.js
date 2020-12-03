import Block from '../../modules/block';
import {template} from "./header.template";
import randomColor from "../../utils/randomColor";

export default class HeaderComponent extends Block {
    constructor() {
        super('header');
    }

    render() {
        let header = template();

        let root = document.documentElement;
        header.addEventListener('click', event => {
            let color = randomColor();
            root.style.setProperty('--main-color', '#' + color);
        })
        return header;
    }
}

