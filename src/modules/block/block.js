class Block {
    _element = null;
    _meta = null;
    
    constructor(name, props = {}) {
        this.name = name;
        this.props = props;

        this._render();
    }

    _render() {
        console.log(`_render`);
        const block = this.render();
        this._element = block;
    }

    render() {}

    getElements() {}

    getContent() {
        return this._element;
    }

    show() {
        this.getContent().style.display = 'block';
    }

    hide() {
        this.getContent().style.display = 'none';
    }
}

export default Block;
