import Block from '../../modules/block';
import {template} from "./sizer.template";
import {debounce} from "../../utils/functools";

export default class SizerComponent {
    render() {
        let {sizer, sizerText} = template();
        window.addEventListener('resize', debounce(event => {
            let width = document.documentElement.offsetWidth
            let height = document.documentElement.offsetHeight
            sizerText.textContent = `${width} x ${height}`;
            sizer.classList.remove('_hidden')

            // setTimeout(() => {
            //     sizer.classList.add('_hidden');
            // }, 1000)
        }, 1000))
        return sizer
    }
}