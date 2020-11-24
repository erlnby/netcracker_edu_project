import createElement from "../../utils/createElement";

export function template(ctx) {
    let executor = createElement('div', ['executor']);

    let executorSelect = createElement('select', ['executor__select']);

    let invite = createElement('option', ['executor__option'], 'Select operation...', {
        value: '',
        disabled: 'true',
        selected: 'true',
        hidden: 'true'
    });
    executorSelect.append(invite);

    ctx.operations.forEach((operation => {
        let executorOption = createElement('option', ['executor__option'], operation.name, {value: operation.name});
        executorSelect.append(executorOption);
    }));
    executor.append(executorSelect);

    let executorContainer = createElement('div', ['executor__container']);
    executor.append(executorContainer);

    let executorButton = createElement('button', ['executor__button', '_hidden'], 'Calculate', {disabled: 'true'})
    executor.append(executorButton)


    return {executor, executorSelect, executorContainer, executorButton};
}

export function templateHolder() {
    let executorHolder = createElement('div', ['executor__holder', '_holder']);
    return executorHolder;
}