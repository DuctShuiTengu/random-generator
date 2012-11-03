/*! Random Feature Generator - v0.3.0 - 2012-10-06
* Copyright (c) 2012 function () {

// If the string looks like an identifier, then we can return it as is.
// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can simply slap some quotes around it.
// Otherwise we must also replace the offending characters with safe
// sequences.

            if (ix.test(this)) {
                return this;
            }
            if (nx.test(this)) {
                return '"' + this.replace(nxg, function (a) {
                    var c = escapes[a];
                    if (c) {
                        return c;
                    }
                    return '\\u' + ('0000' + a.charCodeAt().toString(16)).slice(-4);
                }) + '"';
            }
            return '"' + this + '"';
        }; Licensed  */

// It's a string with a specially-named function for returning its value.
function Feature(desc)
{
	this.description = desc;

	this.getFeature = function () {
		return this.description;
	};
}

/* Selects a random element of the featureset and calls its getFeature function.
if the FeatureSets doTwice variable is set to true, it may instead select two
elements of the set (by recursing back through the the set's own getFeature
method; recursion is not limited in how many iterations can occur, but since
this accurately models what can happen when using actual dice, I consider it
a feature rather than a bug.
*/
/*function pickFeature()
{
	var featureIndex = Math.floor(Math.random()*(this.features.length + this.doTwice));
	
	if (featureIndex === this.features.length) {
		return this.getFeature() + " and " + this.getFeature();
	} else {
		return this.features[featureIndex].getFeature();
	}
}*/

/* The featureset object is mostly just an array of features with a function
for selecting a random element from the array and a boolean indicating whether
said function should have a chance of instead returning multiple elements.
*/
function FeatureSet(doTwice, feat)
{
	this.doTwice = doTwice;
	this.features = feat;
	
	this.getFeature = function () {
		var featureIndex = Math.floor(Math.random()*(this.features.length + this.doTwice));
	
		if (featureIndex === this.features.length) {
			return this.getFeature() + " and " + this.getFeature();
		} else {
			return this.features[featureIndex].getFeature();
		}
	};
}
