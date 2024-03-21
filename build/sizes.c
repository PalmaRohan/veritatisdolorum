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

/**
 * Sizes exported for use in Emscripten. This file is copied into the
 * h3-1 src/h3lib/lib directory
 */

#include "geoCoord.h"
#include "h3api.h"
#include "linkedGeo.h"

int sizeOfH3Index() {
    return sizeof(H3Index);
}

int sizeOfGeoCoord() {
    return sizeof(GeoCoord);
}

int sizeOfGeoBoundary() {
    return sizeof(GeoBoundary);
}

int sizeOfGeofence() {
    return sizeof(Geofence);
}

int sizeOfGeoPolygon() {
    return sizeof(GeoPolygon);
}

int sizeOfLinkedGeoPolygon() {
    return sizeof(LinkedGeoPolygon);
}
