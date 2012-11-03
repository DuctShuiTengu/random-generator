/* Contains the Feature and FeatureSet objects and their respective getFeature
methods.  Feature objects are really just strings, but by defining them as an
object with a getFeature function (which outputs the string), it removes the
need for the FeatureSet object to know what the elements of the array it's
given are.  It can just call their getFeature method.
*/


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
