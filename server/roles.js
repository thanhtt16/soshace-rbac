const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function () {
	ac.grant("basic")
		.readAny("profile", ["*", "!password", "!_id"])
		.updateOwn("profile");

	ac.grant("supervisor").extend("basic").readAny("profile");

	ac.grant("admin")
		.extend("basic")
		.extend("supervisor")
		.updateAny("profile")
		.deleteAny("profile");

	return ac;
})();
