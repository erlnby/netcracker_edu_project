import Block from '../../modules/block';
import {template} from "./header.template";

export default class HeaderComponent extends Block {
    constructor() {
        super('header');
    }

    render() {
        return template();
    }
}

