const SvgOps = require('./SvgOps');

// M
test.each([
  { id: 1, operation: 'M', x: 19868, y: 1 },
  { id: 67, operation: 'M', x: -4597, y: -4758 },
  { id: -45, operation: 'M', x: 0.34586, y: 4.8766 },

])('Returns the command to move the cursor to $x/$y with the id of $id', ({ id, operation, x, y }) => {
  expect(SvgOps.M(id, x, y)).toStrictEqual({ 'id': id, 'operation': operation, 'x': x, 'y': y,'command': `${operation} ${x} ${y} ` });
});

// m
test.each([
  { id: 1, operation: 'm', x: 19868, y: 1 },
  { id: 67, operation: 'm', x: -4597, y: -4758 },
  { id: -45, operation: 'm', x: 0.34586, y: 4.8766 },

])('Returns the command to move the cursor by $x/$y with the id of $id', ({ id, operation, x, y }) => {
  expect(SvgOps.m(id, x, y)).toStrictEqual({ 'id': id, 'operation': operation, 'x': x, 'y': y,'command': `${operation} ${x} ${y} ` });
});

// L
test.each([
  { id: 1, operation: 'L', x: 19868, y: 1 },
  { id: 67, operation: 'L', x: -4597, y: -4758 },
  { id: -45, operation: 'L', x: 0.34586, y: 4.8766 },

])('Returns the command to draw a line to $x/$y with the id of $id', ({ id, operation, x, y }) => {
  expect(SvgOps.L(id, x, y)).toStrictEqual({ 'id': id, 'operation': operation, 'x': x, 'y': y,'command': `${operation} ${x} ${y} ` });
});

// l
test.each([
  { id: 1, operation: 'l', x: 19868, y: 1 },
  { id: 67, operation: 'l', x: -4597, y: -4758 },
  { id: -45, operation: 'l', x: 0.34586, y: 4.8766 },

])('Returns the command to draw a line to (relative) $x/$y with the id of $id', ({ id, operation, x, y }) => {
  expect(SvgOps.l(id, x, y)).toStrictEqual({ 'id': id, 'operation': operation, 'x': x, 'y': y,'command': `${operation} ${x} ${y} ` });
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