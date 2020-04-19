const DELETE = (id) => 'DELETE FROM `apna_ad`.`User` WHERE `id`' + `=${id}`;
const INSERT = (name, mobile, email, password, image) => 'INSERT INTO `User` (`name`,`mobile`,`email`,`password`,`image`,`isAdmin`,`isPartner`,`isHidden`) VALUES (' + `'${name}', ${mobile}, ${email}, '${password}', ${image}, false, false, false` + ')';
const INSERT_CUSTOM = (name, mobile, email, password, image, isAdmin, isPartner, isHidden) => 'INSERT INTO `User` (`name`,`mobile`,`email`,`password`,`image`,`isAdmin`,`isPartner`,`isHidden`) VALUES (' + `'${name}', ${mobile}, ${email}, '${password}', ${image}, ${isAdmin}, ${isPartner}, ${isHidden}` + ')';
const UPDATE = (id) => 'DELETE FROM `apna_ad`.`User` WHERE `id`' + `=${id}`;

module.exports = {
    DELETE, INSERT
};