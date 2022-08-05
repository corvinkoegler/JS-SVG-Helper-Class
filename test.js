const SvgOps = require('./SvgOps');

// M
test.each([
  { id: 1, operation: 'M', x: 19868, y: 1 },
  { id: 67, operation: 'M', x: -4597, y: -4758 },
  { id: -45, operation: 'M', x: 0.34586, y: 4.8766 },

])('Returns the command to move the cursor to $x/$y with the id of $id', ({ id, operation, x, y }) => {
  expect(SvgOps.M(id, x, y)).toStrictEqual({ 'id': id, 'operation': operation, 'x': x, 'y': y, 'command': `${operation} ${x} ${y} ` });
});

// m
test.each([
  { id: 1, operation: 'm', x: 19868, y: 1 },
  { id: 67, operation: 'm', x: -4597, y: -4758 },
  { id: -45, operation: 'm', x: 0.34586, y: 4.8766 },

])('Returns the command to move the cursor by $x/$y with the id of $id', ({ id, operation, x, y }) => {
  expect(SvgOps.m(id, x, y)).toStrictEqual({ 'id': id, 'operation': operation, 'x': x, 'y': y, 'command': `${operation} ${x} ${y} ` });
});

// L
test.each([
  { id: 1, operation: 'L', x: 19868, y: 1 },
  { id: 67, operation: 'L', x: -4597, y: -4758 },
  { id: -45, operation: 'L', x: 0.34586, y: 4.8766 },

])('Returns the command to draw a line to $x/$y with the id of $id', ({ id, operation, x, y }) => {
  expect(SvgOps.L(id, x, y)).toStrictEqual({ 'id': id, 'operation': operation, 'x': x, 'y': y, 'command': `${operation} ${x} ${y} ` });
});

// l
test.each([
  { id: 1, operation: 'l', x: 19868, y: 1 },
  { id: 67, operation: 'l', x: -4597, y: -4758 },
  { id: -45, operation: 'l', x: 0.34586, y: 4.8766 },

])('Returns the command to draw a line to (relative) $x/$y with the id of $id', ({ id, operation, x, y }) => {
  expect(SvgOps.l(id, x, y)).toStrictEqual({ 'id': id, 'operation': operation, 'x': x, 'y': y, 'command': `${operation} ${x} ${y} ` });
});

// H
test.each([
  { id: 1, operation: 'H', x: 19868 },
  { id: 67, operation: 'H', x: -4597 },
  { id: -45, operation: 'H', x: 0.34586 },

])('Returns the command to draw a horizontal line to $x/CC with the id of $id', ({ id, operation, x }) => {
  expect(SvgOps.H(id, x)).toStrictEqual({ 'id': id, 'operation': operation, 'x': x, 'command': `${operation} ${x} ` });
});

// h
test.each([
  { id: 1, operation: 'h', x: 19868 },
  { id: 67, operation: 'h', x: -4597 },
  { id: -45, operation: 'h', x: 0.34586 },

])('Returns the command to draw a horizontal line to (relative) $x/CC with the id of $id', ({ id, operation, x }) => {
  expect(SvgOps.h(id, x)).toStrictEqual({ 'id': id, 'operation': operation, 'x': x, 'command': `${operation} ${x} ` });
});

// V
test.each([
  { id: 1, operation: 'V', y: 19868 },
  { id: 67, operation: 'V', y: -4597 },
  { id: -45, operation: 'V', y: 0.34586 },

])('Returns the command to draw a vertical line to $y/CC with the id of $id', ({ id, operation, y }) => {
  expect(SvgOps.V(id, y)).toStrictEqual({ 'id': id, 'operation': operation, 'y': y, 'command': `${operation} ${y} ` });
});

// h
test.each([
  { id: 1, operation: 'v', y: 19868 },
  { id: 67, operation: 'v', y: -4597 },
  { id: -45, operation: 'v', y: 0.34586 },

])('Returns the command to draw a vertical line to (relative) $y/CC with the id of $id', ({ id, operation, y }) => {
  expect(SvgOps.v(id, y)).toStrictEqual({ 'id': id, 'operation': operation, 'y': y, 'command': `${operation} ${y} ` });
});

// Z
test.each([
  { id: 1, operation: 'Z' },
  { id: 67, operation: 'Z' },
  { id: -45, operation: 'Z' },

])('Returns the command to close the current path with the id of $id', ({ id, operation }) => {
  expect(SvgOps.Z(id)).toStrictEqual({ 'id': id, 'operation': operation, 'command': `${operation}` });
});

// z
test.each([
  { id: 1, operation: 'z' },
  { id: 67, operation: 'z' },
  { id: -45, operation: 'z' },

])('Returns the command to close the current path with the id of $id', ({ id, operation }) => {
  expect(SvgOps.z(id)).toStrictEqual({ 'id': id, 'operation': operation, 'command': `${operation}` });
});

// C
test.each([
  { id: 1, operation: 'C', target_x: 1, target_y: 1, anchor_one_x: 1, anchor_one_y: 1, anchor_two_x: 1, anchor_two_y: 1 },
  { id: 67, operation: 'C', target_x: 19868, target_y: 59868, anchor_one_x: 734568, anchor_one_y: 735563, anchor_two_x: 1234, anchor_two_y: 15 },
  { id: -45, operation: 'C', target_x: -4356, target_y: -451, anchor_one_x: -34551, anchor_one_y: -25451, anchor_two_x: -23551, anchor_two_y: -234551 },
  { id: 5, operation: 'C', target_x: -0.4356, target_y: 4.451, anchor_one_x: 5.34551, anchor_one_y: 0.025451, anchor_two_x: 9.23551, anchor_two_y: -34.4551 },

])('Returns the command (id:$id) to draw a bezier curve with the coordinates of $target_x/$target_y and the anchor-coordinates of $anchor_one_x/$anchor_one_y and $anchor_two_x/$anchor_two_y', ({ id, operation, target_x, target_y, anchor_one_x, anchor_one_y, anchor_two_x, anchor_two_y }) => {
  expect(SvgOps.C(id, target_x, target_y, anchor_one_x, anchor_one_y, anchor_two_x, anchor_two_y)).toStrictEqual({ 'id': id, 'operation': operation, 'target_x': target_x, 'target_y': target_y, 'anchor_one_x': anchor_one_x, 'anchor_one_y': anchor_one_y, 'anchor_two_x': anchor_two_x, 'anchor_two_y': anchor_two_y, 'command': `${operation} ${target_x} ${target_y} ${anchor_one_x} ${anchor_one_y} ${anchor_two_x} ${anchor_two_y} ` });
});

// c
test.each([
  { id: 1, operation: 'c', target_x: 1, target_y: 1, anchor_one_x: 1, anchor_one_y: 1, anchor_two_x: 1, anchor_two_y: 1 },
  { id: 67, operation: 'c', target_x: 19868, target_y: 59868, anchor_one_x: 734568, anchor_one_y: 735563, anchor_two_x: 1234, anchor_two_y: 15 },
  { id: -45, operation: 'c', target_x: -4356, target_y: -451, anchor_one_x: -34551, anchor_one_y: -25451, anchor_two_x: -23551, anchor_two_y: -234551 },
  { id: 5, operation: 'c', target_x: -0.4356, target_y: 4.451, anchor_one_x: 5.34551, anchor_one_y: 0.025451, anchor_two_x: 9.23551, anchor_two_y: -34.4551 },

])('Returns the command (id:$id) to draw a bezier curve with the (relative) coordinates of $target_x/$target_y and the anchor-coordinates of $anchor_one_x/$anchor_one_y and $anchor_two_x/$anchor_two_y', ({ id, operation, target_x, target_y, anchor_one_x, anchor_one_y, anchor_two_x, anchor_two_y }) => {
  expect(SvgOps.c(id, target_x, target_y, anchor_one_x, anchor_one_y, anchor_two_x, anchor_two_y)).toStrictEqual({ 'id': id, 'operation': operation, 'target_x': target_x, 'target_y': target_y, 'anchor_one_x': anchor_one_x, 'anchor_one_y': anchor_one_y, 'anchor_two_x': anchor_two_x, 'anchor_two_y': anchor_two_y, 'command': `${operation} ${target_x} ${target_y} ${anchor_one_x} ${anchor_one_y} ${anchor_two_x} ${anchor_two_y} ` });
});

// S
test.each([
  { id: 1, operation: 'S', target_x: 1, target_y: 1, anchor_x: 1, anchor_y: 1 },
  { id: 67, operation: 'S', target_x: 19868, target_y: 59868, anchor__x: 734568, anchor_y: 735563 },
  { id: -45, operation: 'S', target_x: -4356, target_y: -451, anchor_x: -34551, anchor_y: -25451 },
  { id: 5, operation: 'S', target_x: -0.4356, target_y: 4.451, anchor_x: 5.34551, anchor_y: 0.025451 },

])('Returns the command (id:$id) to draw a mirrored bezier curve with the coordinates of $target_x/$target_y and the anchor-coordinates of $anchor_x/$anchor_y', ({ id, operation, target_x, target_y, anchor_x, anchor_y }) => {
  expect(SvgOps.S(id, target_x, target_y, anchor_x, anchor_y)).toStrictEqual({ 'id': id, 'operation': operation, 'target_x': target_x, 'target_y': target_y, 'anchor_x': anchor_x, 'anchor_y': anchor_y, 'command': `${operation} ${target_x} ${target_y} ${anchor_x} ${anchor_y} ` });
});

// s
test.each([
  { id: 1, operation: 's', target_x: 1, target_y: 1, anchor_x: 1, anchor_y: 1 },
  { id: 67, operation: 's', target_x: 19868, target_y: 59868, anchor__x: 734568, anchor_y: 735563 },
  { id: -45, operation: 's', target_x: -4356, target_y: -451, anchor_x: -34551, anchor_y: -25451 },
  { id: 5, operation: 's', target_x: -0.4356, target_y: 4.451, anchor_x: 5.34551, anchor_y: 0.025451 },

])('Returns the command (id:$id) to draw a mirrored bezier curve with the (relative) coordinates of $target_x/$target_y and the anchor-coordinates of $anchor_x/$anchor_y', ({ id, operation, target_x, target_y, anchor_x, anchor_y }) => {
  expect(SvgOps.s(id, target_x, target_y, anchor_x, anchor_y)).toStrictEqual({ 'id': id, 'operation': operation, 'target_x': target_x, 'target_y': target_y, 'anchor_x': anchor_x, 'anchor_y': anchor_y, 'command': `${operation} ${target_x} ${target_y} ${anchor_x} ${anchor_y} ` });
});

// Q
test.each([
  { id: 1, operation: 'Q', target_x: 1, target_y: 1, anchor_x: 1, anchor_y: 1 },
  { id: 67, operation: 'Q', target_x: 19868, target_y: 59868, anchor__x: 734568, anchor_y: 735563 },
  { id: -45, operation: 'Q', target_x: -4356, target_y: -451, anchor_x: -34551, anchor_y: -25451 },
  { id: 5, operation: 'Q', target_x: -0.4356, target_y: 4.451, anchor_x: 5.34551, anchor_y: 0.025451 },

])('Returns the command (id:$id) to draw a quadratic curve with the coordinates of $target_x/$target_y and the anchor-coordinates of $anchor_x/$anchor_y', ({ id, operation, target_x, target_y, anchor_x, anchor_y }) => {
  expect(SvgOps.Q(id, target_x, target_y, anchor_x, anchor_y)).toStrictEqual({ 'id': id, 'operation': operation, 'target_x': target_x, 'target_y': target_y, 'anchor_x': anchor_x, 'anchor_y': anchor_y, 'command': `${operation} ${target_x} ${target_y} ${anchor_x} ${anchor_y} ` });
});

// q
test.each([
  { id: 1, operation: 'q', target_x: 1, target_y: 1, anchor_x: 1, anchor_y: 1 },
  { id: 67, operation: 'q', target_x: 19868, target_y: 59868, anchor__x: 734568, anchor_y: 735563 },
  { id: -45, operation: 'q', target_x: -4356, target_y: -451, anchor_x: -34551, anchor_y: -25451 },
  { id: 5, operation: 'q', target_x: -0.4356, target_y: 4.451, anchor_x: 5.34551, anchor_y: 0.025451 },

])('Returns the command (id:$id) to draw a quadratic curve with the (relative) coordinates of $target_x/$target_y and the anchor-coordinates of $anchor_x/$anchor_y', ({ id, operation, target_x, target_y, anchor_x, anchor_y }) => {
  expect(SvgOps.q(id, target_x, target_y, anchor_x, anchor_y)).toStrictEqual({ 'id': id, 'operation': operation, 'target_x': target_x, 'target_y': target_y, 'anchor_x': anchor_x, 'anchor_y': anchor_y, 'command': `${operation} ${target_x} ${target_y} ${anchor_x} ${anchor_y} ` });
});

// T
test.each([
  { id: 1, operation: 'T', target_x: 1, target_y: 1 },
  { id: 67, operation: 'T', target_x: 19868, target_y: 59868 },
  { id: -45, operation: 'T', target_x: -4356, target_y: -451 },
  { id: 5, operation: 'T', target_x: -0.4356, target_y: 4.451 },

])('Returns the command (id:$id) to draw a chained quadratic curve with the coordinates of $target_x/$target_y', ({ id, operation, target_x, target_y }) => {
  expect(SvgOps.T(id, target_x, target_y)).toStrictEqual({ 'id': id, 'operation': operation, 'target_x': target_x, 'target_y': target_y, 'command': `${operation} ${target_x} ${target_y} ` });
});

// t
test.each([
  { id: 1, operation: 't', target_x: 1, target_y: 1 },
  { id: 67, operation: 't', target_x: 19868, target_y: 59868 },
  { id: -45, operation: 't', target_x: -4356, target_y: -451 },
  { id: 5, operation: 't', target_x: -0.4356, target_y: 4.451 },

])('Returns the command (id:$id) to draw a chained quadratic curve with the (relative) coordinates of $target_x/$target_y', ({ id, operation, target_x, target_y }) => {
  expect(SvgOps.t(id, target_x, target_y)).toStrictEqual({ 'id': id, 'operation': operation, 'target_x': target_x, 'target_y': target_y, 'command': `${operation} ${target_x} ${target_y} ` });
});

// A
test.each([
  { id: 1, operation: 'A', radius_x: 1, radius_y: 1, x_rotation: 1, arc: 1, sweep: 1, target_x: 1, target_y: 1 },
  { id: 75, operation: 'A', radius_x: 145345, radius_y: 13534, x_rotation: 4389347, arc: 2057927, sweep: 4576387465, target_x: 8547, target_y: 25796 },
  { id: -23, operation: 'A', radius_x: -14345, radius_y: -1354, x_rotation: -43847, arc: -20579, sweep: -45767465, target_x: -8547, target_y: -25796 },
  { id: 5, operation: 'A', radius_x: 14.5345, radius_y: -135.34, x_rotation: 0.4389347, arc: -2057.927, sweep: 4.576387465, target_x: 8.547, target_y: -2579.6 },

])('Returns the command (id:$id) to draw an arch with set properties.', ({ id, operation, radius_x, radius_y, x_rotation, arc, sweep, target_x, target_y }) => {
  expect(SvgOps.A(id, radius_x, radius_y, x_rotation, arc, sweep, target_x, target_y)).toStrictEqual({ 'id': id, 'operation': operation, 'radius_x': radius_x, 'radius_y': radius_y, 'x_rotation': x_rotation, 'arc': arc, 'sweep': sweep, 'target_x': target_x, 'target_y': target_y, 'command': `${operation} ${radius_x} ${radius_y} ${x_rotation} ${arc} ${sweep} ${target_x} ${target_y} ` });
});

// a
test.each([
  { id: 1, operation: 'a', radius_x: 1, radius_y: 1, x_rotation: 1, arc: 1, sweep: 1, target_x: 1, target_y: 1 },
  { id: 75, operation: 'a', radius_x: 145345, radius_y: 13534, x_rotation: 4389347, arc: 2057927, sweep: 4576387465, target_x: 8547, target_y: 25796 },
  { id: -23, operation: 'a', radius_x: -14345, radius_y: -1354, x_rotation: -43847, arc: -20579, sweep: -45767465, target_x: -8547, target_y: -25796 },
  { id: 5, operation: 'a', radius_x: 14.5345, radius_y: -135.34, x_rotation: 0.4389347, arc: -2057.927, sweep: 4.576387465, target_x: 8.547, target_y: -2579.6 },

])('Returns the command (id:$id) to draw an arch with set (relative) properties.', ({ id, operation, radius_x, radius_y, x_rotation, arc, sweep, target_x, target_y }) => {
  expect(SvgOps.a(id, radius_x, radius_y, x_rotation, arc, sweep, target_x, target_y)).toStrictEqual({ 'id': id, 'operation': operation, 'radius_x': radius_x, 'radius_y': radius_y, 'x_rotation': x_rotation, 'arc': arc, 'sweep': sweep, 'target_x': target_x, 'target_y': target_y, 'command': `${operation} ${radius_x} ${radius_y} ${x_rotation} ${arc} ${sweep} ${target_x} ${target_y} ` });
});