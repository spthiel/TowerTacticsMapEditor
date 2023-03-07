
export default abstract class Renderable {

    private children: Renderable[] = [];
    private dirty = true;

    add(child: Renderable) {
        if (!this.children.includes(child)) {
            this.children.push(child);
        }
    }

    remove(child: Renderable) {
        let index = this.children.indexOf(child);
        if (index >= 0) {
            this.children.splice(index, 1);
        }
    }

    render(ctx: CanvasRenderingContext2D) {
        if (this.isDirty()) {
            this.dirty = false;
            this.draw(ctx);
        }
        this.children.forEach(child => child.render(ctx));
    }

    soak() {
        this.dirty = true;
        this.children.forEach(child => child.soak());
    }

    clean() {
        this.dirty = false;
    }

    isDirty() {
        if (this.dirty || this.children.find(child => child.isDirty())) {
            this.soak();
        }
        return this.dirty;
    }

    abstract draw(ctx: CanvasRenderingContext2D);

}