

const Util = {
	css: {
		hasClass (element, className) {
			// class=""
			let attrStr = element.attributes['class']
			return attrStr.indexOf(className) > 0 || attrStr.indexOf("\""+className) > 0 || attrStr.indexOf(className+"\"") > 0;
		}
	}
};

module.exports = Util;