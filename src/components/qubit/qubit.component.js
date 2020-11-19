import Block from '../../modules/block';
import {template} from "./qubit.template";

export default class QubitComponent extends Block {
    constructor(remove, props) {
        super('qubit', props);
        this.remove = remove;
    }


    render() {
        let qubit = template(this.props)

        qubit.addEventListener('mousedown', (event) => {
            if (event.button === 0) {
                let parent = qubit.parentElement;

                let shiftX = event.clientX - qubit.getBoundingClientRect().left;
                let shiftY = event.clientY - qubit.getBoundingClientRect().top;

                qubit.style.position = 'absolute';
                qubit.style.zIndex = 1000;
                document.body.append(qubit);

                moveAt(event.pageX, event.pageY);

                parent.classList.add('_hidden');

                function moveAt(pageX, pageY) {
                    qubit.style.left = pageX - shiftX + 'px';
                    qubit.style.top = pageY - shiftY + 'px';
                }

                let currentHolder = null;

                function onMouseMove(event) {
                    moveAt(event.pageX, event.pageY);

                    qubit.classList.add('_hidden');
                    let elementBelow = document.elementFromPoint(event.clientX, event.clientY);
                    qubit.classList.remove('_hidden');


                    if (!elementBelow) return;

                    let holderBelow = elementBelow.closest('.executor__holder');

                    if (currentHolder !== holderBelow) {
                        if (currentHolder) {
                            console.log('Leave holder');
                        }

                        currentHolder = holderBelow;
                        if (currentHolder) {
                            console.log('Enter holder');
                        }
                    }
                }

                document.addEventListener('mousemove', onMouseMove);

                qubit.onmouseup = function () {
                    qubit.style = '';

                    if (currentHolder) {
                        currentHolder.innerHTML = '';
                        currentHolder.append(qubit);
                        // TODO change onremove method

                        parent.remove()
                    } else {
                        parent.append(qubit);
                        parent.classList.remove('_hidden');
                    }

                    document.removeEventListener('mousemove', onMouseMove);
                    qubit.onmouseup = null;
                };
            }
        });

        qubit.addEventListener('contextmenu', (event) => {
                event.preventDefault();
                let id = event.currentTarget.dataset.qubitId;
                this.remove(id);
        });

        qubit.ondragstart = function () {
            return false;
        };

        return qubit;
    }
}