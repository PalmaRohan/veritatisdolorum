/*
 * Copyright 2018 Uber Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-env node */
/* eslint-disable no-console */
const Benchmark = require('benchmark');
const h3core = require('../lib/h3core');

const suite = new Benchmark.Suite();

// fixtures

const h3Address = '89283080ddbffff';
const polygon = [
    [37.85848750746621, -122.48880236632749],
    [37.860723745370926, -122.47361033446712],
    [37.853811518065555, -122.47172205932065],
    [37.85055848093865, -122.48545496947689]
];
const ring10 = h3core.kRing(h3Address, 10);
const ring10Compact = h3core.compact(ring10);

// add tests

suite.add('h3IsValid', () => {
    h3core.h3IsValid(h3Address);
});

suite.add('geoToH3', () => {
    h3core.geoToH3(37.2, -122.2, 9);
});

suite.add('h3ToGeo', () => {
    h3core.h3ToGeo(h3Address);
});

suite.add('h3ToGeoBoundary', () => {
    h3core.h3ToGeoBoundary(h3Address);
});

suite.add('kRing', () => {
    h3core.kRing(h3Address, 1);
});

suite.add('polyfill', () => {
    h3core.polyfill(polygon, 9, false);
});

suite.add('h3SetToMultiPolygon', () => {
    h3core.h3SetToMultiPolygon(ring10, false);
});

suite.add('compact', () => {
    h3core.compact(ring10);
});

suite.add('uncompact', () => {
    h3core.uncompact(ring10Compact, 10);
});

suite.add('h3IndexesAreNeighbors', () => {
    h3core.h3IndexesAreNeighbors('891ea6d6533ffff', '891ea6d65afffff');
});

suite.add('getH3UnidirectionalEdge', () => {
    h3core.getH3UnidirectionalEdge('891ea6d6533ffff', '891ea6d65afffff');
});

suite.add('getOriginH3IndexFromUnidirectionalEdge', () => {
    h3core.getOriginH3IndexFromUnidirectionalEdge('1591ea6d6533ffff');
});

suite.add('getDestinationH3IndexFromUnidirectionalEdge', () => {
    h3core.getDestinationH3IndexFromUnidirectionalEdge('1591ea6d6533ffff');
});

suite.add('h3UnidirectionalEdgeIsValid', () => {
    h3core.h3UnidirectionalEdgeIsValid('1591ea6d6533ffff');
});

// add listeners
suite
    .on('cycle', event => {
        console.log(String(event.target));
    })
    // run async
    .run({async: true});
