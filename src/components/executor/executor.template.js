import createElement from "../../utils/createElement";

export function template(ctx) {
    let executor = createElement('div', ['executor']);

    let executor__select = createElement('select', ['executor__select']);

    let invite = createElement('option', ['executor__option']);
    invite.setAttribute('value', '');
    invite.textContent = 'Select operation...';
    invite.setAttribute('disabled', 'true');
    invite.setAttribute('selected', 'true');
    invite.setAttribute('hidden', 'true');
    executor__select.append(invite);

    ctx.operations.forEach((operation => {
        let executor__option = createElement('option', ['executor__option']);
        executor__option.setAttribute('value', operation.name);
        executor__option.textContent = operation.name;
        executor__select.append(executor__option);
    }));
    executor.append(executor__select);

    let executor__container = createElement('div', ['executor__container']);
    executor.append(executor__container);



    return {executor, executor__select, executor__container};
}

export function templateHolder() {
    let executor__holder = createElement('div', ['executor__holder']);

    let executor__holderDummy = createElement('div', ['executor__holder-dummy']);
    executor__holder.append(executor__holderDummy);

    return executor__holder;
}