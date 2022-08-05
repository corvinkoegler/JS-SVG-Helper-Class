class SvgOps {
    /**
     * Moves SVG-cursor to stated coordinates without drawing anything.
     * @param {int} id 
     * @param {number} x 
     * @param {number} y 
     * @returns dataset with the content {id, operation, x-coordinate, y-coordinate, command}
     */
    static M(id, x, y) {
        return { 'id': id, 'operation': 'M', 'x': x, 'y': y, 'command': `M ${x} ${y} ` };
    }

    /**
     * Moves the SVG-cursor relative to last location without drawing anything.
     * @param {int} id 
     * @param {number} x 
     * @param {number} y 
     * @returns dataset with the content {id, operation, x-coordinate, y-coordinate, command}
     */
    static m(id, x, y) {
        return { 'id': id, 'operation': 'm', 'x': x, 'y': y, 'command': `m ${x} ${y} ` };
    }

    /**
     * Moves the SVG-cursor to stated coordinates while drawing.
     * @param {int} id 
     * @param {number} x 
     * @param {number} y 
     * @returns dataset with the content {id, operation, x-coordinate, y-coordinate, command}
     */
    static L(id, x, y) {
        return { 'id': id, 'operation': 'L', 'x': x, 'y': y, 'command': `L ${x} ${y} ` };
    }

    /**
     * Moves the SVG-cursor relative to the last location while drawing.
     * @param {int} id 
     * @param {number} x 
     * @param {number} y 
     * @returns dataset with the content {id, operation, x-coordinate, y-coordinate, command}
     */
    static l(id, x, y) {
        return { 'id': id, 'operation': 'l', 'x': x, 'y': y, 'command': `l ${x} ${y} ` };
    }

    /**
     * Moves the SVG-cursor horizontally to stated coordinates while drawing.
     * @param {int} id 
     * @param {number} x 
     * @returns dataset with the content {id, operation, x-coordinate, command}
     */
    static H(id, x) {
        return { 'id': id, 'operation': 'H', 'x': x, 'command': `H ${x} ` };
    }

    /**
     * Moves the SVG-cursor horizontally and relative to the last location while drawing.
     * @param {int} id 
     * @param {number} x 
     * @returns dataset with the content {id, operation, x-coordinate, command}
     */
    static h(id, x) {
        return { 'id': id, 'operation': 'h', 'x': x, 'command': `h ${x} ` };
    }

    /**
     * Moves the SVG-cursor vertically to stated coordinates while drawing.
     * @param {int} id 
     * @param {number} y 
     * @returns dataset with the content {id, operation, y-coordinate, command}
     */
    static V(id, y) {
        return { 'id': id, 'operation': 'V', 'y': y, 'command': `V ${y} ` };
    }

    /**
     * Moves the SVG-cursor vertically and relative to the last location while drawing.
     * @param {int} id 
     * @param {number} y 
     * @returns dataset with the content {id, operation, y-coordinate, command}
     */
    static v(id, y) {
        return { 'id': id, 'operation': 'v', 'y': y, 'command': `v ${y} ` };
    }

    /**
     * Closes the Path with a line and moves the cursor back to origin.
     * @param {int} id 
     * @returns dataset with the content {id, operation, command}
     */
    static Z(id) {
        return { 'id': id, 'operation': 'Z', 'command': `Z` };
    }

    /**
     * Closes the Path with a line and moves the cursor back to origin.
     * @param {int} id 
     * @returns dataset with the content {id, operation, command}
     */
    static z(id) {
        return { 'id': id, 'operation': 'z', 'command': `Z` };
    }

    /**
     * Draws a bezier-curve using a target coordinate and two helping anchors.
     * @param {int} id 
     * @param {number} target_x 
     * @param {number} target_y 
     * @param {number} anchor_one_x 
     * @param {number} anchor_one_y 
     * @param {number} anchor_two_x 
     * @param {number} anchor_two_y 
     * @returns dataset with the content {id, operation, target-x, target-y, anchor-1-x, anchor-1-y, anchor-2-x, anchor-2-y, command}
     */
    static C(id, target_x, target_y, anchor_one_x, anchor_one_y, anchor_two_x, anchor_two_y) {
        return { 'id': id, 'operation': 'C', 'target_x': target_x, 'target_y': target_y, 'anchor_one_x': anchor_one_x, 'anchor_one_y': anchor_one_y, 'anchor_two_x': anchor_two_x, 'anchor_two_y': anchor_two_y, 'command': `C ${target_x} ${target_y} ${anchor_one_x} ${anchor_one_y} ${anchor_two_x} ${anchor_two_y} ` };
    }

    /**
     * Draws a bezier-curve using a target coordinate and two helping anchors with relative coordinates.
     * @param {int} id 
     * @param {number} target_x 
     * @param {number} target_y 
     * @param {number} anchor_one_x 
     * @param {number} anchor_one_y 
     * @param {number} anchor_two_x 
     * @param {number} anchor_two_y 
     * @returns dataset with the content {id, operation, target-x, target-y, anchor-1-x, anchor-1-y, anchor-2-x, anchor-2-y, command}
     */
    static c(id, target_x, target_y, anchor_one_x, anchor_one_y, anchor_two_x, anchor_two_y) {
        return { 'id': id, 'operation': 'c', 'target_x': target_x, 'target_y': target_y, 'anchor_one_x': anchor_one_x, 'anchor_one_y': anchor_one_y, 'anchor_two_x': anchor_two_x, 'anchor_two_y': anchor_two_y, 'command': `c ${target_x} ${target_y} ${anchor_one_x} ${anchor_one_y} ${anchor_two_x} ${anchor_two_y} ` };
    }

    /**
     * Draws a bezier-curve using a target coordinate and a helping anchor. The other anchor is calculated by mirroring the first one. Used for chained bezier-curves.
     * @param {int} id 
     * @param {number} target_x 
     * @param {number} target_y 
     * @param {number} anchor_x 
     * @param {number} anchor_y 
     * @returns dataset with the content {id, operation, target-x, target-y, anchor-x, anchor-y, command}
     */
    static S(id, target_x, target_y, anchor_x, anchor_y) {
        return { 'id': id, 'operation': 'S', 'target_x': target_x, 'target_y': target_y, 'anchor_x': anchor_x, 'anchor_one_y': anchor_y, 'command': `S ${target_x} ${target_y} ${anchor_x} ${anchor_y} ` };
    }

    /**
     * Draws a bezier-curve using a relative target coordinate and a helping anchor. The other anchor is calculated by mirroring the first one. Used for chained bezier-curves.
     * @param {int} id 
     * @param {number} target_x 
     * @param {number} target_y 
     * @param {number} anchor_x 
     * @param {number} anchor_y 
     * @returns dataset with the content {id, operation, target-x, target-y, anchor-1-x, anchor-1-y, command}
     */
    static s(id, target_x, target_y, anchor_x, anchor_y) {
        return { 'id': id, 'operation': 's', 'target_x': target_x, 'target_y': target_y, 'anchor_x': anchor_x, 'anchor_y': anchor_y, 'command': `s ${target_x} ${target_y} ${anchor_x} ${anchor_y} ` };
    }

    /**
     * Draws a quadratic-curve using a target coordinate and a helping anchor.
     * @param {int} id 
     * @param {number} target_x 
     * @param {number} target_y 
     * @param {number} anchor_x 
     * @param {number} anchor_y 
     * @returns dataset with the content {id, operation, target-x, target-y, anchor-x, anchor-y, command}
     */
    static Q(id, target_x, target_y, anchor_x, anchor_y) {
        return { 'id': id, 'operation': 'Q', 'target_x': target_x, 'target_y': target_y, 'anchor_x': anchor_x, 'anchor_y': anchor_y, 'command': `Q ${target_x} ${target_y} ${anchor_x} ${anchor_y} ` };
    }

    /**
     * Draws a quadratic-curve using a target coordinate and two helping anchors with relative coordinates.
     * @param {int} id 
     * @param {number} target_x 
     * @param {number} target_y 
     * @param {number} anchor_x 
     * @param {number} anchor_y 
     * @returns dataset with the content {id, operation, target-x, target-y, anchor-x, anchor-y, command}
     */
    static q(id, target_x, target_y, anchor_x, anchor_y) {
        return { 'id': id, 'operation': 'q', 'target_x': target_x, 'target_y': target_y, 'anchor_x': anchor_x, 'anchor_y': anchor_y, 'command': `q ${target_x} ${target_y} ${anchor_x} ${anchor_y} ` };
    }

    /**
     * Draws a quadratic-curve using a target coordinate. Used for chaining quadratic-curves.
     * @param {int} id 
     * @param {number} target_x 
     * @param {number} target_y 
     * @returns dataset with the content {id, operation, target-x, target-y, command}
     */
    static T(id, target_x, target_y) {
        return { 'id': id, 'operation': 'T', 'target_x': target_x, 'target_y': target_y, 'command': `T ${target_x} ${target_y} ` };
    }

    /**
     * Draws a quadratic-curve using a relative target coordinate. Used for chaining quadratic-curves.
     * @param {int} id 
     * @param {number} target_x 
     * @param {number} target_y 
     * @returns dataset with the content {id, operation, target-x, target-y, command}
     */
    static t(id, target_x, target_y) {
        return { 'id': id, 'operation': 't', 'target_x': target_x, 'target_y': target_y, 'command': `t ${target_x} ${target_y} ` };
    }

    /**
     * Draws an arc between current cursor location and target-coordinates.
     * @param {int} id 
     * @param {number} radius_x 
     * @param {number} radius_y 
     * @param {number} x_rotation 
     * @param {number} arc 
     * @param {number} sweep
     * @param {number} target_x 
     * @param {number} target_y 
     * @returns dataset with the content {id, operation, radius-x, radius-y, x-rotation, arc, sweep, target-x, target-y, command}
     */
    static A(id, radius_x, radius_y, x_rotation, arc, sweep, target_x, target_y) {
        return { 'id': id, 'operation': 'A', 'radius_x': radius_x, 'radius_y': radius_y, 'x_rotation': x_rotation, 'arc': arc, 'sweep': sweep, 'target_x': target_x, 'target_y': target_y, 'command': `A ${radius_x} ${radius_y} ${x_rotation} ${arc} ${sweep} ${target_x} ${target_y} ` };
    }

    /**
     * Draws an arc between current cursor location and relative target-coordinates.
     * @param {int} id 
     * @param {number} radius_x 
     * @param {number} radius_y 
     * @param {number} x_rotation 
     * @param {number} arc 
     * @param {number} sweep
     * @param {number} target_x 
     * @param {number} target_y 
     * @returns dataset with the content {id, operation, radius-x, radius-y, x-rotation, arc, sweep, target-x, target-y, command}
     */
    static a(id, radius_x, radius_y, x_rotation, arc, sweep, target_x, target_y) {
        return { 'id': id, 'operation': 'a', 'radius_x': radius_x, 'radius_y': radius_y, 'x_rotation': x_rotation, 'arc': arc, 'sweep': sweep, 'target_x': target_x, 'target_y': target_y, 'command': `a ${radius_x} ${radius_y} ${x_rotation} ${arc} ${sweep} ${target_x} ${target_y} ` };
    }
}