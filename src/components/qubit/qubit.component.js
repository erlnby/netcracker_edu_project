import Block from '../../modules/block';
import {template} from "./qubit.template";
import QubitService from "../../services/qubit.service";
import createElement from "../../utils/createElement";

export default class QubitComponent extends Block {
    static HOLDERS = {
        'calculator__qubits-item': {
            removeItem: function (id) {
                QubitService.remove(id);
                let qubit = document.querySelector(`.qubit[data-qubit-id="${id}"]`)
                this.detach(qubit.parentElement)
            },
            startMove: function (parent) {
                parent.classList.add('_hidden');
            },
            endMove: function (parent) {

            },
            abortMove: function (parent) {
                parent.append(this._element);
                parent.classList.remove('_hidden');
            },
            canAttach: function (parent) {
                return true
            },
            attach: function (parent) {
                let calculatorQubits = document.querySelector('.calculator__qubits');

                let qubitsItem = createElement('li', ['calculator__qubits-item']);
                qubitsItem.append(this._element);


                calculatorQubits.lastChild.before(qubitsItem);
            },
            detach: function (parent) {
                parent.remove()
            }
        },
        'executor__holder': {
            removeItem: function (id) {
                this.move(this._element.parentElement, null, 'calculator__qubits-item')
            },
            startMove: function (parent) {
                parent.classList.remove('_hidden');
            },
            endMove: function (parent) {

            },
            abortMove: function (parent) {
                parent.append(this._element);
                parent.classList.add('_hidden');
            },
            canAttach: function (parent) {
                return parent.childElementCount === 0
            },
            attach: function (parent) {
                parent.classList.add('_hidden')
                parent.append(this._element);
                parent.dispatchEvent(new Event('executor-add', {bubbles: true}))
            },
            detach: function (parent) {
                parent.classList.remove('_hidden');
                parent.dispatchEvent(new Event('executor-remove', {bubbles: true}))
            }
        }
    }

    constructor(parentName, props) {
        super('qubit', props);
        this.setActions(parentName)
    }


    render() {
        let qubit = template(this.props)
        let self = this

        qubit.addEventListener('mousedown', (event) => {
            if (event.button === 0) {
                let parent = qubit.parentElement;

                let shiftX = event.clientX - qubit.getBoundingClientRect().left;
                let shiftY = event.clientY - qubit.getBoundingClientRect().top;

                qubit.style.position = 'absolute';
                qubit.style.zIndex = 1000;
                document.body.append(qubit);

                moveAt(event.pageX, event.pageY);

                this.startMove(parent)

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

                    let holderBelow = elementBelow.closest('._holder');

                    if (currentHolder !== holderBelow) {
                        if (currentHolder) {
                            // console.log('Leave holder');
                        }

                        currentHolder = holderBelow;
                        if (currentHolder) {
                            // console.log('Enter holder');
                        }
                    }
                }

                document.addEventListener('mousemove', onMouseMove);

                qubit.onmouseup = function () {
                    qubit.style.position = 'static';
                    self.endMove(parent)

                    if (currentHolder) {
                        let holderName
                        currentHolder.classList.forEach(className => {
                            if (QubitComponent.HOLDERS.hasOwnProperty(className)) {
                                holderName = className
                            }
                        })

                        if (holderName && QubitComponent.HOLDERS[holderName].canAttach(currentHolder)) {
                            self.move(parent, currentHolder, holderName)
                        } else {
                            self.abortMove(parent)
                        }
                    } else {
                        self.abortMove(parent)
                    }


                    console.log(document.body.removeChild(qubit))
                    document.removeEventListener('mousemove', onMouseMove);
                    qubit.onmouseup = null;
                };
            }
        });

        qubit.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            let id = event.currentTarget.dataset.qubitId;
            this.removeItem(id);
        });

        qubit.ondragstart = function () {
            return false;
        };

        qubit.addEventListener('qubit-remove', () => {
            self.removeItem()
        })

        return qubit;
    }

    setActions(name) {
        let holder = QubitComponent.HOLDERS[name]
        this.removeItem = holder.removeItem
        this.startMove = holder.startMove
        this.endMove = holder.endMove
        this.abortMove = holder.abortMove
        this.attach = holder.attach
        this.detach = holder.detach
    }

    move(oldParent, newParent, newParentName) {
        this.detach(oldParent)
        this.setActions(newParentName)
        this.attach(newParent)
    }
}